! function () {
  $(document)
    .ready(() => {
      new Vue({
        el: '#checkInvoice',
        data: {
          invoiceForm: _schemas.checkInvoice
        },
        mounted() {
          $('#checkInvoice').removeClass('invisible')
        },
        methods: {

          //删除第一层数据
          deleteItem(name, item, index) {
            this.invoiceForm[name].splice(index, 1)
          },

          //新增第一层数据
          addItem(name) {
            const invoiceForm = this.invoiceForm[name]
            const length = invoiceForm.length
            let id
            if (length > 0) {
              id = invoiceForm[length - 1].id + 1
            } else {
              id = 1
            }
            this.invoiceForm[name].push({
              id
            })
          }
        }
      })
    })
}()