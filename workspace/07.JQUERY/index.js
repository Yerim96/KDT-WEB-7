function submitjavascript(){
    document.getElementById('div1').innerHTML = "반갑습니다"
}

//제이쿼리는 dom과 비슷하게 값을 제어하려고 쓴다.
function submitJquery(){
    $('#div1').html("잘지내세요");
}


function getValue(){
    let value =$('input').val(); //value
    console.log(value);
}


//설정하기

function setValue(){
    $('input').val('패쓰워드를 입력하세요');
}


function changeJs(){
    let span = document.querySelector('#change')
    span.style = 'font-size: 20px; color:red;'
}
function changeJquery(){
    $('#change').css({"font-size":"40px","color":"blue"});
    // $('#change').css('color','blue');
}


function getJquery(){
    console.log($('#change').css('color'))
}


// 속성값가져오기
function changeAttr(){
    $('#move').attr('href','http://www.google.com')
}


//js주소바꾸기
function changeAttrJs(){
    let a = document.querySelector('#move');
    a.setAttribute('href','https://www.daum.net');
}

function changeTextJs(){
    let p = document.querySelector('#text');
    p.textContent="js 체인지";
    p.textContent="<h3>js 체인지</h3>";
}
function changeTextJQuery(){

    //.text 객체를 이용해 체인지해줌
    $('#text').text("Jquery 체인지") 

}


function changeHtmlJs(){
    let p = document.querySelector('#html');

    //innerHtml은 태그를 넣으면 태그도 들어간다. text는 텍스트로만 들어감.
    p.innerHTML="<h3>Javascript</h3>";
}
function changeHtmlJQuery(){
    $('#html').html('<h1>Jquery</h1>');
}

