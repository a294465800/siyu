<include src="../template/header.html">
  @title = 人员列表
</include>

<div class="ui breadcrumb">
  <a class="section">数据维护</a>
  <div class="divider"> / </div>
  <div class="active section">人员列表</div>
</div>

<!-- 操作区域 -->
<div class="content-operation">

  <form action="" class="ui form">
    <div class="flex-row flex-between flex-wrap">
      <div>
        <a class="ui primary button" href="javascript:_helper.fullWindow('../data/auth_add.html')">
          <i class="icon plus"></i>
          <span>新增人员</span>
        </a>
        <a class="ui green button" href="#">
          <i class="icon download"></i>
          <span>Excel 导出</span>
        </a>
      </div>
      <div class="ui left action right input fluid flex-fluid">
        <div class="ui button white dropdown ">
          <input name="seartch-type" type="hidden">
          <div class="text">请选中搜索内容</div>
          <i class="dropdown icon"></i>
          <div class="menu">
            <div class="item" data-value="2">员工名称</div>
          </div>
        </div>
        <input name="value" type="text" placeholder="搜索内容" value="">
        <button class="ui button">搜索</button>
      </div>
    </div>
  </form>
</div>
<!-- / 操作区域 -->

<div class="content-wrap table-head-nowrap">

  <table class="ui center aligned table selectable unstackable">
    <thead>
      <tr>
        <th>序号</th>
        <th>人员</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>陈逸飞</td>
        <td>
          <a class="ui mini button primary" href="javascript:_helper.fullWindow('../data/auth_check.html?id=1')">查询权限</a>
          <a class="ui mini button" href="javascript:_helper.fullWindow('../data/auth_add.html?id=1')">修改</a>
          <button class="ui mini button negative authDelete">删除</button>
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>陈逸飞</td>
        <td>
          <a class="ui mini button primary" href="javascript:_helper.fullWindow('../data/auth_check.html?id=1')">查询权限</a>
          <a class="ui mini button" href="javascript:_helper.fullWindow('../data/auth_add.html?id=1')">修改</a>
          <button class="ui mini button negative authDelete">删除</button>
        </td>
      </tr>
      <tr>
        <td>3</td>
        <td>陈逸飞</td>
        <td>
          <a class="ui mini button primary" href="javascript:_helper.fullWindow('../data/auth_check.html?id=1')">查询权限</a>
          <a class="ui mini button" href="javascript:_helper.fullWindow('../data/auth_add.html?id=1')">修改</a>
          <button class="ui mini button negative authDelete">删除</button>
        </td>
      </tr>
      <tr>
        <td>4</td>
        <td>陈逸飞</td>
        <td>
          <a class="ui mini button primary" href="javascript:_helper.fullWindow('../data/auth_check.html?id=1')">查询权限</a>
          <a class="ui mini button" href="javascript:_helper.fullWindow('../data/auth_add.html?id=1')">修改</a>
          <button class="ui mini button negative authDelete">删除</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<include src="../template/footer.html">
  @js = ../../src/js/data_auth_list.js
</include>