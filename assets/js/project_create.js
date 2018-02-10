! function () {
  $(document)
    .ready(function () {

      const contractContent = JSON.parse($('#contractContent').text())
      const contractTax = JSON.parse($('#contractTax').text())

      function idSearch(value) {
        let newObj = {}
        for (let it of value) {
          newObj[it.id] = it.name
        }
        return newObj
      }
      const TaxIDMap = idSearch(contractTax)
      const ContentIDMap = idSearch(contractContent)

      new Vue({
        el: '#projectCreate',
        data: {
          project: _schemas.projects,
          contractContent,
          contractTax,
          TaxIDMap,
          ContentIDMap
        },
        mounted() {
          $('#projectCreate').removeClass('invisible')
        },
        computed: {
          sumAmount() {
            const vm = this
            const masterContract = vm.project.masterContract
            const subContract = vm.project.subContract
            let sum = 0
            let result = []

            function calc(name, value) {
              if (value.length < 1) {
                return false
              }
              value.forEach((item, index) => {
                const amount = item.amount ? parseFloat(item.amount) : 0
                sum += amount
                result.push({
                  head: index === 0,
                  id: name + item.id,
                  amount: amount.toLocaleString('en-US'),
                  type: name
                })
              })
            }

            calc('m', masterContract)
            calc('s', subContract)

            return {
              sum: sum.toLocaleString('en-US'),
              result
            }
          },

          sumContent() {
            const vm = this
            const masterContract = vm.project.masterContract
            const subContract = vm.project.subContract
            let sum = 0
            let resultObj = {}
            let result = []
            if (!masterContract || !subContract) {
              return undefined
            }

            function calc(value) {
              value.forEach((father, fatherIndex) => {
                const details = father.details
                if (!details || details.length < 1) {
                  return false
                }
                details.forEach((item, index) => {
                  const amount = item.amount ? parseFloat(item.amount) : 0
                  sum += amount
                  if (typeof item.name !== 'undefined') {
                    const trueName = vm.ContentIDMap[item.name]
                    resultObj[trueName] = resultObj[trueName] ? resultObj[trueName] + amount : amount
                  }
                })
              })
            }

            calc(masterContract)
            calc(subContract)

            for (let it in resultObj) {
              result.push({
                name: it,
                amount: resultObj[it].toLocaleString('en-US')
              })
            }

            return {
              sum: sum.toLocaleString('en-US'),
              result
            }
          },

          sumMargins() {
            const vm = this
            const margins = vm.project.margins
            let sum = {
              sumGuaranteeAmount: 0,
              sumGuaranteeCost: 0,
              sumPaymentCost: 0,
            }

            if (margins.length < 1) {
              return sum
            }

            margins.forEach((item, index) => {
              sum.sumGuaranteeAmount += item.guarantee_amount ? parseFloat(item.guarantee_amount) : 0
              sum.sumGuaranteeCost += item.guarantee_cost ? parseFloat(item.guarantee_cost) : 0
              sum.sumPaymentCost += item.payment_amount ? parseFloat(item.payment_amount) : 0
            })
            return sum
          },

          sumPaymentConditions() {
            const vm = this
            const payment = vm.project.paymentConditions
            let sum = 0

            if (payment.length < 1) {
              return sum
            }

            payment.forEach((item, index) => {
              sum += item.expected ? parseFloat(item.expected) : 0
            })
            return sum
          }
        },
        methods: {

          //第一层数据操作
          addFirstItem(name) {
            const project = this.project[name]
            const length = project.length
            let id
            if (length > 0) {
              id = project[length - 1].id + 1
            } else {
              id = 1
            }
            if (name === 'masterContract' || name === 'subContract') {
              this.project[name].push({
                id,
                details: new Array()
              })
            } else {
              this.project[name].push({
                id
              })
            }
          },

          //第一层数据操作，删除
          deleteFirstItem(name, item, index) {
            this.project[name].splice(index, 1)
          },

          //第二层数据操作
          addSecondItem(name, index) {
            let details = this.project[name][index].details || []
            const length = details.length
            let id
            if (length > 0) {
              id = details[length - 1].id + 1
            } else {
              id = 1
            }
            this.project[name][index].details.push({
              id
            })
          },

          //第二层数据操作，删除
          deleteSecondItem(name, index, subIndex, item) {
            this.project[name][index].details.splice(subIndex, 1)
          },

          //文件上传
          fileUpload(e) {
            const files = e.target.files
            let fileArr = []
            let formData = new FormData()
            for (let file of files) {
              this.project.contracts.push({
                id: file.size,
                name: file.name
              })
              formData.append('image', file)
            }
          }
        }
      })
    })
}()