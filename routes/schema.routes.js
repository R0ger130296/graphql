;
'use strinc'

const express = require('express');

let api = express.Router(),
    schemaController = require('../controllers/schema.controllers');

api.use('/', schemaController);

module.exports = api;