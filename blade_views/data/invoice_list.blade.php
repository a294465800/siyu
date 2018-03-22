<include src="../template/header.html">
  @title = 发票类型
</include>

<div class="ui breadcrumb">
  <a class="section">数据维护</a>
  <div class="divider"> / </div>
  <div class="active section">发票类型</div>
</div>

<!-- 操作区域 -->
<div class="content-operation">

  <form action="" class="ui form">
    <div class="flex-row flex-between flex-wrap">
      <div>
        <a class="ui primary button" href="javascript:_helper.fullWindow('../data/invoice_add.html')">
          <i class="icon plus"></i>
          <span>新增发票类型</span>
        </a>
      </div>
    </div>
  </form>
</div>
<!-- / 操作区域 -->

<div class="content-wrap table-head-nowrap">

  <table class="ui center aligned table selectable unstackable">
    <thead>
      <tr>
        <th>发票类型</th>
        <th>备注</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>专用票11%</td>
        <td>这是一些备注</td>
        <td>
          <a class="ui mini button primary" href="javascript:_helper.fullWindow('../data/invoice_add.html?id=1')">修改</a>
          <button class="ui mini button negative dataInvoiceDelete">删除</button>
        </td>
      </tr>
      <tr>
        <td>普通票</td>
        <td>这是一些备注</td>
        <td>
          <a class="ui mini button primary" href="javascript:_helper.fullWindow('../data/invoice_add.html?id=1')">修改</a>
          <button class="ui mini button negative dataInvoiceDelete">删除</button>
        </td>
      </tr>
      <tr>
        <td>专用票5%</td>
        <td>这是一些备注</td>
        <td>
          <a class="ui mini button primary" href="javascript:_helper.fullWindow('../data/invoice_add.html?id=1')">修改</a>
          <button class="ui mini button negative dataInvoiceDelete">删除</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<include src="../template/footer.html">
  @js = ../../src/js/data_invoice_list.js
</include>