const showDice = () => {
    // 랜덤수 생성
    const n = Math.floor(Math.random() * 6 ) + 1 ; // 소수점 제거 Math.floor
    const s1 = document.querySelector("#s1");

    s1.innerHTML = `<img src="./images/${n}.png" / >`
    console.log(n);
}