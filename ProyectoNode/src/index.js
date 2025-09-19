import {config} from "dotenv";
import env from 'env-var';

config()

const PORT = env.get('PORT').required().asPortNumber();

console.log(PORT);
console.log(process.env.PORT);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASS);






/* //ES6
import { getTitle, getAuthor } from "./functions.js";
import { curso } from "./objects.js";

//Anterior forma desde legacy
const { getTitle, getAuthor } = require('./functions');
const { curso } = require('./objects')

const { nombre, autor } = curso

console.log(getTitle())
console.log(getAuthor(nombre))
console.log(nombre) */