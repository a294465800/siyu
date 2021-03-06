<include src="../template/normalHeader.html">
  @title = 报销付款查询 - BXFK20171103001
</include>

<div class="ui breadcrumb">
  <a class="section">报销与借款管理</a>
  <div class="divider"> / </div>
  <a class="section" href="../loan/pay_list.html">报销付款清单</a>
  <div class="divider"> / </div>
  <div class="active section">报销付款查询 - BXFK20171103001</div>
</div>

<h3 class="ui header center aligned">报销付款查询 - BXFK20171103001</h3>
<table class="ui celled center aligned table selectable">
  <thead>
    <tr>
      <th>付款日期</th>
      <th class="fake-td">2018-01-03</th>
      <th>付款报销编号</th>
      <th class="fake-td">BXFK20171103001</th>
      <th>报销人</th>
      <th class="fake-td">刘畅</th>
    </tr>
    <tr>
      <th>本次支付报销单</th>
      <th>报销编号</th>
      <th>报销金额</th>
      <th>复核人</th>
      <th>审批人</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>BX123122133</td>
      <td>123,523￥</td>
      <td>何不器</td>
      <td>凯兹</td>
      <td></td>
    </tr>
    <tr>
      <td>2</td>
      <td>BX123122133</td>
      <td>123,523￥</td>
      <td>何不器</td>
      <td>凯兹</td>
      <td></td>
    </tr>
    <tr>
      <td>3</td>
      <td>BX123122133</td>
      <td>123,523￥</td>
      <td>何不器</td>
      <td>凯兹</td>
      <td></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th colspan="2">本次支付报销合计</th>
      <th>20,000￥</th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
    <tr>
      <th></th>
      <th>抵扣借款</th>
      <th>现金付款</th>
      <th>银行转账</th>
      <th>未支付报销余额</th>
      <th>借款余额</th>
    </tr>
    <tr>
      <th>初始数据</th>
      <th class="fake-td">20,000￥</th>
      <th class="fake-td">20,000￥</th>
      <th class="fake-td">20,000￥</th>
      <th class="fake-td">20,000￥</th>
      <th class="fake-td">20,000￥</th>
    </tr>
    <tr>
      <th>本次支付</th>
      <th class="fake-td">20,000￥</th>
      <th class="fake-td">20,000￥</th>
      <th class="fake-td">20,000￥</th>
      <th class="fake-td">20,000￥</th>
      <th class="fake-td">20,000￥</th>
    </tr>
    <tr>
      <th>付款银行及账号</th>
      <th colspan="5" class="fake-td">中国银行 63434343234343324</th>
    </tr>
    <tr>
      <th>付款经办人</th>
      <th colspan="5" class="fake-td">张起灵</th>
    </tr>
  </tfoot>
</table>

<div class="flex-row flex-center margin-top-50">
  <a class="ui icon button primary" href="javascript:_helper.fullWindow('../loan/pay_add.html?id=1')" style="margin:0 20px;">
    <i class="icon edit"></i>
    <span>修改</span>
  </a>
  <a class="ui icon button positive" href="javascript:_helper.fullWindow('../loan/pay_print.html?id=1')" style="margin:0 20px;">
    <i class="icon print"></i>
    <span>凭证</span>
  </a>
</div>


<include src="../template/footer.html">
</include>