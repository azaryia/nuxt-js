<template>
  <component is="button" :class="['btn', utils, modifiers, {'is-disabled': disabled}]" :to="href" :type="type" :name="name" :disabled="disabled" @click="click">
    <slot></slot>
  </component>
</template>

<script>
  import _ from 'lodash'
  export default {
    name: 'btn',
    props: {
      disabled: Boolean,
      type: String,
      href: String,
      name: String,
      utils: String,
      modifiers: [String, Array]
    },
    computed: {
      btnProps: function () {
        return _.pick(this, ['disabled', 'type', 'href', 'name'])
      }
    },
    methods: {
      click: function (event) {
        this.$emit('click', event)
      }
    }
  }
</script>