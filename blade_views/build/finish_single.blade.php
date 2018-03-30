<include src="../template/normalHeader.html">
  @title = 请款查询 - WGQK20171103001
</include>

<div class="ui breadcrumb">
  <a class="section">施工管理</a>
  <div class="divider"> / </div>
  <a class="section" href="../build/finish_list.html">完工请款清单</a>
  <div class="divider"> / </div>
  <div class="active section">请款查询 - WGQK20171103001</div>
</div>

<h2 class="ui header aligned center">请款编号 - WGQK20171103001</h2>
<h4 class="ui dividing header blue">基本信息</h4>
<div id="buildFinishSingle">
  <div class="ui form">
    <div class="ui three column doubling stackable grid">
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">施工队</label>
          <div class="eleven wide field">
            <div class="fake-input">xxx施工队</div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">施工经理</label>
          <div class="eleven wide field">
            <div class="fake-input">程经理</div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">项目编号</label>
          <div class="eleven wide field">
            <div class="fake-input">XM1202312</div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">项目内容</label>
          <div class="eleven wide field">
            <div class="fake-input">这是项目内容</div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">项目经理</label>
          <div class="eleven wide field">
            <div class="fake-input">刘经理</div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">请款日期</label>
          <div class="eleven wide field">
            <div class="fake-input">2018-02-01</div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">请款金额</label>
          <div class="eleven wide field">
            <div class="fake-input">123,523 ￥</div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <h4 class="ui dividing header blue">请款清单</h4>

  <table class="ui center aligned table selectable">
    <thead>
      <tr>
        <th>序号</th>
        <th>设备名称</th>
        <th>性能参数</th>
        <th>数量</th>
        <th>单位</th>
        <th>含税单价</th>
        <th>含税总价</th>
        <th>备注</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>设备名称</td>
        <td>性能参数xxx</td>
        <td>123</td>
        <td>个</td>
        <td>123,521</td>
        <td>12 ￥</td>
        <td>这是说明</td>
      </tr>
      <tr>
        <td>2</td>
        <td>设备名称</td>
        <td>性能参数xxx</td>
        <td>123</td>
        <td>个</td>
        <td>123,521</td>
        <td>12 ￥</td>
        <td>这是说明</td>
      </tr>
      <tr>
        <td>3</td>
        <td>设备名称</td>
        <td>性能参数xxx</td>
        <td>123</td>
        <td>个</td>
        <td>123,521</td>
        <td>12 ￥</td>
        <td>这是说明</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th colspan="6">合计</th>
        <th>12,123,523 ￥</th>
        <th></th>
      </tr>
    </tfoot>
  </table>

  <div class="flex-row flex-center margin-top-50">
    <a class="ui icon button" href="#" style="margin:0 10px;">
      <i class="icon edit"></i>
      <span>修改</span>
    </a>
    <button class="ui icon button primary" @click="recheckFnc" style="margin:0 10px;">
      <i class="icon legal"></i>
      <span>复核</span>
    </button>
    <a class="ui icon button primary" href="javascript:_helper.fullWindow('../buy/extrabudgetary_print.html')" style="margin:0 10px;">
      <i class="icon edit"></i>
      <span>审批</span>
    </a>
    <a class="ui icon button positive" href="javascript:_helper.fullWindow('../build/finish_print.html')" style="margin:0 10px;">
      <i class="icon print"></i>
      <span>凭证</span>
    </a>
  </div>

  <div class="ui page dimmer">
    <div class="simple dimmer content">
      <div class="center">
        <div class="buy_dialog">
          <div class="dialog_header">选择复核人</div>
          <div class="dialog_content">
            <el-checkbox-group v-model="checkedMen" @change="handleCheckManChange">
              <el-checkbox v-for="man in menList" :label="man.id" :key="man.id">{{man.name}}</el-checkbox>
            </el-checkbox-group>
          </div>
          <div class="diolag_footer">
            <button class="ui button primary" @click="confirmRecheck">确 定</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<include src="../template/footer.html">
  @js = ../../src/js/build_finish_single.js
</include>