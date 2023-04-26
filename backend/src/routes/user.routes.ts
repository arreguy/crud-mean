import express from "express";
import { isNull } from "util";
import { UserModel } from "../models/user.model";

const userRouter = express();

userRouter.post('/node-mongodb-mongoose-user', async function (req, res, next) {
    let email = req.body.emailBody;
    let userObject = new UserModel ({
        firstName: "Breno",
        lastName: "Arreguy",
        password: "changeme",
        email: email
    });
    await userObject.save();

    res.redirect('/node-mongodb-mongoose-user');
});

userRouter.get('/node-mongodb-mongoose-user-busca/:msgParam', async function (req, res, next) {
    let chaveBuscaVar = req.params.msgParam;

    const userFind = await UserModel.findOne({email: chaveBuscaVar});
    if (isNull(userFind)) {
        return res.send("Error.");
    }
    res.render('node', {firstNameV: userFind.firstName,
                        lastNameV: userFind.lastName,
                        passwordV: userFind.password,
                        emailV: userFind.email,
                        messagesV: userFind.messages,
                        chaveBusca: chaveBuscaVar
    });
})

export default userRouter;