/**
 * @description:创建详情页面
  * @param {*} dirName 创建目录
 * 示例：node createEditPage.js D:\erp\moui\src\pages\demo\Edit
 */


const fs = require('fs');
const path = require('path');

const reuseJson = [];

// 命令行参数
const args = process.argv.slice(2); // 忽略前两个默认参数 (node 和脚本名称)

// 从命令行参数中获取目录路径
let dirName = args[0]; // 如果没有提供参数，




// Edit页面
const EditTxtFilePath = path.resolve(__dirname, '../temple/demo2/Edit/index.txt');
const EditConfigColumnTxtFilePath = path.resolve(
  __dirname,
  '../temple/demo2/Edit/config/column.txt',
);
const EditConfigFormListTxtFilePath = path.resolve(
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


//#region /Edit/index.txt
fs.readFile(EditTxtFilePath, 'utf8', (err, data) => {
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


//#region Edit/config/column.txt
fs.readFile(EditConfigColumnTxtFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err}`);
    return;
  }


  const filePathSearch = path.resolve(__dirname, dirName, 'config/column.tsx');

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
        console.log('config/column.tsx 创建成功');
      });
    });
  } else {
    // 目录已存在，直接写入文件
    fs.writeFile(filePathSearch, data, (err) => {
      if (err) throw err;
      console.log('config/column.tsx 创建成功');
    });
  }

});
//#endregion

//#region Edit/config/formList.txt
fs.readFile(EditConfigFormListTxtFilePath, 'utf8', (err, data) => {
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

//#region Edit/components/DetailsModal/index.txt
fs.readFile(EditComponentsDetailsModalIdeTxtFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err}`);
    return;
  }


  const filePathSearch = path.resolve(__dirname, dirName, 'components/DetailsModal/index.tsx');

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
        console.log('components/DetailsModal/index.tsx 创建成功');
      });
    });
  } else {
    // 目录已存在，直接写入文件
    fs.writeFile(filePathSearch, data, (err) => {
      if (err) throw err;
      console.log('components/DetailsModal/index.tsx 创建成功');
    });
  }

});
//#endregion

//#region Edit/components/DetailsModal/config/formList.txt
fs.readFile(EditComponentsDetailsModalConfigFormListTxtFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err}`);
    return;
  }


  const filePathSearch = path.resolve(__dirname, dirName, 'components/DetailsModal/config/formList.tsx');

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
        console.log('components/DetailsModal/config/formList.tsx 创建成功');
      });
    });
  } else {
    // 目录已存在，直接写入文件
    fs.writeFile(filePathSearch, data, (err) => {
      if (err) throw err;
      console.log('components/DetailsModal/config/formList.tsx 创建成功');
    });
  }

});
//#endregion

