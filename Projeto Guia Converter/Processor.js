class Processor {
    static Process(data) {
        const row = data.split('\r\n');
        const rows = [];

        row.forEach(row => {
            const array = row.split(',');
            rows.push(array);
        });

        return rows;
    }
}

module.exports = Processor;