let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\r\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');  //백준 제출

let score = parseInt(input[0]);

if(score >= 90){
  console.log("A");
}else if(score>=80){
  console.log("B");
}else if(score>=70){
  console.log("C");
}else if(score>=60){
  console.log("D");
}else{
  console.log("F");
}