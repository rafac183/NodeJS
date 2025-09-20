import { envs } from "../config/env.js";
import { startServer } from "../server/server.js";

/* const { envs } = require("../config/env");
const { startServer } = require("../server/server.js"); */

const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

//funcion agnostica autoejecutada asincrona
//Agnostica por que no tiene nombre
//Autoejecutada por el parentesis al final
( async () => {
    main()
})()
