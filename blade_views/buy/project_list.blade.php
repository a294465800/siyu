<include src="../template/header.html">
  @title = 采购立项清单
</include>

<div class="ui breadcrumb">
  <a class="section">采购管理</a>
  <div class="divider"> / </div>
  <div class="active section">采购立项清单</div>
</div>

<!-- 操作区域 -->
<div class="content-operation flex-row flex-between">
  <div>
    <a class="ui primary button" href="javascript:_helper.fullWindow('../project/create.html');">
      <i class="icon plus"></i>
      <span>新建立项</span>
    </a>
  </div>
  <form action="/views/buy/project_list.html" class="ui form flex-fluid">
    <div class="ui left action right input fluid">
      <div class="ui button white dropdown ">
        <input name="seartch-type" type="hidden">
        <div class="text">请选中搜索内容</div>
        <i class="dropdown icon"></i>
        <div class="menu">
          <div class="item" data-value="1">采购编号</div>
          <div class="item" data-value="2">供货商</div>
          <div class="item" data-value="3">项目编号</div>
          <div class="item" data-value="4">项目内容</div>
        </div>
      </div>
      <input name="value" type="text" placeholder="搜索内容" value="">
      <button class="ui button">搜索</button>
    </div>
  </form>
</div>
<!-- / 操作区域 -->

<div class="content-wrap">

  <table class="ui center aligned table selectable" id="projectDetailTable">
    <thead>
      <tr>
        <th>采购编号</th>
        <th>供货商</th>
        <th>采购金额</th>
        <th>项目编号</th>
        <th>项目内容</th>
        <th>项目经理</th>
        <th>发票条件</th>
        <th>经办人</th>
        <th>复核人</th>
        <th>审批人</th>
        <th>预算内/外</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <a href="../project/check.html">154376453254</a>
        </td>
        <td>xx供货商</td>
        <td>123,233,421 ￥</td>
        <td>5123421312</td>
        <td class="table-content" title="这是一大段内容这是一大段内容这是一大段内容这是一大段内容这是一大段内容">这是一大段内容</td>
        <td>张喜</td>
        <td>专用票17%</td>
        <td>专用票11%</td>
        <td>张三</td>
        <td>李四</td>
        <td>内</td>
      </tr>
      <tr>
        <td>
          <a href="../project/check.html">154376453254</a>
        </td>
        <td>xx供货商</td>
        <td>123,233,421 ￥</td>
        <td>5123421312</td>
        <td class="table-content" title="这是一大段内容这是一大段内容这是一大段内容这是一大段内容这是一大段内容">这是一大段内容</td>
        <td>张喜</td>
        <td>专用票17%</td>
        <td>专用票11%</td>
        <td>张三</td>
        <td>李四</td>
        <td>内</td>
      </tr>
      <tr>
        <td>
          <a href="../project/check.html">154376453254</a>
        </td>
        <td>xx供货商</td>
        <td>123,233,421 ￥</td>
        <td>5123421312</td>
        <td class="table-content">这是一大段内容</td>
        <td>张喜</td>
        <td>专用票17%</td>
        <td>专用票11%</td>
        <td>张三</td>
        <td>李四</td>
        <td>内</td>
      </tr>
    </tbody>
  </table>
</div>

<include src="../template/footer.html">
  @js = ../../src/js/buy_project_list.js
</include>