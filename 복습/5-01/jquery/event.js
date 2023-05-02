console.log(document);
console.log($(document));

$(document).ready(function(){
    console.log('ready-문서의 dom이 완성되면 실행');
    
})

$(function(){
    console.log('방법2');
})


//자바스크립트가 로드될때 자동으로 이벤트처리

document.addEventListener('DOMContentLoaded',function(){
    console.log('문서의domdl 완성되면 실행')
})

// (function(){
//     console.log("js 방법2");
// })() //바로실행.

$('.hello').click(function(){
    $('.hello').css('color','red');
})

$('hello').click(function(){
    $('hello').css('color','blue');
})


// $('.numbers').mouseover(function(){
//     $(this).css('background-color','blue');
// })

// $('.numbers').on('mouseleave',function(){
//     $(this).css('background-color', 'skyblue');
// })

// mouseleave,mouseover hover로 바꾸기

$('.numbers').hover(function(){
    $('.numbers').css('background-color','skyblue');
},function(){
    $('.numbers').css('background-color','pink');
}
)


{/* <div class="nav">
<div class="menu1">menu1
    <div class="sub1">sub-menu</div>
</div>
<div>menu2</div>
<div>menu3</div> */}

// $('.menu1').hover(function(){
//     $('.sub1').css('display','block');
// },function(){
//     $('.sub1').css('display','none');
// }
// )

$('.menu1').hover(function(){
    $('.sub1').toggleClass('block');
})

//마우스 오버와리브처럼 변화하는 이벤트
//반응형 메뉴

//hover
$('.hover').hover(function(){
    $(this).css('color','red');

},function(){
    $(this).css('color','blue');
}
)

$('.input-key').on('keydown',function(e){
    console.log(e.code);
    if(e.code ==="ArrowUp"){
        console.log('up')
    }else if(e.code==='ArrowRight'){
        console.log('right');
    }else if(e.code ==="ArrowLeft"){
        console.log('left');
        
    }else if(e.code ==="ArrowDown"){
        console.log('down');
        
    }else{
        console.log('others');
    }
})

//form이벤트처리
{/* <h3>폼</h3> */}
/* <form action="/" id="todo-form">

    <!-- name은 서버에서 받을때 html값의 이름이 됨. -->
    <input type="text" name="todo"> 
    <button>추가</button>
</form> */

$('#todo-form').submit(function(e){
    e.preventDefault();
    const todo =$(input='[name=todo]').val();
    console.log(todo);
    $('.todos').append(`<li>${todo}</li>`)
    $(input='[name=todo]').val('');

})