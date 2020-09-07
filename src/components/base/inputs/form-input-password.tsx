import Vue, { CreateElement } from 'vue';

import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class FormInputPassword extends Vue {
  @Prop()input!: string
  @Prop()label!: string
  @Prop()id!: string
  @Prop()placeholder!: string
  @Prop()autocomplete!: any
  @Prop()validationArguments!: any

  inputChanged(e: { target: { value: string } }){
    this.$emit('input', e.target.value)
  }
  render(h: CreateElement) {


    //#region inputElement 
    const inputElement = h('input',{
      class: "shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",
      attrs: {
        id: this.id,
        value: this.input,
        placeholder: this.placeholder,
        type: "password",
        autocomplete:this.autocomplete
      },
      on: {
        input: this.inputChanged
      },
    });
    //#endregion

    ////#region formValidation
    const formValidation = h('form-validation',{
      props: {
        validationArguments: this.validationArguments,
        value: this.input
      }
    });
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
        {formValidation}
      </div>
    ); 
  }
}