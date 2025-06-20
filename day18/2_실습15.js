/*
[ 실습15 - 인사 관리 대시보드 ] * 제출
1. 목표
    부서, 사원, 그리고 휴가 신청 정보를 하나의 웹 페이지에서 통합적으로 관리하는 대시보드를 제작합니다.
    사용자는 부서 등록/삭제/수정, 사원 등록/삭제/수정, 휴가 신청/취소 기능을 직관적으로 사용할 수 있어야 합니다.

2. 화면 구성
    페이지는 '부서 관리(왼쪽)', '사원 관리(가운데)', '휴가 관리(오른쪽)' 라는 3개의 명확한 컬럼으로 구성되어야 합니다.
    부서 관리 영역:
        부서 등록:  
            새로운 부서의 이름을 텍스트로 입력할 수 있는 입력창과 "추가" 버튼이 있어야 합니다.
        부서 목록:  
            등록된 모든 부서 정보를 보여주는 표(테이블)가 있어야 합니다.
            표는 "부서명"과 "관리" 열로 구성됩니다.
            각 부서 항목마다 해당 부서를 수정하고 삭제할 수 있는 버튼이 제공되어야 합니다.

    사원 관리 영역:
        사원 등록:
            사원의 이름과 직급을 입력하는 텍스트 필드가 있어야 합니다.
            등록된 부서 목록에서 소속될 부서를 선택할 수 있는 드롭다운 메뉴가 있어야 합니다.
            사원의 사진을 등록할 수 있는 파일 선택 버튼이 있어야 합니다.
        사원 목록:
            등록된 모든 사원 정보를 보여주는 표(테이블)가 있어야 합니다.
            표는 "사진", "이름", "부서", "직급", "관리" 순서의 열로 구성됩니다.
            각 사원 항목마다 해당 사원의 이름과 직급을 수정하고, 사
            원 정보를 삭제할 수 있는 버튼이 제공되어야 합니다.
    
    휴가 관리 영역:
        휴가 신청:
            등록된 사원 목록에서 휴가를 신청할 사원을 선택하는 드롭다운 메뉴가 있어야 합니다.
            휴가 시작일과 종료일을 선택할 수 있는 날짜 입력 필드가 있어야 합니다.
            휴가 사유를 텍스트로 간단히 기입할 수 있는 입력창이 있어야 합니다.
        휴가 신청 전체 목록:
            제출된 모든 휴가 신청 내역을 보여주는 목록이 있어야 합니다.
            각 항목에는 신청한 사원의 이름, 휴가 기간, 사유가 표시되어야 합니다.
            각 휴가 신청 항목마다 해당 신청을 취소할 수 있는 "신청취소" 버튼이 제공되어야 합니다.

3. 핵심 기능
    초기 데이터 표시:
        모든 데이터(부서, 사원, 휴가)는 웹 페이지가 실행되는 동안에만 유지되는 전역 배열을 통해 관리됩니다. 
        페이지를 새로고침하면 데이터는 초기 샘플 상태로 돌아갑니다.
        사용자가 처음 페이지에 접속했을 때, 시스템 사용법을 쉽게 파악할 수 있도록 
        부서, 사원, 휴가 신청에 대한 예시 데이터가 기본적으로 화면에 표시되어 있어야 합니다.

    부서 관리 기능:
        등록: "추가" 버튼 클릭 시, 입력된 부서가 부서 목록과 사원 등록의 부서 선택 메뉴에 즉시 반영되어야 합니다. 이미 존재하는 부서명은 등록되지 않아야 합니다.
        수정: "수정" 버튼 클릭 시, prompt 대화상자가 나타나 새로운 부서명을 입력받고, 입력 완료 시 목록에 즉시 반영되어야 합니다.
        삭제: "삭제" 버튼 클릭 시, 해당 부서가 목록에서 제거되어야 합니다. 단, 해당 부서에 소속된 사원이 한 명이라도 있을 경우, 삭제할 수 없다는 경고 메시지를 표시해야 합니다.

    사원 관리 기능:
        등록: 사원 정보를 입력하고 "등록" 버튼 클릭 시, 사원 목록과 휴가 신청의 사원 선택 메뉴에 즉시 추가되어야 합니다. 사진을 첨부하면 해당 사진이, 첨부하지 않으면 기본 이미지가 표시되어야 합니다.
        수정: "수정" 버튼 클릭 시, prompt 대화상자를 통해 새로운 이름과 직책을 입력받아 해당 사원의 정보를 수정하고 목록을 즉시 갱신해야 합니다.
        삭제: "삭제" 버튼 클릭 시, 해당 사원이 목록에서 제거되며, 관련된 모든 휴가 신청 기록도 함께 삭제되어야 합니다.

    휴가 관리 기능:
        신청: 휴가 정보를 입력하고 "신청" 버튼 클릭 시, 휴가 신청 목록에 즉시 추가되어야 합니다.
        취소: "신청취소" 버튼 클릭 시, 해당 휴가 신청 내역이 목록에서 제거되어야 합니다.
*/

