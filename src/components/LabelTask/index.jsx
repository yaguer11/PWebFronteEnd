/* eslint-disable react/prop-types */
function LabelTask({ text, completed }) {
  return (
    <label style={{ textDecoration: completed ? "line-through" : "none" }}>
      {text}
    </label>
  );
}

export default LabelTask;
