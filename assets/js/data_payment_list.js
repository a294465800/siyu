! function () {
  $(document)
    .ready(() => {

      new Vue({
        el: '#navbar',
        data: {
          navActive: 'dataPayment'
        },
        mounted() {
          $('#navbar').removeClass('invisible')
        },
        methods: {}
      })
    })
}()