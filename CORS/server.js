var express = require('express');
var cors = require('cors');
var app = express();

// 因cors是中间件，因此我们要先调用app.use让我们的请求能够都经过cors到达不同的路由。
app.use(cors())

app.options('*', cors());

app.get('/product', function(req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(80, function() {
  console.log('CORS-enabled web server listening on port 80!')
})