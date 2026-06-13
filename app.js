const os = require("os");

console.log("Hola Mundo");
console.log(`Sistema Operativo: ${os.platform()}`);
console.log(`Arquitectura: ${os.arch()}`);
console.log(`Memoria Total: ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`);
console.log(`Usuario: ${os.userInfo().username}`);