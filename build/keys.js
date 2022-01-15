"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    database: {
        host: 'ec2-54-225-95-183.compute-1.amazonaws.com',
        user: 'sraillogfqjvfh',
        password: 'f4467b4ad687c77b212d8bbacd5583fcd937325cbee34d044ec7adfd50ee5d48',
        database: 'd4mn73eg995brt',
        port: 5432,
        ssl: { rejectUnauthorized: false },
    },
    database_molino: {
        host: 'ec2-3-91-127-228.compute-1.amazonaws.com',
        user: 'pfpdkivceqfxre',
        password: '402e5b6f8e8c573b992fe1e39829015f225c5dca0a3897d90d9d3a649fbe0635',
        database: 'dbg3ga9ic55k6b',
        port: 5432,
        ssl: { rejectUnauthorized: false },
    },
    database_local: {
        host: 'localhost',
        user: 'facturacion',
        password: 'nuevof',
        database: 'facturacion_local',
        port: 5432
        // ssl: true
    },
    database_license: {
        host: 'ec2-52-86-177-34.compute-1.amazonaws.com',
        user: 'lmdlznybcgeknr',
        password: '4718c2a0f460ad5e31e2da9e48fa74efee3d91cfa581b15d9198758df788b372',
        database: 'd5shhn3l43vgfl',
        port: 5432,
        ssl: { rejectUnauthorized: false },
    },
};
