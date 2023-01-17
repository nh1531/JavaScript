// DOM 요소 생성 함수
/*
function domAdd(){
    console.log('domAdd');
}
*/

// const 상수 정의, const : 변수의 내용이 바뀌지 않음 , let은 바뀌는 것
const domAdd = () => {
    console.log('domAdd');
    const btn1 = document.createElement("button");
    btn1.innerHTML = "버튼1";
    btn1.id = "bt1";
    btn1.className = "btc";

    document.getElementById("content").append(btn1);

    const btn2 = document.createElement("button");
    btn2.innerHTML = "버튼2";
    btn2.id = "bt2";
    btn2.className = "btc";

    document.getElementById("content").append(btn2);

    const btn3 = document.createElement("button");
    btn3.innerHTML = "버튼3";
    btn3.id = "bt3";
    btn3.className = "btc";

    document.getElementById("content").append(btn3);

    
} 

// DOM 요소 접근
// function domRead() 37줄과 같은 방법
const domRead = () => {
    //querySelectorAll 1개여도 all을 쓰면 array로 들어감
    const btc = document.querySelectorAll(".btc");
    console.log(btc);

    // for 순회
    console.log("** for **");
    // 변수 선언 const 바뀌지x , let 바뀜
    for(let i = 0 ; i < btc.length ; i++){
        console.log(btc[i]);
    }

    // for ... in 순회
    console.log("** for in **");
    for (let k in btc){
        console.log(btc[k]);
    }

    // forEach 순회 (콜백함수)
    // 한줄 쓸 땐 {} 생략가능
    // index k. 몇번째인지 확인할 수 있음
    console.log("** foreach **");
    btc.forEach((item, k) => console.log(item, k))

    // for ... of 
    // break 가능
    // in 보다 of 많이 씀
    console.log("** for of **");
    for (let [k,item] of btc.entries()){
        console.log(k, item.innerHTML);
        if( k == 1 ) break;
    }


}

// 자바스크립트 랜더링 제어
// 콜백함수 function () {} 
// 이름이 없는 함수는 => 로 쓸 수 있음 (대체가능)
// innerHTML -> property에 해당
document.addEventListener("DOMContentLoaded", () => {
    //document.getElementById("idh1").innerHTML = "<a href='http://www.google.com'>K-Digital</a>";

    // DOM 요소 생성
    domAdd();

    // DOM 요소 접근
    domRead();

}); 

