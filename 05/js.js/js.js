var items = document.getElementsByClassName('item');
var index = 0;
var clearActive = function () {
    for (var i = 0; i < items.length; i++) {
        items[i].className = 'item';
    }
}

var goIndex = function () {
    clearActive();
    items[index].className = 'item active'
}
var goNext = function () {
    if (index < 2) {
        index ++;
    }else
    index = 0;
    goIndex();
}
var goPre = function () {
    if(index == 0){
        index = 2 ;
    }else{
        index --;
    }
    goIndex();
}

var goPreBtn = document.getElementById('goPre');
var goNextBtn = document.getElementById('goNext');
goNextBtn.addEventListener('click',function(){
     goNext();
 });
 goPreBtn.addEventListener('click',function(){
    goPre();
});