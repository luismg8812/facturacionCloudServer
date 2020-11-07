import pg from 'pg';
import keys from './keys'


//const pool=new pg.Client(keys.database_avenidagp); //conexcion nube 
const pool=new pg.Client(keys.database_local); //conexion local

pool.connect().then(()=>console.log("connected susccessfuly"));

export default pool; 