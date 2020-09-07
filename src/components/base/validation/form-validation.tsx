import Vue from 'vue';

import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class FormValidation extends Vue {
  @Prop() validationArguments!: any
  @Prop() value!: string;

  async required() {
    const requireMessage = this.$t('general.form.input.required');
    return Promise.resolve(
      <div>
        {requireMessage}
      </div>
    );
  }

  async render() {
    return (<div>
      {
        await this.required().then((r) => {
          return (<span>{r}</span>);
        })
      }
  </div>);

  }
}
