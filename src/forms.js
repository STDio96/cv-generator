export const formsJSON = [
  {
    "initialValues": {
      "first_name": "Sergo",
      "last_name": "LastName",
      "job": "'mid2sen js developers",
      "phone": "123456789",
      "email": "sergo@gmail.com"
    },
    validate: (values) => {
      const errors = {};
      Object.entries(values).forEach(x => {
        if (!x[1]) {
          errors[x[0]] = `${x[0]} is required`;
        }
      });

      if (values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }
      console.log(errors)
      return errors;
    },
    "inputs": [
      {
        "label": "First name",
        "type": "text",
        "name": "first_name",
        "required": "false"
      },
      {
        "label": "Last name",
        "type": "text",
        "name": "last_name",
        "required": "false"
      },
      {
        "label": "Job",
        "type": "text",
        "name": "job",
        "required": "false"
      },
      {
        "label": "Phone",
        "type": "tel",
        "name": "phone",
        "required": "false"
      },
      {
        "label": "Email",
        "type": "email",
        "name": "email",
        "required": "false"
      },
    ]
  }
]