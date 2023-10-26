import express from 'express';
import articles from './routes/articles.js'
import db from 'mongoose';
import dotenv from 'dotenv';
import methodOverride from 'method-override';

dotenv.config();

db.connect(process.env.MONGO_URL)
.then(() => console.log('db connected...'))
.catch(err => console.log(`Error ${err}`));

const app = express();

app.set('view engine', 'ejs');git 
app.use(express.urlencoded({extended : false}));
app.use(methodOverride('_method'));

app.use('/articles', articles);

app.listen('3000', ()=> {   
    console.log('Listening on port 3000...');
});