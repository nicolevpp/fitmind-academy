const routinesRouter = require('express').Router();
const Routine = require('../models/routine');
const User = require('../models/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

routinesRouter.post('/', async (request, response) => {
 
  const { name, description, exercises } = request.body;
  
  const newRoutine = new Routine({
    name,
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

routinesRouter.patch('/', async (request, response) => {
  const { routines, id } = request.body;
  const user = await User.findById(id)
  user.routines = user.routines.concat(routines);


  await user.save()

  return response.status(201).json('Rutina añadida al usuario');
  // const {routines} = request.body
  // console.log(routines);

});

module.exports = routinesRouter;