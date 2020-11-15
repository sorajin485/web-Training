// ./datatype-ex/datatype04.js
// str 변수에 문자열로 JSON 이 기록
// JSON의 parse() 함수로 분석
// 분석 결과는 JSON 구조에 따라서 얻어온다

var entry = {
    profile: {
        "name": "희정" ,
        "job": "Singer"  
    }
};

// 여기에 작성
var entry_str = JSON.stringify(entry);
var parsed = JSON.parse(entry_str);
var profile=parsed.profile;


console.log('name', profile.name);
console.log('job', profile.job);
console.log('age', profile.age);