import express from "express";
import { UserModel } from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userRouter = express();

userRouter.post('/signup', async (req, res) => {
    try {
        const { email, password, firstName, lastName } = req.body;
        const userExistente = await UserModel.findOne({ email });
    
        if (userExistente) {
          return res.status(400).json({ message: "User already exists." });
        }
    
        const senhaCripto = await bcrypt.hash(password, 10);
    
        const novoUser = new UserModel({
          email,
          password: senhaCripto,
          firstName,
          lastName,
        });
    
        await novoUser.save();
    
        const token = jwt.sign(
          { email: novoUser.email, id: novoUser._id },
          "chave_jwt",
          { expiresIn: "1h" }
        );
    
        res.status(201).json({ novoUser, token });
      } catch (error) {
        res.status(500).json({ message: "Aconteceu um erro." });
      }
    });

userRouter.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;
    
        const userExistente = await UserModel.findOne({ email });
    
        if (!userExistente) {
          return res.status(404).json({ message: "Usuário não está registrado" });
        }
    
        const verificaSenha = await bcrypt.compare(
          password,
          userExistente.password
        );
    
        if (!verificaSenha) {
          return res.status(400).json({ message: "Senha errada!" });
        }
    
        const token = jwt.sign(
          { email: userExistente.email, id: userExistente._id },
          "chave_jwt",
          { expiresIn: "1h" }
        );
    
        res.status(200).json({ userExistente, token });
      } catch (error) {
        res.status(500).json({ message: "Aconteceu um erro." });
      }
    });

export default userRouter;