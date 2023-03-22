#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const exec = require('child_process').execSync;

const glInfraBuilder = path.resolve(process.cwd(), 'gl-infra-builder');

console.log(`gl-infra-builder: ${glInfraBuilder}`);

const isGitRepo = exec(`cd ${glInfraBuilder} && git rev-parse --is-inside-work-tree`);


if (isTrueText(isGitRepo)) {
    console.log('1111');
} else {
    console.log('2222');
}

console.log(typeof('abc'));

console.log(`isGitRepo: ${isGitRepo}`);

console.log(`cwd: ${process.cwd()}`);

function isTrueText(val) {
    let newVal = '';
    if (val instanceof Buffer) {
        newVal = val.toString().trim();
    } else if (val instanceof string) {
        newVal = val;
    }
    console.log(`newVal: ${newVal}, newValLen: ${newVal.length}, trueVV: ${newVal == 'true'}`);

    return newVal == 'true';
}
