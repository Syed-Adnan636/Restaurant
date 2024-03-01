import app from "./app.js";
import colors from 'colors';

app.listen(process.env.PORT, ()=>{
    console.log(`server running on PORT : ${process.env.PORT.blue}`);
});