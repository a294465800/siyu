<include src="../template/normalHeader.html">
  @title = 新增项目类别
</include>

<div class="ui breadcrumb">
  <a class="section">数据维护</a>
  <div class="divider"> / </div>
  <a class="section" href="../data/type_list.html">项目类别列表</a>
  <div class="divider"> / </div>
  <div class="active section">新增项目类别</div>
</div>

<h1 class="ui header blue aligned center">新增项目类别</h1>
<div id="dataTypeAdd">
  <h4 class="ui dividing header blue">信息录入</h4>
  <div class="ui form">
    <div class="ui three column doubling stackable grid">
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">类别内容</label>
          <div class="eleven wide field">
            <input type="hidden" id="typeId" value="">
            <input type="hidden" id="typeName" value="xxx类别内容">
            <input type="text" v-model="typeForm.name" placeholder="请输入类别内容">
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">税率</label>
          <div class="eleven wide field">
            <input type="hidden" id="typeRate" value="15">
            <div class="ui icon input">
              <input type="number" placeholder="请输入税率" v-model="typeForm.rate">
              <i class="icon percent"></i>
            </div>
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
  @js = ../../src/js/data_type_add.js
</include>