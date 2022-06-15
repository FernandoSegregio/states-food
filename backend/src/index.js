import express from 'express';
import cors from 'cors';
import loginRouter from './user/route.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/login', loginRouter);

const PORT = 3001;

app.listen(PORT, () => console.log(`acessando a porta ${PORT}`));
