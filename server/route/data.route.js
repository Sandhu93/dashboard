const express = require('express');
const { Router } = require('express');
const { fetchData, Graphdetails } = require('../controller/data.controller.js');
// import { Router } from "express";
// import { fetchData } from "../controller/data.controller.js";
// import { Graphdetails } from "../controller/data.controller.js";

//const express = require('express');

const router = express.Router();

router.post('/fetch_data', fetchData);
router.post('/graph_details', Graphdetails);

module.exports = router;
