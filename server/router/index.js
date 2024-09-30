const express = require("express");
const {
  create,
  getTodo,
  deleteTodo,
  isComplete,
  nameUpdate,
  updateRank,
} = require("../controller");
const router = express.Router();

router.route("/todo").post(create).get(getTodo);
router.route("/todo/:id").delete(deleteTodo).patch(isComplete);
router.route("/todo/edit/:id").patch(nameUpdate);
router.route("/todo/rank/:id").patch(updateRank);

module.exports = router;
