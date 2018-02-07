export const config = {
  // Array containing the config for each action.
  actions: [
    {
      // Button text
      text: 'Some Text',
      // Apperance change for the button.
      raised: true,
      // What the action does when it is clicked.
      onClick: () => {}
    },
    {
      text: 'Some other Text',
      onClick: () => {}
    }
  ],
  // Array containing the config for each field.
  fields: [
    {
      // 'type' is required. Determines the input type.
      type: 'text',
      // 'accessor' is required. Determines the property key in the
      // values object.
      accessor: 'example'
    },
    {
      // Input with a string of any value.
      type: 'text',
      accessor: 'textFieldAccessor'
    },
    {
      // Input with true or false value.
      type: 'bool',
      accessor: 'boolFieldAccessor',
      // The default input for BoolField is Switch, but if 'checkbox' is true
      // the input is changed to Checkbox.
      checkbox: true
    },
    {
      type: 'date',
      accessor: 'dateFieldAccessor'
    },
    {
      type: 'time',
      accessor: 'timeFieldAccessor'
    },
    {
      type: 'dateTime',
      accessor: 'dateTimeFieldAccessor'
    },
    {
      type: 'file',
      accessor: 'fileFieldAccessor'
    },
    {
      type: 'select',
      accessor: 'selectFieldAccessor',
      options: [
        {
          value: 0,
          content: ''
        },
        {
          value: 1,
          content: '1111111111111'
        }
      ]
    },
    {
      // The 'object' type is equivalent to having another the form inside
      // your main form, allowing you to have deeper layers of values.
      type: 'object',
      accessor: 'text2',
      fields: [
        {
          accessor: 'text',
          type: 'text'
        }
      ]
    }
  ]
}
