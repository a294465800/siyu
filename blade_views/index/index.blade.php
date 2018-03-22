<include src="../template/header.html">
  @title = 首页
</include>
<div class="ui breadcrumb">
  <a class="section">首页</a>
  <div class="divider"> / </div>
  <div class="active section">待处理事项清单</div>
</div>

<div class="invisible margin-top-20" id="indexPending">
  <table class="ui center aligned table selectable">
    <thead>
      <tr>
        <th>序号</th>
        <th>业务品种</th>
        <th>业务编号</th>
        <th>系统状态</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>

      <template v-if="pendingList.length">
        <tr v-for="(item, index) in pendingList" :key="item.id">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.number }}</td>
          <td>{{ item.status }}</td>
          <td>
            <a class="ui mini button positive" href="#">复核</a>
          </td>
        </tr>
      </template>

      <template v-else>
        <tr>
          <td colspan="5">暂无数据</td>
        </tr>
      </template>

    </tbody>
  </table>
</div>

<include src="../template/footer.html">
  @js = ../../src/js/index.js
</include>