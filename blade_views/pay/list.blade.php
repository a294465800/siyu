<include src="../template/header.html">
  @title = 付款审批清单
</include>

<div class="ui breadcrumb">
  <a class="section">费用付款管理</a>
  <div class="divider"> / </div>
  <div class="active section">付款审批清单</div>
</div>

<!-- 操作区域 -->
<div class="content-operation">

  <form action="" class="ui form">
    <div class="flex-row flex-between flex-wrap">
      <div>
        <a class="ui primary button" href="javascript:_helper.fullWindow('../pay/add.html')">
          <i class="icon plus"></i>
          <span>付款申请</span>
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
            <div class="item" data-value="2">业务编号</div>
            <div class="item" data-value="3">项目编号</div>
            <div class="item" data-value="4">项目内容</div>
            <div class="item" data-value="5">申请人</div>
            <div class="item" data-value="6">审批人</div>
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
        <th>业务编号</th>
        <th>付款金额</th>
        <th style="min-width:250px;">用途</th>
        <th>项目编号</th>
        <th>项目内容</th>
        <th>申请人</th>
        <th>审批人</th>
        <th style="min-width:100px;">付款日期</th>
        <th>现金</th>
        <th>转账</th>
        <th>银行及账号</th>
        <th style="min-width:100px;">其他</th>
        <th style="min-width:200px;">备注</th>
        <th>付款经办人</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <a href="javascript:_helper.fullWindow('../pay/single.html?id=1')">FK20171103001</a>
        </td>
        <td>123,232￥</td>
        <td style="max-width:350px;">这是一些用途</td>
        <td>XM203212321</td>
        <td class="table-content">这是项目内容</td>
        <td>刘琦斐</td>
        <td>未审批</td>
        <td colspan="7">暂无数据</td>
      </tr>
      <tr>
        <td>
          <a href="javascript:_helper.fullWindow('../pay/single.html?id=1')">FK20171103001</a>
        </td>
        <td>123,232￥</td>
        <td style="max-width:350px;">这是一些用途这是一些用途</td>
        <td>XM203212321</td>
        <td class="table-content">这是项目内容</td>
        <td>刘琦斐</td>
        <td>何晴</td>
        <td>2018-03-21</td>
        <td>0</td>
        <td>123,523￥</td>
        <td>中国银行 602321235232123523</td>
        <td>12,523￥</td>
        <td style="max-width: 250px;">这是一些备注之类的</td>
        <td>张超</td>
      </tr>
      <tr>
        <td>
          <a href="javascript:_helper.fullWindow('../pay/single.html?id=1')">FK20171103001</a>
        </td>
        <td>123,232￥</td>
        <td style="max-width:350px;">这是一些用途这是一些用途</td>
        <td>XM203212321</td>
        <td class="table-content">这是项目内容</td>
        <td>刘琦斐</td>
        <td>何晴</td>
        <td>2018-03-21</td>
        <td>0</td>
        <td>123,523￥</td>
        <td>中国银行 602321235232123523</td>
        <td>12,523￥</td>
        <td style="max-width: 250px;">这是一些备注之类的</td>
        <td>张超</td>
      </tr>
    </tbody>
  </table>
</div>

<include src="../template/footer.html">
  @js = ../../src/js/pay_list.js
</include>