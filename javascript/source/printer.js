let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split(' ');
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');  //백준 제출

let hour = parseInt(input[0]);
let min = parseInt(input[1]);

if(min<45){
  hour--;
  min += 15;
}else{
  min -= 45;
}

console.log(hour + " " + min);