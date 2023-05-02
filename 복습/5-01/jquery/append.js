function appendjs(){
    let ul= document.querySelector('.colors');
    let li= document.createElement('li');
    li.innerHTML="마지막자식";

    ul.append(li);
}
function appendjq(){
    $('.colors').append('<li>제이쿼리 자식 추가</li>')
}


function prependjs(){
    let ul= document.querySelector('.colors');
    let li=document.createElement('li');
    li.innerHTML="첫자식"
    ul.prepend(li);
}
function prependjq(){
    $('.colors').prepend('<li>첫번째 자식으로축<li>');
}


function beforejs(){
    let green= document.querySelector('.green');
    let li=document.createElement('li');
    li.textContent="이전형제";
    green.before(li);
}
function beforejq(){
    $('.green').before('<li>이전형제로 추가</li>');
}



