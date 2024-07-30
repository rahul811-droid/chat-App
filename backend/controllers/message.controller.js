import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";


export const sendMessage =async(req,res,next)=>{
const {message} = req.body;
const {id:reciverId} = req.params;
const senderId = req.user._id ;
try {
let conversation = await Conversation.findOne({
    participants:{$all:[senderId,reciverId]},
})
if(!conversation){
    conversation = await Conversation.create({
        participants:[senderId,reciverId]
    })
}
const newMessage = new Message({
    senderId,
    reciverId,
    message
});

if(newMessage){
conversation.messages.push(newMessage._id);
}

await Promise.all([ conversation.save(),newMessage.save()])

res.status(201).json(newMessage);

    
} catch (error) {
    console.log("Error in sendMessage controller",error.message)
    res.status(500).json({error:"Internal server error"})
}
}


export const getMessages = async(req,res,next)=>{
    try {
        const {id:userTochatId} = req.params;
        const senderId = req.user._id ;
        const conversation = await Conversation.findOne({
            participants:{$all:[senderId,userTochatId]},
        }).populate("messages");

        if(!conversation){
            return res.status(200).json([]);
        }
        const messages = conversation.messages;
        res.status(200).json(messages);
    }catch (error) {
        console.log("Error in getMessage controller",error.message)
        res.status(500).json({error:"Internal server error"})
    }
}