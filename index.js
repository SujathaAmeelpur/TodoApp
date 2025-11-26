const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let todos = [];

app.get('/todos', (req, res)=>{
    res.json(todos)
});

app.post('/todos', (req, res) => {
    console.log(req)
    const {text} = req.body

    if(!text){
        return res.status(400).json({error: "Text is required"});
    }

    const newTodo = {
        id: Date.now(), text
    };
    todos.push(newTodo);
    res.json(newTodo);
});

app.listen(5000, ()=> {
    console.log("Server running on http://localhost:5000");
});