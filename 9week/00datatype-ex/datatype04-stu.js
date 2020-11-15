// ./datatype-ex/datatype04.js
// entry 자바스크립트 객체를 JSON stringify() 함수 파라미터로 입력
// stingify() 결과로 JSON 문자열 생성

var entry = {
    profile: {
        name: "희정" ,
        job: "Singer"  
    }
};

// 여기에 작성
console.log('원본: ', entry); //원본


var jsonStr = JSON.stringify(entry);  //문자열로 바꿈
console.log('stringify: ', jsonStr); 