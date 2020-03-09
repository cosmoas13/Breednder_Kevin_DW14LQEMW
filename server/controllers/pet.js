const models = require("../models");
const ModelUser = models.user;
const ModelPet = models.pet;
const ModelSpecies = models.species;
const ModelPayment = models.payment;

// tampilkan age
exports.Age = async (req, res) => {
  try {
    const ages = await ModelPet.findAll();
    res.send({ data: ages });
  } catch (err) {
    console.log(err);
  }
};

// tampilkan semua data pet
exports.PetIndex = async (req, res) => {
  try {
    const species = await ModelPet.findAll({
      include: [
        {
          model: ModelUser,
          as: "breeder",
          attributes: ["id", "breeder", "address", "phone"]
        },
        {
          model: ModelSpecies,
          as: "category",
          attributes: ["id", "name"]
        }
      ],
      attributes: {
        exclude: ["species_id", "user_id"]
      }
    });
    res.send(species);
  } catch (err) {
    console.log(err);
  }
};

exports.PetAdd = async (req, res) => {
  const user_id = req.user; // data user yang sedang login, bsa dicek di middleware/auth
  //untuk perbandingan
  const users = req.body.user.id; // data diambil dari body user.id : data yang diketik di postman body
  const species_id = req.body.species.id; // objek didalam objek.

  const check = await ModelPayment.findOne({ where: { id: users } });
  //digunakan untuk memanggil data table sesuai dengan id
  const { name, gender, age, about_pet, photo } = req.body;

  try {
    if (check.status === "premium" && users === user_id) {
      const pet = await ModelPet.create({
        name,
        gender,
        species_id,
        age,
        user_id,
        about_pet,
        photo
      });
      const id = pet.dataValues.id;
      const data = await ModelPet.findOne({
        where: { id },
        include: [
          {
            model: ModelUser,
            as: "breeder",
            attributes: ["id", "breeder", "address", "phone"]
          },
          {
            model: ModelSpecies,
            as: "category",
            attributes: ["id", "name"]
          }
        ],
        attributes: { exclude: ["species_id", "user_id"] }
      });
      res.status(200).send({
        status: true,
        message: "Pet has been add",
        data: data
      });
    } else {
      res.status(401).send({ message: "you are not allowed" });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.PetDestroy = async (req, res) => {
  const user = req.user;
  const id = req.params.id;
  const check = await ModelUser.findOne({ where: { id: user } });
  const check_pet_user = await ModelPet.findOne({
    where: { id: req.params.id }
  });
  // console.log(check.id);
  try {
    if (check.id === check_pet_user.user_id) {
      await ModelPet.destroy({ where: { id } });
      res.status(200).send({ message: "Pet Has Been Delete" });
    } else {
      res.status(401).send({ message: "You're not allowed", data: { id } });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.PetUpdate = async (req, res) => {
  const user_id = req.user; // data user yang sedang login, bsa dicek di middleware/auth
  //untuk perbandingan
  const users = req.body.user.id; // data diambil dari body user.id : data yang diketik di postman body
  const species_id = req.body.species.id; // objek didalam objek.

  const check = await ModelPayment.findOne({ where: { id: users } });
  //digunakan untuk memanggil data table sesuai dengan id
  const { name, gender, age, about_pet, photo } = req.body;
  const id = req.params.id;
  try {
    if (user_id === users) {
      await ModelPet.update(
        {
          name,
          gender,
          age,
          about_pet,
          photo,
          species_id,
          user_id
        },
        { where: { id } }
      );
      const data = await ModelPet.findOne({
        where: { id },
        include: [
          {
            model: ModelUser,
            as: "breeder",
            attributes: ["id", "breeder", "address", "phone"]
          },
          {
            model: ModelSpecies,
            as: "category",
            attributes: ["id", "name"]
          }
        ],
        attributes: { exclude: ["species_id", "user_id"] }
      });
      res.status(200).send({
        status: true,
        message: "Data Berhasil di Update",
        data: data
      });
    } else {
      res.status(401).send({ message: "you are not allowed" });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.PetDetail = async (req, res) => {
  const id = req.params.id;
  try {
    const pet = await ModelPet.findOne({
      include: [
        {
          model: ModelUser,
          as: "breeder",
          attributes: ["id", "breeder", "address", "phone"]
        },
        {
          model: ModelSpesies,
          as: "category",
          attributes: ["id", "name"]
        }
      ],
      attributes: { exclude: ["species_id", "user_id"] },
      where: { id: id }
    });
    res.send(pet);
  } catch (err) {
    console.log(err);
  }
};
