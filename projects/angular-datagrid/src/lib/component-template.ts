import { DestroyRef, inject, Injector, type Type } from '@angular/core';
import type { ComponentTemplate } from '@revolist/revogrid';
import { mountAngularComponent } from './component-mount';

export interface AngularTemplateOwner {
  template<C>(component: Type<any>, options?: {
    props?: (context: C) => Record<string, unknown>;
  }): ComponentTemplate<C>;
  dispose(): void;
}

/** Call in a component's injection context to retain its local providers. */
export function useTemplates(injector = inject(Injector)): AngularTemplateOwner {
  const destroyers = new Set<() => void>();
  let disposed = false;
  const owner: AngularTemplateOwner = {
    template<C>(component: Type<any>, options?: { props?: (context: C) => Record<string, unknown> }): ComponentTemplate<C> {
      return {
        kind: 'revo-component-template',
        mount(host, context) {
          if (disposed) throw new Error('Cannot mount a template from a disposed Angular template owner.');
          const ref = mountAngularComponent(component, injector);
          let previous: Record<string, unknown> = {};
          let destroyed = false;
          const update = (next: C) => {
            if (destroyed) return;
            const props = options?.props ? options.props(next) : { context: next };
            for (const key of Object.keys(previous)) if (!(key in props)) ref.setInput(key, undefined);
            for (const key of Object.keys(props)) ref.setInput(key, props[key]);
            previous = { ...props };
            ref.changeDetectorRef.detectChanges();
          };
          const destroy = () => {
            if (destroyed) return;
            destroyed = true;
            destroyers.delete(destroy);
            ref.destroy();
          };
          destroyers.add(destroy);
          host.appendChild(ref.location.nativeElement);
          try { update(context); } catch (error) { destroy(); throw error; }
          return { update, destroy };
        },
      };
    },
    dispose() { disposed = true; for (const destroy of destroyers) destroy(); },
  };
  injector.get(DestroyRef).onDestroy(owner.dispose);
  return owner;
}
