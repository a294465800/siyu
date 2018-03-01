! function () {
  $(document)
    .ready(() => {

      new Vue({
        el: '#navbar',
        data: {
          navActive: 'dataTeam'
        },
        mounted() {
          $('#navbar').removeClass('invisible')
        },
        methods: {}
      })
    })
}()