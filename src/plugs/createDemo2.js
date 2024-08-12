const fs = require('fs');
const path = require('path');

const reuseJson = [];

// 命令行参数
const args = process.argv.slice(2); // 忽略前两个默认参数 (node 和脚本名称)

// 从命令行参数中获取目录路径
let dirName = args[0]; // 如果没有提供参数，

// 读取文本文件的路径
const IndexTxtFilePath = path.resolve(__dirname, '../temple/demo2/Index/index.txt');
const IndexConfigColumnTxtFilePath = path.resolve(
  __dirname,
  '../temple/demo2/Index/config/column.txt',
);
const IndexConfigOtherDataTxtFilePath = path.resolve(
  __dirname,
  '../temple/demo2/Index/config/otherData.txt',
);
const IndexComponentsSearchIndexTxtFilePath = path.resolve(
  __dirname,
  '../temple/demo2/Index/components/Search/index.txt',
);



// Edit页面
const EditTxtFilePath = path.resolve(__dirname, '../temple/demo2/Edit/index.txt');
const EditConfigColumnTxtFilePath = path.resolve(
  __dirname,
  '../temple/demo2/Edit/config/column.txt',
);
const EditConfigOtherDataTxtFilePath = path.resolve(
  __dirname,
  '../temple/demo2/Edit/config/formList.txt',
);

const EditComponentsDetailsModalIdeTxtFilePath = path.resolve(
  __dirname,
  '../temple/demo2/Edit/components/DetailsModal/index.txt',
);
const EditComponentsDetailsModalConfigFormListTxtFilePath = path.resolve(
  __dirname,
  '../temple/demo2/Edit/components/DetailsModal/config/formList.txt',
);

//#region Index/index.tsx

// 读取文本文件
fs.readFile(IndexTxtFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err}`);
    return;
  }

  // 文件路径
  const filePath = path.resolve(__dirname, dirName, 'Index/index.tsx');

  // 检查目录是否存在
  const dirPath = path.dirname(filePath);

  if (!fs.existsSync(dirPath)) {
    // 创建目录
    fs.mkdir(dirPath, { recursive: true }, (err) => {
      if (err) throw err;
      console.log(`目录 ${dirPath} 创建成功`);
      // 写入文件
      fs.writeFile(filePath, data, (err) => {
        if (err) throw err;
        console.log('Index.tsx 保存成功');
      });
    });
  } else {
    // 目录已存在，直接写入文件
    fs.writeFile(filePath, data, (err) => {
      if (err) throw err;
      console.log('Index.tsx 保存成功');
    });
  }
});
//#endregion

//#region /Index/less.less

// less文件路径
const filePathLess = path.resolve(__dirname, dirName, 'Index/index.less');

// 检查目录是否存在
const dirPathLess = path.dirname(filePathLess);

if (!fs.existsSync(dirPathLess)) {
  // 创建目录
  fs.mkdir(dirPathLess, { recursive: true }, (err) => {
    if (err) throw err;
    console.log(`目录 ${dirPathLess} 创建成功`);
    // 写入文件
    fs.writeFile(filePathLess, '', (err) => {
      if (err) throw err;
      console.log('index.less 保存成功');
    });
  });
} else {
  // 目录已存在，直接写入文件
  fs.writeFile(filePathLess, '', (err) => {
    if (err) throw err;
    console.log('Index.less 保存成功');
  });
}

//#endregion

//#region /Index/config/column.tsx
// 读取文本文件
fs.readFile(IndexConfigColumnTxtFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err}`);
    return;
  }

  const filePathConfig = path.resolve(__dirname, dirName, 'Index/config/column.tsx');

  // 检查目录是否存在
  const dirPathConfig = path.dirname(filePathConfig);

  if (!fs.existsSync(dirPathConfig)) {
    // 创建目录
    fs.mkdir(dirPathConfig, { recursive: true }, (err) => {
      if (err) throw err;
      console.log(`目录 ${dirPathConfig} 创建成功`);
      // 写入文件
      fs.writeFile(filePathConfig, data, (err) => {
        if (err) throw err;
        console.log('config/column.tsx 表格配置创建成功');
      });
    });
  } else {
    // 目录已存在，直接写入文件
    fs.writeFile(filePathConfig, data, (err) => {
      if (err) throw err;
      console.log('config/column.tsx 表格配置创建成功');
    });
  }
});

//#endregion

//#region /Index/config/otherData.tsx

fs.readFile(IndexConfigOtherDataTxtFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err}`);
    return;
  }

  const filePathSearch = path.resolve(__dirname, dirName, 'Index/config/otherData.tsx');

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
        console.log('config/otherData.tsx 搜索配置创建成功');
      });
    });
  } else {
    // 目录已存在，直接写入文件
    fs.writeFile(filePathSearch, data, (err) => {
      if (err) throw err;
      console.log('config/otherData.tsx 搜索配置创建成功');
    });
  }
});
//#endregion


//#region /Index/components/Search/index.tsx
fs.readFile(IndexComponentsSearchIndexTxtFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err}`);
    return;
  }


  const filePathSearch = path.resolve(__dirname, dirName, 'Index/components/Search/index.tsx');

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
        console.log('components/Search/index.tsx 创建成功');
      });
    });
  } else {
    // 目录已存在，直接写入文件
    fs.writeFile(filePathSearch, data, (err) => {
      if (err) throw err;
      console.log('components/Search/index.tsx 创建成功');
    });
  }

});
//#endregion
