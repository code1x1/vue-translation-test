import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from "vue-property-decorator";
@Component
export default class FormButtonSubmit extends Vue {
  @Prop()input!: string
  @Prop()label!: string

  click(e: unknown){
    this.$emit('click', e)
  }
  render() {
    return (
      <button
        on-click={this.click}
        class="bg-secondary hover text-primary font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
      {this.label}
    </button>
    ); 
  }
}