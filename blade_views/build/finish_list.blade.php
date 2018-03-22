<include src="../template/header.html">
  @title = 完工请款清单
</include>

<div class="ui breadcrumb">
  <a class="section">施工管理</a>
  <div class="divider"> / </div>
  <div class="active section">完工请款清单</div>
</div>

<!-- 操作区域 -->
<div class="content-operation">

  <form action="" class="ui form">
    <div class="flex-row flex-between flex-wrap">
      <div>
        <a class="ui primary button" href="javascript:_helper.fullWindow('../build/finish_add.html')">
          <i class="icon plus"></i>
          <span>新增请款</span>
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
            <div class="item" data-value="1">施工队</div>
            <div class="item" data-value="2">施工经理</div>
            <div class="item" data-value="3">项目编号</div>
            <div class="item" data-value="4">项目内容</div>
            <div class="item" data-value="5">项目经理</div>
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
        <th>请款编号</th>
        <th>施工队</th>
        <th>施工经理</th>
        <th>项目编号</th>
        <th>项目内容</th>
        <th>项目经理</th>
        <th>请款金额</th>
        <th>经办人</th>
        <th>复核人</th>
        <th>审核人</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <a href="javascript:_helper.fullWindow('../build/finish_single.html?id=1')">QK2023122</a>
        </td>
        <td>施工队一</td>
        <td>刘经理</td>
        <td>XM20192312</td>
        <td class="table-content">这是项目内容</td>
        <td>李经理</td>
        <td>123,521 ￥</td>
        <td>吴海</td>
        <td>未复核</td>
        <td>未审批</td>
      </tr>
      <tr>
        <td>
          <a href="javascript:_helper.fullWindow('../build/finish_single.html?id=1')">QK2023122</a>
        </td>
        <td>施工队一</td>
        <td>刘经理</td>
        <td>XM20192312</td>
        <td class="table-content">这是项目内容</td>
        <td>李经理</td>
        <td>123,521 ￥</td>
        <td>吴海</td>
        <td>未复核</td>
        <td>未审批</td>
      </tr>
      <tr>
        <td>
          <a href="javascript:_helper.fullWindow('../build/finish_single.html?id=1')">QK2023122</a>
        </td>
        <td>施工队一</td>
        <td>刘经理</td>
        <td>XM20192312</td>
        <td class="table-content">这是项目内容</td>
        <td>李经理</td>
        <td>123,521 ￥</td>
        <td>吴海</td>
        <td>未复核</td>
        <td>未审批</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="margin-top-20" style="text-align:right;">
  <a class="ui positive button" href="#">
    <i class="icon download"></i>
    <span>请款单标准格式导出</span>
  </a>
</div>
<include src="../template/footer.html">
  @js = ../../src/js/build_finish_list.js
</include>