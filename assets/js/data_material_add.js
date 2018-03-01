! function () {
  $(document)
    .ready(() => {

      new Vue({
        el: '#dataMaterialAdd',
        data: {
          materialForm: {
            name: '',
            parameter: '',
            model: '',
            manufacturer: '',
            unit: ''
          }
        },
        mounted() {
          this.materialForm.name = $('#materialName').val()
          this.materialForm.parameter = $('#materialParameter').val()
          this.materialForm.model = $('#materialModel').val()
          this.materialForm.manufacturer = $('#materialManufacturer').val()
          this.materialForm.unit = $('#materialUnit').val()
        },
        methods: {
          //提交
          submit() {
            for (let it in this.materialForm) {
              this.materialForm[it] = ''
            }
            console.log(this.materialForm)
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