<include src="../template/normalHeader.html">
  @title = 新增借款申请
</include>

<div class="ui breadcrumb">
  <a class="section">报销与借款管理</a>
  <div class="divider"> / </div>
  <a class="section" href="../loan/loan_list.html">借款清单</a>
  <div class="divider"> / </div>
  <div class="active section">付款</div>
</div>
<input type="hidden" value="" id="payId">
<input type="hidden" value="" id="manager">
<input type="hidden" value="" id="bank">
<input type="hidden" value="" id="account">
<div style="display: none" id="banks">[]</div>

<h1 class="ui header blue aligned center">付款</h1>
<div id="loanLoanPay">
  <h4 class="ui dividing header blue">基本信息</h4>
  <div class="ui form">
    <div class="ui three column doubling stackable grid">
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">借款人</label>
          <div class="eleven wide field">
            <div class="fake-input">陈艺戈</div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">申请日期</label>
          <div class="eleven wide field">
            <div class="fake-input">2018-03-03</div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">借款金额</label>
          <div class="eleven wide field">
            <div class="fake-input">123,523￥</div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">借款原因</label>
          <div class="eleven wide field">
            <div class="fake-input">这是借款原因</div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">审批人</label>
          <div class="eleven wide field">
            <div class="fake-input">刘朝阳</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <h4 class="ui dividing header blue">录入信息</h4>
  <div class="ui form">
    <div class="ui three column doubling stackable grid">
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">付款日期</label>
          <div class="eleven wide field">
            <el-date-picker v-model="loanForm.date" type="date" placeholder="请选择付款日期" value-format="yyyy-MM-dd">
            </el-date-picker>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">付款方式</label>
          <div class="eleven wide field">
            <el-select v-model="loanForm.pay_type" placeholder="付款方式">
              <el-option v-for="item in [{id:1,name:'现金'},{id:2,name:'转账'}]" :key="item.id" :label="item.name" :value="item.id">
              </el-option>
            </el-select>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">付款经办人</label>
          <div class="eleven wide field">
            <input type="text" v-model="loanForm.manager" placeholder="请输入付款经办人">
          </div>
        </div>
      </div>
      <template v-if="loanForm.pay_type == 2">
        <div class="column">
          <div class="inline fields">
            <label class="six wide field flex-center">转账银行</label>
            <div class="eleven wide field">
              <el-select v-model="loanForm.bank_name" placeholder="请输入转账银行" @change="bankChange">
                <el-option v-for="(item, index) in bankList" :key="item.id" :label="item.name" :value="index">
                </el-option>
              </el-select>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="inline fields">
            <label class="six wide field flex-center">银行账号</label>
            <div class="eleven wide field">
              <div class="fake-input">{{ loanForm.account }}</div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
  <div class="inline-center margin-top-20">
    <button class="ui button primary large" @click="submit">
      <i class="icon hand pointer"></i>
      <span>提交</span>
    </button>
  </div>

</div>
<include src="../template/footer.html">
  @js = ../../src/js/loan_loan_pay.js
</include>