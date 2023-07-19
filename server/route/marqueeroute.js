const { Router } = require('express');
const express = require('express');

const { addMarquee, fetchMarquee } = require('../controller/marquee.controller.js');

// import { Router } from "express";
// import { addMarquee, fetchMarquee } from "../controller/marquee.controller.js";


const router = Router()

router.post('/add', addMarquee)
router.post('/fetch',fetchMarquee)

module.exports = router;
//export default router