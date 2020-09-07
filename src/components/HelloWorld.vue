<template>
  <div class="hello">
    Firstname
    <form-input-text 
      @input="(value) => registrationData.firstname = value"
      :placeholder="'Firstname'"
      :label="'Firstname'"
      :input="registrationData.firstname"
      :id="'firstname'"
      :validation-arguments="validationArguments.firstname"
    ></form-input-text>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { validationArguments } from "@/helper/validation-arguments";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  beforeCreate() {
    this.validationArguments = validationArguments;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validationArguments: { [key: string]: any } = {};
  registrationData = {
    firstname: ''
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
