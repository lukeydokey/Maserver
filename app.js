// app.js

var express = require('express')
  , app = express()
  , indexRouter = require('./routes/index')
  , sequelize = require('./models/index').sequelize;
const PORT = process.env.PORT || 3000;

//Body parse built-in
app.use(express.json())
app.use(express.urlencoded({extended: false}));

//sync()를 통해 서버를 실행할 때 sequelize가 mysql을 연결 시켜줌
sequelize.sync();

//라우팅
app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log('Express server is listening on port ' + PORT);
});
