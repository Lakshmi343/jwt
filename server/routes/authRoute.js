import express from "express";


// route object
const router=express.Router()


// routing
// Register/method post

router.post('/register',registerController)

export default router
