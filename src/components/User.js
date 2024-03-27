import { useState } from "react";
const User = (props) => {
  const { name, location } = props;
  const [count] = useState(0);
  const [count1] = useState(1);
  return (
    <div className="user-card">
      <h2>Count:{count}</h2>
      <h2>Count1:{count1}</h2>
      <h3>Name:{name}</h3>
      <h3>Location:{location}</h3>
      <h3>Contact:@sandeepsingh123</h3>
    </div>
  );
};
export default User;
