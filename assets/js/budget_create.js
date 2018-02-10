! function () {
  $(document)
    .ready(() => {
      new Vue({
        el: '#budgetCreate',
        data: {
          budgetType: _schemas.budget_type,
          newBudget: _schemas.budget,
          budgetForm: new Array()
        },
        mounted() {
          $('#budgetCreate').removeClass('invisible')
        },
        methods: {

          //新增预算
          addNewBudget() {
            let newData = Object.assign({}, this.newBudget)
            for (let it in newData) {
              if (newData[it] === '' || typeof newData[it] === 'undefined') {
                this.$notify.error({
                  title: '错误',
                  message: '请确保已填写所有项！'
                })
                return false
              }
            }
            this.budgetForm.push(newData)

            for (let it in this.newBudget) {
              if (it !== 'id') {
                this.newBudget[it] = ''
              } else if (it === 'id') {
                this.newBudget.id++
              }
            }
            this.$notify.success({
              title: '成功',
              message: '已添加'
            })
          },

          //删除预算
          deleteBudget(item, index) {
            this.budgetForm.splice(index, 1)
          }
        }
      })
    })
}()