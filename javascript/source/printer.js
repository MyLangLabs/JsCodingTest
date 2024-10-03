let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split('\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\r\n');  //백준 제출

let x = parseInt(input[0]);
let y = parseInt(input[1]);

if(x>0){
  if(y>0){
    console.log(1);
  }else if(y<0){
    console.log(4);
  }
}else{
  if(y>0){
    console.log(2);
  }else if(y<0){
    console.log(3);
  }
}