! function () {
  $(document)
    .ready(() => {

      new Vue({
        el: '#dataBankAdd',
        data: {
          bankForm: {
            name: '',
            account: '',
          }
        },
        mounted() {
          this.bankForm.name = $('#bankName').val()
          this.bankForm.account = $('#bankAccount').val()
        },
        methods: {
          //提交
          submit() {
            for (let it in this.bankForm) {
              this.bankForm[it] = ''
            }
            console.log(this.bankForm)
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