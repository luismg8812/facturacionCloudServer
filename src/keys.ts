export default{
    database:{
        host:'ec2-54-225-95-183.compute-1.amazonaws.com',
        user:'sraillogfqjvfh',
        password:'f4467b4ad687c77b212d8bbacd5583fcd937325cbee34d044ec7adfd50ee5d48',
        database:'d4mn73eg995brt',
        port:5432,
        ssl: { rejectUnauthorized: false },
    },
    
    database_blindakarga:{
        host:'ec2-3-216-129-140.compute-1.amazonaws.com',
        user:'mlfpsdcoqvuaax',
        password:'4fda73c90989c5332765b27699bd0e2ce159a3deb45e10d73238e21360d65319',
        database:'d6hbm6ohvbolpk',
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
    },

    database_license:{
        host:'ec2-54-164-233-77.compute-1.amazonaws.com',
        user:'rsyygckuvkfjgq',
        password:'7b9d8a4b1a587b534fb82caccc701f62420043c10ff0f2fc602cf91062eb0e44',
        database:'dch2jqe7njrsdb',
        port:5432,
        ssl: { rejectUnauthorized: false },
    },
} 