<template>
  <div class="container" :style="styles.container">
    <Item label="1" padding="20" :styles="this.styles.item1" />
    <Item label="2" padding="30" :styles="this.styles.item2" />
    <Item label="3" padding="40" :styles="this.styles.item3" />
    <Item label="4" padding="40" :styles="this.styles.item4" />
    <Item label="5" padding="40" :styles="this.styles.item5" />
    <Item label="6" padding="40" :styles="this.styles.item6" />
    <Item label="7" padding="40" :styles="this.styles.item7" />
    <Item label="8" padding="40" :styles="this.styles.item8" />
    <Item label="9" padding="40" :styles="this.styles.item9" />
    <Item label="10" padding="40" :styles="this.styles.item10" />
    <Item label="11" padding="40" :styles="this.styles.item11" />
    <Item label="12" padding="40" :styles="this.styles.item12" />
    <Item label="13" padding="40" :styles="this.styles.item13" />
    <Item label="14" padding="40" :styles="this.styles.item14" />
    <Item label="15" padding="40" :styles="this.styles.item15" />
    <Item label="16" padding="40" :styles="this.styles.item16" />
    <Item label="17" padding="40" :styles="this.styles.item17" />
    <Item label="18" padding="40" :styles="this.styles.item18" />
    <Item label="19" padding="40" :styles="this.styles.item19" />
    <Item label="20" padding="40" :styles="this.styles.item20" />
    <div :class="axisClass"></div>
  </div>
</template>

<script>
import Item from "./Item.vue";

export default {
  props: ["styles"],
  components: { Item },
  computed: {
    axisClass() {
      const c = this.styles.container || {}
      const fd = c.flexDirection
      switch(fd.toLowerCase()) {
        case "column": return "main-axis-column"
        case "column-reverse": return "main-axis-column reverse"
        case "row": return "main-axis"
        case "row-reverse": return "main-axis reverse"
        default: return "main-axis"
      }
    }
  }
};
</script>

<style>
.container {
  position: relative;
  display: flex;
  flex: 1;
  border: 5px solid #000;
  background-color: var(--color-blue);
}

.main-axis {
  position: absolute;
  background-image: url('../../assets/arrow.png');
  background-size: contain;
  background-color: var(--color-blue-alt);
  align-self: center;
  width: 100%;
  height: 20px;
}

.main-axis.reverse {
  transform: rotate(180deg);
}

.main-axis-column {
  position: absolute;
  background-image: url('../../assets/arrow_alt.png');
  background-size: contain;
  background-color: var(--color-blue-alt);
  left: calc(50% - 10px);
  width: 20px;
  height: 100%;
}

.main-axis-column.reverse {
  transform: rotate(180deg);
}
</style>