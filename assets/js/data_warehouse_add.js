! function () {
  $(document)
    .ready(() => {

      new Vue({
        el: '#dataWarehouseAdd',
        data: {
          warehouseForm: {
            name: '',
            address: '',
            manager: ''
          }
        },
        mounted() {
          this.warehouseForm.name = $('#warehouseName').val()
          this.warehouseForm.address = $('#warehouseAddress').val()
          this.warehouseForm.manager = $('#warehouseManager').val()
        },
        methods: {
          //提交
          submit() {
            for (let it in this.warehouseForm) {
              this.warehouseForm[it] = ''
            }
            console.log(this.warehouseForm)
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