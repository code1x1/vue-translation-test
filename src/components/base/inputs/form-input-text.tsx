import Vue, { CreateElement } from 'vue';

import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class FormInputText extends Vue {
  @Prop()input!: string
  @Prop()label!: string
  @Prop()id!: string
  @Prop()placeholder!: string
  @Prop()validationArguments!: any

  inputChanged(e: { target: { value: string } }) {
    this.$emit('input', e.target.value, e)
  }

  render(h: CreateElement) {

    //#region inputElement 
    const inputElement = h('input',{
      class: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
      attrs: {
        id: this.id,
        value: this.input,
        placeholder: this.placeholder,
        type: "text"
      },
      on: {
        input: this.inputChanged
      },
    });
    //#endregion

    //#region formValidation
    const formValidation = () => {
      return h('form-validation',{
        props: {
          validationArguments: this.validationArguments,
          value: this.input
        }
      });
    };
    //#endregion

    return (
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for={this.id}
        >
          {this.label}
        </label>
        {inputElement}
        {formValidation()}
      </div>
    ); 
  }
}