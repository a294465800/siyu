<include src="../template/normalHeader.html">
  @title = 新增领料出库
</include>

<div class="ui breadcrumb">
  <a class="section">库存管理</a>
  <div class="divider"> / </div>
  <a class="section" href="../stock/get_list.html">领料出库清单</a>
  <div class="divider"> / </div>
  <div class="active section">新增领料出库</div>
</div>

<h1 class="ui red header blue center aligned">新增领料出库</h1>
<div class="invisible" id="stockGetAdd">
  <h4 class="ui dividing header blue">基本信息</h4>
  <div class="ui form">
    <div class="ui three column doubling stackable grid">
      <div class="column">
        <div class="inline fields">
          <label class="four wide field flex-center">采购形式</label>
          <div class="twelve wide field">
            <div class="ui radio checkbox" style="margin-right:30px;">
              <input type="radio" name="system" value="1" @change="currentType=1" checked>
              <label>项目采购</label>
            </div>
            <div class="ui radio checkbox">
              <input type="radio" name="system" value="0" @change="currentType=0">
              <label>统一采购</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ui three column doubling stackable grid">
      <template v-if="currentType == 1">
        <div class="column">
          <div class="inline fields">
            <label class="four wide field flex-center">项目编号</label>
            <div class="twelve wide field">
              <el-autocomplete popper-class="my-autocomplete" v-model="stockGetAdd.project_id" :fetch-suggestions="querySearch" placeholder="请输入项目编号"
                @select="handleSelect">
                <i class="el-icon-edit el-input__icon" slot="suffix">
                </i>
                <template slot-scope="props">
                  <div class="name">{{ props.item.name }}</div>
                  <span class="addr">{{ props.item.address }}</span>
                </template>
              </el-autocomplete>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="inline fields">
            <label class="four wide field flex-center">项目内容</label>
            <div class="twelve wide field">
              <el-autocomplete popper-class="my-autocomplete" v-model="stockGetAdd.project_content" :fetch-suggestions="querySearch" placeholder="请输入项目内容"
                @select="handleSelect">
                <i class="el-icon-edit el-input__icon" slot="suffix">
                </i>
                <template slot-scope="props">
                  <div class="name">{{ props.item.name }}</div>
                  <span class="addr">{{ props.item.address }}</span>
                </template>
              </el-autocomplete>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="inline fields">
            <label class="four wide field flex-center">项目经理</label>
            <div class="twelve wide field">
              <div class="fake-input">{{ stockGetAdd.project_manger || '暂无' }}</div>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="column">
          <div class="inline fields">
            <label class="four wide field flex-center">出库仓库</label>
            <div class="twelve wide field">
              <el-autocomplete popper-class="my-autocomplete" v-model="stockGetAdd.stock_name" :fetch-suggestions="querySearchStock" placeholder="请输入出库仓库"
                @select="handleSelectStock">
                <i class="el-icon-edit el-input__icon" slot="suffix">
                </i>
                <template slot-scope="props">
                  <div class="name">{{ props.item.name }}</div>
                  <span class="addr">{{ props.item.manger }}</span>
                </template>
              </el-autocomplete>
            </div>
          </div>
        </div>
      </template>
      <div class="column">
        <div class="inline fields">
          <label class="four wide field flex-center">领料人</label>
          <div class="twelve wide field">
            <input type="text" v-model="stockGetAdd.get_people" placeholder="请输入领料人">
          </div>
        </div>
      </div>
    </div>
  </div>
  <h4 class="ui dividing header blue">领料出库录入</h4>
  <div class="ui form">
    <div class="ui three column doubling stackable grid">
      <div class="column wide">
        <div class="inline fields">
          <label class="four wide field flex-center">物料名称</label>
          <div class="twelve wide field">
            <el-autocomplete popper-class="my-autocomplete" v-model="currentMaterialName" :fetch-suggestions="querySearchMaterial" placeholder="请输入物料名称"
              @select="handleSelectMaterial">
              <i class="el-icon-edit el-input__icon" slot="suffix">
              </i>
              <template slot-scope="props">
                <div class="name">{{ props.item.name }}</div>
                <span class="addr">{{ props.item.model }}</span>
              </template>
            </el-autocomplete>
          </div>
        </div>
      </div>
      <div class="column">
        <button class="ui button positive" @click="addItem">添加</button>
      </div>
    </div>
    <div class="ui three column doubling stackable grid">
      <div class="column">
        <div class="inline fields">
          <label class="four wide field flex-center">物料名称</label>
          <div class="twelve wide field">
            <div class="fake-input">{{ currentMaterial.name || '暂无'}}</div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="four wide field flex-center">性能及参数</label>
          <div class="twelve wide field">
            <div class="fake-input">{{ currentMaterial.parameter || '暂无'}}</div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="four wide field flex-center">品牌型号</label>
          <div class="twelve wide field">
            <div class="fake-input">{{ currentMaterial.model }}</div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="four wide field flex-center">生产厂家</label>
          <div class="twelve wide field">
            <div class="fake-input">{{ currentMaterial.manufacturer || '暂无'}}</div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="four wide field flex-center">单位</label>
          <div class="twelve wide field">
            <div class="fake-input">{{ currentMaterial.unit || '暂无'}}</div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="four wide field flex-center">库存均价</label>
          <div class="twelve wide field">
            <div class="fake-input">{{ currentMaterial.price || '暂无'}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <h4 class="ui header center aligned">领料出库清单</h4>
  <h5 class="ui header right aligned">合计总额：{{ sumAmount.toLocaleString('en-US') }} ￥</h5>
  <div class="ui form form-item">
    <div class="ui five column doubling stackable grid font-size-13">
      <div class="two wide column form-thead">序号</div>
      <div class="two wide column form-thead">物料名称</div>
      <div class="two wide column form-thead">品牌型号</div>
      <div class="two wide column form-thead">单位</div>
      <div class="two wide column form-thead">库存均价</div>
      <div class="two wide column form-thead">领料数量</div>
      <div class="two wide column form-thead">领料金额</div>
      <div class="two wide column form-thead">操作</div>
    </div>
    <transition-group name="slide-down" tag="div" class="form-wrap special-form">
      <div class="ui column doubling stackable grid center aligned" v-for="(item, index) in stockGetAdd.list" :key="item.id">
        <div class="two wide column">
          <div class="fake-input">{{ index + 1}}</div>
        </div>
        <div class="two wide column">
          <div class="fake-input">{{ item.material && item.material.name || '无'}}</div>
        </div>
        <div class="two wide column">
          <div class="fake-input">{{ item.material && item.material.model || '无'}}</div>
        </div>
        <div class="two wide column">
          <div class="fake-input">{{ item.material && item.material.unit || '无'}}</div>
        </div>
        <div class="two wide column">
          <div class="fake-input">{{ item.material && item.material.price.toLocaleString('en-US') + ' ￥' || '无'}}</div>
        </div>
        <div class="two wide column">
          <input type="number" v-model.number="item.return_quantity" placeholder="领料数量">
        </div>
        <div class="two wide column">
          <div class="fake-input">{{ item.return_quantity?(item.return_quantity*item.material.price).toLocaleString('en-US'):0}} ￥</div>
        </div>
        <div class="two wide column flex-row">
          <div class="fake-input">
            <i class="icon minus red" style="cursor:pointer;" @click="deleteItem('list', item, index)"></i>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
  <div class="inline-center margin-top-20">
    <button class="ui button primary large" @click="submit">
      <i class="icon hand pointer"></i>
      <span>提交</span>
    </button>
  </div>
</div>
<include src="../template/footer.html">
  @js = ../../src/js/stock_get_add.js
</include>