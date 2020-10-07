const core = require('@actions/core');
const github = require('@actions/github');
const { exec } = require("child_process");

try {
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);

  exec("pwd", (error, stdout, stderr) => {
      if (error) fail(error);
      console.log(stdout)
      console.log(stderr)
  }); 
 
  // Get the JSON webhook payload for the event that triggered the workflow
  //const obj = JSON.stringify(github, undefined, 2)
  //console.log(`github: ${obj}`);
} catch (err) {
  fail(err)
}

function fail(err) {
  core.setFailed(err);
}
