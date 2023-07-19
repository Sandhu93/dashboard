const { Router } = require('express');
const express = require('express');

const {
    addDevice,
    editById,
    fetchById,
    fetchZones,
    getAllDevices
  } = require('../controller/device.controller.js');


// import { Router } from "express";
// import { addDevice, addzone, editById, fetchById, fetchZones, getAllDevices } from "../controller/device.controller.js";

const router = Router()



router.post('/fetchZones',fetchZones)
router.post('/add', addDevice)
router.post('/getAll', getAllDevices)
router.post('/getById', fetchById)
router.post('/edit', editById)

module.exports = router;
//export default router