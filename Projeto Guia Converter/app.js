const Reader = require('./Reader');

const fileReader = new Reader();

async function main() {
    const data = await fileReader.Read('./planilha.csv');
    console.log(data);
}

main();