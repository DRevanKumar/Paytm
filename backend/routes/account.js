const express = require("express")
const mongoose = require("mongoose")
const router= express.Router()
const { Account } =require('../db')
const{ authMiddleware } = require('../middleware')


router.get('/balance', authMiddleware ,async(req,res)=>{
    const account = await Account.findOne({
        userId: req.userId
    })

    res.json({
        balance : account.balance
    })
})


router.post("/transfer" ,authMiddleware,async(req,res)=>{
    const session = await mongoose.startSession();
    
    session.startTransaction();
    const { amount,to } = req.body;
    const account = await Account.findOne({userId:req.userId}).session(session);
    if(! account || account.balance < amount){
        await session.abortTransaction();
        res.status(400).json({
            msg:"insufficent balance"
        })
    }
    const toAccount = await Account.findOne({userId : to }).session(session);

    if(!toAccount){
        await session.abortTransaction();
        res.status(400).json({
            msg:"invalid Account"
        })
    }
    await Account.updateOne({userId:req.userId},{ $inc :{ balance : -amount}}).session(session);
    await Account.updateOne({userId:to},{ $inc :{ balance : amount}}).session(session);

    await session.commitTransaction();
    res.json({
        msg:"transaction Successful"
    })
})

module.exports = router
