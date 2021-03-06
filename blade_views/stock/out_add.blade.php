<include src="../template/normalHeader.html">
  @title = 新增退货出库
</include>

<div class="ui breadcrumb">
  <a class="section">库存管理</a>
  <div class="divider"> / </div>
  <a class="section" href="../stock/out_list.html">退货出库清单</a>
  <div class="divider"> / </div>
  <div class="active section">新增退货出库</div>
</div>

<!-- <div style="display: none" id="test">{"code":"200","msg":"SUCCESS","data":{"purchase":{"id":4,"project_id":5,"number":"CG20180427004","date":"2018-04-27","supplier":"\u4e1c\u839e\u5e02\u62d3\u8baf\u7535\u5b50\u79d1\u6280\u6709\u9650\u516c\u53f8","supplier_id":5,"bank":"\u4e2d\u884c\u4e1c\u839e\u839e\u57ce\u652f\u884c","account":"669160743117","condition":"\u8d27\u5230\u4ed8\u6b3e","content":"\u589e\u503c\u7a0e\u53d1\u7968","type":2,"state":1,"check":0,"pass":0,"created_at":"2018-04-27 07:19:51","updated_at":"2018-04-27 07:19:51","project":{"id":5,"number":"XM20180424001","name":"\u5927\u6717\u4ea4\u8b66","PartyA":"\u5927\u6717\u4ea4\u8b66\u652f\u961f","price":1000000,"finishTime":1526342400,"pm":"\u674e","createTime":1522540800,"condition":"ABC","state":0,"acceptance_date":"2018-04-26","remark":"A","deadline":"2019-04-30","created_at":"2018-04-24 08:34:48","updated_at":"2018-04-26 09:00:58"},"price":43000},"purchaseList":[{"id":8,"purchase_id":4,"budget_id":0,"material_id":3,"number":5,"price":2000,"cost":10000,"warranty_date":"2018-04-27","warranty_time":"\u65e0","received":5,"need":0,"created_at":"2018-04-27 07:19:51","updated_at":"2018-04-27 07:19:51","material":{"id":3,"name":"\u6838\u5fc3\u8def\u7531\u5668","param":"\u5343\u5146\u591a\u6a21\u5149\u7ea4\u6a21\u5757\uff0c\u5149\u6a21\u5757-eSFP-GE-\u5355\u6a21\u6a21\u5757(1310nm,40km,LC)","model":"1.25Gbps\/1310nm","factory":"\u4e2d\u5174","unit":"\u4e2a","state":1,"created_at":"2018-04-25 02:41:01","updated_at":"2018-04-25 02:41:01"}},{"id":9,"purchase_id":4,"budget_id":0,"material_id":4,"number":10,"price":3000,"cost":30000,"warranty_date":"2018-04-27","warranty_time":"\u65e0","received":1,"need":9,"created_at":"2018-04-27 07:19:51","updated_at":"2018-05-03 02:37:13","material":{"id":4,"name":"24\u5149\u53e3\u4ea4\u6362\u673a","param":"\u4ea4\u6362\u5bb9\u91cf\u2265590Gbpss","model":"ZXR10 5928E-FI","factory":"\u4e2d\u5174","unit":"\u4e2a","state":1,"created_at":"2018-04-25 02:42:49","updated_at":"2018-04-25 02:42:49"}},{"id":7,"purchase_id":4,"budget_id":0,"material_id":6,"number":3,"price":1000,"cost":3000,"warranty_date":"2018-04-27","warranty_time":"\u65e0","received":3,"need":0,"created_at":"2018-04-27 07:19:51","updated_at":"2018-04-27 07:19:51","material":{"id":6,"name":"\u9632\u706b\u5899","param":"VPN\u6027\u80fd:IPSec VPN\u541e\u5410\u2265240Gbps\uff1bIPSEC VPN\u96a7\u9053\u6570\u226564\u4e07","model":"NGFW9000","factory":"\u5929\u878d\u4fe1","unit":"\u5957","state":1,"created_at":"2018-04-25 02:45:07","updated_at":"2018-04-25 02:45:07"}}],"record":[{"id":12,"number":"SHRK20180503004","warehouse_id":4,"purchase_id":4,"supplier_id":5,"project_id":0,"date":"2018-05-03","supplier":"\u4e1c\u839e\u5e02\u62d3\u8baf\u7535\u5b50\u79d1\u6280\u6709\u9650\u516c\u53f8","purchase_number":"CG20180427004","worker":"admin","returnee":null,"worker_id":1,"project_number":null,"project_content":null,"project_manager":null,"warehouse":"\u4ed3\u5e934","cost":3000,"type":1,"is_project":0,"created_at":"2018-05-03 02:37:13","updated_at":"2018-05-03 02:37:13","get_cost":3000,"need_cost":27000,"list":[[],{"id":9,"record_id":12,"material_id":4,"sum":1,"stock_cost":3000,"stock_price":3000,"stock_number":1,"price":3000,"cost":3000,"need_sum":9,"need_cost":27000,"created_at":"2018-05-03 02:37:13","updated_at":"2018-05-03 02:37:13"},[]]}]}}</div> -->

