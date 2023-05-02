function submitjavasc(){
    document.getElementById('div1').innerHTML="반갑습니다."
}

function submitJquery(){
    $('div').html("잘지내세요");
}

function getvalue(){
    let value=$('input').val();
    console.log(value);
}
function setvalue(){
    $('input').val("패스워드를 입력하세요");
}




function changeJS(){
    let span = document.querySelector("#change");
    span.style="font-size:20px; color:red;"
}
function changeJquery(){
    $('#change').css({"font-size":"40px", "color":"red"})
}
function getjquery(){
    console.log($('#change').css('color'))
}

function changeAtr(){
    //속성값 가져오기
    console.log($('#move').attr('href',"http://www.google.com"))
}
function changeAtrJs(){
    let a= document.querySelector('#move');
    a.setAttribute('href',"https://www.daum.net");
}

