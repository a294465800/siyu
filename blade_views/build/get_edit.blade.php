<include src="../template/normalHeader.html">
  @title = 收票信息修改
</include>

<div class="ui breadcrumb">
  <a class="section">施工管理</a>
  <div class="divider"> / </div>
  <a class="section" href="../build/get_list.html">施工收票清单</a>
  <div class="divider"> / </div>
  <a class="section" href="../build/get_single.html?id=CG12512312521">施工收票查询 - CG12512312521</a>
  <div class="divider"> / </div>
  <div class="active section">收票信息修改</div>
</div>

<div id="invoiceTypeList" style="display:none;"></div>
<h1 class="ui red header blue center aligned">收票信息修改</h1>
<div class="invisible" id="buildGetEdit">
  <h4 class="ui dividing header blue">收票信息</h4>

  <form action="">
    <div class="ui form form-item">
      <div class="ui three column doubling stackable grid">
        <div class="column">
          <div class="inline fields">
            <label class="four wide field">收票日期</label>
            <div class="twelve wide field">
              <el-date-picker v-model="form.get_date" name="get_date" type="date" placeholder="请选择收票日期" value-format="yyyy-MM-dd">
              </el-date-picker>
              <input type="hidden" id="getDate" value="2018-02-13">
            </div>
          </div>
        </div>
        <div class="column">
          <div class="inline fields">
            <label class="four wide field">开票日期</label>
            <div class="twelve wide field">
              <el-date-picker v-model="form.invoice_date" name="invoice_date" type="date" placeholder="请选择开票日期" value-format="yyyy-MM-dd">
              </el-date-picker>
              <input type="hidden" id="invoiceDate" value="2018-03-13">
            </div>
          </div>
        </div>
        <div class="column">
          <div class="inline fields">
            <label class="four wide field">发票号码</label>
            <div class="twelve wide field">
              <input type="text" value="4654654165165" placeholder="请输入发票号码">
            </div>
          </div>
        </div>
        <div class="column">
          <div class="inline fields">
            <label class="four wide field">发票类型</label>
            <div class="twelve wide field">
              <el-select v-model="form.type" placeholder="发票类型" name="type">
                <el-option v-for="(item, index) in invoice_type" :key="item.id" :label="item.name" :value="item.id">
                </el-option>
              </el-select>
              <input type="hidden" id="invoiceType" value="1">
            </div>
          </div>
        </div>
        <div class="column">
          <div class="inline fields">
            <label class="four wide field">不含税金额</label>
            <div class="twelve wide field">
              <input type="number" v-model="form.amount_without_tax" name="amount_without_tax" placeholder="请输入不含税金额" value="200000.00">
            </div>
          </div>
        </div>
        <div class="column">
          <div class="inline fields">
            <label class="four wide field">税额</label>
            <div class="twelve wide field">
              <input type="number"  v-model="form.tax" name="tax" placeholder="请输入税额" value="200000.00">
            </div>
          </div>
        </div>
        <div class="column">
          <div class="inline fields">
            <label class="four wide field">含税金额</label>
            <div class="twelve wide field">
              <!-- <input type="number" name="amount" placeholder="请输入含税金额" value="200000.00"> -->
              <div class="fake-input">{{ ((form.amount_without_tax * 1) + (form.tax*1)).toLocaleString('en-US') }}￥</div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="inline fields">
            <label class="four wide field">收票经办人</label>
            <div class="twelve wide field">
              <div class="fake-input">陈经理</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="inline-center margin-top-20">
      <button class="ui button primary large">
        <i class="icon hand pointer"></i>
        <span>提交</span>
      </button>
    </div>
  </form>
</div>


<include src="../template/footer.html">
  @js = ../../src/js/build_get_edit.js
</include>