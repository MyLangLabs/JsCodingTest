let path = require('path');
let inputPath = path.join(__dirname, '/dev/stdin'); // __dirname은 현재 스크립트의 디렉토리 절대경로
let input = require('fs').readFileSync(inputPath).toString().trim().split(' ');
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');  //백준 제출

let first = parseInt(input[0]);
let second = parseInt(input[1]);
let third = parseInt(input[2]);

let price=0;

if((first === second && (second===third))){
  price = 10000 + first*1000;
}else if((first === second)||(second === third)||(first===third)){
  if((first===second)||(first===third)){
    price = 1000 + first*100;
  }else{
    price = 1000 + second*100;
  }
}else{
  if ((first>=second)&&(first>=third)){
    price = first*100;
  }else if((second>=first)&&(second>=third)){
    price = second*100;
  }else{
    price = third*100;
  }
}

console.log(price);