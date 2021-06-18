const Reader = require('./Reader');
const Processor = require('./Processor');

const fileReader = new Reader();

async function main() {
    const data = await fileReader.Read('./planilha.csv');
    const processData = Processor.Process(data);
}

main();