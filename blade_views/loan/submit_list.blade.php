<include src="../template/header.html">
  @title = 报销申请清单
</include>

<div class="ui breadcrumb">
  <a class="section">报销与借款管理</a>
  <div class="divider"> / </div>
  <div class="active section">报销申请清单</div>
</div>

<!-- 操作区域 -->
<div class="content-operation">

  <form action="" class="ui form">
    <div class="flex-row" style="justify-content: flex-end;">
      <div class="inline fields" style="margin-right:50px;">
        <label>付款状态：</label>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="system" value="1">
            <label>已付款</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="system" value="0">
            <label>未付款</label>
          </div>
        </div>
      </div>
      <div class="inline fields">
        <label>报销类型：</label>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="system" value="1">
            <label>期间费用报销</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="system" value="0">
            <label>项目成本报销</label>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-row flex-between flex-wrap">
      <div>
        <a class="ui primary button" href="javascript:_helper.fullWindow('../loan/submit_other.html')">
          <i class="icon plus"></i>
          <span>期间费用报销</span>
        </a>
        <a class="ui primary button" href="javascript:_helper.fullWindow('../loan/submit_project.html')">
          <i class="icon plus"></i>
          <span>项目成本报销</span>
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
            <div class="item" data-value="2">报销编号</div>
            <div class="item" data-value="3">项目编号</div>
            <div class="item" data-value="4">项目内容</div>
            <div class="item" data-value="5">报销人</div>
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
        <th>报销编号</th>
        <th>期间报销</th>
        <th>项目报销</th>
        <th>其中：材料款</th>
        <th>其中：工程款</th>
        <th>其中：其他</th>
        <th>项目编号</th>
        <th>项目内容</th>
        <th>报销人</th>
        <th>复核人</th>
        <th>审批人</th>
        <th>付款状态</th>
        <th>付款编号</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <a href="javascript:_helper.fullWindow('../loan/submit_single.html?id=1')">BX20171103001</a>
        </td>
        <td>12,523￥</td>
        <td>12,523￥</td>
        <td>12,523￥</td>
        <td>12,523￥</td>
        <td>12,523￥</td>
        <td>XM2023212</td>
        <td>这是项目内容</td>
        <td>刘芳菲</td>
        <td>何不祥</td>
        <td>赵启明</td>
        <td>未付款</td>
        <td>BXFK20171103001</td>
      </tr>
      <tr>
        <td>
          <a href="javascript:_helper.fullWindow('../loan/submit_single.html?id=1')">BX20171103001</a>
        </td>
        <td>12,523￥</td>
        <td>12,523￥</td>
        <td>12,523￥</td>
        <td>12,523￥</td>
        <td>12,523￥</td>
        <td>XM2023212</td>
        <td>这是项目内容</td>
        <td>刘芳菲</td>
        <td>何不祥</td>
        <td>赵启明</td>
        <td>未付款</td>
        <td>BXFK20171103001</td>
      </tr>
      <tr>
        <td>
          <a href="javascript:_helper.fullWindow('../loan/submit_single.html?id=1')">BX20171103001</a>
        </td>
        <td>12,523￥</td>
        <td>12,523￥</td>
        <td>12,523￥</td>
        <td>12,523￥</td>
        <td>12,523￥</td>
        <td>XM2023212</td>
        <td>这是项目内容</td>
        <td>刘芳菲</td>
        <td>何不祥</td>
        <td>赵启明</td>
        <td>未付款</td>
        <td>BXFK20171103001</td>
      </tr>
    </tbody>
  </table>
</div>

<include src="../template/footer.html">
  @js = ../../src/js/loan_submit_list.js
</include>