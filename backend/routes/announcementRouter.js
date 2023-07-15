const express = require("express");
const { query } = require("express");
const isAuth = require("../middlewares/isAuth");
const { deleteOne } = require("../models/Announcement");
const Announcement = require("../models/Announcement");
const upload = require("../utils/multer");
const User = require("../models/User");
const isAdmin = require("../middlewares/isAdmin");


const router = express.Router()

/** 
 * @method Post
 * @description add announcement
 * @path '/announcements/addAnnouncement'
 */


router.post("/addAnnouncement",isAuth(), upload("announcement").single("file") ,async (req, res)=>{
    const url = `${req.protocol}://${req.get('host')}`;
    console.log(req.file);
    const { file } = req;
    try {
        const newAnnounce = new Announcement({ ...req.body, user: req.user._id });
        newAnnounce.image = `${url}/${file.path}`;
        await newAnnounce.save();
        res.send({newAnnounce,msg:"this announce is successfully added"})
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message)
    }
})

router.get("/", async (req, res)=>{
    try {
     
        const allAnnounce = await Announcement.find().populate("user")
        res.send(allAnnounce)
    } catch (error) {
        console.log(error)
        res.status(400).send("failed")
    }
})


router.delete("/:id",isAuth(), isAdmin, async(req, res)=>{
    try {
        const announceDeleted = await Announcement.deleteOne({_id : req.params.id})
        if(announceDeleted.deletedCount){return res.send("Announce deleted")} 
        res.status(400).send({msg: "Already deleted"})

    } catch (error) {
        console.log(error)
        res.status(400).send(error.message)

    }
})


router.delete("/delete/:id",isAuth(), async(req, res)=>{
    try {
        const oneAnnounce = await Announcement.findOne({_id:req.params.id})
        if(oneAnnounce.user.toString() != req.user._id) { return res.status(400).send("user unauthorized")} 
        
        const deleted = await Announcement.deleteOne({_id: req.params.id})
        res.send("announce deleted")

    } catch (error) {
        console.log(error)
        res.status(400).send(error.message)

    }
})


router.put("/:id", upload("announcement").single("file"), async (req, res)=>{
    
    const url = `${req.protocol}://${req.get('host')}`;
        console.log(req.file);
        const { file } = req;
    try {
        if(file){
        const image = `${url}/${file.path}`;
       
      result = await Announcement.updateOne({ _id: req.params.id}, {$set:{...req.body, image}})}
      else{
        result = await Announcement.updateOne({ _id: req.params.id}, {$set:{...req.body}})}
       
        const UpdatedAnnouce = await Announcement.findOne({ _id: req.params.id});
        if(result.modifiedCount){ return res.send({msg: "Announce upadated", UpdatedAnnouce})}
        res.status(400).send({msg:"already updated"})
    } catch (error) {

        console.log(error)
        res.status(400).send(error.message)
        
    }
})


router.get("/oneAnnounce/:id",async(req,res)=>{
    try { 
       const oneAnnounce=await Announcement.findOne({_id:req.params.id}).populate("user",["fullName", "image"]) 
       res.send({oneAnnounce})  
      } catch (error) {
          console.log(error)
          res.status(400).send("failed to get the Announce")
      }
   
  }
  )

router.put('/like/:id',isAuth(),async(req,res)=>{

    try {
        const result = await Announcement.findById( req.params.id)

        //chek if the poste is already been liked 
        if(result.likes.filter(like=>like.user.toString()==req.user._id).length>0){
            return res.status(400).send({msg: "announce already liked"})
        }

        result.likes.unshift({user:req.user._id})
        await result.save()
        res.send(result.likes)
    } catch (error) {
        console.log(error.message)  
        res.status(400).send("serveur error")
        
    }
})

router.put('/unlike/:id',isAuth(),async(req,res)=>{

    try {
        const result = await Announcement.findById(req.params.id)
        console.log(result)

        //chek if the poste is already been liked 
        if(result.likes.filter(like=>like.user.toString()==req.user._id).length===0){
            return res.status(400).send({msg: "announce has not been liked"})
        }

        const removeIndex = result.likes.map(like=> like.user.toString()).indexOf(req.user._id)
        console.log(removeIndex);
        result.likes.splice(removeIndex+1, 1)
        await result.save()
        res.send(result.likes)
    } catch (error) {
        console.log(error.message)  
        res.status(400).send("serveur error")
        
    }
})

router.post("/comment/:id",isAuth(), async(req, res)=>{
    try {
        const user = await User.findById(req.user._id)
        const Announce = await Announcement.findById(req.params.id)
     console.log(req.body.text);
        const newComment = {
            text: req.body.text,  
            name: user.fullName,  
            user: req.user._id,
            image: user.image
        }

        Announce.comments.unshift(newComment); 
        await Announce.save();  
        res.send(Announce.comments);
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message); 
    }
    
})

router.delete("/comment/:id/:comment_id", isAuth(), async(req, res)=>{
    try {
        const announce = await Announcement.findById(req.params.id)
        const comment = announce.comments.find(comment => {
            return comment._id.toString() === req.params.comment_id;
        })
        
            if(!comment){
                return res.status(400).send({msg:"comment does not exist"})
            }

            if(comment.user.toString() !== req.user._id.toString()){
return res.status(400).send({msg: "not authorized"})
            }
const removeIndex = announce.comments.map(comment => comment.user.toString()).indexOf(req.user._id)
announce.comments.splice(removeIndex+1, 1);   

    await announce.save();
    res.send(announce.comments);
      

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error');
    }
})


module.exports= router;