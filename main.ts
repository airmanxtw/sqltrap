import sql from "npm:mssql";

const sqlConfig = {
  user: "thisIsNotARealUser",
  password: "thisIsNotARealPassword",
  server: "thisIsNotARealServer",
  database: "thisIsNotARealDatabase",
  options: {
    trustServerCertificate: true,
    encrypt: false,
    useUTC: false,
  },
};

await sql.connect(sqlConfig);

const loginUser = Deno.args[0];
const password = Deno.args[1];

const result = await sql.query(
  `SELECT * FROM thisIsNotARealTable where userid=` + loginUser + ` and password=` + password
);

console.log(result);