//===============[1] 데이터 모델링 =======================//
//1. 부서 목록
const teamList = [{ tno:1, tname: '개발팀'}, { tno:2, tname: '디자인팀'}, {tno:3, tname: '기획팀'}];
let currentTno = 3; //*코드를 자동대입을 위한 현재코드번호, 샘플의 마지막 코드의 번호 초기화 //★
//2. 사원 목록
const workList = [{ wno: 1, wname: '유재석', working: '과장', tno: 1, wimg:'https://placehold.co/100x100'},
                { wno: 2, wname: '강호동', working: '대리', tno: 2, wimg:'https://placehold.co/100x100'},
                { wno: 3, wname: '신동엽', working: '사원', tno: 3, wimg:'https://placehold.co/100x100'},];
let currentWno = 3;
//3. 휴가 목록
const flashList =[{ fno: 1, wno: 1, fstart: '2025-06-20', fend:'2025-06-25', fmemo: '병원진료'}];
let currentFno = 1;

console.log(teamList);
console.log(workList);
console.log(flashList);
//========================[2] 데이터 모델링 샘플 ===================//
teamPint();
function teamPint(){
    console.log('>>teamPint exe');
    //1. 어디에?, <select id="teamInput">
    document.querySelector('#teamInput');
    //2. 무엇을, 배열내에 객체정보를..하나씩 
    let html = '<option value="" disabled selected> 부서명을 선택하세요. </option>';
    for(let index=0; index <= teamList.length-1; index++){
        const team = teamList[index]; //index번째에 팀목록 1개씩 객체 꺼내기
        html += `<option value="${team.wno}">${team.tname}</option>`  //사원목록에서 부서가져오기 //★
    
    }//for end
    //3. 출력
    teamInput.innerHTML = html;
}//func end
//2. 등록함수(추가 또는 등록, 신청 함수)
function teamAdd(){
    console.log('>>teamAdd');
    //(1) 입력 마크업 객체 가져오기
    const teamInput = document.querySelector('#teamInput'); console.log(teamInput);
    const wnameInput = document.querySelector('#wnameInput'); console.log(teamInput);
    const workingInput = document.querySelector('#workingInput'); console.log(teamInput);
    const wimgInput = document.querySelector('#wimgInput'); console.log(teamInput);
    const tpartInput = document.querySelector('#tpartInput'); console.log(teamInput);
    const workInput = document.querySelector('#teamInput'); console.log(teamInput);
    const flashInput = document.querySelector('#teamInput'); console.log(teamInput);
    //(2) 입력 마크업 객체에서 입력값 가져오기
    const tno = teamInput.value;   console.log(tno);
    const tname = tnameInput.value;   console.log(tname);
    const wimg = teamInput.files[0];  console.log(wimg);
    
    // * 현재 날짜 구하기 == new Date()
    let year = new Date().getFullYear(); // 현재 연도 반환 함수.
    let month = new Date().getMonth() + 1; // 현재 월 반환 함수 * 1월달이 0부터 시작이므로 +1을 해준다.
    month = month > 9 ? month : `0${month}`; //만약에 월이 한자리수 이면 앞에 '0'을 붙인다.
    let day = new Date().getDate();     // 현재 일 반환 함수
    day = day < 9 ? `0${day}` : day;  // 만약에 일이 한자리수 이면 앞에 '0'을 붙인다.
    let pdate = `${year}-${month}-${day}`; //`백틱 주의
    console.log(pdate);

    //(3) 유효성검사(아직 제대로 안함.....)
    //* 입력한 값이 없으면 등록 실패
    if (tno == '' || tname == ''){
        alert('비어있는 항목이 있습니다.[실패]');
        return; // 반환값 없는 함수종료 : 아래코드는 실행되지 않는다.
    }

    //(4) 여러 데이터 객체로 구성하기.
    const obj = {
        tno: ++currentTno,  // 부서코드는 1 증가 후 저장
        wno: Number(wno),
        tname: tname, 
        working: working,
        wimg: wimg ? URL.createObjectURL(pimg) : 'https://placehold.co/100x100', 
        pdate: pdate //'2025-06-20 현재날짜      
        
        
    }; console.log(obj);
    //(5) 구성한 객체를 배열에 저장
    workList.push(obj);
    //(6) 기타등등
    teamInput.value = '';
    wnameInput.value = ''; 
    workingInput.value = ''; 
    wimgInput.value = ''; 
    tpartInput.value = '';
    workInput.value = ''; 
    flashInput.value = ''; 
    alert('[성공] 부서 등록');

    workingPrint();

}// func end

