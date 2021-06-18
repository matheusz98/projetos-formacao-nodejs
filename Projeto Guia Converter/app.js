const Reader = require('./Reader');
const Processor = require('./Processor');
const Table = require('./Table');
const HtmlParser = require('./HtmlParser');

const fileReader = new Reader();

async function main() {
    const data = await fileReader.Read('./planilha.csv');
    const processData = Processor.Process(data);
    const users = new Table(processData);

    const html = await HtmlParser.Parse(users);

    console.log(html);
}

main();