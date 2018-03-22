<include src="../template/normalHeader.html">
  @title = 采购收票查询 - CG12512312521
</include>

<div class="ui breadcrumb">
  <a class="section">采购管理</a>
  <div class="divider"> / </div>
  <a class="section" href="../buy/charge_list.html">采购收票清单</a>
  <div class="divider"> / </div>
  <div class="active section">采购收票查询 - CG12512312521</div>
</div>

<h3 class="ui header center aligned">采购收票查询</h3>
<div class="table-head-nowrap">
  <table class="ui celled center aligned table selectable unstackable">
    <thead>
      <tr>
        <th class="bg-white">采购编号</th>
        <th class="font-normal bg-white" colspan="4">CG15123122</th>
        <th class="bg-white">采购日期</th>
        <th class="font-normal bg-white" colspan="4">2018-05-04</th>
      </tr>
      <tr>
        <th class="bg-white">供货商名称</th>
        <th class="font-normal bg-white" colspan="4">xxx供应商</th>
        <th class="bg-white">发票条件</th>
        <th class="font-normal bg-white" colspan="4">专用票17%</th>
      </tr>
      <tr>
        <th class="bg-white">项目编号</th>
        <th class="font-normal bg-white" colspan="2">XM5123215213</th>
        <th class="bg-white">项目内容</th>
        <th class="font-normal bg-white" colspan="3">这是项目内容xxxx</th>
        <th class="bg-white">项目经理</th>
        <th class="font-normal bg-white" colspan="2">陈经理</th>
      </tr>
      <tr>
        <th class="bg-white">采购金额</th>
        <th class="font-normal bg-white" colspan="4">1,000,000 ￥</th>
        <th class="bg-white">未收票</th>
        <th class="font-normal bg-white" colspan="4">50,231 ￥</th>
      </tr>
      <tr>
        <th colspan="10">收票记录</th>
      </tr>
      <tr>
        <th></th>
        <th>收票日期</th>
        <th>开票日期</th>
        <th>发票号码</th>
        <th>发票类型</th>
        <th>不含税金额</th>
        <th>税额</th>
        <th>含税金额</th>
        <th>收票经办人</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>2018-09-11</td>
        <td>2018-09-11</td>
        <td>343425623423632423</td>
        <td>专用票17%</td>
        <td>200,000.00 ￥</td>
        <td>200,000.00 ￥</td>
        <td>200,000.00 ￥</td>
        <td>陈秋芳</td>
        <td style="white-space:nowrap">
          <a class="ui mini button" href="javascript:_helper.fullWindow('../buy/invoice_edit.html?id=1')" title="修改">修改</a>
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>2018-09-11</td>
        <td>2018-09-11</td>
        <td>343425623423632423</td>
        <td>专用票17%</td>
        <td>200,000.00 ￥</td>
        <td>200,000.00 ￥</td>
        <td>200,000.00 ￥</td>
        <td>陈秋芳</td>
        <td>
          <a class="ui mini button" href="javascript:_helper.fullWindow('../buy/invoice_edit.html?id=2')" title="修改">修改</a>
        </td>
      </tr>
      <tr>
        <td>3</td>
        <td>2018-09-11</td>
        <td>2018-09-11</td>
        <td>343425623423632423</td>
        <td>专用票17%</td>
        <td>200,000.00 ￥</td>
        <td>200,000.00 ￥</td>
        <td>200,000.00 ￥</td>
        <td>陈秋芳</td>
        <td>
          <a class="ui mini button" href="javascript:_helper.fullWindow('../buy/invoice_edit.html?id=3')" title="修改">修改</a>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th colspan="5">合计</th>
        <th>200,000.00 ￥</th>
        <th>200,000.00 ￥</th>
        <th>200,000.00 ￥</th>
        <th></th>
        <th></th>
      </tr>
    </tfoot>
  </table>
</div>
<div class="flex-row flex-center margin-top-50">
  <a class="ui icon button primary" href="javascript:_helper.fullWindow('../buy/invoice_create.html')" style="margin:0 10px;">
    <i class="icon yen"></i>
    <span>收票</span>
  </a>
  <a class="ui icon button positive" href="javascript:_helper.fullWindow('../buy/invoice_print.html')" style="margin:0 10px;">
    <i class="icon print"></i>
    <span>凭证</span>
  </a>
</div>

<include src="../template/footer.html">
  @js = ../../src/js/buy_invoice_list.js
</include>