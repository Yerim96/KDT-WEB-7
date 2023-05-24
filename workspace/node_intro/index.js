const express =require("express");
const app = express();
const PORT= 3030; //변하지 않는 상수값

//정적파일(이미지 ,css파일 가져오기위한 코드)
//localhost:8000/static/image.png
// app.use('/static', express.static('public'));
// app.use(express.static(__dirname+"/public")) //정적파일 절대경로로 가져오기

//post는 프론트->서버이기 떄문에 볼 수 없음

app.set('view engine', 'ejs');
app.use(express.static(__dirname+"views")) 



app.get("/",function(req,res){
   // res.send('Hello Express');
    res.render('test');
})


app.listen(PORT, function(){
    console.log(`${PORT}가 열렸습니다. localhost:${PORT}`)
})