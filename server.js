import app from "./app.js";

app.listen(process.env.PORT, () =>{
    console.log(`Server Running On port ${process.env.PORT}`);
    
});