<include src="../template/normalHeader.html">
  @title = 凭证
</include>

<div class="ui breadcrumb print-hide">
  <a class="section">费用付款管理</a>
  <div class="divider"> / </div>
  <a class="section" href="../pay/list.html">付款审批清单</a>
  <div class="divider"> / </div>
  <a class="section" href="../pay/single.html?id=FK20171103001">付款审批查询 - FK20171103001</a>
  <div class="divider"> / </div>
  <div class="active section">凭证</div>
</div>

<h1 class="ui header center aligned">付款审批单</h1>
<p style="text-align:right;font-size: 13px;padding-right:20px;">
  <b>记账凭证号：</b>123123123123213</p>
  <p style="text-align:right;font-size: 13px;padding-right:20px;">
    <b>附件：</b>
    <span style="padding:0 20px;"></span>
    <b>张</b>
  </p>
<table class="ui celled structured center aligned table">
  <thead>
    <tr>
      <th>付款编号</th>
      <th class="fake-td">FK20171103001</th>
      <th>付款金额</th>
      <th class="fake-td" colspan="2">123,523￥</th>
    </tr>
    <tr>
      <th>用途</th>
      <th colspan="4" class="fake-td">这是一些用途</th>
    </tr>
    <tr>
      <th>项目编号</th>
      <th class="fake-td">XM23252312</th>
      <th>项目内容</th>
      <th colspan="2" class="fake-td">这是项目内容</th>
    </tr>
    <tr>
      <th>申请人</th>
      <th class="fake-td">瑞茜</th>
      <th>审批人</th>
      <th class="fake-td" colspan="2">何福清</th>
    </tr>
    <tr>
      <th colspan="5">付款信息</th>
    </tr>
    <tr>
      <th>付款日期</th>
      <th class="fake-td">2018-03-11</th>
      <th>付款金额</th>
      <th colspan="2" class="fake-td">123,523￥</th>
    </tr>
    <tr>
      <th colspan="5">付款方式</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>现金</td>
      <td colspan="3">11,231￥</td>
    </tr>
    <tr>
      <td>2</td>
      <td>转账</td>
      <td>123,523￥</td>
      <td>银行及账号</td>
      <td>中国银行 653234322234363312</td>
    </tr>
    <tr>
      <td>3</td>
      <td>其他</td>
      <td colspan="3">0</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>备注</th>
      <th class="fake-td" colspan="4">这是一些备注</th>
    </tr>
    <tr>
      <th>付款经办人</th>
      <th class="fake-td" colspan="4">海子</th>
    </tr>
  </tfoot>
</table>
<div class="content-operation print-hide">
  <div class="flex-row flex-end">
    <a class="ui icon button primary" href="javascript:window.print();">
      <i class="icon print"></i>
      <span>打印</span>
    </a>
  </div>
</div>

<include src="../template/footer.html"></include>