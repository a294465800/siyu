<include src="../template/header.html">
  @title = 借款清单
</include>

<div class="ui breadcrumb">
  <a class="section">报销与借款管理</a>
  <div class="divider"> / </div>
  <div class="active section">借款清单</div>
</div>

<!-- 操作区域 -->
<div class="content-operation">
  <a class="ui primary button" href="javascript:_helper.fullWindow('../loan/loan_add.html')">
    <i class="icon plus"></i>
    <span>新增借款申请</span>
  </a>
</div>
<!-- / 操作区域 -->

<div class="content-wrap table-head-nowrap">
  <table class="ui center aligned table selectable unstackable">
    <thead>
      <tr>
        <th>借款编号</th>
        <th>借款金额</th>
        <th>借款原因</th>
        <th>借款人</th>
        <th>审批人</th>
        <th>付款日期</th>
        <th>付款方式</th>
        <th>银行及账号</th>
        <th>付款经办人</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>JK20123523</td>
        <td>123,523￥</td>
        <td style="max-width:300px">这是借款原因</td>
        <td>陈晨</td>
        <td>未审批</td>
        <td colspan="4">暂无数据</td>
        <td style="white-space:nowrap;">
          <button class="ui mini button negative loanLoanListCancel">撤销</button>
          <button class="ui mini button positive loanLoanListCheck">审批</button>
        </td>
      </tr>
      <tr>
        <td>JK20123523</td>
        <td>123,523￥</td>
        <td style="max-width:300px">这是借款原因</td>
        <td>陈晨</td>
        <td>张海青</td>
        <td>2018-02-27</td>
        <td>转账</td>
        <td>中国银行 60232123421232215</td>
        <td>蔡杰</td>
        <td style="white-space:nowrap;">
          <button class="ui mini button negative loanLoanListCancel">撤销</button>
          <button class="ui mini button positive loanLoanListCheck">审批</button>
          <a class="ui mini button primary" href="javascript:_helper.fullWindow('../loan/loan_pay.html?id=1')">录入/修改</a>
          <a class="ui mini button positive" href="javascript:_helper.fullWindow('../loan/loan_print.html?id=1')">凭证</a>
        </td>
      </tr>
      <tr>
        <td>JK20123523</td>
        <td>123,523￥</td>
        <td style="max-width:300px">这是借款原因</td>
        <td>陈晨</td>
        <td>张海青</td>
        <td>2018-02-27</td>
        <td>转账</td>
        <td>中国银行 60232123421232215</td>
        <td>蔡杰</td>
        <td>
          <button class="ui mini button negative loanLoanListCancel">撤销</button>
          <button class="ui mini button positive loanLoanListCheck">审批</button>
          <a class="ui mini button primary" href="javascript:_helper.fullWindow('../loan/loan_pay.html?id=1')">录入/修改</a>
          <a class="ui mini button positive" href="javascript:_helper.fullWindow('../loan/loan_print.html?id=1')">凭证</a>
        </td>
      </tr>
      <tr data-id="1">
        <td>JK20123523</td>
        <td>123,523￥</td>
        <td style="max-width:300px">这是借款原因</td>
        <td>陈晨</td>
        <td>张海青</td>
        <td>2018-02-27</td>
        <td>转账</td>
        <td>中国银行 60232123421232215</td>
        <td>蔡杰</td>
        <td>
          <button class="ui mini button negative loanLoanListCancel">撤销</button>
          <button class="ui mini button positive loanLoanListCheck">审批</button>
          <a class="ui mini button primary" href="javascript:_helper.fullWindow('../loan/loan_pay.html?id=1')">录入/修改</a>
          <a class="ui mini button positive" href="javascript:_helper.fullWindow('../loan/loan_print.html?id=1')">凭证</a>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<include src="../template/footer.html">
  @js = ../../src/js/loan_loan_list.js
</include>