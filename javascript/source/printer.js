let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\r\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');  //백준 제출

year = parseInt(input[0]);

if((year%4 === 0 && year%100 !== 0) || year%400===0){
  console.log(1);
}else{
  console.log(0);
}