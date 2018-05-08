! function () {
  $(document)
    .ready(() => {
      new Vue({
        el: '#budgetaryCheck',
        data: {
          checkedMen: [],
          menList: [],
          selectData: {
            id: ''
          }
        },

        mounted() {
          const vm = this
          $('#budgetaryCheckRecheck').on('click', function () {
            vm.$confirm('确定复核, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              })
              .then(() => {
                _http.BuyManager.createCheck({
                    id: $(this).data('id')
                  })
                  .then(res => {
                    if (res.data.code === '200') {
                      this.selectData.id = res.data.data
                      vm.$message({
                        type: 'success',
                        message: '已复核!'
                      })
                      $('.ui.dimmer').addClass('active')
                    } else {
                      vm.$notify({
                        title: '错误',
                        message: res.data.msg,
                        type: 'error'
                      })
                    }
                  })
                  .catch(err => {
                    vm.$notify({
                      title: '错误',
                      message: '服务器出错',
                      type: 'error'
                    })
                  })
              })
              .catch(() => {
                vm.$message({
                  type: 'info',
                  message: '已取消'
                })
              })
          })

          
          $('#budgetaryCheckPass').on('click', function () {
            vm.$confirm('确定审批, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              })
              .then(() => {
                _http.BuyManager.createPass({
                    id: $(this).data('id')
                  })
                  .then(res => {
                    if (res.data.code === '200') {
                      vm.$message({
                        type: 'success',
                        message: '已审批!'
                      })
                      $('.ui.dimmer').addClass('active')
                    } else {
                      vm.$notify({
                        title: '错误',
                        message: res.data.msg,
                        type: 'error'
                      })
                    }
                  })
                  .catch(err => {
                    vm.$notify({
                      title: '错误',
                      message: '服务器出错',
                      type: 'error'
                    })
                  })
              })
              .catch(() => {
                vm.$message({
                  type: 'info',
                  message: '已取消'
                })
              })
          })
        },
        methods: {
          //选择审批人
          handleCheckManChange(value) {
            console.log(this.checkedMen)
          },

          //提交审批人
          confirmRecheck() {
            this.selectData.users = this.checkedMen
            _http.BuyManager.selectPass(this.selectData)
              .then(res => {
                if (res.data.code === '200') {
                  this.$notify({
                    title: '成功',
                    message: '已选择了审批人',
                    type: 'success'
                  })
                  $('.ui.dimmer').removeClass('active')
                } else {
                  vm.$notify({
                    title: '错误',
                    message: res.data.msg,
                    type: 'error'
                  })
                }
              })
              .catch(err => {
                vm.$notify({
                  title: '错误',
                  message: '服务器出错',
                  type: 'error'
                })
              })
          }
        }
      })
    })
}()