class Table {
    constructor(array) {
        this.header = array[0];
        array.shift();
        this.rows = array;
    }
}

module.exports = Table;