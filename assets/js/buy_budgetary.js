! function () {
  $(document)
    .ready(() => {
      new Vue({
        el: '#buyBudgetary',
        data: {
          project: {
            content: '',
            number: ''
          },
          commodities: [],

          materialType: _schemas.budget_type_reverse,
          //预算物料列表
          preMaterialsList: {
            count1: 123123,
            count2: 4224231,
            count3: 2414214124,
            data: [{
                id: 1,
                name: '物料一',
                parameter: '参数一。性能一',
                model: '型号一',
                manufacturer: '厂家一',
                unit: '个',
                prePrice: 213,
                preQuantity: 21321,
                preAmount: 5213123,
                type: 1,
                realQuantity: 2431,
                realAmount: 52132,
                leftQuantity: 25321,
                leftAmount: 53213,
              },
              {
                id: 2,
                name: '物料二',
                parameter: '参数二。性能二',
                model: '型号二',
                manufacturer: '厂家二',
                unit: '件',
                prePrice: 213,
                preQuantity: 2413,
                preAmount: 52132312123,
                type: 2,
                realQuantity: 21,
                realAmount: 5212332,
                leftQuantity: 1223,
                leftAmount: 2423232,
              }
            ]
          },

          //物料 dialog
          materialsDialog: false,
          materialsDetail: {
            name: '物料一',
            parameter: '这是性能参数这是性能参数',
            model: 'ak-47',
            unit: '个',
            manufacturer: 'xxx厂家',
            pre: {
              quantity: 50,
              price: 500,
              amount: 52500
            },
            data: [{
                id: 1,
                number: 'CG123151231232',
                quantity: -5,
                price: 500,
                amount: -2500,
                manufacturer: 'aaa供货商'
              },
              {
                id: 2,
                number: 'CG123123242122',
                quantity: -50,
                price: 500,
                amount: -25000,
                manufacturer: 'bbb供货商'
              }
            ],
            left: {
              quantity: 0,
              amount: 0
            }
          }
        },
        mounted() {
          this.commodities = this.loadAll()
          $('#buyBudgetary').removeClass('invisible')
        },
        methods: {

          /**
           * 搜索相关
           */
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
          },


          //查询明细
          checkDetail(item, index) {
            this.materialsDialog = true
          }
        }
      })
    })
}()