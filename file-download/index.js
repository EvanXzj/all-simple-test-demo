const http = require('http');
const express = require('express');
const fs=require("fs");
const path = require('path')

const port = process.env.PORT || 3000

const app = express();
app.get('/download', function (req, res, next) {

　//第一种方式
//   var f="F:/ftproot/NW.js.docx";
//   var f="f:/ftproot/我是中文的语言.txt"
//   //var f = req.params[0];
//   f = path.resolve(f);
//   console.log('Download file: %s', f);
//   res.download(f);

  //第二种方式
  const p=path.resolve("./file-download/resource/app-release.apk");
  console.log(p)
  //   const f = fs.createReadStream(p);
  const f = path.resolve(p);
  console.log('Download file: %s', f);
  res.download(f);
});

http.createServer(app).listen(port, () => {
    console.log('server runnig at 127.0.0.1:', port)
});