import pg from 'pg';
import keys from './keys'

 
const pool=new pg.Client(keys.database_license); //conexion local

pool.connect().then(()=>console.log("connected susccessfuly lisence"));

export default pool; 