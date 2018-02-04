<include src="../template/normalHeader.html">
  @title = 验收录入
</include>

<div class="ui breadcrumb">
  <a class="section">验收与收款管理</a>
  <div class="divider"> / </div>
  <a class="section" href="../check/list.html">验收与收款清单</a>
  <div class="divider"> / </div>
  <a class="section" href="../check/detail.html">项目明细 - 项目号 15823910212</a>
  <div class="divider"> / </div>
  <div class="active section">验收录入</div>
</div>

<!-- 基本信息 -->
<h4 class="ui dividing header blue">基本信息</h4>
<table class="ui very basic table center aligned">
  <thead>
    <tr>
      <th>项目编号</th>
      <th>项目内容</th>
      <th>合同约定完工日期</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>123123123</td>
      <td>这是项目内容这是项目内容</td>
      <td>2018-10-02</td>
    </tr>
  </tbody>
</table>
<!-- / 基本信息 -->

<div class="invisible" id="checkAcceptance">

  <!-- 验收 -->
  <h4 class="ui dividing header blue">验收</h4>
  <div class="ui form form-item">
    <div class="ui two column doubling stackable grid">
      <div class="column">
        <div class="inline fields">
          <label class="four wide field">验收日期</label>
          <div class="twelve wide field">
            <el-date-picker v-model="acceptanceForm.acceptance_date" type="date" placeholder="请选择验收日期" value-format="yyyy-MM-dd">
            </el-date-picker>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="inline fields">
          <label class="four wide field">备注</label>
          <div class="twelve wide field">
            <input v-model="acceptanceForm.remark" type="text" placeholder="请输入备注">
          </div>
        </div>
      </div>
      <div class="column">
        <el-checkbox v-model="acceptanceForm.finish">验收完毕项目进入保修期</el-checkbox>
      </div>
    </div>
  </div>
  <!-- / 验收 -->

  <!-- 项目维护 -->
  <transition name="slide-down">
    <h4 class="ui dividing header blue" v-if="acceptanceForm.finish">项目维护</h4>
  </transition>
  <transition name="slide-down">
    <div class="ui form form-item" v-if="acceptanceForm.finish">
      <div class="ui two column doubling stackable grid">
        <div class="column">
          <div class="inline fields">
            <label class="four wide field">项目维护条件</label>
            <div class="twelve wide field">这是条件这是条件这是条件这是条件</div>
          </div>
        </div>
        <div class="column">
          <div class="inline fields">
            <label class="four wide field">保修截至日期</label>
            <div class="twelve wide field">
              <el-date-picker v-model="acceptanceForm.deadline" type="date" placeholder="请选择保修截至日期" value-format="yyyy-MM-dd">
              </el-date-picker>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
  <!-- / 项目维护 -->
  <div class="inline-center margin-top-20">
    <button class="ui button green large">
      <i class="icon hand pointer"></i>
      <span>提交</span>
    </button>
  </div>
</div>

<include src="../template/footer.html">
  @js = ../../src/js/check_acceptance.js
</include>