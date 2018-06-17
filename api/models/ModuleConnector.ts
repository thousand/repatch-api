export class ModuleConnector {
  attributes: {
    module: {
      model: 'module',
      required: true,
    },

    // computer friendly name
    slug: {
      type: 'string',
      required: true,
    },

    // user friendly name
    name: {
      type: 'string',
      required: true,
    },

  }
}
