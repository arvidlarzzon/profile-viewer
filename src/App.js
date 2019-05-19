import React from "react";
import Header from "./Components/Header";
import ProfileViewer from "./Components/ProfileViewer";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFilters: false,
      isMobile: window.innerWidth < 670,
    };
  }
  componentDidMount() {
    window.addEventListener("resize", this.isMobile);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.isMobile);
  }
  isMobile = () => {
    window.innerWidth < 670
      ? this.setState({ isMobile: true })
      : this.setState({ isMobile: false });
  };
  toggleFilters = () => {
    this.setState({ showFilters: !this.state.showFilters });
  };
  render() {
    return (
      <div className="App">
        <Header toggleFilters={this.toggleFilters} />
        <div className="content-container">
          <ProfileViewer showFilters={this.state.showFilters} />
        </div>
      </div>
    );
  }
}

export default App;
