import React from "react";
import API from "./utils/API";
import EmpTable from "./components/EmpTable";

class App extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    try {
      const response = await API.getUsers();
      console.log(response.data.results);

      const parsed = response.data.results.map((x) => ({
        lastName: x.name.last,
        firstName: x.name.first,
        img: x.picture.thumbnail,
      }));

      this.setState({ users: parsed });
    } catch (error) {
      console.warn(error);
    }
  };

  handleInp = (val) => {
    this.setState({
      users: this.state.users.filter((x) => x.firstName.includes(val)),
    });
  };

  render() {
    return (
      <div>
        <h1>Employee Directory</h1>
        <input type="text" onChange={(e) => this.handleInp(e.target.value)} />
        <EmpTable employees={this.state.users} />
      </div>
    );
  }
}

export default App;
