import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserInfo: {
        name: "AK", //dummy
        location: "Dummy",
      },
    };
    console.log("child constructor is called");
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/sanizuku");
    const json = await data.json();
    this.setState({
      UserInfo: json,
    });
    console.log("Child did mount called");
  }

  render() {
    console.log("child render is called");
    // const { name, location } = this.props;
    const { name, location, avatar_url } = this.state.UserInfo;
    // const { count1 } = this.state;
    return (
      <div className="user-card">
        {/* <h2>Count1:{count1}</h2>
        <button
          onClick={() => {
            this.setState({
              count1: this.state.count1 + 1,
            });
          }}
        >
          Increse Count
        </button> */}
        <img src={avatar_url} />
        <h3>Name:{name}</h3>
        <h3>Location:{location}</h3>
        <h3>Contact:@sandeepsingh123</h3>
      </div>
    );
  }
}
export default UserClass;
