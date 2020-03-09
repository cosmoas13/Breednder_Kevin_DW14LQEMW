const models = require("../models");
const jwt = require("jsonwebtoken");
const {
  checkMatch,
  checkAlreadyLiked,
  checkMatchx
} = require("../middleware/match");
const Pet = models.pet;
const Match = models.match;
// const ModelPayment = models.payment;
// match
exports.check = async (req, res) => {
  try {
    const { pet_id, pet_id_liked } = req.query;
    const isMatch = await checkMatch(pet_id, pet_id_liked);
    const isMatchx = await checkMatchx(pet_id, pet_id_liked);
    if (isMatch.length > 0) {
      const data = await Match.findOne({
        where: { pet_id: isMatch[0], pet_id_liked: isMatch[1] }
      });
      res.status(200).send(data);
    } else {
      if (isMatchx.length > 0) {
        const data = await Match.findOne({
          where: { pet_id: isMatchx[0], pet_id_liked: isMatchx[1] }
        });
        res.status(200).send(data);
      } else {
        res.send({ message: "Match Not Found" });
      }
    }
  } catch (err) {}
};

exports.create = async (req, res) => {
  const { pet_id, pet_id_liked } = req.body;
  const isMatch = await checkMatchx(pet_id, pet_id_liked);

  const token = req.header("Authorization").replace("Bearer ", "");
  const user = jwt.verify(token, process.env.SECRET_KEY);

  const x = await Pet.findOne({ where: { id: pet_id, user_id: user.user_id } });

  console.log(`aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa ${isMatch}`);

  try {
    if (x) {
      if (isMatch.length > 0) {
        const isAlreadyLiked = await checkAlreadyLiked(pet_id, pet_id_liked);
        res.send({ message: "Already Matched" });
      } else {
        const isAlreadyLiked = await checkAlreadyLiked(pet_id, pet_id_liked);
        if (isAlreadyLiked) {
          console.log("update");
          const pet = await Match.update(
            {
              status: true,
              updatedAt: new Date()
            },
            {
              where: { pet_id: pet_id_liked, pet_id_liked: pet_id }
            }
          );
          const data = await Match.findOne({
            where: { pet_id: pet_id_liked, pet_id_liked: pet_id }
          });
          res.status(200).send(data);
        } else {
          const check = await Match.findOne({
            where: {
              pet_id,
              pet_id_liked
            }
          });
          if (!check) {
            const match = await Match.create({
              pet_id,
              pet_id_liked,
              status: "false",
              createdAt: new Date(),
              updatedAt: new Date()
            });
            const data = await Match.findOne({
              where: { pet_id, pet_id_liked }
            });
            res.status(200).send(data);
          }
          res.send({ message: "You Already Liked" });
        }
      }
    } else {
      res.send({ message: "You're not Authorized for this Pet" });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.update = async (req, res) => {
  try {
    const { pet_id, pet_id_liked, status } = req.body;
    const { id } = req.params;
    const match = await Match.update(
      {
        pet_id,
        pet_id_liked,
        status,
        updatedAt: new Date()
      },
      {
        where: { id }
      }
    );
    const data = await Match.findOne({
      where: { id }
    });
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
  }
};
