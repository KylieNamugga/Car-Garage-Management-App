const express = require('express');
const router = express.Router();

const Registration = require('../models/registrationmodel')

router.get('/dashboard', async (req, res) => {
  try {
    const data = await Registration.find({}).sort({ $natural: -1 });

    let totalEarnings = await Registration.aggregate([
      {$group: {_id:'$all',
      totalParking:{$sum:'$servicefee'},
      totalTyrePrice:{$sum:'$tyreprice'},
      totalBatteryPrice:{$sum:'$batteryprice'},

    }}]);

    console.log('This is our collection of all earnings', totalEarnings);
    res.render('dashboard', {
      registrations: data, 
      total:totalEarnings[0],

      
    })
  } catch (error) {
    return res.status(400).send(
      {
        status: 400,
        message: 'Oops failed to fetch all registrations',
        error
      });
  }
});

router.get('/deleteuser/:id', async (req, res) => {
  try {
    await Registration.deleteOne({ _id: req.params.id })
    res.redirect('back')

  } catch (error) {
    res.status(400).send('unable to delete user')
  }
});

router.get("/update/:id", async (req, res) => {
  try {
    const updateUser = await Registration.findOne({ _id: req.params.id })
    res.render('registrationedits', { registration: updateUser })
  } catch (error) {
    res.status(400).send("unable to find the user in the database");
  }
});

router.post("/update/", async (req, res) => {
  try {
    const updated = await Registration.findOneAndUpdate({ _id: req.query.id }, req.body)
    res.redirect("/dashboard");
  } catch (error) {
    res.status(400).send("unable to update registration");
  }
});

module.exports = router;