const models = require("../models");
const ModelUser = models.user;
const jwt = require("jsonwebtoken");

// controllers tampil user detail
exports.UserDetail = async (req, res) => {
  const id = req.params.id;
  try {
    const pet = await ModelUser.findOne({
      where: { id },
      attributes: ["breeder", "address", "phone", "createdAt", "updatedAt"]
    });
    res.send(pet);
  } catch (err) {
    console.log(err);
  }
};

exports.UserUpdate = async (req, res) => {
  const id = req.params.id;
  const { breeder, address, phone, role } = req.body;

  try {
    await ModelUser.update(
      {
        breeder,
        address,
        phone,
        role
      },
      { where: { id } }
    );
    const data = await ModelUser.findOne({
      where: { id },
      attributes: ["breeder", "address", "phone", "createdAt", "updatedAt"]
    });
    res.status(200).send({
      status: true,
      message: "Data Berhasil di Update",
      data: data
    });
  } catch (err) {
    console.log(err);
  }
};

exports.UserDestroy = async (req, res) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const data = jwt.verify(token, process.env.SECRET_KEY);
    const { id } = req.params;

    // console.log(data.user_id + "   " + id);
    if (data.user_id == id) {
      await ModelUser.destroy({ where: { id } });
      res.status(200).send({ message: "User has been deleted", where: { id } });
    } else {
      res.status(200).send({ message: "You're not allowed" });
    }
  } catch (err) {
    console.log(err);
  }
};
