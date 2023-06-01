import { createPool } from 'mysql2/promise';

export const pool = createPool({
    host: 'localhost',
    user: 'EstebanAdmin',
    password:'Lego1212',
    port:3306,
    database:'registro_academico'

})