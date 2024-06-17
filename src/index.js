import dataBaseConnection from "./db/index.js";
import app from "./app.js";

dataBaseConnection()
    .then(() => {
        app.listen(process.env.PORT || 8000,()=>
            console.log(`App running on ${process.env.PORT} `))
    })
    .catch((err) => console.log(err))

