# Framework content templates

`useTemplates()` is a thin wrapper around the existing framework `Template` factory. It returns ordinary template callbacks for cells, master rows, Kanban cards, and Gantt labels. There is no outlet or separate mounting protocol.

```ts
import { useTemplates } from '@revolist/angular-datagrid';
import type { CellTemplateProp } from '@revolist/revogrid';

const templates = useTemplates();
const content = templates.template<CellTemplateProp>(MyCell, {
  props: context => ({ item: context.model }),
  key: context => context.model.id,
});
```

Without `props`, the component receives a `context` prop/input. The optional `key` selects record identity when hosts are reused. Supply a stable key for cells whose records may reorder. Mapped inputs are recomputed when the product invokes the callback. To clear an input, explicitly pass `undefined`.

Use the returned callback directly as `column.cellTemplate`, `masterRow.template`, `customization.cardContent`, or `gantt.visuals.taskBarContent`. Product progress, resize, dependency, selection and drag controls remain outside the custom content. The legacy Gantt content hook takes precedence. Exports retain the default product representation.

Call useTemplates in an injection context. It captures the injector and delegates to the existing TemplateConstructor. Components declare mapped Angular inputs; normal setInput and change detection are used.

Templates use the existing renderer’s ref cleanup and product caching behavior; `useTemplates` adds no lifecycle management. Existing `Template` and editor signatures remain available; their default cell prop shape is unchanged.
