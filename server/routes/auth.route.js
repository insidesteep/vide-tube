const { Router } = require("express");

const {
  registration,
  login,
  authenticated,
  logout,
} = require("../controllers/auth.controller");
const auth = require("../middlewares/auth");

const router = Router();

router.get("/", auth, authenticated);

router.post("/registration", registration);
router.post("/login", login);
router.get("/logout", logout);

module.exports = router;
