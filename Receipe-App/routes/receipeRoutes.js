const express = require('express');
const router = express.Router();

const { getAllReceipes, createReceipes, getReceipesById, updateReceipesById, deleteReceipesById } = require('../controllers/receipeControllers');

router.get("/", getAllReceipes);
router.post("/", createReceipes);
router.get("/:Id", getReceipesById);
router.put("/:Id", updateReceipesById);
router.delete("/:Id", deleteReceipesById);

module.exports = router;