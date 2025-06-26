/*
    [interval] : 간격 뜻.
        1. 정의 : 시간적인 간격에 따라 특정 함수 실행
        2. 사용법 : setInterval(함수명, 밀리초) - 밀리초 : 1/1000초...
            - 함수명 : 함수명만 작성한다. () 생략하여 실행하지 않는다.
        
        (2) clearInterval(interval객체);
        - 중지할 interval객체를 대입
*/



// [1] 예제1
let value=0; // 전역변수
function 증가함수(){
    //전역변수 1증가
    value = value + 1
    const box1 = document.querySelector('#box1')
    let html = value;
    box1.innerHTML = html;
}
// == * 간격 (1초) 에 따른 증가함수 재실행 *==
setInterval(증가함수, 1000); // 1000밀리초(1초) 간격으로 '증가함수'실행

// [2] 예제2
function 시계함수(){
    // 1. 현재시간을 구하기 : new Date() 객체
    let today = new Date();
    let hour = today.getHours();      // '시' 반환
    let minute = today.getMinutes();  // '분' 반환
    let second = today.getSeconds();  // '초' 반환
    // 2.
    const box2 = document.querySelector('#box2');
    let html = `${hour} : ${minute} : ${second}`;
    box2.innerHTML = html;

} // func end
// *** 1초 마다 시계함수 호출하기  1000=1초
setInterval(시계함수, 1000);

// [3] 예제3

let time = 0; // 현재 타이머의 초
let timerId; // 변수만 선언, 추후에 interval 객체 저장
// (1)
function 시간증가(){
    time++; //1증가
    document.querySelector('#box3').innerHTML=time; //출력
}

// (2)
function 타이머시작(){
    // 전역변수에 interval 객체 저장.
    // 전역변수 사용이유 : 서로 다른 함수에서 공통 변수를 사용이 가능하다.
    // 지역변수 : 함수 안에서만 사용한다.
    timerId = setInterval(시간증가, 1000); // (1000밀리초) 1초마다 시간증가 함수 실행

}

// (3)
function 타이머중지(){
    clearInterval(timerId);
}// func end

