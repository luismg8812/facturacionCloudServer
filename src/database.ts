import pg from 'pg';
import keys from './keys'


const pool=new pg.Client(keys.database_yacu); //conexcion nube 
//const pool=new pg.Client(keys.database_local); //conexion local

pool.connect().then(()=>console.log("connected susccessfuly yacu") );

export default pool; 