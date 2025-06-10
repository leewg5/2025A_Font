// p.519
// 1. 자동 형 변환
//(1) 문자열형의 숫자에 곱하기 1를 하면 문자열형의 숫자가 숫자형 숫자로 변환된다. "10" vs 10
let input = prompt("숫자를 입력하세요.")  // prompt 함수는 문자열 반환(결과)
    // let input = "5"
console.log(typeof input)    //string
let result = input * 10      // "5" * 10 , *(곱하기 연산자)
console.log(typeof result)   //number // 문자열->숫자형 변환

//(2) 문자열형 + 숫자형 일 경우 자동으로 문자열으로 변환된다. +(연결연산자)
let one = "20"
let two = 10 
console.log(one + two)  // "20" + 10 => 30이 아니고 "2010" 된다.

let time = prompt('사용시간 입력하세요.');  //8
console.log(time * 1000)  // 8*1000 => 8000 *가능.. , 8+1000 =>81000 +연결됨
//2. 자료형 변환 함수
//(1) Number("문자열")
console.log(Number("10"));  // 숫자 10으로 변환.
console.log(Number("10ABC")) // 문자 변환 불가능..

//(2) parseInt()
console.log(parseInt("123")) //123
console.log(parseInt("123.45")) //123 , 소수점 짤림
console.log(parseInt("123ABC")) //123 문자 짤림

//(3) ParseFloat : 실수 숫자 변환 함수
console.log('123.45') // 123.45

//(4) String()
console.log(String(123)) //123 문자

// 생각해보기 1 : 국어 점수 외 수학 점수를 Prompt로 입력받아 국어점수와 수학점수를 더한 결과출력
// 출력예시 : 총합계 :150
//(1) 입력받기
/*prompt("국어점수 입력하세요.") , prompt("수학점수 입력하세요.") */
//(2) 저장하기, 변수
let 국어점수 = prompt("국어점수 입력하세요.")
let 수학점수 = prompt("수학점수 입력하세요.")
//(3) 처리하기, 연산
let 합계점수 = 국어점수 + 수학점수 // 두 변수를 각 변수명을 작성하여 호출한다.
//(4) 출력하기 , console
console.log(`총합계 : ${합계점수}`)
//컴퓨터는 기본적인 프로세스 : (입력) -> (처리) -> (출력)
 

// 생각해보기 2 : 이름과 나이(숫자)를 Prompt로 입력받아 document.write 이용하여 <h3> 마크업 출력
//예시 : <h3>강호동(45)</h3>

let 이름 = prompt("이름을 입력해주세요.")
let 나이 = Number(prompt("나이를 입력해주세요.")) // () 소괄호 중첩일때 안쪽() 소괄호 우선 처리된다.
// (4+(1+2)) 안쪽 소괄호부터 계산
document.write(`<h3>${이름} (${나이})</h3>`)
