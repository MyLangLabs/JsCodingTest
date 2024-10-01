let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');  //백준 제출

let a = parseInt(input[0]);
let b = parseInt(input[1]);

let result3 = a * (b%10);
let result4 = a * ((b-b%10)%100);
let result5 = a * (b-((b-b%10)%100)-b%10);

console.log(result3);
console.log(result4/10);
console.log(result5/100);
console.log(result3+result4+result5);