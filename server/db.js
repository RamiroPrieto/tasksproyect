import {createPool} from 'mysql2/promise'


export const pool = createPool({
    database: "mern",
    user: "32ez8c5w0rg7",
    host: "lc46yf2a89eg.aws-sa-east-1-1.psdb.cloud",
    password: "pscale_pw_PSU9Uxmd8xAxVRC6o_K1Fuxlj1X_PNTTd4DM7VNbOLQ",
    ssl: {
        rejectUnauthorized: false
    }
});

