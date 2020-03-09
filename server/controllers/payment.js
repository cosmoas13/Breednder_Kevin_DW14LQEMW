const models = require("../models");
const ModelUser = models.user;
const ModelPayment = models.payment;

//payment
exports.PaymentCreate = async (req, res) => {
  const id_user = req.user;
  const { no_rek, proof } = req.body;
  try {
    const check = await ModelUser.findOne({ where: { id: id_user } });
    if (check === "admin") {
      res.status(401).send({ message: "admin cannot use payment" });
    } else {
      const status = "free";
      // masukan no_rek, proof, status, user_id dari dalam table user_id
      const payCreate = await ModelPayment.create({
        no_rek,
        proof,
        status,
        user_id: id_user
      });
      console.log(req.ModelUser);
      const id = payCreate.dataValues.id;
      const data = await ModelPayment.findOne({
        where: { id },
        include: [
          {
            model: ModelUser,
            as: "breeder",
            attributes: [
              "breeder",
              "address",
              "phone",
              "createdAt",
              "updatedAt"
            ]
          }
        ]
      });
      res.status(200).send({
        status: true,
        message: "Data Berhasil Ditambahkan",
        data: data
      });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.PaymentUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const { no_rek, proof, id_user, status } = req.body;
    const akses = await ModelUser.findOne({
      raw: true,
      where: { id: req.user }
    });
    if (akses.role === "admin") {
      const payUpdate = await ModelPayment.update(
        {
          no_rek,
          proof,
          id_user,
          status
        },
        { where: { id } }
      );
      if (payUpdate) {
        let data = await ModelPayment.findOne({
          where: {
            id
          },
          include: [
            {
              model: ModelUser,
              as: "breeder",
              attributes: {
                exclude: ["email", "password", "createdAt", "updateAt"]
              }
            }
          ],
          attributes: { exclude: ["user_id"] }
        });
        res.status(200).send(data);
      } else {
        throw new err();
      }
    } else {
      res.status(401).send({ message: "kamu bukan Admin" });
    }
  } catch (err) {
    console.log(err);
  }
};
