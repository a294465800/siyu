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

          bankList: []

        },
        mounted() {
          this.payForm.id = $('#payId').val() || ''
          this.payForm.manager = $('#manager').val() || ''
          this.payForm.pay_date = _helper.timeFormat(new Date(), 'YYYY-MM-DD')
          const bankList = $('#bankList').text().trim()
          this.bankList = bankList === '' ?[]:JSON.parse(bankList)
          $('#payPay').removeClass('invisible')
        },
        methods: {

          selectBank(index){
            const value = this.bankList[index]
            this.payForm.bank = value.name
            this.payForm.account = value.account
          },

          //提交
          submit() {
            _http.PaymentManager.createPayPay(this.payForm)
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