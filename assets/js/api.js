! function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? (module.exports = factory()) :
    typeof define === 'function' && define.amd ? define(factory) : (global._http = factory())
}(window, function () {

  const url = 'http://119.23.202.220:8080'

  class ProjectManager {
    constructor() {
      this._http = axios.create({
        baseURL: url,
        withCredentials: true
      })
      this.dataMethodDefaults = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        transformRequest: [function (data) {
          return Qs.stringify(data)
        }]
      }
    }


    createType(data = {}) {
      return this._http.post('/project/type/create', data, this.dataMethodDefaults)
    }

    // getUser(id) {
    //   if (!id) {
    //     return Promise.reject(new Error(`getUser：id(${id})无效`))
    //   }
    //   return this._http.get(`/users/${id}`)
    // }

    // createUser(data = {}) {
    //   if (!data || !Object.keys(data).length) {
    //     return Promise.reject(new Error('createUser：提交的数据无效'))
    //   }
    //   return this._http.post('/users', data, this.dataMethodDefaults)
    // }
  }

  const http = {
    ProjectManager: new ProjectManager()
  }

  return http

})