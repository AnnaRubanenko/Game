//Получить случайное число от 0 до size-1
var getRandomNumber = function(size){
    return Math.floor(Math.random() * size);
};

//Вычисляем расстояние от клика до клада
var getDistance = function(event, target){
    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};
//Сообщаем игроку, насколько он близок к цели
var getDistanceHint = function(distance){
    if(distance < 10){
        return "Обожжешься!";
    } else if (distance < 20){
    return "Очень горячо!";
    } else if (distance < 40){
        return "Горячо!" + clicks;
    } else if (distance < 80){
        return "Тепло";
    } else if (distance < 160){
        return "Холодно";
    } else if (distance < 320){
        return "Очень холодно";
    } else {
        return "Замерзнешь!";
    }
};

//Задаем переменные
var width = 800;
var height = 800;
var clicks = 0;

//Случайная позиция клада
var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

//Обработчик кликов
$("#map").click(function(event){
    clicks++;
    var distance = getDistance(event, target);
    var distanceHint = getDistanceHint(distance);
    $("#distance").text(distanceHint);
    if (distance < 8){
    alert("Клад найден!Сделано кликов: " + clicks);

}
//    if (clicks > 5){
//        alert ("GAME OVER!")
//    }

});




