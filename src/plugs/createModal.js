/**
 * @description:创建弹窗
  * @param {*} dirName 创建目录
 * 示例：node createModal.js D:\erp\moui\src\pages\demo\Index\components\AddModal

 */


const fs = require('fs');
const path = require('path');

const reuseJson = [];

// 命令行参数
const args = process.argv.slice(2); // 忽略前两个默认参数 (node 和脚本名称)

// 从命令行参数中获取目录路径
let dirName = args[0]; // 如果没有提供参数，

// 读取文本文件的路径

const IndexComponentsAddModalIndexTxtFilePath = path.resolve(
  __dirname,
  '../temple/demo/Index/components/AddModal/index.txt',
);
const IndexComponentsAddModalConfigFormListTxtFilePath = path.resolve(
  __dirname,
  '../temple/demo/Index/components/AddModal/config/formList.txt',
);


//#region Index/components/AddModal/index.tsx
fs.readFile(IndexComponentsAddModalIndexTxtFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err}`);
    return;
  }



  const filePathSearch = path.resolve(__dirname, dirName, 'index.tsx');

  // 检查目录是否存在
  const dirPathSearch = path.dirname(filePathSearch);

  if (!fs.existsSync(dirPathSearch)) {
    // 创建目录
    fs.mkdir(dirPathSearch, { recursive: true }, (err) => {
      if (err) throw err;
      console.log(`目录 ${dirPathSearch} 创建成功`);
      // 写入文件
      fs.writeFile(filePathSearch, data, (err) => {
        if (err) throw err;
        console.log('index.tsx 创建成功');
      });
    });
  } else {
    // 目录已存在，直接写入文件
    fs.writeFile(filePathSearch, data, (err) => {
      if (err) throw err;
      console.log('index.tsx 创建成功');
    });
  }

});
//#endregion

//#region Index/components/AddModal/config/formList.tsx
fs.readFile(IndexComponentsAddModalConfigFormListTxtFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err}`);
    return;
  }


  
  const filePathSearch = path.resolve(__dirname, dirName, 'config/formList.tsx');

  // 检查目录是否存在
  const dirPathSearch = path.dirname(filePathSearch);

  if (!fs.existsSync(dirPathSearch)) {
    // 创建目录
    fs.mkdir(dirPathSearch, { recursive: true }, (err) => {
      if (err) throw err;
      console.log(`目录 ${dirPathSearch} 创建成功`);
      // 写入文件
      fs.writeFile(filePathSearch, data, (err) => {
        if (err) throw err;
        console.log('config/formList.tsx 创建成功');
      });
    });
  } else {
    // 目录已存在，直接写入文件
    fs.writeFile(filePathSearch, data, (err) => {
      if (err) throw err;
      console.log('config/formList.tsx 创建成功');
    });
  }
});

//#endregion
