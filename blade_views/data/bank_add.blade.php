<include src="../template/normalHeader.html">
  @title = 新增银行
</include>

<div class="ui breadcrumb">
  <a class="section">数据维护</a>
  <div class="divider"> / </div>
  <a class="section" href="../data/bank_list.html">银行列表</a>
  <div class="divider"> / </div>
  <div class="active section">新增银行</div>
</div>

<h1 class="ui header blue aligned center">新增银行</h1>
<div id="dataBankAdd">
  <h4 class="ui dividing header blue">信息录入</h4>
  <div class="ui form">
    <div class="ui three column doubling stackable grid">
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">银行名称</label>
          <div class="eleven wide field">
            <input type="hidden" id="bankId" value="">
            <input type="hidden" id="bankName" value="中国银行">
            <input type="text" v-model="bankForm.name" placeholder="请输入银行名称">
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">银行账号</label>
          <div class="eleven wide field">
            <input type="hidden" id="bankAccount" value="634393939293043236">
            <input type="text" v-model="bankForm.account" placeholder="请输入银行账号">
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
  @js = ../../src/js/data_bank_add.js
</include>