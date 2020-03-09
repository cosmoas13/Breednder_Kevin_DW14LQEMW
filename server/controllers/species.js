const models = require("../models");
const ModelSpecies = models.species;

// tampilkan semua spesies
exports.species = async (req, res) => {
  try {
    const species = await ModelSpecies.findAll();
    res.send({ data: species });
  } catch (err) {
    console.log(err);
  }
};

exports.addSpecies = async (req, res) => {
  try {
    const { name } = req.body;
    const check = await ModelSpecies.findOne({ where: { name } });

    if (check) {
      res.status(401).send({
        status: false,
        message: "this species name is already taken"
      });
    } else {
      const created = await ModelSpecies.create({
        name
      });
      res.send({ created });
    }
  } catch (err) {
    console.log(err);
  }
};
