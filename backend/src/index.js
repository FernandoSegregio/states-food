import express from 'express';
import cors from 'cors';
import loginRouter from './user/route.js';
import restaurantRouter from './restaurant/route.js';

const app = express();

app.use('/images', express.static('public'));

app.use(cors());
app.use(express.json());

app.use('/login', loginRouter);
app.use('/restaurant', restaurantRouter);

const PORT = 3001;

app.listen(PORT, () => console.log(`acessando a porta ${PORT}`));
