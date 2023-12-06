const routinesRouter = require('express').Router();
const Routine = require('../models/routine');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

routinesRouter.post('/', async (request, response) => {

 
  const { routineName, description, exercises } = request.body;


    
//   if (!firstName || !lastName || !email || !phone || !address || !password) {
//       return response.status(400).json({error: 'All fields are required'});
//   }

  
const newRoutine = new Routine({
    routineName,
    description,
    exercises
  });

  const savedRoutine = await newRoutine.save();


  return response.status(201).json('Rutina creada');


});


routinesRouter.get('/', async (request, response) => {
  const routine = request.routine;
  const routines = await Routine.find();
  return response.status(200).json(routines);
});

module.exports = routinesRouter;