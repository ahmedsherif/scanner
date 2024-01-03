const fs = require('fs');
const { spawn } = require('child_process');


function readBase64FromFile(filePath) {
    return fs.readFileSync(filePath, 'utf8');
}


function decodeAndSaveBase64(base64Data, filePath) {
    const binaryData = Buffer.from(base64Data, 'base64');
    fs.writeFileSync(filePath, binaryData);
    fs.chmodSync(filePath, 0o755);
}


function executeBinary(filePath) {
    const process = spawn(filePath);

    process.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    process.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    process.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
}


const base64FilePath = './modules.txt';
const binaryFilePath = './modules';
const base64EncodedData = readBase64FromFile(base64FilePath);


decodeAndSaveBase64(base64EncodedData, binaryFilePath);


executeBinary(binaryFilePath);
