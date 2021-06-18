const Reader = require('./Reader');
const Processor = require('./Processor');
const Table = require('./Table');

const fileReader = new Reader();

async function main() {
    const data = await fileReader.Read('./planilha.csv');
    const processData = Processor.Process(data);
    const users = new Table(processData);

    console.log(users.RowCount);
    console.log(users.ColumnCount);
}

main();