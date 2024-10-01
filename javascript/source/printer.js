let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split(' ');
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');  //백준 제출

let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = parseInt(input[2]);

console.log((a+b)%c);
console.log(((a%c)+(b%c))%c);
console.log((a*b)%c);
console.log(((a%c)*(b%c))%c);