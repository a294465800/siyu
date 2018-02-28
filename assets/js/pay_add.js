! function () {
  $(document)
    .ready(() => {
      new Vue({
        el: '#payAdd',
        data: {

          payForm: {
            people: '',
            date: '',
            amount: '',
            usage: '',
            project_id: '',
            project_content: '',
          },

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

          //项目
          projects: [{
              id: 1,
              content: '这是内容一',
              manager: '陈经理'
            },
            {
              id: 2,
              content: '这是内容二',
              manager: '刘经理'
            },
            {
              id: 3,
              content: '这是内容三',
              manager: '张经理'
            }
          ]
        },
        mounted() {
          $('#payAdd').removeClass('invisible')
          this.payForm.date = _helper.timeFormat(new Date(), 'YYYY-MM-DD')
        },
        methods: {

          //项目搜索
          querySearchProjectId(queryString, cb) {
            var projects = this.projects
            var results = queryString ? projects.filter(this.createFilterProjectId(queryString)) : projects;
            // 调用 callback 返回建议列表的数据
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
              cb(results);
            }, 1000 * Math.random());
          },
          createFilterProjectId(queryString) {
            return (restaurant) => {
              return (restaurant.id.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
          },
          handleSelectProjectId(item) {
            this.payForm.project_id = item.id
            this.payForm.project_content = item.content
          },

          querySearchProjectContent(queryString, cb) {
            var projects = this.projects
            var results = queryString ? projects.filter(this.createFilterProjectContent(queryString)) : projects;
            // 调用 callback 返回建议列表的数据
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
              cb(results);
            }, 1000 * Math.random());
          },
          createFilterProjectContent(queryString) {
            return (restaurant) => {
              return (restaurant.content.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
          },
          handleSelectProjectContent(item) {
            this.payForm.project_id = item.id
            this.payForm.project_content = item.content
          },

          //提交
          submit() {
            this.$notify({
              title: '成功',
              message: '提交成功',
              type: 'success'
            })
            $('.ui.dimmer').addClass('active')
          },
          //选择审批人
          handleCheckManChange(value) {
            console.log(this.checkedMen)
          },

          //提交审批人
          confirmRecheck() {
            this.$notify({
              title: '成功',
              message: '已选择了审批人',
              type: 'success'
            })
            $('.ui.dimmer').removeClass('active')
          }
        }
      })
    })
}()