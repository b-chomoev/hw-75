import express from 'express';
import cipherRouter from './routers/cipher';
import cors from 'cors';
import fs = require('fs');


const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.use('/cipher', cipherRouter);

const run = async () => {
    app.listen(port, () => {
        console.log(`Server running on port http://localhost:${port}`);
    });
};

run().catch(e => console.error(e));