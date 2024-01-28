export const config = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "root",
    DB: "maks",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  
  export const dialect = "postgres";