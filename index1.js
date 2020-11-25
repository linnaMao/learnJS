const path = require('path')

const matchSVGSprite = new RegExp('assets\\' + path.sep + 'icons\\' + path.sep || 'components\\' + path.sep + 'Base\\'
+ path.sep + 'Icon\\' + path.sep + 'icons\\' + path.sep);
// const matchSVGSprite = /assets\/icons\/|components\/Base\/Icon\/icons\//
console.log(matchSVGSprite)