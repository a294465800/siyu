<include src="../template/normalHeader.html">
  @title = 凭证
</include>

<div class="ui breadcrumb print-hide">
  <a class="section">采购管理</a>
  <div class="divider"> / </div>
  <a class="section" href="../buy/project_list.html">采购立项清单</a>
  <div class="divider"> / </div>
  <a class="section" href="../buy/extrabudgetary.html">预算外采购</a>
  <div class="divider"> / </div>
  <div class="active section">凭证</div>
</div>


<h1 class="ui header center aligned">采购立项记帐凭证（预算外） </h1>
<p style="text-align:right;font-size: 13px;padding-right:25px;">记账凭证号：12312321231321321</p>
<table class="ui celled structured table" id="budgetaryPrint">
  <thead>
    <tr>
      <th>采购编号</th>
      <th class="font-normal bg-white" colspan="2">CG213151231</th>
      <th>采购日期</th>
      <th class="font-normal bg-white" colspan="3">2018-02-02</th>
      <th>采购金额</th>
      <th class="font-normal bg-white" colspan="3">123,421,421 ￥</th>
    </tr>
    <tr>
      <th>项目编号</th>
      <th class="font-normal bg-white" colspan="2">XM12315213</th>
      <th>项目内容</th>
      <th class="font-normal bg-white" colspan="3">这是内容</th>
      <th>供货商</th>
      <th class="font-normal bg-white" colspan="3">xxx供货商</th>
    </tr>
    <tr>
      <th>发票条件</th>
      <th class="font-normal bg-white" colspan="10">专用票17%</th>
    </tr>
    <tr>
      <th>付款条件</th>
      <th class="font-normal bg-white" colspan="10">这是付款条件XXXx</th>
    </tr>
    <tr>
      <th colspan="15" class="inline-center">采购物料清单</th>
    </tr>
    <tr class="no-padding">
      <th></th>
      <th>物料名称</th>
      <th>性能及技术参数</th>
      <th>品牌型号</th>
      <th>生产厂家</th>
      <th>单位</th>
      <th>单价</th>
      <th>数量</th>
      <th>金额</th>
      <th>保修截止日期</th>
      <th>保修时间</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>物料一</td>
      <td>这是性能和参数信息</td>
      <td>ak-47</td>
      <td>这是生产厂家xx</td>
      <td>个</td>
      <td>1,234￥</td>
      <td>123,523</td>
      <td>121,234￥</td>
      <td>2018-09-12</td>
      <td>30天</td>
    </tr>
  </tbody>
</table>
<div class="content-operation print-hide">
  <div class="flex-row flex-end">
    <a class="ui icon button primary" href="javascript:window.print();">
      <i class="icon print"></i>
      <span>打印</span>
    </a>
  </div>
</div>

<include src="../template/footer.html">
</include>