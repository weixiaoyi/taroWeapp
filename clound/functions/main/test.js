const cloud = require('wx-server-sdk');
cloud.init({
  env: 'test-cc74d8',
  secretId: 'AKIDpaA7yjzF0eCb6VEWF6lKm5DEJO0dJuY8',
  secretKey: 'notz5AGMTfs5HTRRXdjQ9saEtZMAymaQ'
});

const exports_mode = require('./index.js');
const event = {
  userInfo: {
    appId: 'wx036c1152bb3254cf',
    openId: 'ofuMr5APhmORwCIWiO2EtRYZDCYM'
  }
};

const context = {
  APPID: 'wx036c1152bb3254cf',
  OPENID: 'ofuMr5APhmORwCIWiO2EtRYZDCYM'
};
exports_mode.main();
