! function () {
  $(document)
    .ready(() => {
      new Vue({
        el: '#budgetaryBuy',
        data: {
          budgetary_buy: _schemas.budgetary_buy,

          invoiceType: [],

          suppliers: [{
              id: 1,
              name: '供货商一',
              bank: '中国银行',
              account: 63432423423423234
            },
            {
              id: 2,
              name: '供货商二',
              bank: '平安银行',
              account: 63432523123423234
            },
            {
              id: 3,
              name: '供货商三',
              bank: '广发银行',
              account: 63432423213123234
            },
            {
              id: 4,
              name: '供货商四',
              bank: '建设银行',
              account: 63452131252133234
            }
          ],

          //物料
          materials: [{
              id: 1,
              name: '物料一',
              parameter: '参数一',
              model: '型号一',
              manufacturer: '厂家一',
              unit: '个',
              price: 253,
              quantity: 2534,
              buy_number: 1500,
              left_number: 1034,
            },
            {
              id: 2,
              name: '物料二',
              parameter: '参数二',
              model: '型号二',
              manufacturer: '厂家二',
              unit: '件',
              price: 2542,
              quantity: 500,
              buy_number: 300,
              left_number: 200,
            },
            {
              id: 4,
              name: '物料三',
              parameter: '参数三',
              model: '型号三',
              manufacturer: '厂家三',
              unit: '间',
              price: 123,
              quantity: 5000,
              buy_number: 2300,
              left_number: 2700,
            },
            {
              id: 3,
              name: '物料四',
              parameter: '参数四',
              model: '型号四',
              manufacturer: '厂家四',
              unit: '间',
              price: 542,
              quantity: 5000,
              buy_number: 5000,
              left_number: 0,
            }
          ],

          //复核人dialog
          checkedMen: [],
          menList: [{
              id: 1,
              name: '张先生'
            },
            {
              id: 2,
              name: '陈一发'
            },
            {
              id: 3,
              name: '刘芳芳'
            },
            {
              id: 4,
              name: '乌达奇'
            },
            {
              id: 5,
              name: '何求'
            }
          ],
        },
        mounted() {
          this.budgetary_buy.info.date = _helper.timeFormat(new Date(), 'YYYY-MM-DD')
          const invoiceType = $('#invoiceType').text().trim()
          this.invoiceType = invoiceType === '' ? [] : JSON.parse(invoiceType)
          this.budgetary_buy.project_id = $('#projectId').val()
          $('#budgetaryBuy').removeClass('invisible')
        },

        computed: {
          materialsComputed() {
            const vm = this
            if (vm.materials.length < 1) {
              return []
            }
            if (vm.budgetary_buy.lists.length < 1) {
              const dataStr = JSON.stringify(vm.materials)
              return JSON.parse(dataStr)
            }

            const dataStr = JSON.stringify(vm.materials)
            let result = JSON.parse(dataStr)
            let list = vm.budgetary_buy.lists
            let sum = 0
            for (let i in list) {
              let item = list[i]
              let material = item.material
              if (typeof item.real_quantity === 'undefined') break
              sum += parseFloat(item.real_amount || 0)
              let materialIndex = material.index
              result[materialIndex].left_number -= parseInt(item.real_quantity || 0)
            }
            vm.budgetary_buy.amount = sum || 0
            return result
          }
        },
        methods: {

          //供货商搜索
          querySearchSupplier(queryString, cb) {
            var suppliers = this.suppliers
            var results = queryString ? suppliers.filter(this.createFilterSupplier(queryString)) : suppliers;
            // 调用 callback 返回建议列表的数据
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
              cb(results);
            }, 1000 * Math.random());
          },
          createFilterSupplier(queryString) {
            return (item) => {
              return (item.id.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
          },
          handleSelectSupplier(item) {
            this.budgetary_buy.supplier.id = item.id
            this.budgetary_buy.supplier.name = item.name
            this.budgetary_buy.supplier.bank = item.bank
            this.budgetary_buy.supplier.account = item.account
          },

          //物料选择
          addMaterial(item, index) {
            const list = this.budgetary_buy.lists
            let data = {
              id: list.length > 0 ? list[list.length - 1].id ? list[list.length - 1].id + 1 : 1 : 1,
              material: item
            }
            data.material.index = index
            this.budgetary_buy.lists.push(data)
          },

          //删除项
          deleteItem(name, item, index) {
            this.budgetary_buy[name].splice(index, 1)
          },

          //合同上传
          uploadContract(e) {
            const files = e.target.files
            if (files.length < 1) {
              return
            }
            let fileArr = []
            for (let file of files) {
              let formData = new FormData()
              formData.append('image', file)
              _http.UploadManager.createUpload(formData)
                .then(res => {
                  if (res.data.code === '200') {
                    const resData = res.data.data
                    this.budgetary_buy.contracts.push({
                      id: resData.size,
                      name: resData.name,
                      href: resData.url
                    })
                    this.$notify({
                      title: '成功',
                      message: `${resData.name} 上传成功`,
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
          },

          //提交
          submitForm() {
            _http.BuyManager.createPurchase(this.budgetary_buy)
              .then(res => {
                if (res.data.code === '200') {
                  this.$notify.success({
                    title: '成功',
                    message: '提交成功！'
                  })
                  $('.ui.dimmer').addClass('active')
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
          },

          //选择审核人
          handleCheckManChange(value) {
            console.log(this.checkedMen)
          },

          //提交审核人
          confirmRecheck() {
            this.$notify({
              title: '成功',
              message: '已选择了复核人',
              type: 'success'
            })
            $('.ui.dimmer').removeClass('active')
          }
        }
      })
    })
}()