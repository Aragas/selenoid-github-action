const { execSync } = require("child_process");

console.log(`## DOWNLOADING CM`);

execSync(`curl -s https://aerokube.com/cm/bash | bash`)

console.log(`## STARTING SELENOID`);

execSync(`./cm selenoid start`)

console.log(`## DOWNLOADING CM AND STARTING SELENOID FINISHED`);