<!-- 操作区域 -->
<div class="content-operation">

  <form action="" class="ui form">
    <div class="inline fields" style="justify-content:flex-end;">
      <label>系统状态：</label>
      <div class="field">
        <div class="ui radio checkbox">
          <input type="radio" name="system" value="1">
          <label>已结清</label>
        </div>
      </div>
      <div class="field">
        <div class="ui radio checkbox">
          <input type="radio" name="system" value="0">
          <label>未结清</label>
        </div>
      </div>
    </div>
    <div class="ui left action right input fluid flex-fluid">
      <div class="ui button white dropdown ">
        <input name="seartch-type" type="hidden">
        <div class="text">请选中搜索内容</div>
        <i class="dropdown icon"></i>
        <div class="menu">
          <div class="item" data-value="1">采购编号</div>
          <div class="item" data-value="2">供货商</div>
          <div class="item" data-value="3">项目编号</div>
          <div class="item" data-value="4">项目内容</div>
          <div class="item" data-value="5">项目经理</div>
        </div>
      </div>
      <input name="value" type="text" placeholder="搜索内容" value="">
      <button class="ui button">搜索</button>
    </div>
  </form>
</div>
<!-- / 操作区域 -->

<div class="content-wrap table-head-nowrap">

  <table class="ui center aligned table selectable unstackable">
    <thead>
      <tr>
        <th>采购编号</th>
        <th>供货商</th>
        <th>采购金额</th>
        <th>项目编号</th>
        <th>项目内容</th>
        <th>项目经理</th>
        <th>已收货</th>
        <th>未收货</th>
        <th>系统状态</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <a class="stockOutItem" data-id="1">CG1231532311</a>
        </td>
        <td>xx供货商</td>
        <td>123,521 ￥</td>
        <td>XM1352123124</td>
        <td class="table-content">这是项目内容xzxx</td>
        <td>陈经理</td>
        <td>123,521 ￥</td>
        <td>52,212 ￥</td>
        <td>已结清</td>
      </tr>
      <tr>
        <td>
          <a class="stockOutItem" data-id="2">CG1231532311</a>
        </td>
        <td>xx供货商</td>
        <td>123,521 ￥</td>
        <td>XM1352123124</td>
        <td class="table-content">这是项目内容xzxx</td>
        <td>陈经理</td>
        <td>123,521 ￥</td>
        <td>52,212 ￥</td>
        <td>已结清</td>
      </tr>
      <tr>
        <td>
          <a class="stockOutItem" data-id="3">CG1231532311</a>
        </td>
        <td>xx供货商</td>
        <td>123,521 ￥</td>
        <td>XM1352123124</td>
        <td class="table-content">这是项目内容xzxx</td>
        <td>陈经理</td>
        <td>123,521 ￥</td>
        <td>52,212 ￥</td>
        <td>已结清</td>
      </tr>
    </tbody>
  </table>
</div>


