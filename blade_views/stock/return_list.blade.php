<include src="../template/header.html">
  @title = 退料入货清单
</include>

<div class="ui breadcrumb">
  <a class="section">库存管理</a>
  <div class="divider"> / </div>
  <div class="active section">退料入货清单</div>
</div>

<!-- 操作区域 -->
<div class="content-operation flex-row flex-between flex-wrap">
  <div>
    <a href="javascript:_helper.fullWindow('../stock/return_add.html')" class="ui primary button">
      <i class="icon plus"></i>
      <span>新增退料入库</span>
    </a>
    <a href="javascript:_helper.fullWindow('')" class="ui positive button">
      <i class="icon print"></i>
      <span>导出</span>
    </a>
  </div>
  <form action="/views/buy/project_list.html" class="ui form flex-fluid">
    <div class="ui left action right input fluid">
      <div class="ui button white dropdown ">
        <input name="seartch-type" type="hidden">
        <div class="text">请选中搜索内容</div>
        <i class="dropdown icon"></i>
        <div class="menu">
          <div class="item" data-value="1">退料编号</div>
          <div class="item" data-value="2">物料名称</div>
          <div class="item" data-value="3">项目编号</div>
          <div class="item" data-value="4">项目内容</div>
          <div class="item" data-value="5">项目经理</div>
          <div class="item" data-value="6">退料人</div>
          <div class="item" data-value="7">仓库</div>
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
        <th>退料编号</th>
        <th>物料名称</th>
        <th>型号</th>
        <th>生产厂家</th>
        <th>单位</th>
        <th>退料数量</th>
        <th>退料单价</th>
        <th>退料金额</th>
        <th>项目编号</th>
        <th>项目内容</th>
        <th>项目经理</th>
        <th>退料人</th>
        <th>入库仓库</th>
        <th>收货人</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <a href="javascript:_helper.fullWindow('../stock/return_print.html?id=1')">TL2102321</a>
        </td>
        <td>线缆</td>
        <td>xxxxxx</td>
        <td>xxx厂家</td>
        <td>条</td>
        <td>123,523</td>
        <td>20 ￥</td>
        <td>523,123 ￥</td>
        <td>XM2023123</td>
        <td>xxxx内容</td>
        <td>陈经理</td>
        <td>黄生</td>
        <td>xxxx仓库</td>
        <td>李姐</td>
      </tr>
      <tr>
        <td>
          <a href="javascript:_helper.fullWindow('../stock/return_print.html?id=1')">TL2102321</a>
        </td>
        <td>线缆</td>
        <td>xxxxxx</td>
        <td>xxx厂家</td>
        <td>条</td>
        <td>123,523</td>
        <td>20 ￥</td>
        <td>523,123 ￥</td>
        <td>XM2023123</td>
        <td>xxxx内容</td>
        <td>陈经理</td>
        <td>黄生</td>
        <td>xxxx仓库</td>
        <td>李姐</td>
      </tr>
      <tr>
        <td>
          <a href="javascript:_helper.fullWindow('../stock/return_print.html?id=1')">TL2102321</a>
        </td>
        <td>线缆</td>
        <td>xxxxxx</td>
        <td>xxx厂家</td>
        <td>条</td>
        <td>123,523</td>
        <td>20 ￥</td>
        <td>523,123 ￥</td>
        <td>XM2023123</td>
        <td>xxxx内容</td>
        <td>陈经理</td>
        <td>黄生</td>
        <td>xxxx仓库</td>
        <td>李姐</td>
      </tr>
    </tbody>
  </table>
</div>


<include src="../template/footer.html">
  @js = ../../src/js/stock_return_list.js
</include>