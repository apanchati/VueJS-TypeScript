<template>
  <MyComponent ref="myComponent"></MyComponent>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import * as MyComponent from "./components/MyComponent.vue";
import { Component as VueComponent } from "vue";

@Component({
  name: "App",
  components: {
    MyComponent
  }
})
export default class App extends Vue {
  public readonly $refs!: {
    myComponent: VueComponent;
  };

  public mounted(): void {
    console.log(this.$refs.myComponent.reload());
  }
}
</script>
