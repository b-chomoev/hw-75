import express from "express";
import {DecodedResponse, EncodedResponse} from "../types";

const responseRouter = express.Router();
const password = 'password';
const Vigenere = require('caesar-salad').Vigenere;

responseRouter.post('/encode', async (req, res) => {
    const encoded: string = Vigenere.Cipher(req.body.password).crypt(req.body.message);

    const response: EncodedResponse ={
        encoded: encoded
    }

    if (req.body.password !== password) {
        res.status(400).send('Invalid password');
    } else {
        res.send(response);
    }
});

responseRouter.post('/decode', async (req, res) => {
    const decoded: string = Vigenere.Decipher(req.body.password).crypt(req.body.message);

    const response: DecodedResponse ={
        decoded: decoded
    }

    if (req.body.password !== password) {
        res.status(400).send('Invalid password');
    } else {
        res.send(response);
    }
});

export default responseRouter;