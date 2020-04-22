function quit() {
alert('确定不进来看看吗？')
    
}
function show_prompt() {
    var  package = prompt("请选择您的服务\n如普通套餐、优质套餐、豪华套餐")
    switch (package) {
        case "普通套餐":
            document.getElementById('text').innerHTML = "<div align='center'><img src='images/01.jpg'></div>";
            break;
            case "优质套餐":
            document.getElementById('text').innerHTML = "<div align='center'><img src='images/02.jpg'></div>";
            break;
        case "豪华套餐":
            document.getElementById('text').innerHTML = "<div align='center'><img src='images/03.jpg'></div>";
            break;
    
        default:
            break;
    }
}