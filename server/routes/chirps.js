const express = require('express');
var router = express.Router();
const chirpStore = require('../chirpstore')

router.get('/:id?', (req,res) => {
    if (req.params.id) {
        res.send(chirpStore.GetChirp(req.params.id))
    }
    

    res.send(chirpStore.GetChirps())

});

router.post('/', (req,res) => {
    chirpStore.CreateChirp(req.body);
    res.sendStatus(200);
});

router.put('/:id?', (req,res) => {
    if (req.params.id) {
        chirpStore.UpdateChirp(req.params.id,req.body)
        res.sendStatus(200); 
    }
    res.send("please select a chirp to edit")
});

router.delete('/:id?', (req,res) => {
    if (req.params.id) {
        chirpStore.DeleteChirp(req.params.id)
        res.sendStatus(200);
    }
    res.send("please select a chirp to delete")
});

module.exports = router
