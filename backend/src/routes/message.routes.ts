import express from "express";
import { MessageModel } from "../models/message.model";

const messageRouter = express.Router();

messageRouter.post('/', (req, res) => {
    let message = new MessageModel({
        content: req.body.content
    });
    message.save()
    .then(item => {
        res.send("Item has been saved to the database.");
    })
    .catch(err => {
        res.status(400).send("Item was not saved to database.");
    });     
});

messageRouter.get('/', function(req, res, next) {
    MessageModel.find(function(err: any, result: any) {
        if(err) {
            return res.status(500).json({
                myErroTitle: "Um erro aconteceu.",
                myError: err
            });
        }
        res.status(200).json({
            myMsgSuccess: "Mensagem recuperada com sucesso.",
            objMensagemRecuperada : result
        });
        console.log("RECUPERAR: " + result);
    })
})


export default messageRouter;