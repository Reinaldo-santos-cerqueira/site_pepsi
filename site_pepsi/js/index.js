function imgSlider(anything){
    document.querySelector('.pepsi').src = anything;
}
function changeColor(BgColor,TxtColor){
    const sec = document.querySelector('.sec');
    const textBoxP = sec.querySelector('.content .textBox p');
    const textBoxH2 = sec.querySelector('.content .textBox h2');
    const textBoxA = sec.querySelector('.content .textBox a');

    const headerLiA= sec.querySelectorAll('header li a');
    sec.style.backgroundColor = BgColor;
    textBoxP.style.color = TxtColor;
    textBoxH2.style.color = TxtColor;
    textBoxA.style.color=BgColor;
    textBoxA.style.backgroundColor=TxtColor;
    for(let i=0; i< headerLiA.length; i++){
        headerLiA[i].style.color = TxtColor;
    }

}