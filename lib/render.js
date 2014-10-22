var views = require('co-views');
module.exports = views(__dirname+ '/../view/frame', {
  map: {
    html: 'swig'
  }
});
