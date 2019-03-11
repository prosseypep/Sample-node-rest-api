const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Order = require('../models/order')

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'GET request placed to orders'
    })
})

router.post('/', (req, res, next) => {
    const order = new Order({
        _id: mongoose.Types.ObjectId(),
        quantity: req.body.quantity,
        product: req.body.productId
    });
    order.save()
        .exec()
        .then(result => {
            console.log(result);
            res.status(201).json(result);
        })
        .catch(err => console.log(err));
})

router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'GET request placed to single order',
        id: req.params.orderId
    })
})

router.patch('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'PATCH request placed to single order',
        id: req.params.orderId
    })
})

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'DELETE request placed to single order',
        id: req.params.orderId
    })
})

module.exports = router;