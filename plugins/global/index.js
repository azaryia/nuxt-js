let context = require.context('./', true, /\.js/);
let mixins = {};

context.keys().forEach(function (path) {
  let name = path.split('/')[1].replace('.js', '');
  if (name !== 'index') {
    mixins[name] = context(path).default;
  }
});

export default mixins;