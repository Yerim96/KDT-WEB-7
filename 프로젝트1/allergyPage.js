function nutClick(){

    // 제품명 입력값 가져오기
    const pdname=document.getElementById('pdname').value;
    console.log('이름은'+ pdname);
  

    //checkbox 값 가져오기
    const checktext=document.querySelectorAll('.checktext');

    //table 값 가져오기
    const table = document.querySelector('table');
    // console.log(table);

    //tbody값 가져오기
    const tablebody=document.querySelector('tbody');
    // console.log(tablebody);

    //tbody 값에 row값 추가하기
    const row= tablebody.insertRow();

    //tr값 가져오기
    const tabletr=document.querySelectorAll('tr');
    

    //td값 가져오기
    const tabletd= document.querySelectorAll('td');
    
   
    const titles = document.querySelectorAll(".title");
   

            
      
//내코드
  // 이름과 체크박스 함께 나오도록 짠 코드
  for(let i=0; i<=35; i++){ 
       //입력한 이름의 제품명
      //  let trname= tabletr[i].children[0].innerText;
       //tr의 모든 영양 성분값
      //  let tringredient= tabletr[i].children[7].innerText;
          // table의  해당 row값 출력
          
          rowval=tabletr[i].innerText;
        //   namerow=tabletr[i].cells[7].innerText;
        //   console.log(namerow+'성분값 입니다.');

            for(let j=0; j<11; j++){
                // 만약에 input값(pdname)이  35까지 도는 row중의 이름(trname)과 같거나, 
                //11개의 체크박스 중 체크 되어있는것이 있는지 j로 탐색,

                checkval=checktext[j].value;
                  if(((((tabletr[i].children[0].innerText)==pdname) && (checktext[j].checked)) )){ 

                    console.log(checkval);
                    

                    if((tabletr[i].children[7].innerText).includes(checkval)){

                      console.log(rowval.toString());
                      
                    }else if(!((tabletr[i].children[7].innerText).includes(checkval))){
                      console.log('포함x')
                    }else if(((tabletr[i].children[7].innerText).includes(checkval))){
                        console.log(((tabletr[i].children[7].innerText).includes(checkval)));
                    }
                  }
                  
                //   if(((tabletr[i].children[0].innerText)==pdname)){
                //     document.getElementById('name').innerText=pdname;
                //     namesingred=tabletr[i].cells[7].innerText;
                //     document.getElementById('namesingred').innerText=namesingred;
                //     console.log('이름같아 출력');
                //   }

                    //  if(namesingred.includes(checktext[j].value)){ //만약 이름값의 성분이 체크값과 같다면
                    //     console.log(checkval);
                    //     if((checkval.includes(namesingred))===checkval){
                    //     document.getElementById('name').innerText=pdname;
                    //     namesingred=tabletr[i].cells[7].innerText;
                    //     document.getElementById('namesingred').innerText=namesingred;
                    //     console.log('이름과 성분값이 같다.')
                    //     }
                    // }

                //   }
                //   else if(checktext[j].checked){

                //       if((tabletr[i].children[7].innerText).includes(checkval)){
                //         console.log(rowval.toString());

                //       }
                //   }
            }
    }

   

}

function buttonClick(){
  alert("버튼을 클릭하셨습니다!");

}