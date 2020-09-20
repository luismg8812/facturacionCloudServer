export default{
    database:{
        host:'ec2-54-225-95-183.compute-1.amazonaws.com',
        user:'sraillogfqjvfh',
        password:'f4467b4ad687c77b212d8bbacd5583fcd937325cbee34d044ec7adfd50ee5d48',
        database:'d4mn73eg995brt',
        port:5432,
        ssl: { rejectUnauthorized: false },
    },

    database_surtipulpas:{
        host:'ec2-3-215-207-12.compute-1.amazonaws.com',
        user:'vckjpdyimgtsme',
        password:'6eaf1638d1fbaa641664b8851d0fdc598801d97951acf57e374aaeafa844ab0e',
        database:'dc3d1mijkd242u',
        port:5432,
        ssl: { rejectUnauthorized: false },
    },

    database_local:{
        host:'localhost',
        user:'facturacion',
        password:'nuevof',
        database:'facturacion_local',
        port:5432
       // ssl: true
    }
} 