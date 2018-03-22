<include src="../template/normalHeader.html">
  @title = 新增物料
</include>

<div class="ui breadcrumb">
  <a class="section">数据维护</a>
  <div class="divider"> / </div>
  <a class="section" href="../data/material_list.html">物料列表</a>
  <div class="divider"> / </div>
  <div class="active section">新增物料</div>
</div>

<h1 class="ui header blue aligned center">新增物料</h1>
<div id="dataMaterialAdd">
  <h4 class="ui dividing header blue">信息录入</h4>
  <div class="ui form">
    <div class="ui three column doubling stackable grid">
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">物料名称</label>
          <div class="eleven wide field">
            <input type="hidden" id="materialId" value="">
            <input type="hidden" id="materialName" value="线缆">
            <input type="text" v-model="materialForm.name" placeholder="请输入物料名称">
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">性能与技术参数</label>
          <div class="eleven wide field">
            <input type="hidden" id="materialParam" value="这是性能和参数">
            <input type="text" v-model="materialForm.param" placeholder="请输入性能与技术参数">
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">品牌型号</label>
          <div class="eleven wide field">
            <input type="hidden" id="materialModel" value="ak-23">
            <input type="text" v-model="materialForm.model" placeholder="请输入品牌型号">
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">生产厂家</label>
          <div class="eleven wide field">
            <input type="hidden" id="materialFactor" value="xxx工厂">
            <input type="text" v-model="materialForm.factor" placeholder="请输入生产厂家">
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">单位</label>
          <div class="eleven wide field">
            <input type="hidden" id="materialUnit" value="个">
            <input type="text" v-model="materialForm.unit" placeholder="请输入单位">
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
  @js = ../../src/js/data_material_add.js
</include>