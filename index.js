const core = require('@actions/core');
const github = require('@actions/github');
const { exec, execSync } = require("child_process");

function fail(err) {
  core.setFailed(err);
}

function run(cmd) {
  execSync(cmd);
}

try {
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  //run("npm install -g ajv-cli");
  s = execSync("date -x");
  //console.log(s.toString());
 
  // Get the JSON webhook payload for the event that triggered the workflow
  //const obj = JSON.stringify(github, undefined, 2)
  //console.log(`github: ${obj}`);
} catch (err) {
  console.log(err.message)
  //fail(err)
}

