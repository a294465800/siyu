<include src="../template/normalHeader.html">
  @title = 查询出入库记录
</include>

<div class="ui breadcrumb">
  <a class="section">库存管理</a>
  <div class="divider"> / </div>
  <a class="section" href="../stock/list.html">库存清单</a>
  <div class="divider"> / </div>
  <div class="active section">查询出入库记录</div>
</div>


<!-- 操作 --> 
<h4 class="ui dividing header blue">选择时间段</h4>
<div class="content-operation invisible stockCheck" id="stockCheck">
  <form action="">
  <input type="hidden" name="id" value="" />
    <div class="ui form">
      <div class="ui three column doubling stackable grid">
        <div class="column">
          <div class="inline fields">
            <label class="six wide field flex-center">物料名称</label>
            <div class="ten wide field">
              <div class="fake-input">这是物料名称</div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="inline fields">
            <label class="six wide field flex-center">品牌型号</label>
            <div class="ten wide field">
              <div class="fake-input">ak-47</div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="inline fields">
            <label class="six wide field flex-center">单位</label>
            <div class="ten wide field">
              <div class="fake-input">个</div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="inline fields">
            <label class="six wide field flex-center">仓库</label>
            <div class="ten wide field">
              <div class="fake-input">xxx仓库</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="margin-top-20 flex-row flex-between">
      <div>
        <a class="ui green button" href="#">
          <i class="icon download"></i>
          <span>Excel 导出</span>
        </a>
      </div>
      <div>
        <el-date-picker v-model="date" name="search-date" type="datetimerange" :picker-options="dateOption" range-separator="至" start-placeholder="开始日期"
          end-placeholder="结束日期" align="right" format="yyyy-MM-dd">
        </el-date-picker>
        <button class="ui icon button primary" type="submit">
          <i class="icon search"></i>
          <span>查询</span>
        </button>
      </div>
    </div>
  </form>
</div>
<!-- / 操作 -->

<h1 class="ui header center aligned">出入库记录</h1>
<div class="stockCheck ui form">
  <div class="ui three column doubling stackable grid">
    <div class="column">
      <div class="inline fields">
        <label class="four wide field flex-center">物料名称</label>
        <div class="twelve wide field">
          <div class="fake-input">这是物料名称</div>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="inline fields">
        <label class="four wide field flex-center">品牌型号</label>
        <div class="twelve wide field">
          <div class="fake-input">ak-47</div>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="inline fields">
        <label class="four wide field flex-center">单位</label>
        <div class="twelve wide field">
          <div class="fake-input">个</div>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="inline fields">
        <label class="four wide field flex-center">仓库</label>
        <div class="twelve wide field">
          <div class="fake-input">xxx仓库</div>
        </div>
      </div>
    </div>
    <div class="column wide">
      <div class="inline fields">
        <label class="four wide field flex-center">时间段</label>
        <div class="twelve wide field">
          <div class="fake-input">2018-02-02
            <b style="padding: 0 40px;">至</b> 2018-02-06</div>
        </div>
      </div>
    </div>
  </div>
</div>
<h3 class="ui header center aligned">暂无数据</h3>
<div class="stockCheck table-head-nowrap">

  <table class="ui celled structured table center aligned">
    <thead>
      <tr>
        <th rowspan="2">日期</th>
        <th colspan="6">入库</th>
        <th colspan="7">出库</th>
        <th colspan="3">库存</th>
      </tr>
      <tr>
        <th>数量</th>
        <th>单价</th>
        <th>金额</th>
        <th>收货商</th>
        <th>收货/退料编号</th>
        <th>收货人</th>
        <th>数量</th>
        <th>单价</th>
        <th>金额</th>
        <th>项目号</th>
        <th>项目内容</th>
        <th>领料/退货出库编号</th>
        <th>领料人</th>
        <th>数量</th>
        <th>金额</th>
        <th>平均单价</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>期初</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>2018-01-02</td>
        <td>20,523</td>
        <td>145￥</td>
        <td>xxx供货商</td>
        <td>12,523￥</td>
        <td>SHRK20171030005</td>
        <td>陈先生</td>
        <td>523</td>
        <td>19.11￥</td>
        <td>8,900￥</td>
        <td>XM251321312</td>
        <td class="table-content">这是项目内容</td>
        <td>CK20171102001</td>
        <td>刘先生</td>
        <td>333</td>
        <td>10,000￥</td>
        <td>20.00￥</td>
      </tr>
      <tr>
        <td>2018-01-02</td>
        <td>20,523</td>
        <td>145￥</td>
        <td>xxx供货商</td>
        <td>12,523￥</td>
        <td>SHRK20171030005</td>
        <td>陈先生</td>
        <td>523</td>
        <td>19.11￥</td>
        <td>8,900￥</td>
        <td>XM251321312</td>
        <td class="table-content">这是项目内容</td>
        <td>CK20171102001</td>
        <td>刘先生</td>
        <td>333</td>
        <td>10,000￥</td>
        <td>20.00￥</td>
      </tr>
      <tr>
        <td>2018-01-02</td>
        <td>20,523</td>
        <td>145￥</td>
        <td>xxx供货商</td>
        <td>12,523￥</td>
        <td>SHRK20171030005</td>
        <td>陈先生</td>
        <td>523</td>
        <td>19.11￥</td>
        <td>8,900￥</td>
        <td>XM251321312</td>
        <td class="table-content">这是项目内容</td>
        <td>CK20171102001</td>
        <td>刘先生</td>
        <td>333</td>
        <td>10,000￥</td>
        <td>20.00￥</td>
      </tr>
      <tr>
        <td>2018-01-02</td>
        <td>20,523</td>
        <td>145￥</td>
        <td>xxx供货商</td>
        <td>12,523￥</td>
        <td>SHRK20171030005</td>
        <td>陈先生</td>
        <td>523</td>
        <td>19.11￥</td>
        <td>8,900￥</td>
        <td>XM251321312</td>
        <td class="table-content">这是项目内容</td>
        <td>CK20171102001</td>
        <td>刘先生</td>
        <td>333</td>
        <td>10,000￥</td>
        <td>20.00￥</td>
      </tr>
      <tr>
        <td>2018-01-02</td>
        <td>20,523</td>
        <td>145￥</td>
        <td>xxx供货商</td>
        <td>12,523￥</td>
        <td>SHRK20171030005</td>
        <td>陈先生</td>
        <td>523</td>
        <td>19.11￥</td>
        <td>8,900￥</td>
        <td>XM251321312</td>
        <td class="table-content">这是项目内容</td>
        <td>CK20171102001</td>
        <td>刘先生</td>
        <td>333</td>
        <td>10,000￥</td>
        <td>20.00￥</td>
      </tr>
    </tbody>
  </table>
</div>

<include src="../template/footer.html">
  @js = ../../src/js/stock_check.js
</include>