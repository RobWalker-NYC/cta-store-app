const express = require('express');
const donuts = express.Router();
const { getAllDonuts, getDonut, createDonut, deleteDonut, updateDonut } = require("../queries/donuts.js");

donuts.get('/', async (req, res) => {
    try {
        const allDonuts = await getAllDonuts();
        if(allDonuts[0]) {
            res.status(200).json({
                sucess: true,
                payload: allDonuts
            });
        } else {
            res.status(404).json({
                sucess: false,
                payload: '/not found/'
         });
        }
    } catch(error){
        console.log(error);
    }
});

donuts.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const donut = await getDonut(id);
        if(donut.id) {
            res.status(200).json({
                sucess: true,
                payload: donut
            });
        } else {
            res.status(404).json({
                sucess: false,
                payload: '/not found/'
         });
        }
    } catch(error){
        console.log(error);
    }
})


donuts.post('/', async (req, res) => {
    const { body } = req;
    try {
        const createdDonut = await createDonut(body);

        if(!createdDonut.image){
            createdDonut.image = "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image"
        }
        // if(createdDonut.id) {
            res.status(200).json({
                sucess: true,
                payload: createdDonut
            });
        // } else {
        //     res.status(404).json({
        //         sucess: false,
        //         payload: 'Donut cannot be found'
        //     });
        // }
    } catch(error){
        console.log(error);
    }
});

donuts.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deletedDonut = await deleteDonut(id);
    if(deletedDonut.id) {
        res.status(200).json({
            success: true,
            payload: deletedDonut
        });
    } else {
        res.status(404).json({ 
            success: false,
            payload: 'Donut not found'
        });
    }
})

donuts.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const updatedDonut = await updateDonut(id, body);

        if(updatedDonut.id) {
            res.status(200).json({
                sucess: true,
                payload: updatedDonut
            });
        } else {
            res.status(404).json({
                sucess: false,
                payload: 'Donut not found'
         });
        }
    })

module.exports = donuts;
