const { exec } = require('child_process');

module.exports = function() {
    exec('whoami', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`User: ${stdout}`);
    });
};

