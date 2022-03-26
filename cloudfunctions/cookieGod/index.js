const queryCookMenus = require('./queryCookMenus/index');
const queryCookList = require('./queryCookList/index');


// 云函数入口函数
exports.main = async (event, context) => {
  switch (event.type) {
    case 'queryCookMenus':
      return await queryCookMenus.main(event, context);
    case 'queryCookList':
      return await queryCookList.main(event, context);
  }
};
