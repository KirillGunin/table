<template>
  <div class="table-item">
    <div class="item">{{item_data.name}}</div>
    <div class="item">{{item_data.date}}</div>
    <div class="item">{{item_data.distance}}</div>
    <div class="item">{{`${item_data.record.substring(0,1)}:${item_data.record.substring(1,3)}.${item_data.record.substring(3,6)}`}}</div>
  </div>
</template>

<script>
export default {
  props: {
    item_data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style>
.table-item {
  display: flex;
}
.item {
  flex-basis: 33%;
  padding: 8px 8px;
  text-align: center;
}
</style>
