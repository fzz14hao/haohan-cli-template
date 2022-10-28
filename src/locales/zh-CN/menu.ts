import routers from '../../../config/routes';
let obj: any = {};
let get = (arr: any, s = '') => {
  arr.forEach((item: any) => {
    let name = '';
    if (item.name) {
      name = `${s}${item.name}`;
      obj[name] = item.name;
    }
    if (item.routes) {
      get(item.routes, `${name}.`);
    }
  });
};
get(routers, 'menu.');

export default {
  ...obj,
  // 'menu.welcome': '欢迎',
  // 'menu.default': '默认页面',
  // 'menu.login': '登录',
  // 'menu.register': '注册',
  // 'menu.register.result': '注册结果',
};
