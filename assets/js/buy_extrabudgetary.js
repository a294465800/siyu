! function () {
  $(document)
    .ready(() => {

      new Vue({
        el: '#buyExtrabudgetary',
        data: {
          project: {
            content: '',
            number: ''
          },

          commodities: [],

          //预算外采购表结构
          extrabudgetary: _schemas.extrabudgetary,

          //供应商
          suppliers: [{
              id: 1,
              name: '和桥开发商',
              bank: '中国银行',
              account: 63242362342342343256,
            },
            {
              id: 2,
              name: '永益供应商',
              bank: '广发银行',
              account: 63242362342342343256,
            },
            {
              id: 3,
              name: '乐音货行',
              bank: '平安银行',
              account: 62343252342323413423,
            }
          ],

          //物料列表
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
          //新增物料
          newMaterial: {}
        },

        mounted() {
          this.commodities = this.loadAll()
          this.extrabudgetary.date = _helper.timeFormat(new Date(), 'YYYY-MM-DD')
          $('#buyExtrabudgetary').removeClass('invisible')
        },
        methods: {
          //项目自动提示函数
          querySearch(queryString, cb) {
            var commodities = this.commodities
            var results = queryString ? commodities.filter(this.createFilter(queryString)) : commodities;
            // 调用 callback 返回建议列表的数据
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
              cb(results);
            }, 1000 * Math.random());
          },
          createFilter(queryString) {
            return (restaurant) => {
              return (restaurant.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
          },
          loadAll() {
            return [{
                "id": 1,
                "name": "三全鲜食（北新泾店）",
                "parameter": "这些是一些参数和性能数据",
                "model": "型号一",
                "unit": "间",
                "address": "长宁区新渔路144号"
              },
              {
                "id": 2,
                "name": "Hot honey 首尔炸鸡（仙霞路）",
                "parameter": "这些是一些参数和性能数据",
                "model": "型号二",
                "unit": "个",
                "address": "上海市长宁区淞虹路661号"
              },
              {
                "id": 3,
                "name": "新旺角茶餐厅",
                "parameter": "这些是一些参数和性能数据",
                "model": "型号三",
                "unit": "只",
                "address": "上海市普陀区真北路988号创邑金沙谷6号楼113"
              },
              {
                "id": 4,
                "name": "泷千家(天山西路店)",
                "parameter": "这些是一些参数和性能数据",
                "model": "型号四",
                "unit": "件",
                "address": "天山西路438号"
              },
              {
                "id": 5,
                "name": "胖仙女纸杯蛋糕（上海凌空店）",
                "parameter": "这些是一些参数和性能数据",
                "model": "型号五",
                "unit": "间",
                "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101"
              },
              {
                "id": 6,
                "name": "贡茶",
                "parameter": "这些是一些参数和性能数据",
                "model": "型号六",
                "unit": "间",
                "address": "上海市长宁区金钟路633号"
              },
              {
                "id": 7,
                "name": "豪大大香鸡排超级奶爸",
                "parameter": "这些是一些参数和性能数据",
                "model": "型号七",
                "unit": "间",
                "address": "上海市嘉定区曹安公路曹安路1685号"
              },
              {
                "id": 8,
                "name": "茶芝兰（奶茶，手抓饼）",
                "parameter": "这些是一些参数和性能数据",
                "model": "型号八",
                "unit": "间",
                "address": "上海市普陀区同普路1435号"
              },
            ]
          },
          handleSelect(item) {
            this.project.content = item.name
            this.project.number = item.id
          },

          //供应商输入提示
          handleSelectSupplier(item) {
            this.extrabudgetary.supplier = item
          },
          querySearchSupplier(queryString, cb) {
            const suppliers = this.suppliers
            const results = queryString ? suppliers.filter(this.createFilterSupplier(queryString)) : suppliers;
            // 调用 callback 返回建议列表的数据
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
              cb(results);
            }, 1000 * Math.random());
          },
          createFilterSupplier(queryString) {
            return (suppliers) => {
              return (suppliers.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
          },

          //添加物料
          addMaterial() {
            const list = this.extrabudgetary.list
            const newMaterial = this.newMaterial
            const data = {
              id: list.length > 0 ? list[list.length - 1].id ? list[list.length - 1].id + 1 : 1 : 1,
              __type: newMaterial.status ? 'old' : 'new',
              material: newMaterial.status ? newMaterial : {
                name: newMaterial.name
              },
            }
            this.extrabudgetary.list.push(data)
          },

          //物料自动提示函数

          querySearchMaterial(queryString, cb) {
            var materials = this.materials
            var results = queryString ? materials.filter(this.createFilterMaterial(queryString)) : materials;
            // 调用 callback 返回建议列表的数据
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
              cb(results);
            }, 1000 * Math.random());
          },
          createFilterMaterial(queryString) {
            return (material) => {
              return (material.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
          },
          handleSelectMaterial(item) {
            this.newMaterial = Object.assign({}, item)
            this.newMaterial.status = true
          },
          materialInput() {
            this.newMaterial.status = false
          },

          //删除项
          deleteItem(name, item, index) {
            this.extrabudgetary[name].splice(index, 1)
          },

          //合同上传
          uploadContract(e) {
            const files = e.target.files
            if (files.length < 1) {
              return
            }
            const contracts = this.extrabudgetary.contracts
            for (let i = 0; i < files.length; i++) {
              const data = {
                id: contracts.length > 0 ? contracts[contracts.length - 1].id ? contracts[contracts.length - 1].id + 1 : 1 : 1,
                name: files[i].name,
                url: 'http://xxx.com/upload/' + files[i].name
              }
              this.extrabudgetary.contracts.push(data)
            }
          },

          //提交
          submitForm(){}

        }
      })
    })
}()