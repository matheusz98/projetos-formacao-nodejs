const fs = require('fs');

/* fs.readFile('./usuario.json', { encoding: 'utf-8'}, (error, data) => {
    if(error) {
        console.log('Deu ruim');
    } else {
        console.log(data);
    }
}); */

/* fs.readFile('./usuario.json', { encoding: 'utf-8'}, (error, data) => {
    if(error) {
        console.log('Deu ruim');
    } else {
        const text = JSON.parse(data);
        console.log(text);
    }
}); */

fs.readFile('./usuario.json', { encoding: 'utf-8'}, (error, data) => {
    if(error) {
        console.log('Deu ruim');
    } else {
        const text = JSON.parse(data);

        text.stack = 'Desenvolvimento Front-End';

        fs.writeFile('./usuario.json', JSON.stringify(text), (error) => {
            if(error) {
                console.log('Deu ruim de novo');
            }
        })
    }
});