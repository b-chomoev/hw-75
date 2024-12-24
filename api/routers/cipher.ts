import express from "express";
import {DecodedResponse, EncodedResponse} from "../types";

const cipherRouter = express.Router();
const Vigenere = require('caesar-salad').Vigenere;

cipherRouter.post('/encode', (req, res) => {
    if (!req.body.password || !req.body.message) {
        res.status(400).send('Password and message are required');
    }

    const encodeMessage: string = Vigenere.Cipher(req.body.password).crypt(req.body.message);

    res.send(encodeMessage);
});

cipherRouter.post('/decode', (req, res) => {
    if (!req.body.password || !req.body.message) {
        res.status(400).send('Password and message are required');
    }

    const decodedMessage: string = Vigenere.Decipher(req.body.password).crypt(req.body.message);
    res.send(decodedMessage);
});

export default cipherRouter;