const express =  require('express');
const app = express();
const port = process.env.PORT || 5000;
const categories = require('./data/categories.json');
const news = require('./data/news.json');
const cors = require('cors');

app.use(cors());

app.get('/', (req, res)=>{
    res.send("Dragon server is running...");
});

app.get('/categories', (req, res)=>{
    res.send(categories);
});

app.get('/categories/:id', (req, res)=>{
    const id = req.params.id;
    if(id == 0){
        res.send(news);
    } else {
        const categoryNews = news.filter(item => item.category_id === id);
        res.send(categoryNews);
    }
});

app.get('/news', (req, res)=>{
    res.send(news);
});

app.get('/news/:id', (req, res)=>{
    const singleNews = news.find(item => item._id === req.params.id);
    res.send(singleNews);
});

app.listen(port, ()=>{
    console.log(`Dragon api running on port: ${port} `);
});