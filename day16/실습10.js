// 1. 데이터 모델링
const students = [
    { studentId: 2024001, name: "김철수", major: "컴퓨터공학과" },
    { studentId: 2024002, name: "이영희", major: "인공지능학과" },
    { studentId: 2024003, name: "박지성", major: "데이터사이언스학과" }
];
const courses = [
    { courseId: "CS101", courseName: "웹 프로그래밍 기초", professorName: "이교수" },
    { courseId: "AI202", courseName: "머신러닝 입문", professorName: "최교수" },
    { courseId: "DS303", courseName: "데이터 시각화", professorName: "박교수" }
];
const enrollments = [
    { enrollmentId: 1, studentId: 2024001, courseId: "CS101", grade: "A+" },
    { enrollmentId: 2, studentId: 2024001, courseId: "AI202", grade: "B" },
    { enrollmentId: 3, studentId: 2024002, courseId: "AI202", grade: "A" },
    { enrollmentId: 4, studentId: 2024002, courseId: "DS303", grade: "F" },
    { enrollmentId: 5, studentId: 2024003, courseId: "CS101", grade: "C+" }
];

// [2. 로직]
// (큰그림 감! 로드맵(경험x) , 네비게이션 비유)

// (경험 필수!!)
// 1. 학생명 전체 출력


for(let index=0; index <= students.length-1; index++){
    const student = students[index];
    document.write(`<h1>${student.name}(${student.major})</h3>`);
// ==2. 내가 수강중인 과목명 출력 ==
    for(let j=0; j<=enrollments.length-1; j++ ){
        console.log(enrollments[j]);
        if(student.studentId == enrollments.studentId){
            //document.write(`<h4> --> ${enrollments.courseId}</h4>`)
            // ==3 과목코드 대시에 과목명이 필요..찾기(for)
            for(let k=0; k<=courses.length-1; k++){
                const course = courses[k];
                if(course.courseId == enrollments.courseId){
                    document.write(`<h4>-- ${course.courseName}${course.professorName})<h4>`);
                    document.write(`<h5> --- 성적 : ${enrollments.grade}</h5>`);
                    document.write(`<h5> --- 이수여부 : ${enrollments.grade == 'F' ? 'fail':'pass'}</h5>`);
                }
            }
        }
    }
}