<include src="../template/header.html">
  @title = 项目类别列表
</include>

<div class="ui breadcrumb">
  <a class="section">数据维护</a>
  <div class="divider"> / </div>
  <div class="active section">项目类别列表</div>
</div>

<!-- 操作区域 -->
<div class="content-operation">
  <a class="ui primary button" href="javascript:_helper.fullWindow('../data/type_add.html')">
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
        <th>内容</th>
        <th>税率</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>设备</td>
        <td>17%</td>
        <td>
          <a class="ui mini button primary" href="javascript:_helper.fullWindow('../data/type_add.html?id=1')">修改</a>
          <button class="ui mini button negative dataTypeDelete">删除</button>
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>设备</td>
        <td>17%</td>
        <td>
          <a class="ui mini button primary" href="javascript:_helper.fullWindow('../data/type_add.html?id=1')">修改</a>
          <button class="ui mini button negative dataTypeDelete">删除</button>
        </td>
      </tr>
      <tr>
        <td>3</td>
        <td>设备</td>
        <td>17%</td>
        <td>
          <a class="ui mini button primary" href="javascript:_helper.fullWindow('../data/type_add.html?id=1')">修改</a>
          <button class="ui mini button negative dataTypeDelete">删除</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<include src="../template/footer.html">
  @js = ../../src/js/data_type_list.js
</include>