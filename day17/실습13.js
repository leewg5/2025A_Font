/*
[ 실습13 : 미니 전화번호부 페이지 ] *제출
1. 목표
   - 사용자가 이름, 전화번호, 그리고 간단한 메모를 함께 저장하여 
   자신만의 상세한 연락처 목록을 만들고
   , 등록된 모든 연락처를 한눈에 볼 수 있는 전화번호부 웹 페이지를 만듭니다.

2. 화면 구성
   - 페이지는 사용자가 정보를 입력하는 **'연락처 등록 영역'**과 
   그 결과를 보여주는 **'연락처 목록 영역'**으로 명확히 구분되어야 합니다.

   - 연락처 등록 영역:
      - 이름 입력: 저장할 사람의 이름을 텍스트로 자유롭게 입력할 수 있어야 합니다. 
      (예: "홍길동")
      - 전화번호 입력: 연락처의 전화번호를 숫자로 입력할 수 있어야 합니다 
      (예:010-1234-5678)
      - 메모 입력: 해당 연락처에 대한 추가 정보(소속, 관계 등)를 
      텍스트로 입력할 수 있는 칸이 있어야 합니다. (예: "OO회사 부장")
      - 등록 버튼: 이름과 전화번호를 입력한 후, 목록에 추가하기 위한 "등록" 버튼이 있어야 합니다.

   - 연락처 목록 영역:
      - 등록된 모든 연락처 정보를 보여주는 표가 있어야 합니다.
       - 표는 "이름", "전화번호", "메모" 순서의 열로 구성되어야 합니다.
3. 핵심 기능
  - 초기 데이터 표시:
      - 사용자가 페이지에 처음 방문했을 때, 
      전화번호부 사용법을 쉽게 이해할 수 있도록 
      두 개의 예시 연락처가 목록 표에 기본적으로 표시되어 있어야 합니다.
    - 연락처 등록 기능:
      - 사용자가 '등록 영역'에 이름과 전화번호를 모두 입력하고 
      "등록" 버튼을 클릭하면, 해당 연락처가 '목록 영역' 표의 가장 아래쪽에 
      새로운 행으로 즉시 추가되어야 합니다.

*/
/*
    [ 작업 순서 ]
    1. 화면구성(HTML/CSS)
    2. 데이터 모델링 = 데이터 베이스
        (1) 저장할 자료들을 모두 찾기.
            - 이름, 전화번호, 메모 ----저장---> 연락처목록
       
            (2) 저장할 자료들의 분리(중복배제) 1:N (하나가 여러개를 참조/관계)
            (3) 분리된 자료들끼리 연관관계 x
            *테이블(배열), 테이블내 행/가로 단위(객체)

    3. 함수 기능 설계
    (1) '등록버튼' 클릭했을때 입력받은 (이름, 전화번호, 메모) 3가지 정보를 배열에 저장
    (2) '전체조회함수' , 페이지 열렸을때 최초1번 , 등록 성공했을때 (새로고침)

*/

const 전화번호부목록 = [{코드:1, 이름: '홍길동', 전화번호: '010-1234-5678', 메모: 'H회사과장'},
                    {코드:2, 이름: '서영은', 전화번호: '010-2222-3333', 메모:'K회사부장'}]
let 마지막인덱스 = 전화번호부목록.length-1
let 코드자동번호 = 전화번호부목록[마지막인덱스].코드

function 전화등록함수(){ console.log('--------전화등록 exe---------');
    const nameInput = document.querySelector('#nameInput');
    const numberInput = document.querySelector('#numberInput');
    const memoInput = document.querySelector('#memoInput');

const name = nameInput.value;  console.log(name);
const number = numberInput.value;  console.log(number);
const memo = memoInput.value;  console.log(memo);

코드자동번호++;
const obj = {코드 : 코드자동번호, 이름: name, 전화번호: number, 메모: memo }; console.log(obj);
전화번호부목록.push(obj); console.log(전화번호부목록);
전체조회함수();
}
전체조회함수();
function 전체조회함수(){

const numberBody = document.querySelector('#numberBody'); console.log(numberBody);

    let html = '';
    for(let index=0; index <= 전화번호부목록.length-1; index++){
        const obj = 전화번호부목록[index];
        html += `<tr>
                    <td>${obj.이름}</td>
                    <td>${obj.전화번호}</td>
                    <td>${obj.메모}</td>
                </tr>`
    }//for end
    console.log('--------전체조회함수 exe------------')
    numberBody.innerHTML = html;
}// func end
