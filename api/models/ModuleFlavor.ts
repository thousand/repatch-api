export class ModuleFlavor {
  attributes: any = {
    id: {
      type: 'integer',
      required: true,
      primaryKey: true
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

    modules: {
      collection: 'module',
      via: 'flavors'
    }

  };
}
