// ./module/mnotuse.js
// 노드 객체
var M = {
    v: 'v',
    f: function() {
        console.log(this.v);
    }
}

// 객체 실행
M.f();