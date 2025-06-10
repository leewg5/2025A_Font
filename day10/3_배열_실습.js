/* [실습3] 키오스크 설계
- 문제1: 아래와 같은 주문 시나리오에 따라 들어오는 데이터를 표현하시오.
- 시나리오
    1. 고객1(유재석)이 키오스크에서 '커피' 카테고리를 선택하여 아이스아메리카노 2개 주문 요청
*/


let name = ["고객1번", "고객2번"]
let cafe = ["커피", "스무디"]
let delay_number = ['대기1번','대기2번','대기3번','대기4번']
let coffee_category = ["아이스아메리카노","카페라떼","사과스무디"]
let caount = ["1잔","2잔","3잔","4잔"]

console.log(`${name[0]}님, ${coffee_category[0]}, ${caount[1]}, ${delay_number[0]}`)
console.log(`${name[1]}님, ${coffee_category[1]}, ${caount[0]}`)
console.log(`${name[1]}님, ${coffee_category[2]}, ${caount[1]}, ${delay_number[1]}`)
