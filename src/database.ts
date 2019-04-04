import pg from 'pg';
import keys from './keys'


const pool=new pg.Client(keys.database);

pool.connect().then(()=>console.log("connected susccessfuly"));

export default pool; 