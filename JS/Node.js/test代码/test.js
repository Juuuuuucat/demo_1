const fs = require('fs');
const path = require('path');
fs.readFile(path.join(__dirname,'../','/1.txt'),'utf8',function(e,data){
    if(e) {
        console.log('读取失败\\n'+e.message);
    } else {
        let arr = data.split(' ');
        let arr2 = [];
        arr.forEach(function(i){
            arr2.push(i.replace("=",':'));
        })
        let arr3 = arr2.join('\n');
        fs.writeFile('./11.txt', arr3, function (e) {
            if (e) {
                console.log('写入失败');
            } else {
                console.log('写入成功');

            }
        })
    }
})