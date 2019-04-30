<template>
  <div class="my-component">
    <span>MyComponent</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: 'MyComponent'
})
export default class MyComponent extends Vue {
  public reload() {
    console.log('reload')
  }
 }
</script>
