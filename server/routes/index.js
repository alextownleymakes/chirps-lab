const express = require('express');
const chirpsRouter = require('./chirps');

let router = express.Router();

router.use("/chirps", chirpsRouter);
// router.use("/api/chirps", chirpsRouter);
// router.use("/users", chirpsRouter);

// router.use('/chirps', 
// router.get('/users', (req,res) => {
//     res.send('user user')
// })

module.exports = router;
