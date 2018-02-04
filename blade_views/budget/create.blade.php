<include src="../template/normalHeader.html">
  @title = 预算录入 - 项目号 15823910212
</include>

<div class="ui breadcrumb">
  <a class="section">预算管理</a>
  <div class="divider"> / </div>
  <a class="section" href="../budget/list.html">预算清单</a>
  <div class="divider"> / </div>
  <div class="active section">预算录入 - 项目号 15823910212</div>
</div>

<h1 class="ui header blue center aligned">预算录入 - 项目号 15823910212</h1>

<div class="invisible" id="budgetCreate">

  <!-- 操作 -->
  <div class="content-operation">
    <label for="contractUpload" class="ui positive icon button">
      <i class="icon download"></i>
      <span>导入</span>
      <input style="display:none;" type="file" id="contractUpload" multiple @change="fileUpload($event)">
    </label>
  </div>
  <!-- / 操作 -->

  <!-- 添加表单 -->
  <div class="ui form form-item">
    <div class="ui eleven column doubling stackable grid">
      <div class="two wide column form-thead">物料名称</div>
      <div class="two wide column form-thead">性能及技术参数</div>
      <div class="two wide column form-thead">品牌型号</div>
      <div class="two wide column form-thead">生产厂家</div>
      <div class="one wide column form-thead">单位</div>
      <div class="one wide column form-thead">单价</div>
      <div class="two wide column form-thead">数量</div>
      <div class="two wide column form-thead">金额</div>
      <div class="one wide column form-thead">类型</div>
      <div class="one wide column form-thead">操作</div>
    </div>
    <div class="ui eleven column doubling stackable grid center aligned">
      <div class="two wide column">
        <input v-model="newBudget.name" type="text" placeholder="请输入物料名称">
      </div>
      <div class="two wide column">
        <textarea v-model="newBudget.parameter" placeholder="请输入性能及技术参数" rows="1"></textarea>
      </div>
      <div class="two wide column">
        <input v-model="newBudget.model" type="text" placeholder="请输入品牌型号">
      </div>
      <div class="two wide column">
        <input v-model="newBudget.manufacturer" type="text" placeholder="请输入生产厂家">
      </div>
      <div class="one wide column">
        <input v-model="newBudget.unit" type="text" placeholder="单位">
      </div>
      <div class="one wide column">
        <input v-model="newBudget.price" type="number" placeholder="单价">
      </div>
      <div class="two wide column">
        <input v-model="newBudget.quantity" type="number" placeholder="数量">
      </div>
      <div class="two wide column">
        <input v-model="newBudget.amount" type="number" placeholder="金额">
      </div>
      <div class="one wide column">
        <el-select v-model="newBudget.type" placeholder="类型">
          <el-option v-for="item in budgetType" :key="item.id" :label="item.name" :value="item.id">
          </el-option>
        </el-select>
      </div>
      <div class="one wide column">
        <button class="ui positive icon button" @click="addNewBudget">
          <i class="icon plus"></i>
          <span>添加</span>
        </button>
      </div>
    </div>
  </div>
  <!-- / 添加表单 -->

  <!-- 录入结果 -->
  <h4 class="ui dividing header blue">预算录入结果</h4>
  <div class="ui form form-item">
    <div class="ui eleven column doubling stackable grid">
      <div class="two wide column form-thead">物料名称</div>
      <div class="two wide column form-thead">性能及技术参数</div>
      <div class="two wide column form-thead">品牌型号</div>
      <div class="two wide column form-thead">生产厂家</div>
      <div class="one wide column form-thead">单位</div>
      <div class="one wide column form-thead">单价</div>
      <div class="two wide column form-thead">数量</div>
      <div class="two wide column form-thead">金额</div>
      <div class="one wide column form-thead">类型</div>
      <div class="one wide column form-thead">操作</div>
    </div>

    <transition-group name="slide-down" tag="div" class="margin-top-1rem">
      <div class="ui eleven column doubling stackable grid center aligned" v-for="(item, index) in budgetForm" :key="item.id">
        <div class="two wide column">{{ item.name }}</div>
        <div class="two wide column">{{ item.parameter }}</div>
        <div class="two wide column">{{ item.model }}</div>
        <div class="two wide column">{{ item.manufacturer }}</div>
        <div class="one wide column">{{ item.unit }}</div>
        <div class="one wide column">{{ item.price }} / {{ item.unit }}</div>
        <div class="two wide column">{{ item.quantity}}</div>
        <div class="two wide column">{{item.amount}}</div>
        <div class="one wide column">{{budgetType[item.type * 1 - 1].name}}</div>
        <div class="one wide column delete" @click="deleteBudget(item, index)">
          <i class="icon minus red"></i>
        </div>
      </div>
    </transition-group>
  </div>
  <!-- / 录入结果 -->

  <div class="inline-center margin-top-20">
    <button class="ui button green large">
      <i class="icon hand pointer"></i>
      <span>提交</span>
    </button>
  </div>
</div>

<include src="../template/footer.html">
  @js = ../../src/js/budget_create.js
</include>