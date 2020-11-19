import React from "react";
import API from "./utils/API";
import EmpTable from "./components/EmpTable";

class App extends React.Component {
  state = {
    users: [],
    usersCopy: [],
    order: "ascend",
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

      this.setState({ users: parsed, userCopy: parsed });
    } catch (error) {
      console.warn(error);
    }
  };

  handleInp = (val) => {
    this.setState({
      users: this.state.usersCopy.filter((x) => x.firstName.includes(val)),
    });
  };

  empSortedByLastName = () => {
    console.log("run here");
    const sortedUsers = this.state.usersCopy;
    // if (this.state.order === "ascend") {
    //this.setState({
    sortedUsers.sort(function (a, b) {
      console.log(a.last, "a value", b.last, "b value");
      var empA = a.name.last.toUpperCase();
      var empB = b.name.last.toUpperCase();
      if (empA < empB) {
        return -1;
      }
      if (empA > empB) {
        return 1;
      }
      return 0;
    });

    this.setState = {
      userCopy: sortedUsers,
    };
    //}

    this.setState({
      usersCopy: this.state.users.sort((a, b) => {
        console.log(a.last, "a value", b.last, "b value");
        var empA = a.last.toUpperCase();
        var empB = b.last.toUpperCase();
        if (empA < empB) {
          return 1;
        }
        if (empA > empB) {
          return -1;
        }
        return 0;
      }),
    });
    return this.setState({
      order: "ascend",
    });
  };

  sortTable = (e) => {
    const key = e.target.getAttribute("data-name");

    this.setState({
      users: this.state.users.sort((a, b) => a[key] > b[key] ? 1 : -1)
    })
  };

  render() {
    // EmpTable({ employees: this.state.users, sortTable: this.sortTable })

    return (
      <div className="">
        <h1 className="text-center mb-4">Employee Directory</h1>
        <input type="text" onChange={(e) => this.handleInp(e.target.value)} />
        {/* <button onClick={() => this.empSortedByLastName()}>Sort</button> */}
        <EmpTable employees={this.state.users} sortTable={this.sortTable} />
      </div>
    );
  }
}

export default App;
