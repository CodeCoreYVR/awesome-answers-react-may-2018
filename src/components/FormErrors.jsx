import React from "react";

const FormErrors = props => {
  const { forField, errors = [] } = props;

  // <FormErrors forField="title" errors={validationErrors} />
  let filteredErrors;
  if (forField) {
    filteredErrors = errors.filter(
      e => e.field.toLowerCase() === forField.toLowerCase()
    );
  } else {
    filteredErrors = errors;
  }

  return (
    <ul className="FormErrors">
      {filteredErrors.map((error, i) => (
        <li key={i}>
          {error.field} {error.message}
        </li>
      ))}
    </ul>
  );
};

export default FormErrors;
