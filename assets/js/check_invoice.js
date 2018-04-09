! function () {
  $(document)
    .ready(() => {
      new Vue({
        el: '#checkInvoice',
        data: {
          invoiceForm: _schemas.checkInvoice,

          companies: [{
              id: 1,
              name: '单位A'
            },
            {
              id: 2,
              name: '单位B'
            },
            {
              id: 2,
              name: '单位C'
            }
          ],

          invoiceType: []
        },
        mounted() {
          $('#checkInvoice').removeClass('invisible')
          const invoiceType = $('#invoiceType').text().trim()
          this.invoiceType = invoiceType === '' ? [] : JSON.parse(invoiceType)
        },
        methods: {
          //单位搜索
          querySearchCompany(queryString, cb) {
            var companies = this.companies
            var results = queryString ? companies.filter(this.createFilterCompany(queryString)) : companies;
            // 调用 callback 返回建议列表的数据
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
              cb(results);
            }, 1000 * Math.random());
          },
          createFilterCompany(queryString) {
            return (item) => {
              return (item.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
          },
          handleSelectCompany(item) {
            this.invoiceForm.company_id = item.id
            this.invoiceForm.company = item.name
          },

          //删除第一层数据
          deleteItem(name, item, index) {
            this.invoiceForm[name].splice(index, 1)
          },

          //新增第一层数据
          addItem(name) {
            const invoiceForm = this.invoiceForm[name]
            const length = invoiceForm.length
            let id
            if (length > 0) {
              id = invoiceForm[length - 1].id + 1
            } else {
              id = 1
            }
            this.invoiceForm[name].push({
              id
            })
          },

          submit() {
            _http.CheckManager.createProjectInvoice(this.invoiceForm)
              .then(res => {
                if (res.data.code === '200') {
                  this.$notify({
                    title: '成功',
                    message: `提交成功`,
                    type: 'success'
                  })
                } else {
                  this.$notify({
                    title: '错误',
                    message: res.data.msg,
                    type: 'error'
                  })
                }
              })
              .catch(err => {
                this.$notify({
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