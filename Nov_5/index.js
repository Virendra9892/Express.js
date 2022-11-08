import express from "express";
import bodyparse from "body-parser";
const app = express();
const port = process.env.PORT ||6500;
// app.use(express.json());
app.use(bodyparse.json());
const arr = [];
let create = function(req,res){
    let data = req.body;
     arr.push(data);
    res.send(arr)
}
let getByid = function(req,res){
    let num = req.params.num;
    for(let i = 0;i<arr.length;i++){
        if(arr[i].roll==num) res.send(arr[i]);
    }
    
}

let getDelete = function(req,res){
 let n = req.params.num;
 let removed = arr.splice(n,1);
 res.send(removed);
    
}

let update = function(req,res){
    let n = req.params.num;
    let updarr = arr.findIndex(obj =>obj.roll ==n);
    arr[updarr].name = "Virendra";
    res.send(arr[updarr]);
}

app.post("/",create);

app.get("/about/:num",getByid);

// app.get("/contact",get);
app.delete("/contact/:num",getDelete);

app.put("/services/:num",update);

app.listen(port,()=>{
    console.log(`Server is listening on http://localhost:${port}.`);
})