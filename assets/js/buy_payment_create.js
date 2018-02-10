! function () {
  $(document)
    .ready(() => {
      new Vue({
        el: '#paymentCreate',
        data: {
          pay_date: ''
        },
        mounted() {
          this.pay_date = $('#hiddenDate').val() || ''
        },
      })
    })
}()