"use strict";

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = Franz => {
  const getMessages = function getMessages() {
      const element = document.querySelector('.activity-badge-container.app-activity-badge.activity-badge span');
      console.log('rodei lal lalalalalalalal')
      let count = 0;

      if (element) {
        console.log('ai pai paraaaa')
        count = parseInt(element.innerText, 10);
      }
      
      Franz.setBadge(count);
  };
  
  Franz.loop(getMessages);
  Franz.injectCSS(path.join(__dirname, 'service.css'));
};