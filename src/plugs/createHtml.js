const fs = require('fs');
const path = require('path');

const reuseJson = [];

// 命令行参数
const args = process.argv.slice(2); // 忽略前两个默认参数 (node 和脚本名称)

// 从命令行参数中获取目录路径
let dirName = args[0] || 'systemConfig/Index'; // 如果没有提供参数，默认为 'systemConfig/Index'

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