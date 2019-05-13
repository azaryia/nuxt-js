<template>
  <div :class="['form', utils]">
    <div class="form__header">
      <slot name="header"></slot>
    </div>
    <form class="form__container" @submit.prevent="onSubmit">
      <slot></slot>
      <div @click="handleClick">
        <slot name="actions"></slot>
      </div>
    </form>
  </div>
</template>

<script>
  import _ from 'lodash'
  export default {
    name: 'frm',
    props: {
      utils: [Object, String]
    },
    data: function () {
      return {
        action: null
      }
    },
    methods: {
      checkInputs: function (component) {
        let vm = this
        if (component && component.$options && component.$options.dwcInput) {
          let isValid = component.isValid()
          if (!isValid) {
            component.$emit('submit')
          }
          return isValid
        } else if (component.$children && component.$children.length) {
          return _.reduce(component.$children, function (valid, child) {
            return vm.checkInputs(child) && valid
          }, true)
        }
        return true
      },
      onSubmit: function () {
        let valid = this.checkInputs(this)
        if (valid) {
          this.$emit('submit', this.action)
        }
        this.action = null
      },
      handleClick: function (e) {
        if (e.target && e.target.name) {
          this.action = e.target.name
        }
      }
    }
  }
</script>
