var express = require('express');
var app = express();    //이 메소드가 실행되는 순간 서버까지 만들어진다.
var path = require('path');
require('dotenv').config();

var indexRouter = require('./router/index'); // ./router/ 라고만 적어도 된다. index라는 명칭은 자동으로 인식하기 때문이다.
var userRouter = require('./router/user');


//[기초세팅]
//뷰(템플릿) 기본 폴더 지정
app.set('views', path.join(__dirname, 'views'));    //views 폴더는 ~~ 여기예요~~~
//__dirname은 현재 디렉토리의 절대경로를 저장하고 있는 변수

//뷰 엔진 등록: 뷰 엔진을 ejs라는 것을 쓰겠다
app.set('view engine', 'ejs');
//html을 ejs를 이용하여 렌더링하겠다
app.set('html', require('ejs').renderFile);

//[미들웨어 등록]
//express에서 json 처리를 해주도록 하기 위한 미들웨어 등록
app.use(express.json())
//정적파일 기본경로 등록을 위한 미들웨어 등록. serve-static 라이브러리를 이용하거나, 아래와 같이 한다
app.use(express.static(path.join(__dirname, 'public')));
//라우터 등록
app.use('/', indexRouter);
app.use('/people', userRouter);


var port = process.env.PORT || 3000;

//원래 순서는 포트, url(기본값 localhost), 백로그(기본값 5000), 콜백함수
//var url = '192.32.32.32'
//app.listen(port, url, backlog, callback);
//콜백 함수 full : err, req, res, next
// 
app.listen(port, (req, res) => {
    console.log(`서버가 시작되었습니다: http://localhost:${port}`);
});