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
    var keywordArray = keywords.split("\n");
    var keywordRank = [];
    var i = 0;
    for(i=0;i<20;i++){
      keywordRank[i] = keywordArray[i].split(" ");
    }
    response = JSON.parse(JSON.stringify(keywordRank));
    res.send(response);
  });
});

app.listen(3000, () => {
  console.log('starting at port 3000!');
});


