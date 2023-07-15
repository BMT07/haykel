const express = require("express")
const isAuth = require("../middlewares/isAuth")
const comment = require("../models/Comment")
const router = express.Router()
/**
 * @method Post
 * @description add comment
 * @path '/comments/addComment'
 */
 router.post("/addComment",isAuth(), async (req, res)=>{
    try {
        const newComment = new comment({...req.body, user:req.user._id})
        await newComment.save()
        res.send({msg: "comment added with success", newComment})
    } catch (error) {
        console.log(error)
        res.status(400).send("failed to add comment")
    }
 })


router.put("/:id", async (req, res)=>{
    const {_id} = req.params.id;
    try {
        const editComment = await comment.findOneAndUpdate(_id, { $set:{...req.body}}, {new:true})
        res.send({msg:" succeed update", editComment})
    } catch (error) {
        console.log(error)
        res.status(400).send("edit failed")
    }
})


router.delete("/:id", async (req, res)=>{
    const {_id} = req.params.id
    try {
        const deletedComment = await comment.deleteOne(_id)
        if(deletedComment.deletedCount){
           return res.send("comment removed")
        }
        res.status(400).send({msg:"Already deleted"})
    } catch (error) {
        console.log(error)
        res.status(400).send({msg:"Failed to delete the comment"})
    }
})


router.get("/", async (req, res)=>{

    try {
        const allComments = await comment.find({}).populate("user")
        res.send(allComments)
    } catch (error) {
        console.log(error)
        res.status(400).send("failed to get all comments")
    }
})
module.exports= router
