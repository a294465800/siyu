! function () {
  $(document)
    .ready(() => {

      new Vue({
        el: '#navbar',
        data: {
          navActive: 'dataSupplier'
        },
        mounted() {
          $('#navbar').removeClass('invisible')
        },
        methods: {}
      })
    })
}()