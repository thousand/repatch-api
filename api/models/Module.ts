export class Module {
  attributes: any = {
    // computer friendly name
    slug: {
      type: 'string',
      required: true,
      unique: true,
    },

    // user friendly name
    name: {
      type: 'string',
      required: true,
    },

    manufacturer: {
      type: 'string' // eventually belongs to??
    },

    flavors: {
      collection: 'moduleFlavor',
      via: 'modules'
    },

    states: {
      collection: 'moduleState',
      via: 'module'
    },

    parameters: {
      collection: 'moduleParameter',
      via: 'module'
    },

    connectors: {
      collection: 'moduleConnector',
      via: 'module'
    }
  };
}
