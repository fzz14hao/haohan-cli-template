const fs = require('fs');
const path = require('path');

const projectRoot = 'src';
const startDirectory = 'src/pages';



const reuseJson = []




// // 将结果保存到JSON文件中  
// fs.writeFile(`../systemConfig/Index/index.ts`, JSON.stringify([...new Set(reuseJson)], null, 2), (err) => {
//   if (err) throw err;
//   console.log('重复key reuseKeyJson.json 保存成功');
// });



// 文件路径
const filePath = path.resolve(__dirname, '../pages/tetsPage/Index/index.ts');

// 检查目录是否存在
const dirPath = path.dirname(filePath);
if (!fs.existsSync(dirPath)) {
  // 创建目录
  fs.mkdir(dirPath, { recursive: true }, (err) => {
    if (err) throw err;
    console.log(`目录 ${dirPath} 创建成功`);
    // 写入文件
    fs.writeFile(filePath, JSON.stringify([...new Set(reuseJson)], null, 2), (err) => {
      if (err) throw err;
      console.log('重复key reuseKeyJson.json 保存成功');
    });
  });
} else {
  // 目录已存在，直接写入文件
  fs.writeFile(filePath, JSON.stringify([...new Set(reuseJson)], null, 2), (err) => {
    if (err) throw err;
    console.log('重复key reuseKeyJson.json 保存成功');
  });
}