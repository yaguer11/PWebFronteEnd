import Title from "../Title";
import AddTask from "../AddTask";

/* eslint-disable react/prop-types */
function Header({ name }) {
  return (
    <div>
      <Title name={name} />
      <AddTask />
    </div>
  );
}

export default Header;
