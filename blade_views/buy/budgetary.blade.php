<include src="../template/normalHeader.html">
  @title = 预算内采购
</include>

<div class="ui breadcrumb">
  <a class="section">采购管理</a>
  <div class="divider"> / </div>
  <a class="section" href="../buy/project_list.html">采购立项清单</a>
  <div class="divider"> / </div>
  <div class="active section">预算内采购</div>
</div>

<h4 class="ui dividing header blue">选择项目</h4>
<div class="invisible" id="buyBudgetary">

  <!-- 选择项目 -->
  <div class="ui form form-item">
    <div class="ui three column doubling stackable grid">
      <div class="column">
        <div class="inline fields">
          <label class="four wide field">项目编号</label>
          <div class="twelve wide field">
            <el-autocomplete popper-class="my-autocomplete" v-model="project.id" :fetch-suggestions="querySearchProjectId" placeholder="请输入项目编号"
              @select="handleSelectProjectId">
              <i class="el-icon-edit el-input__icon" slot="suffix">
              </i>
              <template slot-scope="props">
                <div class="name">{{ props.item.id }}</div>
                <span class="addr">{{ props.item.name }}</span>
              </template>
            </el-autocomplete>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="four wide field">项目内容</label>
          <div class="twelve wide field">
            <el-autocomplete popper-class="my-autocomplete" v-model="project.content" :fetch-suggestions="querySearch" placeholder="请输入项目内容"
              @select="handleSelect">
              <i class="el-icon-edit el-input__icon" slot="suffix">
              </i>
              <template slot-scope="props">
                <div class="name">{{ props.item.name }}</div>
                <span class="addr">{{ props.item.id }}</span>
              </template>
            </el-autocomplete>
          </div>
        </div>
      </div>
      <div class="column">
        <button class="ui button primary">确定</button>
      </div>
    </div>
  </div>
  <!-- /选择项目 -->

  <h4 class="ui dividing header blue">物料预算清单</h4>
  <!-- 物料预算清单 -->
  <div class="table-head-nowrap">
    <table class="ui celled center aligned table unstackable">
      <thead>
        <tr>
          <th>序号</th>
          <th>物料名称</th>
          <th>性能及技术参数</th>
          <th>品牌型号</th>
          <th>生产厂家</th>
          <th>单位</th>
          <th>预算单价</th>
          <th>预算数量</th>
          <th>预算金额</th>
          <th>物料/工程/其他</th>
          <th>已采购数量</th>
          <th>已采购金额</th>
          <th>剩余未采购数量</th>
          <th>剩余未采购金额</th>
          <th>操作</th>
        </tr>
      </thead>
      <template v-if="preMaterialsList && preMaterialsList.data.length">
        <tbody>
          <tr v-for="(item, index) in preMaterialsList.data" :key="item.id">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.parameter }}</td>
            <td>{{ item.model }}</td>
            <td>{{ item.manufacturer }}</td>
            <td>{{ item.unit }}</td>
            <td>{{ item.prePrice.toLocaleString('en-US') }} ￥</td>
            <td>{{ item.preQuantity.toLocaleString('en-US') }}</td>
            <td>{{ item.preAmount.toLocaleString('en-US') }} ￥</td>
            <td>{{ materialType[item.type] }}</td>
            <td>{{ item.realQuantity.toLocaleString('en-US') }}</td>
            <td>{{ item.realAmount.toLocaleString('en-US') }} ￥</td>
            <td>{{ item.leftQuantity.toLocaleString('en-US') }}</td>
            <td>{{ item.leftAmount.toLocaleString('en-US') }} ￥</td>
            <td>
              <el-button type="text" @click="checkDetail(item, index)">查询明细</el-button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th colspan="8">合计</th>
            <th>{{ preMaterialsList.count1.toLocaleString('en-US') }} ￥</th>
            <th></th>
            <th></th>
            <th>{{ preMaterialsList.count2.toLocaleString('en-US') }} ￥</th>
            <th></th>
            <th>{{ preMaterialsList.count3.toLocaleString('en-US') }} ￥</th>
            <th></th>
          </tr>
        </tfoot>
      </template>
      <template v-else>
        <tbody>
          <tr>
            <td colspan="15">暂无数据</td>
          </tr>
        </tbody>
      </template>
    </table>
  </div>
  <!-- /物料预算清单 -->

  <!-- dialog 用于展示物料明细 -->
  <el-dialog title="物料明细" :visible.sync="materialsDialog" width="70%" center>
    <div class="ui active inverted dimmer" v-if="loader">
      <div class="ui text loader">加载中</div>
    </div>
    <div class="table-head-nowrap" v-else>
      <table class="ui center aligned table selectable unstackable" v-if="materialsDetail.data">
        <thead>
          <tr>
            <th>物料名称</th>
            <th class="font-normal">{{ materialsDetail.name }}</th>
            <th>性能技术参数</th>
            <th class="font-normal table-content">{{ materialsDetail.parameter }}</th>
            <th>品牌型号</th>
            <th class="font-normal">{{ materialsDetail.model }}</th>
          </tr>
          <tr>
            <th>单位</th>
            <th class="font-normal">{{ materialsDetail.unit }}</th>
            <th>生产厂家</th>
            <th class="font-normal" colspan="3">{{ materialsDetail.manufacturer }}</th>
          </tr>
          <tr>
            <th>采购编号</th>
            <th>数量</th>
            <th>单价</th>
            <th>金额</th>
            <th colspan="2">供货商</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="font-bold">预算成本</td>
            <td>{{ materialsDetail.pre.quantity.toLocaleString('en-US') }}</td>
            <td>{{ materialsDetail.pre.price.toLocaleString('en-US') }}</td>
            <td>{{ materialsDetail.pre.amount.toLocaleString('en-US') }}</td>
            <td colspan="2"></td>
          </tr>
          <template v-if="materialsDetail.data.length">
            <tr v-for="(item, index) in materialsDetail.data" :key="item.id">
              <td>{{ item.number }}</td>
              <td>{{ item.quantity.toLocaleString('en-US') }}</td>
              <td>{{ item.amount.toLocaleString('en-US') }}</td>
              <td>{{ item.amount.toLocaleString('en-US') }}</td>
              <td colspan="2">{{ item.manufacturer }}</td>
            </tr>
          </template>

          <template v-else>
            <tr>
              <td colspan="6">暂无数据</td>
            </tr>
          </template>
        </tbody>
        <tfoot>
          <tr>
            <th>余额</th>
            <th>{{ materialsDetail.left.quantity.toLocaleString('en-US') }}</th>
            <th></th>
            <th>{{ materialsDetail.left.amount.toLocaleString('en-US') }}</th>
            <th colspan="2"></th>
          </tr>
        </tfoot>
      </table>
      <p class="inline-center" v-else>暂无数据</p>
    </div>
  </el-dialog>
  <!-- /dialog -->

  <div class="inline-center margin-top-20">
    <button class="ui button green large" @click="submit">
      <i class="icon hand cart"></i>
      <span>采购</span>
    </button>
  </div>
</div>

<include src="../template/footer.html">
  @js = ../../src/js/buy_budgetary.js
</include>