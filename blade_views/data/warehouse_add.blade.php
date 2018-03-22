<include src="../template/normalHeader.html">
  @title = 新增仓库
</include>

<div class="ui breadcrumb">
  <a class="section">数据维护</a>
  <div class="divider"> / </div>
  <a class="section" href="../data/warehouse_list.html">仓库列表</a>
  <div class="divider"> / </div>
  <div class="active section">新增仓库</div>
</div>

<h1 class="ui header blue aligned center">新增仓库</h1>
<div id="dataWarehouseAdd">
  <h4 class="ui dividing header blue">信息录入</h4>
  <div class="ui form">
    <div class="ui three column doubling stackable grid">
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">仓库名称</label>
          <div class="eleven wide field">
            <input type="hidden" id="warehouseId" value="">
            <input type="hidden" id="warehouseName" value="xxx仓库">
            <input type="text" v-model="warehouseForm.name" placeholder="请输入仓库名称">
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">仓库地址</label>
          <div class="eleven wide field">
            <input type="hidden" id="warehouseAddress" value="广东省广州市xxxxx">
            <input type="text" v-model="warehouseForm.address" placeholder="请输入仓库地址">
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">仓管员</label>
          <div class="eleven wide field">
            <input type="hidden" id="warehouseAdmin" value="陈子欣">
            <input type="text" v-model="warehouseForm.admin" placeholder="请输入仓管员">
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
  @js = ../../src/js/data_warehouse_add.js
</include>