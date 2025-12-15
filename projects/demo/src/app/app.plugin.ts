import { BasePlugin, PluginProviders, h } from '@revolist/revogrid';

export class AppPlugin extends BasePlugin {
  constructor(revogrid: HTMLRevoGridElement, providers: PluginProviders) {
    super(revogrid, providers);
    revogrid.registerVNode = [() => h('div', null, 'Hello World')]
  }
}
