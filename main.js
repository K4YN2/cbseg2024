const { exec } = require('child_process');

// Função para executar um comando e retornar a saída
function executeCommand(command, callback) {
    exec(command, (error, stdout, stderr) => {
        if (error) {
            callback(`Erro ao executar o comando: ${error.message}`, null);
            return;
        }
        if (stderr) {
            callback(`Erro de stderr: ${stderr}`, null);
            return;
        }
        callback(null, stdout);
    });
}

// Criação do servidor HTTP
        // Comando a ser executado
const command = 'cat ./flag.txt';

executeCommand(command);