<el-dialog :title="'采购收货查询 - '+ (singleData.purchase.number || '无')" :visible.sync="stockCheckDialog" width="90%" center id="stockOutAdd"
  style="white-space:nowrap;">
  <template v-if="loader">
    <div class="ui segment">
      <div class="ui active inverted dimmer">
        <div class="ui text loader">加载中</div>
      </div>
      <p></p>
    </div>
  </template>

  <template v-else>
    <div class="flex-row flex-between table-head-nowrap" id="stockBuyCheck">

      <template v-if="singleData.purchase && singleData.purchase.project">
        <table class="ui celled structured table center aligned unstackable" style="width:65%;">
          <thead>
            <tr>
              <th>采购编号</th>
              <th class="fake-td" colspan="3">{{ singleData.purchase.number }}</th>
              <th>采购日期</th>
              <th class="fake-td" colspan="3">{{ singleData.purchase.date }}</th>
              <th>收货入库记录</th>
            </tr>
            <tr>
              <th>项目编号</th>
              <th class="fake-td" colspan="3">{{ singleData.purchase.project.number }}</th>
              <th>项目内容</th>
              <th class="fake-td" colspan="3">{{ singleData.purchase.project.name }}</th>
              <th>收货入库编号</th>
            </tr>
            <tr>
              <th>采购商</th>
              <th class="fake-td" colspan="7">{{ singleData.purchase.supplier }}</th>
              <th>入库日期</th>
            </tr>
            <tr>
              <th>项目经理</th>
              <th class="fake-td" colspan="3">{{ singleData.purchase.project.pm }}</th>
              <th>采购金额</th>
              <th class="fake-td" colspan="3">{{ singleData.purchase.project.price }}</th>
              <th>收货人</th>
            </tr>
            <tr>
              <th colspan="8">采购物料清单</th>
              <th>仓库</th>
            </tr>
            <tr>
              <th>序号</th>
              <th>物料名称</th>
              <th>性能及技术参数</th>
              <th>品牌型号</th>
              <th>生产厂家</th>
              <th>单位</th>
              <th>单价</th>
              <th>采购数量</th>
              <th>采购金额</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="singleData.purchaseList && singleData.purchaseList.length">
              <tr v-for="(item, index) in singleData.purchaseList" :key="item.id">
                <td>{{ index + 1 }}</td>
                <td>{{ item.material.name }}</td>
                <td>{{ item.material.param }}</td>
                <td>{{ item.material.model }}</td>
                <td>{{ item.material.factory }}</td>
                <td>{{ item.material.unit }}</td>
                <td>{{ item.price.toLocaleString('en-US') }} ￥</td>
                <td>{{ item.number.toLocaleString('en-US') }}</td>
                <td>{{ item.cost.toLocaleString('en-US') }} ￥</td>
              </tr>
            </template>
            <template v-else>
              <tr>
                <td colspan="9">暂无数据</td>
              </tr>
            </template>
          </tbody>
          <tfoot>
            <tr>
              <th colspan="8">合计</th>
              <th>{{ singleData.purchase.price.toLocaleString('en-US') || 0 }}￥ </th>
            </tr>
          </tfoot>
        </table>

        <div class="flex-row" style="overflow:auto; flex: 1;">

          <template v-if="singleData.record && singleData.record.length > 0">
            <div class="scorll-table table-head-nowrap" v-for="(item, index) in singleData.record" :key="item.id">
              <table class="ui celled structured table center aligned unstackable">
                <thead>
                  <tr>
                    <td colspan="4">{{ index + 1 }}</td>
                  </tr>
                  <tr>
                    <td colspan="4">{{ item.number }}</td>
                  </tr>
                  <tr>
                    <td colspan="4">{{ item.date }}</td>
                  </tr>
                  <tr>
                    <td colspan="4">{{ item.worker }}</td>
                  </tr>
                  <tr>
                    <td colspan="4">{{ item.warehouse }}</td>
                  </tr>
                  <tr>
                    <th>收货数量</th>
                    <th>收货金额</th>
                    <th>剩余数量</th>
                    <th>剩余金额</th>
                  </tr>
                </thead>
                <tbody>
                  <template v-if="item.list && item.list.length" v-for="(subItem, subIndex) in item.list" :key="subItem.id">
                    <tr v-if="subItem.id">
                      <td>{{ subItem.sum.toLocaleString('en-US') || 0 }}</td>
                      <td>{{ subItem.cost.toLocaleString('en-US') || 0 }} ￥</td>
                      <td>{{ subItem.need_sum.toLocaleString('en-US') || 0 }}</td>
                      <td>{{ subItem.need_cost.toLocaleString('en-US') || 0 }} ￥</td>
                    </tr>
                    <tr v-else>
                      <td colspan="4">暂无记录</td>
                    </tr>
                  </template>
                </tbody>
                <tfoot>
                  <tr>
                    <th></th>
                    <th>{{ item.get_cost.toLocaleString('en-US') || 0 }}￥</th>
                    <th></th>
                    <th>{{ item.need_cost.toLocaleString('en-US') || 0 }} ￥</th>
                  </tr>
                  <tr>
                    <td colspan="4">
                      <a class="ui mini button primary" :href="'javascript:_helper.fullWindow(\'../stock/buy_print.html?id='+ item.id + '\');'">收货凭证</a>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </template>

          <template v-else>
            <div class="scorll-table table-head-nowrap">
              <table class="ui celled structured table center aligned unstackable">
                <tbody>
                  <tr>
                    <td colspan="4" rowspan="5">暂无数据</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </template>

        </div>
      </template>
    </div>
    <div class="inline-center margin-top-20">
      <a :href="href" class="ui button primary large">
        <i class="icon hand pointer"></i>
        <span>退货出库</span>
      </a>
    </div>
  </template>

</el-dialog>

<include src="../template/footer.html">
  @js = ../../src/js/stock_out_add.js
</include>