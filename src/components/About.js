import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import userContext from "../utils/UserContext";
class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor is called");
  }
  componentDidMount() {
    //use for api calls
    console.log("Parent did mount called");
  }
  render() {
    console.log("Parent render is called");
    return (
      <div>
        <div>
          loggedInUser
          <userContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-lg font-semibold">{loggedInUser}</h1>
            )}
          </userContext.Consumer>
        </div>
        <h2>About</h2>
        <h3>This is Food Application</h3>
        {/* <User name={"Sandeep"} location={"Mumbai"} /> */}
        <UserClass name={"sandeep"} location={"Mumbai"} />
        {/* <UserClass name={"Second"} location={"Mumbai"} /> */}
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h2>About</h2>
//       <h3>This is Food Application</h3>
//       {/* <User name={"Sandeep"} location={"Mumbai"} /> */}
//       <UserClass name={"Sandeep Singh"} location={"Mumbai"} />
//     </div>
//   );
// };
export default About;
