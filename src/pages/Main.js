import PropTypes from "prop-types";
import { connect } from "react-redux";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { Switch, Route, withRouter } from "react-router-dom";
import Alert from "react-s-alert";

import Movies from "../modules/movies";
import MovieDetails from "../modules/movieDetails";

class Main extends Component {
  constructor(props) {
    super(props);
  }
  componentWillReceiveProps(nextProps) {
    const { alertMessage } = nextProps;
    if (alertMessage) {
      Alert.info(alertMessage, {
        position: "top-right",
        effect: "slide"
      });
    }
  }
  render() {
    return (
      <div>
        <Alert stack={{ limit: 3 }} timeout={3000} />
        <main role="main">
          <Switch>
            <Route path="/" exact component={Movies} />
            <Route path="/movies" exact component={Movies} />
              <Route path="/movies/:keyword" exact component={Movies} />
            <Route path="/movie/:id" exact component={MovieDetails} />
          </Switch>
        </main>
      </div>
    );
  }
}
Main.propTypes = {
  alertMessage: PropTypes.string
};
const mapStateToProps = (state, props) => {
  const { alertMessage } = "";
  return { alertMessage };
};

export default withRouter(connect(mapStateToProps)(Main));
