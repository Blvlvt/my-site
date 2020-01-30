const inpX = document.querySelector('.x'),
    inpY = document.querySelector('.y'),
    ball = document.querySelector('.ball');
ball.addEventListener('click', function () {
    ball.style.transitionProperty = 'left,top,background-color';
    this.style.left = inpX.value +'px';
    this.style.top  = inpY.value + 'px';
});

let button = document.querySelector('.btn');
button.addEventListener('click', function (evt) {
    evt.preventDefault();
    let inpColor = document.querySelector('.color');
    console.log(inpColor.value);
    ball.style.backgroundImage = 'none';
    ball.style.backgroundColor = inpColor.value;
});

let btnGradient = document.querySelector('.btnGradient');

btnGradient.addEventListener('click', function(evt) {
    evt.preventDefault();

    let inputs = document.querySelectorAll('.colorGR');
    let colors = [];
    for( let i = 0; i < inputs.length; i++ ){
        colors.push( inputs[i].value );
    }
    console.log('colors → ' + JSON.stringify(colors) );

    let Gradient = 'linear-gradient(' + colors.join(', ') + ')';
    console.log(Gradient);
    ball.style.backgroundImage = Gradient;
});

let btnAddColorGR = document.querySelector('.addColorGR');
let template = document.querySelector('#template').content;
let newItemTemplate = template.querySelector('.input');
let i = 2;

btnAddColorGR.addEventListener('click', function(evt) {
    i += 1;
    evt.preventDefault();
    let form = document.querySelector('.form');
    let task = newItemTemplate.cloneNode(true);
    task.classList.add('colorGR');
    task.classList.add('color' + i);
    form.append(task);

});




function fun1() {
    let rng=document.getElementById('r1'); //rng - это Input
    let p=document.getElementById('one'); // p - абзац
    p.innerHTML=rng.value + 'px';

    ball.style.width = rng.value + 'px';
}

function fun2() {
    let rng=document.getElementById('r2'); //rng - это Input
    let p=document.getElementById('two'); // p - абзац
    p.innerHTML=rng.value + 'px';

    ball.style.height = rng.value + 'px';
}

function fun3() {
    let rng=document.getElementById('r3'); //rng - это Input
    let p=document.getElementById('tree'); // p - абзац
    p.innerHTML=rng.value + '%';

    ball.style.borderRadius = rng.value + '%';
}

let check = document.querySelector('.check');

check.addEventListener('change', function (  ) {


        ball.onmousedown = function(event) { // (1) отследить нажатие
            if (check.checked === true) {
            ball.style.transitionProperty = 'background-color';
            // (2) подготовить к перемещению:
            // разместить поверх остального содержимого и в абсолютных координатах
            ball.style.position = 'absolute';
            ball.style.zIndex = 1000;
            // переместим в body, чтобы мяч был точно не внутри position:relative
            document.body.append(ball);
            // и установим абсолютно спозиционированный мяч под курсор

            moveAt(event.pageX, event.pageY);

            // передвинуть мяч под координаты курсора
            // и сдвинуть на половину ширины/высоты для центрирования
            function moveAt(pageX, pageY) {
                ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
                ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
            }

            function onMouseMove(event) {
                moveAt(event.pageX, event.pageY);
            }

            // (3) перемещать по экрану
            document.addEventListener('mousemove', onMouseMove);

            // (4) положить мяч, удалить более ненужные обработчики событий
            ball.onmouseup = function() {
                document.removeEventListener('mousemove', onMouseMove);
                ball.onmouseup = null;
                ball.ondragstart = function() {
                    return false;
                };
            };
         };
    }


});






















