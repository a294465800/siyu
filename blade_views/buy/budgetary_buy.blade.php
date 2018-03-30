<include src="../template/normalHeader.html">
  @title = 采购录入
</include>

<div class="ui breadcrumb">
  <a class="section">采购管理</a>
  <div class="divider"> / </div>
  <a class="section" href="../buy/project_list.html">采购立项清单</a>
  <div class="divider"> / </div>
  <a class="section" href="../buy/budgetary.html">预算内采购</a>
  <div class="divider"> / </div>
  <div class="active section">采购录入</div>
</div>

<h1 class="ui red header blue center aligned">预算内采购</h1>

<div class="invisible" id="budgetaryBuy">

  <!-- 基本信息 -->
  <div class="ui form form-item">
    <div class="ui two column doubling stackable grid">
      <div class="column">
        <div class="inline fields">
          <label class="four wide field">项目编号</label>
          <div class="twelve wide field">
            <div class="fake-input">{{ budgetary_buy.project_id || '暂无数据' }}</div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="four wide field">项目内容</label>
          <div class="twelve wide field">
            <div class="fake-input">{{ budgetary_buy.project_content || '暂无数据' }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <h4 class="ui dividing header blue">基本信息</h4>
  <div class="ui form form-item">
    <div class="ui three column doubling stackable grid">
      <div class="column">
        <div class="inline fields">
          <label class="four wide field">采购日期</label>
          <div class="twelve wide field">
            <el-date-picker v-model="budgetary_buy.date" type="date" placeholder="请选择采购日期" value-format="yyyy-MM-dd">
            </el-date-picker>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="four wide field">供货商名称</label>
          <div class="twelve wide field">
            <el-autocomplete popper-class="my-autocomplete" v-model="budgetary_buy.supplier.name" :fetch-suggestions="querySearchSupplier"
              placeholder="请输入供货商名称" @select="handleSelectSupplier">
              <i class="el-icon-edit el-input__icon" slot="suffix">
              </i>
              <template slot-scope="props">
                <div class="name">{{ props.item.name }}</div>
                <div class="addr">{{ props.item.bank }}</div>
              </template>
            </el-autocomplete>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="four wide field">供货商收款银行</label>
          <div class="twelve wide field">
            <div class="fake-input">{{ budgetary_buy.supplier.bank || '暂无数据' }}</div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="four wide field">供货商收款账号</label>
          <div class="twelve wide field icon input">
            <div class="fake-input">{{ budgetary_buy.supplier.account || '暂无数据' }}</div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="four wide field">付款条件</label>
          <div class="twelve wide field">
            <input v-model="budgetary_buy.payment_condition" type="text" placeholder="请输入付款条件">
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="four wide field">付款条件</label>
          <div class="twelve wide field">
            <el-select v-model="budgetary_buy.invoice_condition" placeholder="请选择内容">
              <el-option v-for="item in [{id:1,name:'专用发票17%'},{id:2,name:'专用发票11%'}]" :key="item.id" :label="item.name" :value="item.id">
              </el-option>
            </el-select>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /基本信息 -->

  <!-- 采购物料清单 -->
  <h4 class="ui dividing header blue">采购物料清单</h4>

  <!-- 物料详细 -->
  <h4 class="inline-center">物料采购需求</h4>
  <table class="ui center aligned table selectable">
    <thead>
      <tr>
        <th>物料名称</th>
        <th>性能及技术参数</th>
        <th>品牌型号</th>
        <th>生产厂家</th>
        <th>单位</th>
        <th>预算单价</th>
        <th>预算数量</th>
        <th>已采购数量</th>
        <th>未采购数量</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="materialsComputed.length">
        <tr v-for="(item, index) in materialsComputed" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.parameter }}</td>
          <td>{{ item.model }}</td>
          <td>{{ item.manufacturer }}</td>
          <td>{{ item.unit }}</td>
          <td>{{ item.price.toLocaleString('en-US') }}</td>
          <td>{{ item.quantity.toLocaleString('en-US') }}</td>
          <td>{{ item.buy_number.toLocaleString('en-US') }}</td>
          <td>{{ item.left_number.toLocaleString('en-US') }}</td>
          <td v-if="item.left_number>0">
            <button class="ui mini positive icon button" @click="addMaterial(item, index)">
              <i class="icon plus"></i>
              <span>添加物料</span>
            </button>
          </td>
          <td v-else>采购数量已满足</td>
        </tr>
      </template>
      <template v-else>
        <tr>
          <td colspan="10">暂无数据</td>
        </tr>
      </template>
    </tbody>
  </table>
  <!-- /物料详细 -->

  <div class="flex-row" style="width:50%;">
    <div class="font-bold" style="white-space:nowrap;align-self:flex-end;margin-right:20px;">采购金额</div>
    <div class="fake-input inline-center">{{ budgetary_buy.amount.toLocaleString('en-US') || 0 }} ￥
    </div>
  </div>
  <h4 class="inline-center">采购物料清单</h4>
  <div class="ui form form-item">
    <div class="ui five column doubling stackable grid font-size-13">
      <div class="one wide column form-thead">物料名称</div>
      <div class="one wide column form-thead">品牌型号</div>
      <div class="one wide column form-thead">预算单价</div>
      <div class="one wide column form-thead">预算数量</div>
      <div class="one wide column form-thead">已采购数量</div>
      <div class="one wide column form-thead">未采购数量</div>
      <div class="two wide column form-thead">本次采购数量</div>
      <div class="one wide column form-thead">本次采购单价</div>
      <div class="two wide column form-thead">本次采购金额</div>
      <div class="two wide column form-thead">保修截至日期</div>
      <div class="two wide column form-thead">保修时间</div>
      <div class="one wide column form-thead">操作</div>
    </div>
    <transition-group name="slide-down" tag="div" class="form-wrap special-form">
      <div class="ui column doubling stackable grid center aligned" v-for="(item, index) in budgetary_buy.list" :key="item.id">
        <div class="one wide column">
          <div class="fake-input">{{ item.material && item.material.name || '无'}}</div>
        </div>
        <div class="one wide column">
          <div class="fake-input">{{ item.material && item.material.model || '无'}}</div>
        </div>
        <div class="one wide column">
          <div class="fake-input">{{ item.material && item.material.price.toLocaleString('en-US') || '无'}} ￥</div>
        </div>
        <div class="one wide column">
          <div class="fake-input">{{ item.material && item.material.quantity.toLocaleString('en-US') || '无'}}</div>
        </div>
        <div class="one wide column">
          <div class="fake-input">{{ item.material && item.material.buy_number.toLocaleString('en-US') || '无'}}</div>
        </div>
        <div class="one wide column">
          <div class="fake-input">{{ item.material && item.material.left_number.toLocaleString('en-US') || '无'}}</div>
        </div>
        <div class="two wide column">
          <input v-model.number="item.real_quantity" type="number" min="0" :max="item.material.left_number" placeholder="采购数量">
        </div>
        <div class="one wide column">
          <input v-model.number="item.real_price" type="number" placeholder="采购单价">
        </div>
        <div class="two wide column">
          <input v-model.number="item.real_amount" type="number" placeholder="采购金额">
        </div>
        <div class="two wide column">
          <el-date-picker v-model="item.deadline" type="date" placeholder="截至日期" value-format="yyyy-MM-dd">
          </el-date-picker>
        </div>
        <div class="two wide column">
          <input v-model="item.deadline_time" type="text" placeholder="保修时间">
        </div>
        <div class="one wide column flex-row">
          <div class="fake-input">
            <i class="icon minus red" style="cursor:pointer;" @click="deleteItem('list', item, index)"></i>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
  <!-- / 采购物料清单 -->

  <!-- 合同 -->
  <h4 class="ui dividing header blue">合同</h4>
  <div class="flex-row flex-end">
    <label class="ui icon button positive">
      <i class="icon upload"></i>
      <span>添加合同</span>
      <input style="display:none;" type="file" multiple @change="uploadContract($event)">
    </label>
  </div>
  <h4 class="inline-center">合同清单</h4>
  <div class="ui form form-item">
    <div class="ui five column doubling stackable grid font-size-13">
      <div class="two wide column form-thead">序号</div>
      <div class="six wide column form-thead">合同名称</div>
      <div class="six wide column form-thead">访问地址</div>
      <div class="two wide column form-thead">操作</div>
    </div>
    <transition-group name="slide-down" tag="div" class="form-wrap special-form">
      <div class="ui column doubling stackable grid center aligned" v-for="(item, index) in budgetary_buy.contracts" :key="item.id">
        <div class="two wide column">
          <div class="fake-input">{{ index + 1 }}</div>
        </div>
        <div class="six wide column">
          <div class="fake-input">{{ item.name }}</div>
        </div>
        <div class="six wide column">
          <div class="fake-input">
            <a :href="item.url" target="_blank">{{ item.url }}</a>
          </div>
        </div>
        <div class="two wide column flex-row">
          <div class="fake-input">
            <i class="icon minus red" style="cursor:pointer;" @click="deleteItem('contracts', item, index)"></i>
          </div>
        </div>
      </div>
    </transition-group>
  </div>

  <!-- / 合同 -->
  <div class="inline-center margin-top-20">
    <button class="ui button green large" @click="submitForm">
      <i class="icon hand pointer"></i>
      <span>提交</span>
    </button>
  </div>

  <div class="ui page dimmer">
    <div class="simple dimmer content">
      <div class="center">
        <div class="buy_dialog">
          <div class="dialog_header">选择复核人</div>
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
  <!-- /dialog -->
</div>

<include src="../template/footer.html">
  @js = ../../src/js/buy_budgetary_buy.js
</include>