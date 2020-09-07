import Vue, {
  CreateElement,
  FunctionalComponentOptions,
  VNodeChildren,
  VNodeData,
} from 'vue';

export default Vue.component<FunctionalComponentOptions>(
  "FormValidationMessage",
  {
    functional: true,
    render(
      h: CreateElement,
      context: { data: VNodeData; children: VNodeChildren }
    ) {
      // Transparently pass any attributes, event listeners, children, etc.
      return h("div", context.data, context.children);
    },
  }
);
