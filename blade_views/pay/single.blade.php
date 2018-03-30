<include src="../template/normalHeader.html">
  @title = 付款审批查询 - FK20171103001
</include>

<div class="ui breadcrumb">
  <a class="section">费用付款管理</a>
  <div class="divider"> / </div>
  <a class="section" href="../pay/list.html">付款审批清单</a>
  <div class="divider"> / </div>
  <div class="active section">付款审批查询 - FK20171103001</div>
</div>

<h3 class="ui header center aligned">付款审批查询 - FK20171103001</h3>
<table class="ui celled center aligned table unstackable">
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

<div class="flex-row flex-center margin-top-50" id="paySingleBtn">
  <button class="ui icon button negative" id="paySingleCancel" style="margin:0 20px;">
    <i class="icon delete"></i>
    <span>撤销</span>
  </button>
  <button class="ui icon button primary" id="paySingleCheck" style="margin:0 20px;">
    <i class="icon edit"></i>
    <span>审批</span>
  </button>
  <a class="ui icon button primary" href="javascript:_helper.fullWindow('../pay/pay.html')" style="margin:0 20px;">
    <i class="icon yen"></i>
    <span>付款</span>
  </a>
  <a class="ui icon button positive" href="javascript:_helper.fullWindow('../pay/print.html?id=1')" style="margin:0 20px;">
    <i class="icon print"></i>
    <span>凭证</span>
  </a>
</div>


<include src="../template/footer.html">
  @js = ../../src/js/pay_single.js
</include>