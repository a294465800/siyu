<include src="../template/normalHeader.html">
  @title = 收款
</include>

<div class="ui breadcrumb">
  <a class="section">验收与收款管理</a>
  <div class="divider"> / </div>
  <a class="section" href="../check/list.html">验收与收款清单</a>
  <div class="divider"> / </div>
  <a class="section" href="../check/detail.html">项目明细 - 项目号 15823910212</a>
  <div class="divider"> / </div>
  <div class="active section">收款</div>
</div>
<input type="hidden" id="projectId" value="XM15823910212">

<div class="invisible margin-top-20" id="checkCollect">
  <div class="ui top attached tabular menu" style="cursor:pointer;">
    <div class="item active" data-tab="tab-1">收回履约保证金</div>
    <div class="item" data-tab="tab-2">主合同收款</div>
    <div class="item" data-tab="tab-3">分包合同收款</div>
    <div class="item" data-tab="tab-4">发包公司收款</div>
  </div>

  <!-- 收回履约保证金 -->
  <div class="ui tab attached segment active collect-item" data-tab="tab-1">
    <h3 class="ui header center aligned">收回履约保证金</h3>
    <div class="ui form form-item">
      <div class="ui three column doubling stackable grid">
        <div class="column">
          <div class="inline fields">
            <label class="four wide field">项目编号</label>
            <div class="twelve wide field">
              <div class="fake-input">213154232213</div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="inline fields">
            <label class="four wide field">项目内容</label>
            <div class="twelve wide field">
              <div class="fake-input">这是一些项目内容</div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="inline fields">
            <label class="four wide field">履约保证金余额</label>
            <div class="twelve wide field">
              <div class="fake-input">123,123,123 ￥</div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="inline fields">
            <label class="four wide field">付款单位</label>
            <div class="twelve wide field">
              <el-autocomplete popper-class="my-autocomplete" v-model="collectForm.margins.payee" :fetch-suggestions="querySearchCompany"
                placeholder="请选择付款单位" @select="handleSelectCompanyA">
                <i class="el-icon-edit el-input__icon" slot="suffix">
                </i>
                <template slot-scope="props">
                  <div class="name">{{ props.item }}</div>
                </template>
              </el-autocomplete>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="inline fields">
            <label class="four wide field">收款日期</label>
            <div class="twelve wide field">
              <el-date-picker v-model="collectForm.margins.pay_date" type="date" placeholder="请选择收款日期" value-format="yyyy-MM-dd">
              </el-date-picker>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="inline fields">
            <label class="four wide field">收款金额</label>
            <div class="twelve wide field icon input">
              <input v-model.number="collectForm.margins.price" type="number" placeholder="请输入收款金额">
              <i class="yen icon"></i>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="inline fields">
            <label class="four wide field">收款银行</label>
            <div class="twelve wide field icon input">
              <el-autocomplete popper-class="my-autocomplete" v-model="collectForm.margins.bank" :fetch-suggestions="querySearchBank" placeholder="请输入收款银行"
                @select="handleSelectBankA">
                <i class="el-icon-edit el-input__icon" slot="suffix">
                </i>
                <template slot-scope="props">
                  <div class="name">{{ props.item.name }}</div>
                  <div class="addr">{{ props.item.account }}</div>
                </template>
              </el-autocomplete>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="inline fields">
            <label class="four wide field">银行账号</label>
            <div class="twelve wide field icon input">
              <div class="fake-input">{{ collectForm.margins.account || '暂无' }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="inline-center margin-top-20">
      <button class="ui button green large" @click="checkSubmit('margins')">
        <i class="icon hand pointer"></i>
        <span>提交</span>
      </button>
    </div>
  </div>
  <!-- / 收回履约保证金 -->

  <!-- 主合同收款 -->
  <div class="ui tab attached segment collect-item" data-tab="tab-2">
    <h3 class="ui header center aligned">主合同收款</h3>
    <div class="ui form form-item">
      <div class="ui three column doubling stackable grid">
        <div class="column">
          <div class="inline fields">
            <label class="four wide field">项目编号</label>
            <div class="twelve wide field">
              <div class="fake-input">213154232213</div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="inline fields">
            <label class="four wide field">项目内容</label>
            <div class="twelve wide field">
              <div class="fake-input">这是一些项目内容</div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="inline fields">
            <label class="four wide field">付款单位</label>
            <div class="twelve wide field">
              <el-autocomplete popper-class="my-autocomplete" v-model="collectForm.masterContract.payee" :fetch-suggestions="querySearchCompany"
                placeholder="请选择付款单位" @select="handleSelectCompanyB">
                <i class="el-icon-edit el-input__icon" slot="suffix">
                </i>
                <template slot-scope="props">
                  <div class="name">{{ props.item }}</div>
                </template>
              </el-autocomplete>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="inline fields">
            <label class="four wide field">收款日期</label>
            <div class="twelve wide field">
              <el-date-picker v-model="collectForm.masterContract.pay_date" type="date" placeholder="请选择收款日期" value-format="yyyy-MM-dd">
              </el-date-picker>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="inline fields">
            <label class="four wide field">收款金额</label>
            <div class="twelve wide field icon input">
              <input v-model.number="collectForm.masterContract.price" type="number" placeholder="请输入收款金额">
              <i class="yen icon"></i>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="inline fields">
            <label class="four wide field">收款银行</label>
            <div class="twelve wide field icon input">
              <el-autocomplete popper-class="my-autocomplete" v-model="collectForm.masterContract.bank" :fetch-suggestions="querySearchBank"
                placeholder="请输入收款银行" @select="handleSelectBankB">
                <i class="el-icon-edit el-input__icon" slot="suffix">
                </i>
                <template slot-scope="props">
                  <div class="name">{{ props.item.name }}</div>
                  <div class="addr">{{ props.item.account }}</div>
                </template>
              </el-autocomplete>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="inline fields">
            <label class="four wide field">银行账号</label>
            <div class="twelve wide field icon input">
              <div class="fake-input">{{ collectForm.masterContract.account || '暂无' }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="inline-center margin-top-20">
      <button class="ui button green large" @click="checkSubmit('masterContract')">
        <i class="icon hand pointer"></i>
        <span>提交</span>
      </button>
    </div>
  </div>
  <!-- / 主合同收款 -->

  <!-- 分包合同收款 -->
  <div class="ui tab attached segment collect-item" data-tab="tab-3">
    <h3 class="ui header center aligned">分包合同收款</h3>
    <div class="ui form form-item">
      <div class="ui three column doubling stackable grid">
        <div class="column">
          <div class="inline fields">
            <label class="four wide field">项目编号</label>
            <div class="twelve wide field">
              <div class="fake-input">213154232213</div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="inline fields">
            <label class="four wide field">项目内容</label>
            <div class="twelve wide field">
              <div class="fake-input">这是一些项目内容</div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="inline fields">
            <label class="four wide field">付款单位</label>
            <div class="twelve wide field">
              <el-autocomplete popper-class="my-autocomplete" v-model="collectForm.subContract.payee" :fetch-suggestions="querySearchCompany"
                placeholder="请选择付款单位" @select="handleSelectCompanyC">
                <i class="el-icon-edit el-input__icon" slot="suffix">
                </i>
                <template slot-scope="props">
                  <div class="name">{{ props.item }}</div>
                </template>
              </el-autocomplete>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="inline fields">
            <label class="four wide field">收款日期</label>
            <div class="twelve wide field">
              <el-date-picker v-model="collectForm.subContract.pay_date" type="date" placeholder="请选择收款日期" value-format="yyyy-MM-dd">
              </el-date-picker>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="inline fields">
            <label class="four wide field">收款金额</label>
            <div class="twelve wide field icon input">
              <input v-model.number="collectForm.subContract.price" type="number" placeholder="请输入收款金额">
              <i class="yen icon"></i>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="inline fields">
            <label class="four wide field">收款银行</label>
            <div class="twelve wide field icon input">
              <el-autocomplete popper-class="my-autocomplete" v-model="collectForm.subContract.bank" :fetch-suggestions="querySearchBank"
                placeholder="请输入收款银行" @select="handleSelectBankC">
                <i class="el-icon-edit el-input__icon" slot="suffix">
                </i>
                <template slot-scope="props">
                  <div class="name">{{ props.item.name }}</div>
                  <div class="addr">{{ props.item.account }}</div>
                </template>
              </el-autocomplete>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="inline fields">
            <label class="four wide field">银行账号</label>
            <div class="twelve wide field icon input">
              <div class="fake-input">{{ collectForm.subContract.account || '暂无' }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="inline-center margin-top-20">
      <button class="ui button green large" @click="checkSubmit('subContract')">
        <i class="icon hand pointer"></i>
        <span>提交</span>
      </button>
    </div>
  </div>
  <!-- / 分包合同收款 -->

  <!-- 发包公司收款 -->
  <div class="ui tab attached segment collect-item" data-tab="tab-4">
    <h3 class="ui header center aligned">发包公司收款</h3>
    <div class="ui form form-item">
      <div class="ui three column doubling stackable grid">
        <div class="column">
          <div class="inline fields">
            <label class="four wide field">项目编号</label>
            <div class="twelve wide field">
              <div class="fake-input">213154232213</div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="inline fields">
            <label class="four wide field">项目内容</label>
            <div class="twelve wide field">
              <div class="fake-input">这是一些项目内容</div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="inline fields">
            <label class="four wide field">收款日期</label>
            <div class="twelve wide field">
              <el-date-picker v-model="collectForm.subCompany.pay_date" type="date" placeholder="请选择收款日期" value-format="yyyy-MM-dd">
              </el-date-picker>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="inline fields">
            <label class="four wide field">收款金额</label>
            <div class="twelve wide field icon input">
              <input v-model.number="collectForm.subCompany.price" type="number" placeholder="请输入收款金额">
              <i class="yen icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="inline-center margin-top-20">
      <button class="ui button green large" @click="checkSubmit('subCompany')">
        <i class="icon hand pointer"></i>
        <span>提交</span>
      </button>
    </div>

  </div>
  <!-- / 发包公司收款 -->
</div>
<include src="../template/footer.html">
  @js = ../../src/js/check_collect.js
</include>