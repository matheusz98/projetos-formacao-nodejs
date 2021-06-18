const fs = require('fs');

fs.writeFile('./matheus.costa', 'skidaddle skadoodle', (error) => {
    if(error) {
        console.log('Erro durante a escrita');
    }
});