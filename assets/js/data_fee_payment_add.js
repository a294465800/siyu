! function () {
  $(document)
    .ready(() => {

      new Vue({
        el: '#dataPaymentAdd',
        data: {
          paymentForm: {
            id: '',
            title: '',
            details: []
          },
          inputValue: '',
          inputVisible: false
        },
        mounted() {
          const editData = $('#editData').text().trim()
          if(editData !== ''){
            const data = JSON.parse(editData)
            this.paymentForm.id = data.id
            this.paymentForm.title = data.title
            this.paymentForm.details = data.details
          }
          $('#dataPaymentAdd').removeClass('invisible')
        },
        methods: {

          //移除标签
          handleClose(tag, index) {
            this.paymentForm.details.splice(index, 1)
          },
          showInput() {
            this.inputVisible = true
            this.$nextTick(_ => {
              this.$refs.saveTagInput.$refs.input.focus()
            })
          },
          handleInputConfirm() {
            let inputValue = this.inputValue
            if (inputValue) {
              this.paymentForm.details.push(inputValue)
            }
            this.inputVisible = false
            this.inputValue = ''
          },
          //提交
          submit() {
            _http.PaymentManager.createFeePay(this.paymentForm)
              .then(res => {
                if (res.data.code === '200') {
                  this.paymentForm.title = ''
                  this.paymentForm.details = []
                  this.$notify({
                    title: '成功',
                    message: '提交成功',
                    type: 'success'
                  })
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