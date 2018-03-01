! function () {
  $(document)
    .ready(() => {

      new Vue({
        el: '#dataSupplierAdd',
        data: {
          supplierForm: {
            name: '',
            bank: '',
            account: ''
          }
        },
        mounted() {
          this.supplierForm.name = $('#supplierName').val()
          this.supplierForm.bank = $('#supplierBank').val()
          this.supplierForm.account = $('#supplierAccount').val()
        },
        methods: {
          //提交
          submit() {
            for (let it in this.supplierForm) {
              this.supplierForm[it] = ''
            }
            console.log(this.supplierForm)
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