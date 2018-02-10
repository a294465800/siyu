! function () {
  $(document)
    .ready(() => {
      new Vue({
        el: '#checkCollect',
        data: {
          collectForm: _schemas.checkCollect
        },
        mounted() {
          $('.tabular.menu .item').tab()
          $('#checkCollect').removeClass('invisible')
        },
        methods: {

          //数据校验
          checkSubmit(name) {
            const vm = this
            const data = vm.collectForm[name]

            for (let it in data) {
              if (typeof data[it] === 'undefined' || data[it] === '') {

                vm.$notify.error({
                  title: '错误',
                  message: '请确保已填写所有内容！'
                })
                return false
              }
            }

            switch (name) {
              case 'margins':
                vm.marginsSubmit(name)
                break
              case 'masterContract':
                vm.masterContractSubmit(name)
                break
              case 'subContract':
                vm.subContractSubmit(name)
                break
              case 'subCompany':
                vm.subCompanySubmit(name)
                break
              default:
                return false
            }
          },

          //清空数据
          clearData(name) {
            for (let it in this.collectForm[name]) {
              this.collectForm[name][it] = ''
            }
          },

          //保证金提交
          marginsSubmit(name) {
            const vm = this
            this.clearData(name)
            vm.$notify.success({
              title: '成功',
              message: '提交成功！'
            })
          },

          //主合同提交
          marginsSubmit(name) {
            const vm = this
            this.clearData(name)
            vm.$notify.success({
              title: '成功',
              message: '提交成功！'
            })
          },

          //分包合同提交
          marginsSubmit(name) {
            const vm = this
            this.clearData(name)
            vm.$notify.success({
              title: '成功',
              message: '提交成功！'
            })
          },

          //发包公司提交
          marginsSubmit(name) {
            const vm = this
            this.clearData(name)
            vm.$notify.success({
              title: '成功',
              message: '提交成功！'
            })
          }
        }
      })
    })
}()