// p.523
// [연산자] : 연산할때 사용되는 기호
// 1. 산술연산자 : 하나의 연산결과를 (숫자)로 반환
// +더하기 -빼기 *곱하기 /나누기 %나머지
console.log(10+3)
console.log(10-3)
console.log(10*3)
console.log(10/3)
console.log(parseInt(10/3)); //몫
console.log(10%3)            //나머지

//2. 연결연산자
// +연결
console.log("점수 :" + 10)  //연결, 점수 : 10


let 국어 = prompt("국어 : " )
let 영어 = prompt("영어 : " )
let 수학 = prompt("수학 : " )
let 총점 = Nember(국어) + Nember(영어) + Nember(수학);
let 평균 = 총점 / 3;
console.log(`총점: ${총점}, 평균: ${평균}` );


let 반지름 = prompt("반지름:");
let 원넓이 = 반지름 * 반지름 * 3.14;
console.log(`원넓이: ${원넓이}`);


let 실수1 = Number(prompt("실수1:"));
let 실수2 = Number(prompt("실수2:"));
let 비율 = (실수1 / 실수2) * 100;
console.log(`비율:${비율}%`);  //컴퓨터는 %퍼센트를 모른다. /0.1 -> 10%/ 0.01 -> 1000% / 1->100% /

