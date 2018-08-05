<include src="../template/normalHeader.html">
  @title = 新增人员
</include>

<div class="ui breadcrumb">
  <a class="section">数据维护</a>
  <div class="divider"> / </div>
  <a class="section" href="../data/bank_list.html">人员列表</a>
  <div class="divider"> / </div>
  <div class="active section">人员编辑</div>
</div>

<input type="hidden" id="currentId" value="">
<h1 class="ui header blue aligned center">人员编辑</h1>
<div id="dataAuthAdd">
  <h4 class="ui dividing header blue">信息录入</h4>
  <div class="ui form">
    <div class="ui three column doubling stackable grid">
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">人员名称</label>
          <div class="eleven wide field">
            <input type="hidden" id="authName" value="贺强">
            <input type="text" v-model="authForm.username" placeholder="请输入人员名称">
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">隶属部门</label>
          <div class="eleven wide field">
            <input type="hidden" id="authDepartment" value="xxx部门">
            <input type="text" v-model="authForm.department" placeholder="请输入隶属部门">
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">手机号</label>
          <div class="eleven wide field">
            <input type="hidden" id="authNumber" value="12352321235">
            <input type="text" v-model.number="authForm.phone" placeholder="请输入手机号">
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">初始密码</label>
          <div class="eleven wide field">
            <input type="hidden" id="authPassword" value="*******">
            <input type="text" v-model="authForm.password" placeholder="请输入初始密码">
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
  @js = ../../src/js/data_auth_add.js
</include>