//3. 제품목록 
workingPrint();
function workingPrint() {
    console.log('>>workingPrint exe');
    //(1) 어디에  , <tbody>
    const tbody = document.querySelector('#main > table > tbody');
    //(2) 무엇을
    let html = '';
    for (let index = 0; index <= workList.length - 1; index++) {
        const work = workList[index];
        html += `<tr>
                    <td> <img src="${work.wimg}" /> </td>
                    <th> ${getteam(work.tno).tname} </td>   
                    <td> ${work.tname}</td>
                    <td> ${work.working}</td>
                    <td> ${work.pdate} </td>
                    <td> <button onclick="productDelete(${product.pno})" class="btnDelete()"> 삭제 </button> 
                    <button onclick="productEdit(${product.pno})" class="btnEdit()"> 수정 </button> </td>
                </tr>`; //백틱 주의, 샘플 작성한 HTML의 <tr> 복사붙여넣기

//<td> <button class="btnDelete"> 삭제 </button> 
//<button class="btnEdit"> 수정 </button> </td>

    }//for end
    //(3) 출력
    tbody.innerHTML = html;

}//func end // 부서 목록, 사원 목록, 휴가신청 전체목록 출력함수 끝
//4. 관리 삭제함수: 배열내 삭제할 객체를 찾아서 .splice 한다. <매개변수 : 관리코드>, 
// 실행조건 : [삭제버튼] onclic 했을때
function workDelete(tno){console.log('>>productDelete exe');  console.log(tno);
    //(1) 삭제할 번호의 객체를 찾는다. for
    for(let index=0; index <= workList.length-1; index++){
        if(workList[index].tno == tno){
        workList.splice(index, 1) //해당 index 해서 요소1개 삭제
        alert('[성공] 등록 삭제'); //안내
        break; // 목표 이뤘으니 반복문 종료한다.
        }
    }//for end
    // (2) 삭제 이후에 제품목록 새로고침/렌더링
    workingPrint();
} //func end // 삭제함수 끝


//5. 관리 수정함수: 새로운 정보를 받아 배열내 수정할 객체를 찾아서 대입한다. <매개변수 : 관리코드>
function workingEdit( tno ){console.log('>>workingEdit exe'); 
    for(let index=0; index <= workList.length-1; index++){
        if(workList[index].tno == tno){
            const tname = prompt('수정할 부서(부서명) :');
            const wname = prompt('수정할 이름(성명) :');
            productList[index].tname = tname; //입력받은 값으로 수정1
            productList[index].wname = wname; //입력받은 값으로 수정2
            alert('[성공] 등록 수정'); // 확인알람
            workingPrint(); // 제품목록 새로고침
            return; //목표를 이뤘으니 함수 강제 종료한다.
        } //if end
    } //for end
    //(2)
    alert('[실패] 등록 수정');
} //func end // 수정함수 끝



//6. 카테고리번호(tno)에 해당하는 카테고리객체 1개 반환 함수
function getteam( tno ){
    console.log('>>getteam exe'); console.log(tno);
    //1. 매개변수(cno)와 동일한 카테고리객체 찾기
    for(let index=0; index <= workList.length-1; index++){
        if(workList[index].tno == tno){   // 만일 index번째 cno
            return workList[index]; //찾은 객체를 반환한다.
        }// if end
    }//for end
    //2. 못찾았다.
    return null;   //
} //func end