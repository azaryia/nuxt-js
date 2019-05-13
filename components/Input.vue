<script>
  export default {
    dwcInput: true,
    props: {
      value: null,
      required: Boolean,
      disabled: Boolean,
      placeholder: String,
      errorOn: {
        type: String,
        default: 'submit'
      },
      errorOff: {
        type: String,
        default: 'input'
      },
      requiredErrorMessage: {
        type: String,
        default: 'This field is required'
      }
    },
    data: function () {
      let value = this.value
      return {
        error: null,
        initialValue: value,
        model: value,
        input: value,
        dirty: false
      }
    },
    methods: {
      isValid: function () {
        return !this.getError()
      },
      isDirty: function () {
        return this.dirty
      },
      getError: function () {
        let vm = this
        return vm.required && !vm.value && vm.requiredErrorMessage
      },
      focusInput: function (e) {
        this.input = e.target
        this.layout = e.target.dataset.layout
        this.model = this.input.value
        this.$emit('input', this.input.value)
      },
      valueChanged: function () {
        let value = this.value
        this.model = value
        if (value !== this.initialValue) {
          this.dirty = true
        }
        this.$emit('valueChanged', value)
      }
    },
    watch: {
      model: function () {
        let value = this.model
        this.$emit('input', value)
      },
      value: function () {
        this.valueChanged()
      }
    }
  }
</script>
