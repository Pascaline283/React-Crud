const express = require('express');
const router= express.Router();
const Client = require('../model/userModel');

router.get('/',(req,res)=>{
    Client.find()
    .then(data=>res.send(data))
    .catch(err=>console.log(err))

})
router.post('/',(req,res)=>{
    Client.create(req.body)
    .then(data=>res.send(data))
    .catch(err=>console.log(err))
})
router.get('/:id', (req, res) => {
    const id = req.params.id;
    Client.findById(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: 'Client not found' });
            } else {
                res.send(data);
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
});
router.put('/:id', (req, res) => {
    const id = req.params.id;
    Client.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: 'Client not found' });
            } else {
                res.send(data);
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Client.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: 'Client not found' });
            } else {
                res.send({ message: 'Client deleted successfully' });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
});
module.exports = router;