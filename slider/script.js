'use strict';

let offset =  0;   //переменная хранения смещения слайдера/ смещение от левого края

const sliderLine = document.querySelector(".slider-line"); //забросили селектор в переменную

document.querySelector(".slider-next").addEventListener("click", function () {   //через документ
    // добрались до селектора и привязвл к нему слушатель - в параметре прописали тип клик и функцию, которую можно
                                                                                 // писать разными способами
    offset = offset + 256; //offset+=256; // при нажатии увеличиваю значение offset на ширину картинки

    //а чтобы offset смещался влево делаем его отрицательным
    if (offset > 768){   // смещение три раза по + 256
        offset = 0       //сброс на 0 при достижении условия
    }
    sliderLine.style.left = -offset + "px";    //в стилях .slider-line надо прописать position: relative;


})
document.querySelector(".slider-prev").addEventListener("click", function () {   //через документ
                                                                                 // добрались до селектора и привязвл к нему слушатель - в параметре прописали тип клик и функцию, которую можно
    // писать разными способами
    offset = offset - 256; //offset-=256; // при нажатии уменьшаю значение offset на ширину картинки

    //а чтобы offset смещался влево делаем его отрицательным
    if (offset < 0){
        offset = 768       //сброс на 768 при достижении условия
    }
    sliderLine.style.left = -offset + "px";    //в стилях .slider-line надо прописать position: relative;


})
