! function () {
  $(document)
    .ready(() => {

      new Vue({
        el: '#dataTypeAdd',
        data: {
          typeForm: {
            name: '',
            tax: '',
          }
        },
        mounted() {
          this.typeForm.name = $('#typeName').val()
          this.typeForm.tax = $('#typeTax').val()
        },
        methods: {
          //提交
          submit() {
            for (let it in this.typeForm) {
              this.typeForm[it] = ''
            }
            console.log(this.typeForm)
            this.$notify({
              title: '成功',
              message: '提交成功',
              type: 'success'
            })
          },
        }
      })
    })
}()