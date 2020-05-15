function GetTime() {
    var EndTime = new Date('2020/5/20 12:00:00');
    var NowTime = new Date();
    var t = EndTime.getTime() - NowTime.getTime();
    var d = 0;
    var h = 0;
    var m = 0;
    var s = 0;
    if(t>0){
        d = Math.floor(t/1000/60/60/24);
        h = Math.floor(t/1000/60/60%24);
        m = Math.floor(t/1000/60%60);
        s = Math.floor(t/1000%60);
    }
    document.getElementById('day').innerHTML = d;
    document.getElementById('hour').innerHTML = h;
    document.getElementById('min').innerHTML = m;
    document.getElementById('sec').innerHTML = s;
}
setInterval(GetTime,0);
 
function Draw(){
    var nember = document.getElementsByTagName('input');
    var luck = Math.floor(Math.random()*10000000+1);
    nember[0].placeholder = "您的号码是" +  luck;
}
