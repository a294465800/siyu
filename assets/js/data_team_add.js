! function () {
  $(document)
    .ready(() => {

      new Vue({
        el: '#dataTeamAdd',
        data: {
          teamForm: {
            name: '',
            manager: '',
          }
        },
        mounted() {
          this.teamForm.name = $('#teamName').val()
          this.teamForm.manager = $('#teamManager').val()
        },
        methods: {
          //提交
          submit() {
            for (let it in this.teamForm) {
              this.teamForm[it] = ''
            }
            console.log(this.teamForm)
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