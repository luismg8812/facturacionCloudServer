export default{
    database:{
        host:'ec2-54-225-95-183.compute-1.amazonaws.com',
        user:'sraillogfqjvfh',
        password:'f4467b4ad687c77b212d8bbacd5583fcd937325cbee34d044ec7adfd50ee5d48',
        database:'d4mn73eg995brt',
        port:5432,
        ssl: { rejectUnauthorized: false },
    },
    
    database_avenidagp:{
        host:'ec2-54-159-107-189.compute-1.amazonaws.com',
        user:'daorvojklxlhnl',
        password:'6afdc292c4c25f6cbbe13799cbfc10edbf7c48245a86504ab8c95a9663c381fe',
        database:'df7ckvmi77cpbg',
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