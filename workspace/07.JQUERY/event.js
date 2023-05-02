//자바스크립트 document
// console.log(document);
// console.log($(document));

//jquery방법
//자바스크립트가 로드될때 자동으로 이벤트처리
// $(document).ready(function(){
    //     console.log('ready- 문서의 dom이 완성되면 실행');
    //     //document는 항상준비중이여서 바로 콘솔에 뜸
    // })
    
    // $(function(){
        //     console.log('방법2');
        // })
        
        
//자바스크립트 방법.
//자바스크립트가 로드될때 자동으로 이벤트처리
// document.addEventListener('DOMContentLoaded',function(){
// console.log("DOMContentLoaded -문서의 dom이 완성되면 실행")

// }
// )

// (function (){
//     console.log("js 방법2");
// })() //바로실행.


//클릭이벤트
//마우스이벤트
$('.hello').click(function(){ //익명함수인 콜백함수 .hello 실행하면 함수를 실행하라.
    $('.hello').css('color','red'); //콜백으로 자기자신의 색이 바뀐것임.
})


//제이쿼리 이벤트를 사용하는 방법
//인터프리터라 같으면 밑에 있는것이 실행됨
$('.num').click(function(){
    //$('.num').css('color','blue');
    $(this).css({'color':'blue','font-weight':'bold'});
})

$('.num').on('click',function(){
    $(this).css({'color':'red','font-weight':'bold'});
    
})

$('.numbers').mouseover(function(){
    // $('.numbers').css('background-color','green');
    $(this).css('background-color', 'yellow');
})

$('.numbers').on('mouseleave',function(){
    $(this).css('background-color','skyblue');
})

//마우스 오버와리브처럼 변화하는 이벤트
//ex 반응형 메뉴


//hover
$('.hover').hover(function(){
    $(this).css('color','red');
},function(){
    $(this).css('color','blue');
    
})

// $('.menu1').hover(function(){
//     $('.sub1').css('display','block');
//     // $('.sub1').addClass('block');
// },function(){
//     $('.sub1').css('display','none')
//     // $('.sub1').removeClass('block');
// })

//윗코드 간략하게 작성가능
// $('.menu1').hover(function(){
//     $('.sub1').toggleClass('block');
// })


// 스크롤
console.log($(window)); //우리가 보는 html전체 화면
$(window).scroll(function(){
    console.log('scroll');
})

$(window).on('scroll',function(){
    console.log('scrolls');
})


//키보드 이벤트
//input-key

$('.input-key').keydown(function(e){ //function(e)는 이벤ㅌ객체가져옴.
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

// $(".input-key").on('keydown',function(hello){
//     console.log(hello.code);
//     if(e.code ==="ArrowUp"){
//         console.log('up')
//     }else if(e.code==='ArrowRight'){
//         console.log('right');
//     }else if(e.code ==="ArrowLeft"){
//         console.log('left');
        
//     }else if(e.code ==="ArrowDown"){
//         console.log('down');
        
//     }else{
        
//         console.log('others');
//     }
// })


//form이벤트 처리

{/* <h3>폼</h3> */}
/* <form action="/" id="todo-form">

    <!-- name은 서버에서 받을때 html값의 이름이 됨. -->
    <input type="text" name="todo"> 
    <button>추가</button>
</form> */

$('#todo-form').submit(function(e){
    e.preventDefault(); 
    const todo = $('input[name=todo]').val();
    console.log(todo)
    $('.todos').append(`<li>${todo}</li>`);

    //form에 작성한것 초기화
    $('input[name=todo]').val(""); //val("")은 비문자
})



