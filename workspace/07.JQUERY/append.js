function appendJs(){
    // ul태그 안에 자식으로 추가시키려고함 가져오는것이 아닌 생성시켜줄기
    let ul = document.querySelector('.colors');
    let li = document.createElement('li');
    li.innerHTML='마지막 자식';

    ul.append(li);
}

// append는 마지막 자식으로 추가된다.
function appendJquery(){
    $('.colors').append('<li>jquery 자식추가</li>')
}



function prependJs(){
    let ul = document.querySelector('.colors');
    let li = document.createElement('li');
    li.innerHTML='첫 자식';

    ul.prepend(li);
}
function prependJquery(){
    $('colors').prepend('<li>첫번째 자식으로 추가</li>');

}


//before
function beforeJs(){
    let green = document.querySelector('.green');

    //green기준으로 앞쪽으로옴. 형제를기준삼음.
    let li = document.createElement('li'); 
    li.textContent='이전 형제';
    green.before(li);

}
function beforeJquery(){
    $('.green').before('<li>이전 형제로 추가<li>');
}



//after
function afterJs(){
    let navy= document.querySelector('.navy');
    let li = document.createElement('li'); 
    li.textContent='다음 형제';

    navy.after(li);

}
function afterJquery(){
    $('.navy').after("<li>다음 형제로 추가</li>");
}


//remove

function removeJs(){
     let li = document.querySelector('#li2');
     li.remove();

}
function removeJquery(){
    $("#li2").remove();
}


//empty
function emptyJs(){
    let ul =document.querySelector('.nums');
    // 자바스크립트는 empty()가 존재하지 않음.
    //자기자신만있고 자식들은 모두 비움.
    ul.innerHTML='';
}
function emptyJquery(){
    $('.nums').empty();
}