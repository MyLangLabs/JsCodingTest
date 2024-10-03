let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');  //백준 제출

let currentTime = input[0].split(" ");
let hour = parseInt(currentTime[0]);
let min = parseInt(currentTime[1]);
let cookTime = parseInt(input[1]);

console.log(hour, min, cookTime);