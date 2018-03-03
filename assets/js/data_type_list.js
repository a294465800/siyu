! function () {
  $(document)
    .ready(() => {

      new Vue({
        el: '#navbar',
        data: {
          navActive: 'dataType'
        },
        mounted() {
          $('#navbar').removeClass('invisible')
        },
        methods: {}
      })
    })
}()