const express = require('express');
const router = new express.Router();
const appController = require('../controller/appController');
let routes = (app) => {
    try {
        router.get('/error', appController.get);
        router.get('/', appController.welcome);
        app.use(router);    
    } catch (error) {
        console.log(error);
    }
};

module.exports = routes;