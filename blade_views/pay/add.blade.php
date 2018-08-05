<include src="../template/normalHeader.html">
  @title = 费用申请
</include>

<div class="ui breadcrumb">
  <a class="section">费用付款管理</a>
  <div class="divider"> / </div>
  <a class="section" href="../pay/list.html">付款审批清单</a>
  <div class="divider"> / </div>
  <div class="active section">费用申请</div>
</div>

<input type="hidden" value="" id="applyUser">
<div id="invoiceType"></div>
<div id="payeeType"></div>
<h1 class="ui header blue aligned center">费用申请</h1>
<div id="payAdd">
  <h4 class="ui dividing header blue">信息录入</h4>

  <div class="ui form">
    <div class="ui three column doubling stackable grid">
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">申请日期</label>
          <div class="eleven wide field">
            <el-date-picker v-model="payForm.date" type="date" placeholder="请选择申请日期" value-format="yyyy-MM-dd">
            </el-date-picker>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">付款金额</label>
          <div class="eleven wide field">
            <input type="number" v-model.number="payForm.price" placeholder="请输入付款金额">
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">收款人</label>
          <div class="eleven wide field">
            <el-autocomplete popper-class="my-autocomplete" v-model="payForm.payee" :fetch-suggestions="querySearchPayee" placeholder="请输入收款人"
              @select="handleSelectPayee">
              <i class="el-icon-edit el-input__icon" slot="suffix">
              </i>
              <template slot-scope="props">
                <div class="name">{{ props.item.bank }}</div>
                <span class="addr">{{ props.item.account }}</span>
              </template>
            </el-autocomplete>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">收款银行</label>
          <div class="eleven wide field">
            <div class="fake-input">{{ currentSupplier.bank || '无' }}</div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">收款账号</label>
          <div class="eleven wide field">
            <div class="fake-input">{{ currentSupplier.account || '无' }}</div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">费用类型</label>
          <div class="eleven wide field">
            <el-select v-model="payForm.payee_type" placeholder="费用类型">
              <el-option v-for="item in payeeType" :key="item.id" :label="item.name" :value="item.id">
              </el-option>
            </el-select>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">具体事项</label>
          <div class="eleven wide field">
            <el-select v-model="payForm.payee_type_detail" placeholder="具体事项">
              <el-option v-for="item in payeeDetail" :key="item.id" :label="item.name" :value="item.id">
              </el-option>
            </el-select>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">用途</label>
          <div class="eleven wide field">
            <input type="text" v-model="payForm.application" placeholder="请输入用途">
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">备注</label>
          <div class="eleven wide field">
            <input type="text" v-model="payForm.remark" placeholder="请输入备注">
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">项目编号</label>
          <div class="eleven wide field">
            <el-autocomplete popper-class="my-autocomplete" v-model="payForm.project_number" :fetch-suggestions="querySearchProjectId"
              placeholder="请输入项目编号" @select="handleSelectProjectId">
              <i class="el-icon-edit el-input__icon" slot="suffix">
              </i>
              <template slot-scope="props">
                <div class="name">{{ props.item.number }}</div>
                <span class="addr">{{ props.item.name }}</span>
              </template>
            </el-autocomplete>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">项目内容</label>
          <div class="eleven wide field">
            <el-autocomplete popper-class="my-autocomplete" v-model="payForm.project_content" :fetch-suggestions="querySearchProjectContent"
              placeholder="请输入项目内容" @select="handleSelectProjectContent">
              <i class="el-icon-edit el-input__icon" slot="suffix">
              </i>
              <template slot-scope="props">
                <div class="name">{{ props.item.name }}</div>
                <span class="addr">{{ props.item.number }}</span>
              </template>
            </el-autocomplete>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">付款方式</label>
          <div class="eleven wide field">
            <el-select v-model="payForm.pay_type" placeholder="付款方式">
              <el-option v-for="item in [{id:1,name:'现金'},{id:2,name:'转账'}]" :key="item.id" :label="item.name" :value="item.id">
              </el-option>
            </el-select>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="six wide field flex-center">发票类型</label>
          <div class="eleven wide field">
            <el-select v-model="payForm.invoice_type" placeholder="发票类型">
              <el-option v-for="item in invoiceType" :key="item.id" :label="item.name" :value="item.id">
              </el-option>
            </el-select>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="inline-center margin-top-20">
    <button class="ui button primary large" @click="submit">
      <i class="icon hand pointer"></i>
      <span>提交</span>
    </button>
  </div>

  <div class="ui page dimmer">
    <div class="simple dimmer content">
      <div class="center">
        <div class="buy_dialog">
          <div class="dialog_header">选择审批人</div>
          <div class="dialog_content">
            <el-checkbox-group v-model="checkedMen" @change="handleCheckManChange">
              <el-checkbox v-for="man in menList" :label="man.id" :key="man.id">{{man.name}}</el-checkbox>
            </el-checkbox-group>
          </div>
          <div class="diolag_footer">
            <button class="ui button primary" @click="confirmRecheck">确 定</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<include src="../template/footer.html">
  @js = ../../src/js/pay_add.js
</include>