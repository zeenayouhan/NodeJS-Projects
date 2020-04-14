const express= require('express');

const app = express();

app.use(express.json());

const genres = [
    { id: 1, name: 'Action' },  
    { id: 2, name: 'Horror' },  
    { id: 3, name: 'Romance' },  
  ];

app.get('/api/genres',(req,res)=>{
    res.send(genres);


})
app.post('/api/generes',(req,res)=>{
    const schema={
        name:Joi.string().min(4).required()
    }
    const {error}= validateCourse(req.body);
    if(error){
        return res.status(404).send(error.details[0].message);
    }

    const genre={
        id: genres.length+1,
        name:req.body.name
    }
    genres.push(genre);
    res.send(genres);
})

app.listen(3000,()=>{
    console.log("Connected");

})