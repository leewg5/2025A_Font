// JS는 프로그래밍 언어이다.
// 10이라는 리터럴 값 이면서 숫자 자료형이다.
// 3.14이라는 리터럴 값 이면서 숫자 자료형이다.
//"안녕하세요" // 리터럴 값이면서 문자열 자료형이다.
//True // true이라는 리터럴 값 이면서 불리인 자료형이다.
//[10, 3.14, "안녕하세요", true ] // []안에 여러개 리터럴 값을 포함하는 배열 자료형이다.

// --- 출력해~ 명령어 ---
//[출력함수] :
// 1. console.log(출력할 자료) : 개발자도구(F12)에서 console[탭]에 출력된다.
console.log(10)
console.log("안녕하세요")

//2. alert(출력할 자료) : 브라우저크롬 알림 창으로 출력된다.

alert(3.14)
alert(true)

// 3.document.write(HTML) : document(HTML파일).write(쓰다) : html문서에 출력한다.

document.write("<H3>안녕하세요.<H3>")
// 4. document.querySelector().innerHTML = HTML  // 특정한 선택자의 출력한다.

document.querySelector("h3").innerHTML = "<H3> 특정한 선택자 HTML 작성합니다.</h3>"
