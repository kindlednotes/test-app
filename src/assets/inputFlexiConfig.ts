 export const InputFlexiData = {
  items: [
    {
      name: 'person_name',
      label: 'Person\'s Name',
      type: 'TextField'
    },
    {
      name: 'states',
      label: 'Person\'s state',
      type: 'DropDown',
      values: ['Maharashtra', 'Kerala', 'Tamil Nadu']
    }
  ]
};

export class InputGroup {
  textfield: String;
  dropdown: String;

  constructor() {
      this.dropdown = 'dropdown';
      this.textfield = 'textfield';
  }
}
