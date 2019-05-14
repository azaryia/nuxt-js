export default {
  props: ['variation', 'modifiers', 'utils', 'styleComponent'],
  methods: {
    __classArray: function (arg, prefix) {
      const vm = this;
      let classes = typeof arg === 'string' ? arg.split(' ') : arg;
      if (!Array.isArray(classes)) {
        const classArray = [];
        if (classes) {
          Object.entries(classes).forEach(function (entry) {
            if (entry[1]) {
              classArray.push(entry[0]);
            }
          });
        }
        classes = classArray;
      }
      else {
        classes = classes.reduce(function (classe, c) {
          return classe.concat(typeof c === 'string' ? c.split(' ') : vm.__classArray(c, ''));
        }, []);
      }
      return classes.map(function (c) {
        return prefix + c;
      });
    },
    $vClass: function (suffix, name) {
      let variationClass = name || this.styleComponent || this.$options.styleComponent;
      if (!variationClass || this.styleComponent === false) {
        return null;
      }
      if (this.variation) {
        variationClass += '--' + this.variation;
      }
      if (suffix) {
        variationClass += '__' + suffix;
      }
      return (this.$root.$options.stylePrefix || '') + variationClass;
    }
  },
  computed: {
    $mClasses: function () {
      let modifiers = this.__classArray(this.modifiers, '-');
      if (this.$root.$options.stylePrefix) {
        modifiers = modifiers.map(m => this.$root.$options.stylePrefix + m);
      }
      return modifiers;
    },
    $uClasses: function () {
      let utils = this.__classArray(this.utils, 'u-');
      if (this.$root.$options.stylePrefix) {
        utils = utils.map(u => this.$root.$options.stylePrefix + u);
      }
      return utils;
    },
    $classes: function () {
      return [this.$vClass(), ...this.$mClasses, ...this.$uClasses];
    },
    $styleProps: function () {
      return {
        variation: this.variation,
        modifiers: this.modifiers,
        utils: this.utils,
        styleComponent: this.styleComponent
      };
    },
    $otherProps: function () {
      return Object.assign({}, this.$options.propsData, {
        variation: undefined,
        modifiers: undefined,
        utils: undefined,
        styleComponent: undefined
      });
    }
  }
};