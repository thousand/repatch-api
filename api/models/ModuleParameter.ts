export class ModuleParameter {
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

    type: {
      // enum? switch, knob, multi-state button
    }

    setting: {
      type: 'number',
    }

  }
}
