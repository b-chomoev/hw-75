import express from 'express';
import responseRouter from './routers/responses';

const app = express();
const port = 8000;

app.use(express.json());
app.use('/', responseRouter);

const run = async () => {
    app.listen(port, () => {
        console.log(`Server running on port http://localhost:${port}`);
    });
};

run().catch(e => console.error(e));