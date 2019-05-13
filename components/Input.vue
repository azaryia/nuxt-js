<script>
  import { mapGetters } from 'vuex'
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
    computed: {
      ...mapGetters({
        showKeyboard: 'showKeyboard'
      })
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
        if (!this.showKeyboard && window.innerWidth <= 1024) {
          this.$store.commit('SHOW_KEYBOARD', {showKeyboard: true, infoKeyboard: {placeholder: this.placeholder, layout: this.layout, input: this.input}})
          this.$store.commit('INPUT_KEYBOARD', {inputKeyboard: this.input.value})
        }
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
        this.$store.commit('INPUT_KEYBOARD', {inputKeyboard: this.input.value})
        this.$emit('input', value)
      },
      value: function () {
        this.valueChanged()
      }
    }
  }
</script>