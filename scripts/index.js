const container = document.querySelector('#container');

const snows = document.querySelectorAll('.snows');
const s1 = snows[0];
const s2 = snows[1];
const s3 = snows[2];

const btn = document.querySelector('.btn');
// при нажатии на кнопку обновили счетчик и его вывод на экран и запустили игру
    btn.addEventListener('click',()=>{
        snows.forEach(snow=>{
            snow.style.display = "";
        });
        count = 0;clicks.innerHTML = count ;
        setInterval(moveSnow, 600,snows,container);
        });

// счетчик кликов и вывод инфо на экран
var count = 0;
const clicks = document.querySelector('.clicks');
clicks.id = document.querySelector('clicks');

   Winner(s1,s2,s3);



function Winner(el1,el2,el3){ 
    el1.addEventListener('click',()=>{
        el1.style.display='none';
        count+= 1;
        clicks.innerHTML = count;
        if(count == 3){
            alert("Вы победили!!!");}
    });
    el2.addEventListener('click',()=>{
        el2.style.display='none';
        count+= 1;
        clicks.innerHTML = count;
        if(count == 3){
            alert("Вы победили!!!");}
    });
    el3.addEventListener('click',()=>{
        el3.style.display='none';
        count+= 1;
        clicks.innerHTML = count;
        if(count == 3){
            alert("Вы победили!!!");}
    });

}

function moveSnow(elements,parent){
    elements.forEach(el=>{
        const parentWidth = executePixels(getStyle( parent,'width'));
        const parentHeight =  executePixels(getStyle( parent,'height'));
        const blockWidth = executePixels(getStyle(el,'width'));
        const blockHeight =  executePixels(getStyle(el,'height'));
        el.style.left = getRandInt(0, parentWidth - blockWidth -6)+ 'px';
        el.style.top = getRandInt(0, parentHeight - blockHeight - 6)+ 'px';
        });
}

function getRandInt(left,right){
    return Math.floor(Math.random() * (right- left) + left);
}
function executePixels(value){
    return +value.substring(0,value.indexOf('px'));
}

function getStyle(element,style){
return getComputedStyle(element)[style];
}