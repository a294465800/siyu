<include src="../template/header.html">
  @title = 预算清单
</include>

<div class="ui breadcrumb">
  <a class="section">预算管理</a>
  <div class="divider"> / </div>
  <div class="active section">预算清单</div>
</div>

<!-- 操作区域 -->
<div class="content-operation flex-row flex-between">
  <div>
    <a class="ui green button" href="#">
      <i class="icon download"></i>
      <span>Excel 导出</span>
    </a>
  </div>
  <form action="" class="ui form flex-fluid">
    <div class="ui left action right input fluid">
      <div class="ui button white dropdown ">
        <input name="seartch-type" type="hidden">
        <div class="text">请选中搜索内容</div>
        <i class="dropdown icon"></i>
        <div class="menu">
          <div class="item" data-value="1">项目号</div>
          <div class="item" data-value="2">项目内容</div>
        </div>
      </div>
      <input name="value" type="text" placeholder="搜索内容" value="">
      <button class="ui button">搜索</button>
    </div>
  </form>
</div>
<!-- / 操作区域 -->

<!-- 表格循环 -->
<div class="content-wrap table-head-nowrap">
  <!-- <table class="ui celled structured table unstackable center aligned">
    <thead>
      <tr>
        <th rowspan="2">类型</th>
        <th rowspan="2">项目</th>
        <th rowspan="2">内容</th>
        <th rowspan="2">金额相关</th>
        <th rowspan="2">金额类型</th>
        <th rowspan="2">金额</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="6">基本</td>
        <td>项目号</td>
        <td>1234232</td>
        <td rowspan="2">
          <div class="flex-row flex-between">
            <span>项目实际金额</span>
            <span>12,423,222 ￥</span>
          </div>
        </td>
        <td>主合同金额</td>
        <td>12,423,222 ￥</td>
      </tr>
      <tr>
        <td>项目内容</td>
        <td class="detail__content">这是项目内容这是项目内容这是项目内容这是项目内容</td>
        <td>分包合同金额</td>
        <td>12,423,222 ￥</td>
      </tr>
      <tr>
        <td>项目经理</td>
        <td>程先生</td>
        <td rowspan="3">
          <div class="flex-row flex-between">
            <span>预算总金额</span>
            <span>12,423,222 ￥</span>
          </div>
        </td>
        <td>物料采购金额</td>
        <td>12,423,222 ￥</td>
      </tr>
      <tr>
        <td>合同金额</td>
        <td>12,423,222 ￥</td>
        <td>工程金额</td>
        <td>12,423,222 ￥</td>
      </tr>
      <tr>
        <td>验收日期</td>
        <td>2018-11-21</td>
        <td>其他</td>
        <td>12,423,222 ￥</td>
      </tr>
      <tr>
        <td>保修截至日期</td>
        <td>2018-11-21</td>
        <td rowspan="7">
          <div class="flex-row flex-between">
            <span>已发生成本</span>
            <span>12,423,222 ￥</span>
          </div>
        </td>
        <td>领料成本</td>
        <td>12,423,222 ￥</td>
      </tr>
      <tr>
        <td colspan="3" class="font-bold">成本 / 预算</td>
        <td>施工成本</td>
        <td>12,423,222 ￥</td>
      </tr>
      <tr>
        <td colspan="2">总成本 / 预算</td>
        <td>123,523 / 123,623 = 0.9</td>
        <td rowspan="3">
          <div class="flex-row flex-between">
            <span>报销项目成本</span>
            <span>12,423,222 ￥</span>
          </div>
        </td>
        <td>
          <div class="flex-row flex-between">
            <span>报销材料款</span>
            <span>12,423,222 ￥</span>
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="2">物料实际成本 / 预算</td>
        <td>123,523 / 123,623 = 0.9</td>
        <td>
          <div class="flex-row flex-between">
            <span>报销材料款</span>
            <span>12,423,222 ￥</span>
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="2">工程实际成本 / 预算</td>
        <td>123,523 / 123,623 = 0.9</td>
        <td>
          <div class="flex-row flex-between">
            <span>报销工程款</span>
            <span>12,423,222 ￥</span>
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="2">其他成本 / 预算</td>
        <td>123,523 / 123,623 = 0.9</td>
        <td>费用付款其他成本</td>
        <td>12,423,222 ￥</td>
      </tr>
      <tr>
        <td class="center aligned" style="font-size: 40px;" colspan="3">
          <a href="javascript:_helper.fullWindow('../budget/detail.html?id=1')">查看</a>
        </td>
        <td>退料成本</td>
        <td>12,423,222 ￥</td>
      </tr>
    </tbody>
  </table> -->


  <table class="ui center aligned table selectable unstackable">
    <thead>
      <tr>
        <th>项目号</th>
        <th>项目内容</th>
        <th>项目经理</th>
        <th class="function-toggle-one">项目实际金额（展开）</th>
        <th class="function-one">主合同金额</th>
        <th class="function-one">分包合同金额</th>
        <th class="function-toggle-two">预算总额（展开）</th>
        <th class="function-two">物料采购金额</th>
        <th class="function-two">工程金额</th>
        <th class="function-two">其他</th>
        <th class="function-toggle-three">已发生成本（展开）</th>
        <th class="function-three">可领料成本</th>
        <th class="function-three">施工成本</th>
        <th class="function-three">报销材料款</th>
        <th class="function-three">报销工程款</th>
        <th class="function-three">报销其他费用</th>
        <th class="function-three">费用付款其他成本</th>
        <th class="function-three">退料成本</th>
        <th>总成本 / 预算</th>
        <th>物料实际成本 / 预算</th>
        <th>工程实际成本 / 预算</th>
        <th>其他成本 / 预算</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>XM203023</td>
        <td>项目内容</td>
        <td>陈经理</td>
        <td>12,232￥</td>
        <td class="function-one">12,232￥</td>
        <td class="function-one">12,232￥</td>
        <td>12,232￥</td>
        <td class="function-two">12,232￥</td>
        <td class="function-two">12,232￥</td>
        <td class="function-two">12,232￥</td>
        <td>12,232￥</td>
        <td class="function-three">12,232￥</td>
        <td class="function-three">12,232￥</td>
        <td class="function-three">12,232￥</td>
        <td class="function-three">12,232￥</td>
        <td class="function-three">12,232￥</td>
        <td class="function-three">12,232￥</td>
        <td class="function-three">12,232￥</td>
        <td>12,232￥</td>
        <td>12,232￥</td>
        <td>12,232￥</td>
        <td>12,232￥</td>
        <td>
          <a href="javascript:_helper.fullWindow('../budget/detail.html?id=1')">查看</a>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<!-- / 表格循环 -->

<include src="../template/footer.html">
  @js = ../../src/js/budget_list.js
</include>