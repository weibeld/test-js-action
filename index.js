const core = require('@actions/core');
const github = require('@actions/github');

try {
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  const { exec } = require("child_process");

  exec("ls -la", (error, stdout, stderr) => {
      if (error) {
          console.log(`error: ${error.message}`);
          return;
      }
      if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
      }
      console.log(`stdout: ${stdout}`);
  }); 
 
  // Get the JSON webhook payload for the event that triggered the workflow
  const obj = JSON.stringify(github, undefined, 2)
  console.log(`github: ${obj}`);
} catch (error) {
  core.setFailed(error.message);
}
