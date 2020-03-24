//-------------------------------
// Puerto
//---------------------------------

process.env.PORT = process.env.PORT || 3000;

//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//Token
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;
process.env.SEED_TOKEN = process.env.SEED_TOKEN || 'YoenisToken';



//Base de datos
let urlBD;

if (process.env.NODE_ENV === 'dev') {
    urlBD = "mongodb://localhost:27017/cafe";
} else {
    urlBD = process.env.MONGO_URI;
}

process.env.URLDB = urlBD;