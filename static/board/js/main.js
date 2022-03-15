
let picture = ["../../static/board/img/bg1.png", "../../static/board/img/bg2.png"]
let p_idx = 0;

showPicture();

function showPicture() {
    document.querySelector("#pic").src = picture[p_idx];
    p_idx++;
    if(p_idx === picture.length)
        p_idx = 0;
    setTimeout(showPicture, 1000);
}

//디지털 시계
setInterval(myWatch, 1000);

function myWatch(){
    let date = new Date();
    let now = date.toLocaleTimeString();
    document.getElementById('demo').innerHTML = now;
}