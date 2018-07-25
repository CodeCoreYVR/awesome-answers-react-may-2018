// You must React in every component file, because your
// JSX tags will get converted to `React.createElement(...)`
// calls. If React is not present, your program will throw
// error saying that createElement doesn't exist for undefined.
import React from "react";
// When writing components, you named with beginning with a capital
// letter. Otherwise, React will interpret your component as an
// HTML tag and will use your component function.
const Field = props => {
  return (
    <small
      style={{
        color: "deepskyblue",
        textTransform: "uppercase"
      }}
    >
      <strong
        style={{
          color: "darkblue"
        }}
      >
        {props.name}:{" "}
      </strong>
      {props.value}
    </small>
  );
};

// module.exports = Field;
export default Field;
