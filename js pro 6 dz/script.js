const validation = new JustValidate('#registerForm', {
  errorFieldCssClass: 'just-validate-error-field',
  errorLabelCssClass: 'just-validate-error-label',
});


validation.addField('#registerForm__name', [
  { rule: 'required', errorMessage: 'The field is required' },
  { rule: 'minLength', value: 3, errorMessage: 'Minimum 3 characters' },
  { rule: 'maxLength', value: 15, errorMessage: 'Maximum 15 characters' }
]);


validation.addField('#registerForm__email', [
  { 
    rule: 'required', errorMessage: 'The field is required' 

  },
  { 
    rule: 'email', errorMessage: 'The Email is required '

   }
]);


validation.addField('#registerForm__password', [
  { 
    rule: 'required', errorMessage: 'The field is required' 

  },
  {
     rule: 'password', errorMessage: 'Password must be at least 8 characters, with letters and numbers'

   }
]);

validation.addField('#registerForm__ConfirmPassword', [
  {
    validator: (value, fields) => value === fields['#registerForm__password'].elem.value,
    errorMessage: 'Passwords do not match'
  }
]);


validation.addField('#registerForm__message', [
  { 
    rule: 'required', errorMessage: 'The field is required'

   },
  { 
    rule: 'minLength', value: 5, errorMessage: 'At least 5 characters' 

  }
]);


validation.addField('#registerForm__car', [
  { 
    rule: 'required', errorMessage: 'Pls select one car' 

  }
]);


validation.addField('#registerForm__consent', [
  {
     rule: 'required', errorMessage: 'You must confirm this field.' 

  }
]);


validation.addRequiredGroup(
  '[name="news"]',
  'Please select at least one option'
);


validation.addRequiredGroup(
  '[name="communication"]',
  'Please select a communication method'
);


validation.addField('#registerForm__number', [
  { 
    rule: 'required', errorMessage: 'The field is required' 
},
  { 
    rule: 'number', errorMessage: 'Must be a number'

   }
]);


validation.addField('#registerForm__integer', [
  { 
    rule: 'required', errorMessage: 'The field is required' 
},
  { 
    rule: 'integer', errorMessage: 'Must be an integer' 
}
]);


validation.addField('#registerForm__between', [
  {
     rule: 'required', errorMessage: 'The field is required'
     },
  { 
    rule: 'number', errorMessage: 'Must be a number'
 },
  { 
    rule: 'minNumber', value: 10, errorMessage: 'Must be >= 10' 
},
  {
     rule: 'maxNumber', value: 20, errorMessage: 'Must be <= 20'
     }
]);


validation.onSuccess((event) => {
  alert('Form submitted successfully!');
  event.target.reset();
});
validation
  .addField('#registerForm__anyNumber', [
    {
      rule: 'required',
      errorMessage: 'The field is required'
    },
    {
      rule: 'number',
      errorMessage: 'Please enter a valid number'
    },
  ])
  .addField('#registerForm__integerNumber', [
    {
      rule: 'required',
      errorMessage: 'The field is required'
    },
    {
      rule: 'integer',
      errorMessage: 'Please enter an integer number'
    },
  ])
  .addField('#registerForm__numberRange', [
    {
      rule: 'required',
      errorMessage: 'The field is required'
    },
    {
      rule: 'minNumber',
      value: 10,
      errorMessage: 'The number must be at least 10'
    },
    {
      rule: 'maxNumber',
      value: 20,
      errorMessage: 'Your number does not meet the limit. '
    },
  ]);



      