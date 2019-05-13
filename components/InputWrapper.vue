<template>
  <div class="input-wrapper" @blur.capture="doEvent('blur')" @input="doEvent('input')" @change="doEvent('input')">
    <slot></slot>
    <p class="u-color-danger u-padding-top-xsmall u-font-size-small u-input-padding-left-default" v-if="showError && getError()">{{getError()}}</p>
  </div>
</template>

<script>
  export default {
    created: function () {
      let vm = this
      vm.$parent.$on('submit', function () {
        vm.doEvent('submit')
      })
    },
    data: function () {
      return {
        showError: false
      }
    },
    computed: {
      dwcInput: function () {
        let vm = this
        if (vm.$parent && vm.$parent.$options && vm.$parent.$options.dwcInput) {
          return vm.$parent
        }
        return null
      }
    },
    methods: {
      doEvent: function (event) {
        let vm = this
        let input = vm.dwcInput
        if (input) {
          if (input.errorOff === event) {
            vm.showError = false
          }
          if (input.errorOn === event) {
            vm.showError = !input.isValid()
          }
        }
      },
      getError: function () {
        return this.dwcInput && this.dwcInput.getError()
      }
    }
  }
</script>
