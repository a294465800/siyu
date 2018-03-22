<include src="../template/normalHeader.html">
  @title = 领料查询 - CK20150231
</include>

<div class="ui breadcrumb print-hide">
  <a class="section">库存管理</a>
  <div class="divider"> / </div>
  <a class="section" href="../stock/get_list.html">领料出库清单</a>
  <div class="divider"> / </div>
  <div class="active section">领料查询 - CK20150231</div>
</div>

<h1 class="ui header center aligned">领料出库清单</h1>
<table class="ui celled center aligned table selectable">
  <thead>
    <tr>
      <th>领料日期</th>
      <th class="fake-td" colspan="3">2018-08-01</th>
      <th>领料编号</th>
      <th class="fake-td" colspan="4">CK2012321</th>
    </tr>
    <tr>
      <th>领料项目编号</th>
      <th class="fake-td" colspan="3">XM20192312</th>
      <th>领料项目内容</th>
      <th class="fake-td" colspan="4">项目内容</th>
    </tr>
    <tr>
      <th>领料人</th>
      <th class="fake-td" colspan="3">刘晨阳~</th>
      <th>出货仓库</th>
      <th class="fake-td" colspan="4">xxx仓库</th>
    </tr>
    <tr>
      <th></th>
      <th>物料名称</th>
      <th>性能技术参数</th>
      <th>品牌型号</th>
      <th>生产厂家</th>
      <th>单位</th>
      <th>库存均价</th>
      <th>领料数量</th>
      <th>领料金额</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>线缆</td>
      <td>这是性能和参数</td>
      <td>ak23</td>
      <td>xxxx</td>
      <td>条</td>
      <td>12,212 ￥</td>
      <td>523,212</td>
      <td>52,123,122 ￥</td>
    </tr>
    <tr>
      <td>2</td>
      <td>线缆</td>
      <td>这是性能和参数</td>
      <td>ak23</td>
      <td>xxxxx</td>
      <td>条</td>
      <td>12,212 ￥</td>
      <td>523,212</td>
      <td>52,123,122 ￥</td>
    </tr>
    <tr>
      <td>3</td>
      <td>线缆</td>
      <td>这是性能和参数</td>
      <td>ak23</td>
      <td>ssss</td>
      <td>条</td>
      <td>12,212 ￥</td>
      <td>523,212</td>
      <td>52,123,122 ￥</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th colspan="8">合计</th>
      <th>213,523,123 ￥</th>
    </tr>
  </tfoot>
</table>

<div class="content-operation print-hide">
  <div class="flex-row flex-end">
    <a class="ui icon button primary" href="javascript:window.print();">
      <i class="icon print"></i>
      <span>打印</span>
    </a>
  </div>
</div>

<include src="../template/footer.html">
</include>