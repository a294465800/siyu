<include src="../template/normalHeader.html">
  @title = 实际付款
</include>

<div class="ui breadcrumb print-hide">
  <a class="section">采购管理</a>
  <div class="divider"> / </div>
  <a class="section" href="../buy/pay_list.html">采购付款清单</a>
  <div class="divider"> / </div>
  <a class="section" href="../buy/payment_list.html?id=CG12512312521">采购付款查询 - CG12512312521</a>
  <div class="divider"> / </div>
  <div class="active section">实际付款</div>
</div>

<input type="hidden" id="askId" value="11">
<input id="hiddenDate" type="hidden" value="2018-03-05">
<input type="hidden" id="bankAccount" value="1">
<input type="hidden" id="remark" value="1">

<h1 class="ui red header blue center aligned">实际付款</h1>
<div id="paymentFinish" class="invisible">

  <!-- 基本信息 -->
  <div class="ui form form-item">
    <div class="ui three column doubling stackable grid">
      <div class="column">
        <div class="inline fields">
          <label class="four wide field">实际付款金额</label>
          <div class="twelve wide field">
            <div class="fake-input">123,542.00 ￥</div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="four wide field">实际付款日期</label>
          <div class="twelve wide field">
            <el-date-picker v-model="form.pay_date" name="date" type="date" placeholder="实际付款日期" value-format="yyyy-MM-dd">
            </el-date-picker>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="four wide field">收款银行账号</label>
          <div class="twelve wide field icon input">
            <el-select v-model="form.bank_id" placeholder="请选择银行账号">
              <el-option v-for="(item, index) in banks" :key="item.id" :label="item.name + ' ' +  item.account" :value="item.id"></el-option>
            </el-select>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="four wide field">经办人</label>
          <div class="twelve wide field">
            <div class="fake-input">陈xx</div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="four wide field">备注</label>
          <div class="twelve wide field">
            <input type="text" name="remark" v-model="form.remark" placeholder="请输入备注">
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /基本信息 -->
  <div class="inline-center margin-top-20">
    <button class="ui button green large" @click="submitForm">
      <i class="icon hand pointer"></i>
      <span>提交</span>
    </button>
  </div>

</div>

<include src="../template/footer.html">
  @js = ../../src/js/buy_payment_finish.js
</include>