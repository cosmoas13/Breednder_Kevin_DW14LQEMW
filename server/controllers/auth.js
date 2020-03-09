const jwt = require("jsonwebtoken");
const models = require("../models");
const ModelUser = models.user;
const ModelPet = models.pet;

const bcrypt = require("bcrypt");

// untuk ambil token login.
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await ModelUser.findOne({ where: { email } });
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const token = jwt.sign({ user_id: user.id }, process.env.SECRET_KEY);
        res.send({ email, token });
      } else {
        res.status(401).send({ message: "Invalid login. please try again" });
      }
    } else {
      res.status(401).send({ message: "Invalid login. please try again" });
    }
  } catch (err) {
    console.log(err);
    res.status(401).send({ message: "Login failed, something went wrong" });
  }
};

// untuk ambil token register.
exports.register = async (req, res) => {
  const { breeder, email, password, phone, address, pet, role } = req.body;
  const { name, gender } = pet;
  const id_species = pet.spesies;
  const age = pet.age;
  try {
    const check = await ModelUser.findOne({ where: { email } });
    if (check) {
      res
        .status(401)
        .send({ status: false, message: "this email is already logged in" });
    } else {
      //create = berfungsi untuk add/memasukkan data.
      const hash = await bcrypt.hash(req.body.password, 10);
      const userRes = await ModelUser.create({
        email,
        password: hash,
        breeder,
        phone,
        address,
        role
      });
      const petRes = await ModelPet.create({
        name,
        gender,
        species_id: id_species,
        age,
        user_id: userRes.id
      });
      const userid = userRes.id;
      if (userRes && petRes) {
        const token = jwt.sign({ userid }, process.env.SECRET_KEY);
        res
          .status(200)
          .send({ email, token, status: true, message: "Register Success" });
      } else {
        res.status(401).send({ status: false, message: "Invalid Register" });
      }
    }
  } catch (err) {
    console.log(err);
  }
};
