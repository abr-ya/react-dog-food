const fs = require("fs");
// здесь необходимо перечислить ключи из файла ENV, а точнее - из ENV netlify
const ENV = `
  API_URL=${process.env.API_URL}\n
  TEST=${process.env.TEST}\n
`;
console.log(ENV);

fs.writeFileSync("./.env", ENV);
