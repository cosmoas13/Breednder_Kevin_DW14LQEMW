const express = require("express");
const router = express.Router();

const { login, register } = require("../controllers/auth");
const { species, addSpecies } = require("../controllers/species");
const {
  PetIndex,
  PetAdd,
  PetDestroy,
  PetUpdate,
  PetDetail,
  Age
} = require("../controllers/pet");
const { check, create, update } = require("../controllers/match");
const { UserDetail, UserUpdate, UserDestroy } = require("../controllers/user");
const { PaymentCreate, PaymentUpdate } = require("../controllers/payment");
const { auth } = require("../middleware/auth");

router.get("/", (req, res) => {
  res.send("Za warudooo !");
});

//Auth
router.post("/login", login);
router.post("/register", register);

//Spesies
router.get("/species", species);
router.post("/species", addSpecies);

//Pet
router.get("/pet", PetIndex);
router.post("/pet", auth, PetAdd);
router.put("/pet/:id", auth, PetUpdate);
router.delete("/pet/:id", auth, PetDestroy);
router.get("/pet/:id", auth, PetDetail);
router.get("/ages", Age);

//User
router.get("/user/:id", UserDetail);
router.put("/user/:id", UserUpdate);
router.delete("/user/:id", UserDestroy);

//Payment
router.post("/payment", auth, PaymentCreate);
router.put("/payment/:id", auth, PaymentUpdate);

//Match
router.get("/match", auth, check);
router.post("/match", auth, create);
router.put("/match/:id", auth, update);

module.exports = router;
