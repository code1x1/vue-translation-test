import Vue from 'vue';

import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { CreateElement } from 'vue/types/umd';

@Component
export default class FormValidation extends Vue {
  @Prop() validationArguments!: any
  @Prop() value!: string;
  requireMessage: any;

  mounted() {
    Promise.resolve(this.$t('general.form.input.required')).then((r) => {
      this.requireMessage = r;
      this.$forceUpdate();
    });

  }

  render(h: CreateElement) {
    return (<div>test {this.requireMessage}</div>);
  }
}
