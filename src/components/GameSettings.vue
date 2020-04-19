
<template>
  <div id="employee-form">
  </div>
</template>

<script>
export default {
  name: 'employee-form',
  data() {
    return {
      error: false,
      submitting: false,
      success: false,
      employee: {
        name: '',
        email: '',
      }
    }
  },
  computed: {
    invalidName() {
      return this.employee.name === ''
    },
    invalidEmail() {
      return this.employee.email === ''
    },
  },
  methods: {
    handleSubmit() {
      this.clearStatus()
      this.submitting = true
      if (this.invalidName || this.invalidEmail) {
        this.error = true
        return
      }
      this.$emit('add:employee', this.employee)
      this.$refs.first.focus()
      this.employee = {
        name: '',
        email: '',
      }
      this.success = true
      this.error = false
      this.submitting = false
    },
    clearStatus() {
      this.success = false
      this.error = false
    }
  }}
</script>

<style scoped>
form {
  margin-bottom: 2rem;
}
[class*="-message"] {
  font-weight: 500;
}
.error-message {
  color: #d33c40;
}
.success-message {
  color: #32a95d;
}
</style>