<include src="../template/normalHeader.html">
  @title = 报销申请查询 - BXFK20171103001
</include>

<div class="ui breadcrumb">
  <a class="section">报销与借款管理</a>
  <div class="divider"> / </div>
  <a class="section" href="../loan/submit_list.html">报销申请清单</a>
  <div class="divider"> / </div>
  <div class="active section">报销申请查询 - BXFK20171103001</div>
</div>
<input type="hidden" id="type" value="">
<input type="hidden" id="projectId" value="">
<input type="hidden" id="loanId" value="">
<h3 class="ui header center aligned">报销申请查询 - BXFK20171103001</h3>
<table class="ui celled center aligned table selectable">
  <thead>
    <tr>
      <th>报销编号</th>
      <th class="fake-td">BX20171103001</th>
      <th>报销日期</th>
      <th class="fake-td">2018-01-02</th>
      <th>报销金额</th>
      <th class="fake-td">123,523￥</th>
    </tr>
    <tr>
      <th>项目编号</th>
      <th class="fake-td">XM20321232</th>
      <th>项目内容</th>
      <th colspan="3" class="fake-td">这是项目内容~</th>
    </tr>
    <tr>
      <th>报销人</th>
      <th class="fake-td">黄其中</th>
      <th>复核人</th>
      <th class="fake-td">刘科奇</th>
      <th>审批人</th>
      <th class="fake-td">陈子欣</th>
    </tr>
    <tr>
      <th>报销单据</th>
      <th>费用类别</th>
      <th>具体事项</th>
      <th>备注</th>
      <th>单据张数</th>
      <th>金额</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>交通运输费</td>
      <td>汽车保修费</td>
      <td>这是备注</td>
      <td>12</td>
      <td>123,231￥</td>
    </tr>
    <tr>
      <td>2</td>
      <td>交通运输费</td>
      <td>汽车保修费</td>
      <td>这是备注</td>
      <td>12</td>
      <td>123,231￥</td>
    </tr>
    <tr>
      <td>3</td>
      <td>交通运输费</td>
      <td>汽车保修费</td>
      <td>这是备注</td>
      <td>12</td>
      <td>123,231￥</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th colspan="5">合计</th>
      <th>12,523￥</th>
    </tr>
  </tfoot>
</table>

<div class="flex-row flex-center margin-top-50">
  <a class="ui icon button" href="javascript:_helper.fullWindow('../loan/submit_other.html?id=1')" style="margin:0 20px;">
    <i class="icon edit"></i>
    <span>修改</span>
  </a>
  <button class="ui icon button primary" id="submitSingleCheck" style="margin:0 20px;">
    <i class="icon legal"></i>
    <span>复核</span>
  </button>
  <a class="ui icon button primary" id="submitSinglePass" style="margin:0 20px;">
    <i class="icon edit"></i>
    <span>审批</span>
  </a>
  <a class="ui icon button positive" href="javascript:_helper.fullWindow('../loan/submit_print.html?id=1')" style="margin:0 20px;">
    <i class="icon print"></i>
    <span>凭证</span>
  </a>
  <button class="ui icon button negative" id="submitSingleDelete" style="margin:0 20px;">
    <i class="icon delete"></i>
    <span>删除</span>
  </button>
</div>


<div class="ui page dimmer" id="submitSingleDialog">
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

<include src="../template/footer.html">
  @js = ../../src/js/loan_submit_single.js
</include>