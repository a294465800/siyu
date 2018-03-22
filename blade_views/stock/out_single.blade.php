<include src="../template/normalHeader.html">
  @title = 退货出库查询 - THCK20171103001
</include>

<div class="ui breadcrumb print-hide">
  <a class="section">库存管理</a>
  <div class="divider"> / </div>
  <a class="section" href="../pay/list.html">退货出库清单</a>
  <div class="divider"> / </div>
  <div class="active section">退货出库查询 - THCK20171103001</div>
</div>

<h3 class="ui header center aligned">退货出库清单</h3>
<div class="flex-row flex-end">
  <p class="print-title">
    <b>退货出库编号：</b>THCK20171103001</p>
</div>
<div class="flex-row flex-end">
  <p class="print-title">
    <b>入库日期：</b>2018-02-11</p>
  <p class="print-title">
    <b>入库仓库：</b>xxx仓库</p>
</div>
<table class="ui celled center aligned table unstackable">
  <thead>
    <tr>
      <th>采购编号</th>
      <th class="fake-td">CK20192939122</th>
      <th>采购日期</th>
      <th class="fake-td">2017-01-01</th>
      <th>采购金额</th>
      <th class="fake-td">12,523￥</th>
      <th>项目编号</th>
      <th class="fake-td">XM291232112</th>
      <th>项目内容</th>
      <th class="fake-td" colspan="2">这是项目内容xxx</th>
      <th>项目经理</th>
      <th class="fake-td">刘朝阳</th>
    </tr>
    <tr>
      <th>供货商名称</th>
      <th colspan="7" class="fake-td">xxx供货商</th>
      <th>退货原因</th>
      <th colspan="4" class="fake-td">xxxxx原因</th>
    </tr>
    <tr>
      <th colspan="9">采购物料清单</th>
      <th colspan="2">已收货情况</th>
      <th colspan="2">本次退货情况</th>
    </tr>
    <tr>
      <th></th>
      <th>物料名称</th>
      <th>性能及技术参数</th>
      <th>品牌型号</th>
      <th>生产厂家</th>
      <th>单位</th>
      <th>单价</th>
      <th>采购数量</th>
      <th>采购金额</th>
      <th>已收货数量</th>
      <th>已收货金额</th>
      <th>本次退货数量</th>
      <th>本次退货金额</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>线缆</td>
      <td>这是性能参数</td>
      <td>ak232</td>
      <td>xxx厂家</td>
      <td>个</td>
      <td>125￥</td>
      <td>21,523</td>
      <td>12,352￥</td>
      <td>125</td>
      <td>52,123￥</td>
      <td>510</td>
      <td>523,523￥</td>
    </tr>
    <tr>
      <td>2</td>
      <td>线缆</td>
      <td>这是性能参数</td>
      <td>ak232</td>
      <td>xxx厂家</td>
      <td>个</td>
      <td>125￥</td>
      <td>21,523</td>
      <td>12,352￥</td>
      <td>125</td>
      <td>52,123￥</td>
      <td>510</td>
      <td>523,523￥</td>
    </tr>
    <tr>
      <td>3</td>
      <td>线缆</td>
      <td>这是性能参数</td>
      <td>ak232</td>
      <td>xxx厂家</td>
      <td>个</td>
      <td>125￥</td>
      <td>21,523</td>
      <td>12,352￥</td>
      <td>125</td>
      <td>52,123￥</td>
      <td>510</td>
      <td>523,523￥</td>
    </tr>
    <tr>
      <td>4</td>
      <td>线缆</td>
      <td>这是性能参数</td>
      <td>ak232</td>
      <td>xxx厂家</td>
      <td>个</td>
      <td>125￥</td>
      <td>21,523</td>
      <td>12,352￥</td>
      <td>125</td>
      <td>52,123￥</td>
      <td>510</td>
      <td>523,523￥</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th colspan="7">合计</th>
      <th>0</th>
      <th>0</th>
      <th>0</th>
      <th>0</th>
      <th>0</th>
      <th>0</th>
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
  @js = ../../src/js/pay_single.js
</include>