<include src="../template/header.html">
  @title = 费用付款
</include>

<div class="ui breadcrumb">
  <a class="section">数据维护</a>
  <div class="divider"> / </div>
  <div class="active section">费用付款</div>
</div>

<!-- 操作区域 -->
<div class="content-operation">
  <a class="ui primary button" href="javascript:_helper.fullWindow('../data/fee_payment_add.html')">
    <i class="icon plus"></i>
    <span>新增类别</span>
  </a>
</div>
<!-- / 操作区域 -->

<div class="content-wrap table-head-nowrap">

  <table class="ui center aligned table selectable unstackable">
    <thead>
      <tr>
        <th>序号</th>
        <th style="min-width:100px;">费用类型</th>
        <th style="min-width:300px;">具体事项</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>交通运输费</td>
        <td style="max-width:600px;">油费/路桥费/汽车维修费/汽车保养费/车辆保险/停车费/其他</td>
        <td style="white-space:nowrap">
          <a class="ui mini button primary" href="javascript:_helper.fullWindow('../data/payment_edit.html?id=1')">录入事项</a>
          <button class="ui mini button negative dataPaymentDelete">删除</button>
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>业务招待费</td>
        <td>餐费/其他</td>
        <td>
          <a class="ui mini button primary" href="javascript:_helper.fullWindow('../data/payment_edit.html?id=1')">录入事项</a>
          <button class="ui mini button negative dataPaymentDelete">删除</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<include src="../template/footer.html">
  @js = ../../src/js/data_fee_payment_list.js
</include>