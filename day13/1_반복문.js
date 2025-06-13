// [1] i(iterator) : 반복변수(반복문의 반복횟수 체크하는 변수 목적)
for (let i = 1 ; i <= 3 ; i++){
    console.log(i);
}// for end

/* 순서도(알고리즘)
1. let i = 1
2. i <= 3
3. console.log(i); <--- i = 1
4. i++ -----> i = 2
5. ...
*/

// [2] for 중첩 : for{}안에 for{} 포함
for(let i = 1 ; i<=2 ; 1++){ //한달간 반복 해석 서술
    console.log(i);
    for(let h = 1 ; h <= 3 ; h++){
        console.log(h);
    }
}//for end
//생각해보기 : 출력 되는 순서
// i = 1 --> true --> console.log -> h=1 -> true -> console.log
//                                   h=2 --> true --> console.log
// ... 반복..종료..

//[3] 구구단 
// 1. 단
// 2. 곱


//[4] 별모양 출력
let output = "";
for(let line = 1 ; line <= 5 ; line++){
    for(let star = 1 ; star <= line ; star++){
        output += "*";  
    } // 행 for end
    output += "\n";   // "\n" : 이스케이프문자 , 줄바꿈처리
} // 열 for end
console.log(output);


// [반복문 제어 키워드]
// (1) continue; : 가장 가까운 for{}문의 증감식으로 (코드흐름)이동, continue 만나면 증감식으로 이동하므로 아래코드 실행불가
        // 1부터 5까지 출력 , 단 3이면 출력하지 않는다.
for(let i = 1 ; i <= 5 ; i++){
    if(i==3){continue;} // i가 3일때 continue;
    console.log(i) // 1 2 3 4 5
}


// (2) break;  : 가장 가까운 for{}문의 종료/탈출/끝내기
    // 1부터 10까지 누적합계 , 단 누적합계가 10 초과이면 종료한다.
let sum = 0;
for(let i = 1 ; i <= 10 ; i++){
    sum += i;   // sum = sum + i
    if(sum > 10){break;} // 코드 흐름이 break 만나면 for{} 종료한다.
}
console.log(sum);

// (3) 무한루프 :  for( ; ; ){}
// for( ; ; ){console.log}

let numList = []; //(1) 입력받은 6개 수를 저장하는 빈 배열 선언 ,  <고객이 선택한 로또 번호
for( ; ; ){ //(2)무한루프 이용하여 반복적으로 (무한) 입력받기
let num = Number(prompt("로또 번호 입력:" ));  // 입력받은 값을 변수에 저장
    //(조건1) : 만약에 입력받은 값이 1~45사이가 아니면
    if(num < 1 || num > 45){ // 1보다 작으면서 45보다 초과}
        console.log('[경고] 1~45 사이만 입력해주세요.')
        continue;
    }
    // (조건2) : 만약에 입력받은 값이 이미 입력한(배열내존재) 값이면
    if(numList.indexOf(num) != -1 ){ // 변수명.indexOf(찾을값); : 만일 찾을값이 -1이 아니면
        console.log('[경고] 이미 선택한 수 입니다.')
        continue;
    }
    //배열 저장
    numList.push(num); // 변수명.push(새로운값)
    // (조건3) : 만약에 배열의 저장된 자료가 6개 이면 무한반복(입력) 종료
    if(numList.length == 6 ){ // 변수명.length : 현재 배열의 전체 자료수 == 총길이
    break; //코드 흐름을 가장 가까운 for{} 끝낸다.
    }
} //for end
console.log(numList);  //배열 출력
