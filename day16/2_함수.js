/*
예제 1: 기본 함수 선언 및 호출
'함수 호출 성공!'이라는 메시지를 콘솔에 출력하는 sayHello라는 이름의 함수를 정의하고, 그 함수를 호출하시오.

// 함수 선언시 고려할 사항 : 1.매개변수 2.반환값 3.처리할 명령어
// (1)매개변수     : x
// (2)반환값       : x
// (3)처리할명령어  : console.log();
function sayHello(){
    console.log('함수 호출 성공!')
}
sayHello();
*/

/*
예제 2: 매개변수를 사용하는 함수
임의의 두 개의 숫자(number)를 매개변수로 받아, 그 합을 콘솔에 출력하는 printSum 함수를 정의하시오. printSum(5, 10)을 호출하여 결과를 확인하시오.
*/
/*
function printSum(x, y){  
    console.log(x+y)
}
printSum(5, 10); //정의한 함수 호출시 매개변수의 인수전달 
*/
/*
예제 3: 값을 반환(return)하는 함수
임의의 이름을 문자열(string)로 매개변수를 받아 "환영합니다, [이름]님!" 형식의 문자열을 반환하는 getWelcomeMessage 함수를 정의하시오.
함수를 호출한 결과를 변수에 저장하고, 그 변수를 콘솔에 출력하시오.
*/
/*
function getWelcomeMessage(이름){    //함수 정의
    return `환영합니다, ${이름}님!` 
}
let 이름님 = getWelcomeMessage('옥수수');  // 함수 호출
console.log(이름님)
*/

/*
예제 4: 함수를 이용한 카운터
0의 값을 가진 counter라는 전역 변수를 만드시오.
호출될 때마다 counter의 값을 1씩 증가시키는 increaseCount 함수를 정의하시오.
함수를 세 번 호출한 뒤, counter의 값을 콘솔에 출력하여 3이 되었는지 확인하시오.
*/

/*
let counter = 0; // 전역변수는 특정한{ }(지역)에서 선언되지 않은 변수
function increaseCount(){
    counter++;  // counter = conter +1  ==  counter += 1
}
increaseCount(); //함수 호출
increaseCount(); //함수 호출
increaseCount(); //함수 호출
console.log(counter); // 전역변수 확인 = 3
*/

/*
예제 5: for 반복문을 포함한 함수
임의의 숫자 n을 매개변수로 받아, 
1부터 n까지의 숫자를 콘솔에 차례대로 출력하는 printNumbers 함수를 정의하시오.
*/

/*
function printNumbers(n){
    for(let i=0; i<=n; i++){
        console.log(i);
    }
} // func end
printNumbers(10);
*/


/*
예제 6: prompt와 함수 활용
prompt를 이용해 사용자로부터 이름을 입력받으시오.
입력받은 이름을 매개변수로 받아, 해당 이름이 
저장된 userList 전역 배열에 push하는 addUser 함수를 정의하고 호출하시오.
*/
/*
let userList = [];
let name = prompt('이름:') // 전역변수에 빈 배열 선언
function addUser(name){  // 함수 정의
    userList.push(name);  // 매개변수를 배열에 저장
}
//함수 호출
let 이름 = prompt('이름:')  //사용자로부터 이름 입력받아
addUser(이름);    //입력받은 이름을 addUser함수의 매개변수로 전달
console.log(userList);  //확인
*/



/*
예제 7: 배열을 매개변수로 전달
임의의 이름 들이 담긴 배열을 매개변수로 받아, for 반복문을 사용하여 배열의 모든 요소를 콘솔에 하나씩 출력하는 printFruits 함수를 정의하시오.
*/

// 매개변수 : 함수{} 안으로 들어오는 자료를 저장하는 변수            , array
// 리턴값 : 함수{}가 종료되면서 *함수호출* 했던 곳으로 변환하는 자료  , [x]
// 처리할명령어 : 함수{}가 실행되면서 실행할 코드들                 , for 반복문 사용 배열의 모든요소 콘솔로

/*
function printFruits(array){ // 함수정의
    for(let index=0; index <= array.length-1; index++){
        console.log(array[index]);
    }
}
let names = ['유재석','강호동', '신동엽' ]
printFruits(names); // 확인차 정의한 함수 호출
*/

/*
예제 8: Boolean 값 반환하기
임의의 숫자 하나를 매개변수로 받아, 그 숫자가 0보다 크면 true를, 
그렇지 않으면 false를 반환하는 isPositive 함수를 만들어 보세요.
*/

// 1.매개변수 : num
// 2.리턴값 : true 또는 False
// 3.처리할 명령어 : num매개변수가 0보다 큰지 작은지 비교

/*
function isPositive(num){
    if(num>0){return true;}
    else{return false;}
}
isPositive(3) //[확인차 정의한 함수 호출 / 반환값 변수에 저장x ], 함수를 실행하고 반환 리턴값
let result = isPositive(-1) // [확인차 정의한 함수 호출], 함수를 실행하고 반환(return)값 변수에 저장
isPositive(result); 
*/


/*
예제 9: 전역 변수와 지역 변수
let globalText = '전역'; 변수를 선언하세요. printLocal 함수 안에서는 
let localText = '지역'; 변수를 선언하고, 
두 변수를 모두 콘솔에 출력해 보세요. 함수 바깥에서는 globalText만 출력되는 것을 확인하세요.
*/
/*
// 1. 매개변수 : x
// 2. 반환값 : x
// 3. 처리할명령어 : localText 변수를 선언하고, localText, globalText를 콘솔 출력

let globalText = '전역';
function printLocal(){ //함수 선언
    let localText = '지역';
}
console.log(globalText);
console.log(localText);
printLocal(); // 함수 호출
*/