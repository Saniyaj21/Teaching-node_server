import express from 'express';

const server = express();

// npm i
// npm run dev
// localhost:8080
server.get('/', (req, res)=>{ 
    res.send('Hello World!');
})


server.get('/about', (req, res)=>{
    res.send('My name is Sani');
})





server.listen(8080, ()=>{
    console.log("sarver started at 8080 port");
});