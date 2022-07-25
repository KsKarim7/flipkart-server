// const express = require('express');
import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import defaultData from './default.js';
import Router from './routes/route.js';

const app = express();
dotenv.config();

app.use(cors())
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', Router)

const PORT = 5000;

const USERNAME = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;


Connection(USERNAME, PASSWORD);

app.listen(PORT, () => {
    console.log(`Listening From PORT ${PORT}`)
});

defaultData();