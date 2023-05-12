function nutClick(){
  const pdname=document.getElementById('pdname').value;
  console.log(pdname);
  const checktext=document.querySelectorAll('.checktext');
  const table = document.querySelector('table');
  console.log(table);
  const tablebody=document.querySelector('tbody');
  console.log(tablebody);
  const tabletr=document.querySelectorAll('tr');
  const tabletd= document.querySelectorAll('td');
  const searchval =document.querySelector('.searchval');
for(let i=0; i<=35; i++){ 
  rowval=tabletr[i].innerText;
  
  
  
  for(let j=0; j<11; j++){
            let serchvalist='';
              checkval=checktext[j].value;
                if(((tabletr[i].children[0].innerText)==pdname && checktext[j].checked)){ 

                  console.log(`${searchval}`);
                  

                  if((tabletr[i].children[7].innerText).includes(checkval)){
                    // searchval.innerHTML=rowval.toString();
                    // console.log(searchval.innerHTML);
                    console.log(rowval.toString());
                    
                  }else if(!((tabletr[i].children[7].innerText).includes(checkval))){

                    console.log('포함x')
                  }
                }else if(((tabletr[i].children[0].innerText)==pdname)){
              
                    console.log(`${rowval}`);

                }else if(checktext[j].checked){

                    if((tabletr[i].children[7].innerText).includes(checkval)){
                        searchval.innerHTML+=rowval.toString()+'</br>';
                        console.log(searchval.innerHTML)
                        serchvalist+=searchval.innerHTML;
                        console.log(serchvalist);


                   
                    }
                }
          }
  }
}



        // //강사님코드+내코드
    // const titles = document.querySelectorAll(".title");
    // console.log(titles);
    // for (const title of titles) {
    //   //console.log(checktext.length);
    //   const arr = [];
    //   if (pdname === title.textContent) {
    //       //먼저 title태그의 값 자체를 가져와서 텍스트를 바꿔 값으로 가져온 뒤
    //       console.log(title.classList);
    //       arr.push(document.querySelector( `.${title.classList[1]}`).textContent);
    //       //title의 값에서 td까지 가져옴.
    //       const t = document.querySelectorAll(`.${title.classList[1]} ~ td`);
    //       for (const td of t) {
    //           arr.push(td.textContent);
    //       }
    //       console.log("arr", arr);
    //     }
    
    //   }
    //       // tr값 가져오기
    //       //   알레르기 성분 가져오기
    //       //   title 안에넣어서 마지막 형제를 가져오고 체크박스를 문자열 비교
    //       const allergics = document.querySelectorAll(".Allergic");
    //       console.log(allergics);
    //       const arr2=[]
    //       for (let i = 0; i < checktext.length; i++) {
    //         if ((checktext[i].checked === true)) {
    //               arr2.push(checktext[i].value);
                  
    //             }
                
    //           }
    //           for(let allergic of allergics){
    //               ALLallergic=allergic.textContent;
    //               console.log(ALLallergic); //모든 알러지값출력
                
    //               //만약 알러지의 값에 체크 벨류값이 포함되어 있다면 
    //               if(ALLallergic.includes(arr2.toString())){
    //                   // console.log(ALLallergic+' 값이 포함되어 있습니다.');
    //                   // 각 allergicTd 요소마다 형제 요소들을 추출
                      
    //                   console.log('값이 포함되어 있ㅅ븐디ㅏ.');
    //                 }else{
    //                   console.log('값이 포함되어있지 않습니다.');
    //                 }
    //               }
    //         console.log(arr2.toString()); //선택한 값
    
