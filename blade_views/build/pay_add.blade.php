<include src="../template/normalHeader.html">
  @title = 实际付款录入
</include>

<div class="ui breadcrumb">
  <a class="section">施工管理</a>
  <div class="divider"> / </div>
  <a class="section" href="../build/pay_list.html">施工付款款清单</a>
  <div class="divider"> / </div>
  <a class="section" href="../build/pay_single.html?id=SGFK20171103001">付款查询 - SGFK20171103001</a>
  <div class="divider"> / </div>
  <div class="active section">实际付款录入</div>
</div>

<input type="hidden" id="bankAccount" value="">
<input type="hidden" id="applyId" value="">

<h1 class="ui header blue aligned center">实际付款录入 - SGFK20171103001</h1>
<div id="buildPayAdd">
  <h4 class="ui dividing header blue">基本信息</h4>
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
          <label class="six wide field flex-center">付款金额</label>
          <div class="eleven wide field">
            <div class="fake-input">123,523 ￥</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <h4 class="ui dividing header blue">信息录入</h4>
  <div class="ui form">
    <div class="ui three column doubling stackable grid">
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">实际付款日期</label>
          <div class="eleven wide field">
            <el-date-picker v-model="addForm.date" type="date" placeholder="请选择实际付款日期" value-format="yyyy-MM-dd">
            </el-date-picker>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">收款银行</label>
          <div class="eleven wide field">
            <el-select v-model="addForm.bank_id" placeholder="请选择银行账号">
              <el-option v-for="(item, index) in banks" :label="item.name + ' ' + item.account" :value="item.id"></el-option>
            </el-select>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">付款经办人</label>
          <div class="eleven wide field">
            <input type="text" v-model="addForm.worker" placeholder="请输入付款经办人">
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">备注</label>
          <div class="eleven wide field">
            <input type="text" v-model="addForm.remark" placeholder="请输入备注">
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="inline-center margin-top-20">
    <button class="ui button primary large" @click="submit">
      <i class="icon hand pointer"></i>
      <span>确定</span>
    </button>
  </div>

</div>
<include src="../template/footer.html">
  @js = ../../src/js/build_pay_add.js
</include>