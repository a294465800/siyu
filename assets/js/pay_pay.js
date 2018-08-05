! function () {
  $(document)
    .ready(() => {
      new Vue({
        el: '#payPay',
        data: {

          payForm: {
            manager: '',
            pay_date: '',
            cash: '',
            transfer: '',
            other: '',
            bank: '',
            account: '',
            remark: '',
            bankIndex: ''
          },

          bankList: [],
          payList: []

        },
        mounted() {
          // this.payForm.id = $('#payId').val() || ''
          // this.payForm.manager = $('#manager').val() || ''
          // this.payForm.pay_date = _helper.timeFormat(new Date(), 'YYYY-MM-DD')
          const bankList = $('#bankList').text().trim()
          this.bankList = bankList === '' ? [] : JSON.parse(bankList)
          $('#payPay').removeClass('invisible')
          this.addItem()
        },
        methods: {

          //添加项目
          addItem() {
            const list = this.payList
            const data = {
              pay_date: _helper.timeFormat(new Date(), 'YYYY-MM-DD'),
              self_id: list.length > 0 ? list[list.length - 1].id ? list[list.length - 1].id + 1 : 1 : 1,
            }
            this.payList.push(data)
          },
          //删除项
          deleteItem(item, index) {
            this.payList.splice(index, 1)
          },

          selectBank(bankIndex, itemIndex) {
            const value = this.bankList[bankIndex]
            // this.payForm.bank = value.name
            // this.payForm.account = value.account
            this.payList[itemIndex].bank = value.bank
            this.payList[itemIndex].account = value.account
          },

          //提交
          submit() {
            _http.PaymentManager.createPayPay(this.payList)
              .then(res => {
                if (res.data.code === '200') {
                  this.$notify.success({
                    title: '成功',
                    message: '提交成功！'
                  })
                  $('.ui.dimmer').addClass('active')
                } else {
                  this.$notify({
                    title: '错误',
                    message: res.data.msg,
                    type: 'error'
                  })
                }
              })
              .catch(err => {
                this.$notify({
                  title: '错误',
                  message: '服务器出错',
                  type: 'error'
                })
              })
          },
        }
      })
    })
}()