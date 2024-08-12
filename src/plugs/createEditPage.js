const fs = require('fs');
const path = require('path');

const reuseJson = [];

// 命令行参数
const args = process.argv.slice(2); // 忽略前两个默认参数 (node 和脚本名称)

// 从命令行参数中获取目录路径
let dirName = args[0]; // 如果没有提供参数，默认为

// 文件路径
const filePath = path.resolve(__dirname, dirName, 'index.tsx');

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
      console.log('Index.tsx 保存成功');
    });
  });
} else {
  // 目录已存在，直接写入文件
  fs.writeFile(filePath, JSON.stringify([...new Set(reuseJson)], null, 2), (err) => {
    if (err) throw err;
    console.log('Index.tsx 保存成功');
  });
}

// less文件路径
const filePathLess = path.resolve(__dirname, dirName, 'index.less');

// 检查目录是否存在
const dirPathLess = path.dirname(filePathLess);

if (!fs.existsSync(dirPathLess)) {
  // 创建目录
  fs.mkdir(dirPathLess, { recursive: true }, (err) => {
    if (err) throw err;
    console.log(`目录 ${dirPathLess} 创建成功`);
    // 写入文件
    fs.writeFile(filePathLess, JSON.stringify([...new Set(reuseJson)], null, 2), (err) => {
      if (err) throw err;
      console.log('index.less 保存成功');
    });
  });
} else {
  // 目录已存在，直接写入文件
  fs.writeFile(filePathLess, JSON.stringify([...new Set(reuseJson)], null, 2), (err) => {
    if (err) throw err;
    console.log('Index.less 保存成功');
  });
}

const filePathConfig = path.resolve(__dirname, dirName, 'config/column.tsx');

// 检查目录是否存在
const dirPathConfig = path.dirname(filePathConfig);

if (!fs.existsSync(dirPathConfig)) {
  // 创建目录
  fs.mkdir(dirPathConfig, { recursive: true }, (err) => {
    if (err) throw err;
    console.log(`目录 ${dirPathConfig} 创建成功`);
    // 写入文件
    fs.writeFile(filePathConfig, JSON.stringify([...new Set(reuseJson)], null, 2), (err) => {
      if (err) throw err;
      console.log('config/column.tsx 表格配置创建成功');
    });
  });
} else {
  // 目录已存在，直接写入文件
  fs.writeFile(filePathConfig, JSON.stringify([...new Set(reuseJson)], null, 2), (err) => {
    if (err) throw err;
    console.log('config/column.tsx 表格配置创建成功');
  });
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
    fs.writeFile(filePathSearch, JSON.stringify([...new Set(reuseJson)], null, 2), (err) => {
      if (err) throw err;
      console.log('config/formList.tsx 表单配置创建成功');
    });
  });
} else {
  // 目录已存在，直接写入文件
  fs.writeFile(filePathSearch, JSON.stringify([...new Set(reuseJson)], null, 2), (err) => {
    if (err) throw err;
    console.log('config/formList.tsx 表单配置创建成功');
  });
}
