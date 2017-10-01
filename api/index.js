//import express
import express from 'express';

//create a route object
const router = express.Router();

router.get('/', (req,res)=>{
    //send a json response
    res.send({data: [] });
});
//to be able to use the router
module.exports = router;
//export to use it
