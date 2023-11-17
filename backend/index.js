import  express  from "express";

const app = express()
const PORT = 5000

app.get('/', (req,res)=>{
    res.send('Hello World!!!')
})
app.get('/api/jokes' , (req,res)=>{
    let jokes = [
        {id:1, joke:"Why don’t scientists trust atoms? Because they make up everything!"},
        {id:2,joke:"I told my wife she was drawing her eyebrows too high. She looked surprised."},
        {id:3,joke:"What do you call a fake noodle? An impasta."},
        {id:4,joke:"Why did the scarecrow win an award? Because he was outstanding in his field."},
        {id:5,joke:"Why don’t eggs tell jokes? They might crack each other up!"}
    ]
    res.json(jokes)
})

app.listen(PORT, ()=>{
    console.log(`App is running on http://localhost:${PORT}`);
})