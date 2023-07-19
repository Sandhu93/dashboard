const { Router } = require('express');
const express = require('express');

const { addzone } = require('../controller/device.controller.js');

// import { Router } from "express";
// import { addzone } from "../controller/device.controller.js";

const router = Router()

router.post('/add', addzone)

module.exports = router;
//export default router