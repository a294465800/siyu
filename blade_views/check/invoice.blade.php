<include src="../template/normalHeader.html">
  @title = 开票
</include>

<div class="ui breadcrumb">
  <a class="section">验收与收款管理</a>
  <div class="divider"> / </div>
  <a class="section" href="../check/list.html">验收与收款清单</a>
  <div class="divider"> / </div>
  <a class="section" href="../check/detail.html">项目明细 - 项目号 15823910212</a>
  <div class="divider"> / </div>
  <div class="active section">开票</div>
</div>

<h4 class="ui dividing header blue">基本信息</h4>
<div class="invisible" id="checkInvoice">
  <!-- 基本信息 -->
  <div class="ui form form-item">
    <div class="ui three column doubling stackable grid">
      <div class="column">
        <div class="inline fields">
          <label class="four wide field">项目编号</label>
          <div class="twelve wide field">213154232213</div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="four wide field">项目内容</label>
          <div class="twelve wide field">这是一些项目内容</div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="four wide field">付款单位</label>
          <div class="twelve wide field">
            <el-select v-model="invoiceForm.company" placeholder="请选择付款单位">
              <el-option v-for="item in [{id:1,name:'单位一'},{id:2,name:'单位二'},{id:3,name:'单位三'}]" :key="item.id" :label="item.name" :value="item.id">
              </el-option>
            </el-select>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="four wide field">开票日期</label>
          <div class="twelve wide field">
            <el-date-picker v-model="invoiceForm.date" type="date" placeholder="请选择开票日期" value-format="yyyy-MM-dd">
            </el-date-picker>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="four wide field">税率</label>
          <div class="twelve wide field">
            <el-select v-model="invoiceForm.tax" placeholder="请选择税率">
              <el-option v-for="item in [{id:1,value:5},{id:2,value:5},{id:3,value:5}]" :key="item.id" :label="item.value + '%'" :value="item.id">
              </el-option>
            </el-select>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="four wide field">开票金额</label>
          <div class="twelve wide field icon input">
            <input v-model.enter="invoiceForm.amount" type="number" placeholder="请输入开票金额">
            <i class="yen icon"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- / 基本信息 -->

  <!-- 发票录入 -->
  <h4 class="ui dividing header blue">发票录入</h4>
  <div class="flex-row flex-end">
    <button class="ui positive icon button" @click="addItem('invoices')">
      <i class="icon plus"></i>
      <span>新增</span>
    </button>
  </div>
  <div class="ui form form-item">
    <div class="ui six column doubling stackable grid">
      <div class="one wide column form-thead">序号</div>
      <div class="three wide column form-thead">发票号码</div>
      <div class="two wide column form-thead">含税销售额</div>
      <div class="three wide column form-thead">税额</div>
      <div class="three wide column form-thead">不含税销售额</div>
      <div class="three wide column form-thead">摘要</div>
      <div class="one wide column form-thead">操作</div>
    </div>
    <transition-group name="slide-down" tag="div" class="form-wrap">
      <div class="ui six column doubling stackable grid center aligned" v-for="(item,index) in invoiceForm.invoices" :key="item.id">
        <div class="one wide column">
          <div class="form-order">{{index + 1}}</div>
        </div>
        <div class="three wide column">
          <input v-model="item.number" type="text" placeholder="请输入发票号码">
        </div>
        <div class="two wide column">
          <div class="block ui icon input">
            <input v-model.enter="item.amount" type="number" placeholder="请输入含税销售额">
            <i class="yen icon"></i>
          </div>
        </div>
        <div class="three wide column">
          <div class="block ui icon input">
            <input v-model.enter="item.tax_amount" type="number" placeholder="请输入税额">
            <i class="yen icon"></i>
          </div>
        </div>
        <div class="three wide column">
          <div class="block ui icon input">
            <input v-model.enter="item.clear_amount" type="number" placeholder="请输入不含税销售额">
            <i class="yen icon"></i>
          </div>
        </div>
        <div class="three wide column">
          <textarea v-model="item.summary" placeholder="请输入备注" rows="1"></textarea>
        </div>
        <div class="one wide column flex-row flex-end">
          <button class="ui negative icon button" @click="deleteItem('invoices', item, index)">
            <i class="icon minus"></i>
            <span>删除</span>
          </button>
        </div>
      </div>
    </transition-group>
  </div>
  <!-- / 发票录入 -->


  <div class="inline-center margin-top-20">
    <button class="ui button green large">
      <i class="icon hand pointer"></i>
      <span>提交</span>
    </button>
  </div>
</div>

<include src="../template/footer.html">
  @js = ../../src/js/check_invoice.js
</include>