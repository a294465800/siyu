! function () {
  $(document)
    .ready(() => {

      new Vue({
        el: '#dataInvoiceAdd',
        data: {
          invoiceForm: {
            name: '',
            remark: '',
          }
        },
        mounted() {
          this.invoiceForm.name = $('#invoiceName').val()
          this.invoiceForm.remark = $('#invoiceRemark').val()
        },
        methods: {
          //提交
          submit() {
            for (let it in this.invoiceForm) {
              this.invoiceForm[it] = ''
            }
            console.log(this.invoiceForm)
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