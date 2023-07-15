const mongoose = require("mongoose")

const AnnouncementSchema = new mongoose.Schema({
 object: {type: String, required:[true, "object is required"]},
    description: String,
    address: String, 
    status: {type: String, enum:["bad", "good"]},
    phone: Number,
    image: String,
    createdOn:{type:Date,default:Date.now()},
    available:{type:Boolean,default:true},
    user:{ type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    likes: [{
        user:{
          type: mongoose.Schema.Types.ObjectId,
          ref: "user",
        },}
      ],

      comments: [ {
        user:{
          type: mongoose.Schema.Types.ObjectId,
          ref: "user",
        },
        text:{type: String, required:true},
        name:{type:String},
        image:{type:String},
        date:{type:Date, default: Date.now()}
      }],
}) 


module.exports = Announcement = mongoose.model("annoucement", AnnouncementSchema);