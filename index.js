const express = require('express');
const { exec } = require('child_process');
const app = express();

app.get('/popularKeyword', (req, res)=>{
  exec('python3 keyWord.py', (err, stdout, stderr) => {
    if (err){
      console.error(`exec error: ${err}`);
      return ;
    }
    var keywords = stdout;
    console.log(keywords);
    keywords = JSON.stringify(keywords);
    res.send(keywords);
  });
});

app.listen(3000, () => {
  console.log('starting at port 3000!');
});


