! function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? (module.exports = factory()) :
    typeof define === 'function' && define.amd ? define(factory) : (global._schemas = factory())
}(window, function () {

  //立项项目
  const projects = {
    signDate: '', //立项日期
    name: '', //项目名
    partyA: '', //甲方
    amount: '', //项目总额
    completeDate: '', //完工日期
    manager: '', //项目经理
    maintain: '', //维护条件
    masterCompany: [{ //主合同中标情况 { name, amount, remark }
      id: 1
    }],
    subCompany: [{ //分包情况  { name, amount, remark }
      id: 1
    }],
    masterContract: [{ //主合同情况 { amount, details }，可追加
      id: 1,
      amount: '',
      details: [{ //{ name, tax, amount, remark }
        id: 1
      }]
    }],
    subContract: [{ //分包合同情况 { amount, details }, 可追加
      id: 1,
      amount: '',
      details: [{ // { name, tax, amount, remark }
        id: 1
      }]
    }],
    margins: [{ //保证金情况 --- 保函 / 付款  { guarantee_company, guarantee_amount, guarantee_date, guarantee_cost, guarantee_others, payment_date, payment_amount, payment_payee, payment_bank, payment_account, payment_recycle}
      id: 1
    }],
    paymentConditions: [{ //收款条件 { rate, condition, expected }
      id: 1
    }],
    contracts: [] //合同上传 { name, url }
  }

  //项目预算
  const budget = {
    id: 1, //id
    name: '', //物料名称
    parameter: '', //参数
    model: '', //型号
    manufacturer: '', //生产厂家
    unit: '', //单位
    price: '', //单价
    quantity: '', //数量
    amount: '', //金额
    type: '', //物料  / 工程 / 其他
  }

  const budget_type = [{
      id: 1,
      name: '物料',
    },
    {
      id: 2,
      name: '工程',
    },
    {
      id: 3,
      name: '其他',
    }
  ]

  const budget_type_reverse = {
    1: '物料',
    2: '工程',
    3: '其他'
  }

  //element-ui 日期选择格式
  const datePickerOption = {
    shortcuts: [{
      text: '最近一周',
      onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
        picker.$emit('pick', [start, end]);
      }
    }, {
      text: '最近一个月',
      onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
        picker.$emit('pick', [start, end]);
      }
    }, {
      text: '最近三个月',
      onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
        picker.$emit('pick', [start, end]);
      }
    }]
  }

  //收款提示
  const checkTips = {
    margins: [{ //date, amount, payee, remark
      id: 1,
    }],
    requirepayment: [{ //date, amount, company, remark
      id: 1,
    }]
  }

  //开票
  const checkInvoice = {
    company: '', //付款单位
    date: '', //开票日期
    tax: '', //税率
    amount: '', //开票金额
    invoices: [ //  number, amount, tax_amount, clear_amount, summary
      {
        id: 1,
      }
    ]
  }

  //验收收款
  const checkCollect = {
    margins: {
      payee: '',
      date: '',
      amount: '',
      bank: '',
      account: ''
    },
    masterContract: {
      payee: '',
      date: '',
      amount: '',
      bank: '',
      account: ''
    },
    subContract: {
      payee: '',
      date: '',
      amount: '',
      bank: '',
      account: ''
    },
    subCompany: {
      date: '',
      amount: '',
    }
  }

  //预算内采购
  const budgetary_buy = {
    date: '', //日期
    supplier: { //供应商: 名称, 银行, 银行账号
      name: '',
      bank: '',
      account: ''
    },
    amount: '', //当前物料采购总金额
    project_id: '', //项目 id
    project_content: '', //项目内容
    invoice_condition: '', //发票条件
    payment_condition: '', //付款条件
    list: [], //采购物料清单列表： 物料 { 名称，性能， 型号， 生产厂家， 单位，单价， 数量}, 已采购数量， 剩余未采购数量， 新信息 { 本次数量，本次单价，本次金额，截至日期，保修时间 }
    contracts: [] //采购合同：名称
  }


  //预算外采购 第一步
  const extrabudgetary = {
    date: '', //日期
    supplier: { //供应商: 名称, 银行, 银行账号
      name: '',
      bank: '',
      account: ''
    },
    amount: '', //当前物料采购总金额
    project_id: '', //项目 id
    project_content: '', //项目内容
    invoice_condition: '', //发票条件
    payment_condition: '', //付款条件
    list: [], //采购清单
    contracts: [] //采购合同
  }

  const invoiceCreate = {
    date: '', //收票日期
    operator: '', //收票经办人
    list: [{ // date, type, number, amount_without_tax, tax, amount
      id: 1
    }]
  }

  // schemas
  const schemas = {
    projects,
    budget,
    budget_type,
    datePickerOption,
    checkTips,
    checkInvoice,
    checkCollect,
    budget_type_reverse,
    budgetary_buy,
    extrabudgetary,
    invoiceCreate
  }

  return schemas
})