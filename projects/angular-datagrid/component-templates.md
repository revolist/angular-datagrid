# Component content templates

Call `useTemplates()` in a component's injection context (for example a
field initializer). It captures that component's Injector and DestroyRef, so
local providers are inherited and embedded views are destroyed with the owner.
No separate outlet is required.

```ts
import { useTemplates } from '@revolist/angular-datagrid';

readonly templates = useTemplates();
readonly cardContent = this.templates.template<MyCardContext>(MyCardComponent);
```

The component declares a `context` input. To reuse other inputs, pass
`{ props: context => ({ item: context.card }) }`. Input updates use `setInput` and
normal Angular change detection; removed mapped inputs receive `undefined`.
OnPush and input lifecycle hooks remain supported. `dispose()` destroys all
owned views. Offscreen content unmounts; durable state belongs to app data.

Use Core `asCellTemplate(definition, { key: p => p.model.id })` for cells,
`masterRow.template` for master details, `customization.cardContent` for Kanban,
and `gantt.visuals.taskBarContent` for Gantt labels. Product controls and default
export behavior remain in the owning product.

Existing `Template`, `TemplateConstructor` and editor APIs remain compatible and
share the low-level component creation primitive. These new helpers require the
new Core exports; release Core before publishing consuming integrations.
