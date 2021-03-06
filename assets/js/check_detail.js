! function () {
  $(document)
    .ready(() => {

      new Vue({
        el: '#checkDetail',
        data: {

          //存放修改对象索引
          current: {
            marginRecyle: -1,
            requirement: -1,
            invoice: -1,
            subCompany: -1,
            masterContract: -1,
            subContract: -1
          },

          //存放修改对象数据
          editForm: {
            marginRecyle: {},
            requirement: {},
            invoice: {},
            subCompany: {},
            masterContract: {},
            subContract: {}
          },

          //保函 / 付款
          marginPay: {},

          //履约保证金
          marginRecyle: {},

          //预计请款
          requirement: {},

          //开票
          invoice: {},

          //开票公司
          invoiceCompany: [],

          //key--value copy
          invoiceCompanyCopy: {},

          //开票税率
          invoiceTax: [],

          //发包公司收款情况
          subCompany: {},

          //主合同收款
          masterContract: {},

          //分包合同收款
          subContract: {}
        },

        mounted() {
          this.init()
          this.invoiceCompanyCopy = this.copyData(this.invoiceCompany)
          console.log(this)

          $('#checkDetail').removeClass('invisible')

          function getTdData($td) {
            const length = $td.length
            let result = []
            $td.forEach((item, index) => {
              if (index >= length - 1) {

              } else {
                result.push($(item).text())
              }
            })
            return result
          }

          // function setTdData($td, data) {
          //   const length = $td.length
          //   $td.forEach((item, index) => {
          //     if (index >= length - 1) {

          //     } else {
          //       $(item).text() = data[index]
          //     }
          //   })
          // } 

          //保证金修改
          let margins = []
          let marginShowTr
          let marginEditTr
          $('.margin-edit').on('click', function () {
            marginShowTr = $(this).parents('tr')
            marginShowTr.hide()
            margins = getTdData(marginShowTr.find('td'))
          })
          $('.margin-save').on('click', function () {
            marginShowTr = $(this).parents('tr')
            marginShowTr.hide()
            margins = getTdData(marginShowTr.find('td'))
          })
        },

        computed: {

          //实际履约保证金合计
          marginCount() {
            if (!this.marginRecyle.data) {
              return 0
            }
            const data = this.marginRecyle.data
            let sum = 0
            data.forEach((item, index) => {
              sum += item.realAmount
            })
            return sum
          },

          //预计保证金
          preMarginCount() {
            if (!this.marginRecyle.data) {
              return 0
            }
            const data = this.marginRecyle.data
            let sum = 0
            data.forEach((item, index) => {
              sum += item.preAmount
            })
            return sum
          },

          //剩余保证金

          leftMarginCount() {
            return this.preMarginCount - this.marginCount
          },

          //请款合计
          requirementCount() {
            if (!this.requirement.data) {
              return 0
            }
            const data = this.requirement.data
            let sum = 0
            data.forEach((item, index) => {
              sum += item.amount
            })
            return sum
          },

          //收票合计
          invoiceCount() {
            if (!this.invoice.data) {
              return 0
            }
            const data = this.invoice.data
            let sum = 0
            data.forEach((item, index) => {
              sum += item.amount
            })
            return sum
          },

          //收票统计
          invoiceTaxCount() {
            if (!this.invoice.data) {
              return []
            }
            const vm = this
            const data = this.invoice.data
            let tmpObj = {}
            let result = new Array()
            data.forEach((item, index) => {
              const company = item.company.id
              const tax = item.tax.id
              if (tmpObj[company]) {
                if (tmpObj[company][tax]) {
                  tmpObj[company][tax] += item.amount
                } else {
                  tmpObj[company][tax] = item.amount
                }
              } else {
                tmpObj[company] = new Object({
                  [tax]: item.amount
                })
              }
            })
            for (let company in tmpObj) {
              let tmpResult = new Object()
              tmpResult.company = {
                id: company,
                name: vm.invoiceCompanyCopy[company]
              }
              tmpResult.result = tmpObj[company]
              tmpResult.count = 0
              for (let tax in tmpObj[company]) {
                tmpResult.count += tmpObj[company][tax]
              }
              result.push(tmpResult)
            }
            return result
          },


          //分包公司合计
          subCompanyCount() {
            if (!this.subCompany.data) {
              return 0
            }
            const data = this.subCompany.data
            let sum = 0
            data.forEach((item, index) => {
              sum += item.amount
            })
            return sum
          },

          //主合同合计
          masterContractCount() {
            if (!this.masterContract.data) {
              return 0
            }
            const data = this.masterContract.data
            let sum = 0
            data.forEach((item, index) => {
              sum += item.amount
            })
            return sum
          },

          //分包合同合计
          subContractCount() {
            if (!this.subContract.data) {
              return 0
            }
            const data = this.subContract.data
            let sum = 0
            data.forEach((item, index) => {
              sum += item.amount
            })
            return sum
          },
        },

        methods: {

          init() {

            const marginPay = $('#marginPay').text().trim()
            this.marginPay = marginPay === '' ? {} : JSON.parse(marginPay)

            const marginRecyle = $('#marginRecyle').text().trim()
            this.marginRecyle = marginRecyle === '' ? {} : JSON.parse(marginRecyle)

            const requirement = $('#requirement').text().trim()
            this.requirement = requirement === '' ? {} : JSON.parse(requirement)

            const invoice = $('#invoice').text().trim()
            this.invoice = invoice === '' ? {} : JSON.parse(invoice)

            const invoiceCompany = $('#invoiceCompany').text().trim()
            this.invoiceCompany = invoiceCompany === '' ? {} : JSON.parse(invoiceCompany)

            const invoiceTax = $('#invoiceTax').text().trim()
            this.invoiceTax = invoiceTax === '' ? {} : JSON.parse(invoiceTax)

            const subCompany = $('#subCompany').text().trim()
            this.subCompany = subCompany === '' ? {} : JSON.parse(subCompany)

            const masterContract = $('#masterContract').text().trim()
            this.masterContract = masterContract === '' ? {} : JSON.parse(masterContract)

            const subContract = $('#subContract').text().trim()
            this.subContract = subContract === '' ? {} : JSON.parse(subContract)

          },

          copyData(data) {
            let result = {}
            for (let it in data) {
              const id = data[it].id
              const value = data[it].value
              result[id] = value
            }
            return result
          },

          // 修改校验
          dataValidate(data) {
            for (let it in data) {
              if (data[it] === '') {
                this.$notify.error({
                  title: '错误',
                  message: '请确保已填写所有项！'
                })
                return false
              }
            }
            return true
          },

          //数据通用编辑  --- 编辑
          EditFnc(item, index, name) {
            this.editForm[name] = item
            this.current[name] = index
          },


          //履约保证金回收情况 --- 保存
          marginRecyleSave(item, index) {
            const data = this.editForm.marginRecyle
            if (this.dataValidate(data)) {
              this.$notify.success({
                title: '成功',
                message: '已修改'
              })
              this.current.marginRecyle = -1
            }
          },

          //请款 --- 保存
          requirementSave(item, index) {
            const data = this.editForm.requirement
            if (this.dataValidate(data)) {
              this.$notify.success({
                title: '成功',
                message: '已修改'
              })
              this.current.requirement = -1
            }
          },

          //开票 --- 保存
          invoiceSave(item, index) {
            const data = this.editForm.invoice
            if (this.dataValidate(data)) {
              this.$notify.success({
                title: '成功',
                message: '已修改'
              })
              this.current.invoice = -1
            }
          },

          //分包公司 --- 保存
          subCompanySave(item, index) {
            const data = this.editForm.subCompany
            if (this.dataValidate(data)) {
              this.$notify.success({
                title: '成功',
                message: '已修改'
              })
              this.current.subCompany = -1
            }
          },

          //主合同 --- 保存
          masterContractSave(item, index) {
            const data = this.editForm.masterContract
            if (this.dataValidate(data)) {
              this.$notify.success({
                title: '成功',
                message: '已修改'
              })
              this.current.masterContract = -1
            }
          },

          //分包合同 --- 保存
          subContractSave(item, index) {
            const data = this.editForm.subContract
            if (this.dataValidate(data)) {
              this.$notify.success({
                title: '成功',
                message: '已修改'
              })
              this.current.subContract = -1
            }
          }
        }
      })

      new Vue({
        el: '#projectCheckDialog',
        data: {
          currentType: 'masterContract',
          centerDialogVisible: false,

          map: {
            marginLeft: '预计回收',
            marginRight: '实际回收',
            finish: '预计请款',
            company: '发包公司',
            subContract: '分包合同',
            masterContract: '主合同'
          },

          unitMap: {
            marginLeft: 'pay_unit',
            marginRight: 'payee',
            finish: 'pay_unit',
            company: '',
            subContract: 'payee',
            masterContract: 'payee'
          },

          marginLeft: {
            pay_date: '',
            price: '',
            pay_unit: '',
            remark: ''
          },

          marginRight: {
            pay_date: '',
            price: '',
            payee: '',
            bank: '',
            account: ''
          },

          finish: {
            pay_date: '',
            price: '',
            pay_unit: '',
            remark: ''
          },

          company: {
            pay_date: '',
            remark: ''
          },

          subContract: {
            payee: '',
            pay_date: '',
            price: '',
            bank: '',
            account: ''
          },


          masterContract: {
            payee: '',
            pay_date: '',
            price: '',
            bank: '',
            account: ''
          },

          throttle: {
            unit_timer: null,
            bank_timer: null
          },

          currentId: '',
          project_id: '',

          invoice: {
            data: []
          }
        },
        mounted() {
          this.project_id = $('#projectId') || ""
          //点击修改按钮
          const self = this
          $('.edit-btn').on('click', function () {
            const $this = $(this)
            const type = $this.data('type')
            const id = $this.data('id')
            self.currentId = id
            self.currentType = type
            const apiUse = (type === 'marginLeft' || type === 'finish') ? 'getTip' : 'getCollect'
            //左侧和预计请款用 tips
            _http.CheckManager[apiUse]({
                id: id
              })
              .then(res => {
                if (res.data.code === '200') {
                  self[type] = res.data.data
                  self.centerDialogVisible = true
                } else {
                  this.$notify({
                    title: '错误',
                    message: res.data.msg || '未知错误',
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
          })
        },

        methods: {

          //单位搜索
          querySearchCompany(queryString, cb) {

            if (this.throttle.unit_timer) {
              clearTimeout(this.throttle.unit_timer)
            }
            this.throttle.unit_timer = setTimeout(() => {
              const searchKey = {
                payee: queryString,
                project_id: this.project_id || ''
              }
              _http.ProjectManager.searchProjectUnit(searchKey)
                .then(res => {
                  if (res.data.code === '200') {
                    cb(res.data.data)
                  } else {
                    this.$notify({
                      title: '错误',
                      message: res.data.msg || '未知错误',
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
            }, 500)
          },
          handleSelectCompany(item) {
            const currentType = this.currentType
            this[currentType][this.unitMap[currentType]] = item
          },

          //银行搜索
          querySearchBank(queryString, cb) {

            if (this.throttle.bank_timer) {
              clearTimeout(this.throttle.bank_timer)
            }
            this.throttle.bank_timer = setTimeout(() => {
              const searchKey = {
                name: queryString
              }
              _http.BankManager.searchBank(searchKey)
                .then(res => {
                  if (res.data.code === '200') {
                    cb(res.data.data)
                  } else {
                    this.$notify({
                      title: '错误',
                      message: res.data.msg || '未知错误',
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
            }, 500)
          },
          handleSelectBank(item) {
            const currentType = this.currentType
            this[currentType].bank = item.name
            this[currentType].account = item.account
          },


          submit() {
            const apiUse = (this.currentType === 'marginLeft' || this.currentType === 'finish') ? 'editTip' : 'editCollect'
            const postData = Object.assign({}, {
              id: this.currentId
            }, this[this.currentType])
            _http.CheckManager[apiUse](postData)
              .then(res => {
                if (res.data.code === '200') {
                  this.$notify.success({
                    title: '成功',
                    message: '已修改'
                  })
                  this.centerDialogVisible = false
                } else {
                  this.$notify({
                    title: '错误',
                    message: res.data.msg || '未知错误',
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