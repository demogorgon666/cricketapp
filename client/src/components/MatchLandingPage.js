import React, { Component } from "react";
import { connect } from "react-redux";
import "./css/MatchLandingPage.css";
import ScrollMenu from "react-horizontal-scrolling-menu";
import Navbar from "../components/common/Navbar";
import { getRecentMatches, getMatchesDate } from "../actions/Matches.js";
// import { Menu, selected, ArrowLeft, ArrowRight } from "./Scroll";

export class MatchLandingPage extends Component {
<<<<<<< HEAD
    // state = {
    //     selected: false,
    //     list: []
    // };
    // componentWillReceiveProps(nextProps) {
    //     const list = nextProps.date.map(date => {
    //         return { match_date: date.match_date };
    //     });
    //     console.log(list);
    //     this.setState({ menuItems: Menu(list, selected) });
    //     this.setState({ list });
    // }
    componentDidMount() {
        function yyyymmdd() {
            var now = new Date();
            var y = now.getFullYear();
            var m = now.getMonth() + 1;
            var d = now.getDate();
            var mm = m < 10 ? "0" + m : m;
            var dd = d < 10 ? "0" + d : d;
            return y + "-" + mm + "-" + dd;
        }
        var date = yyyymmdd();
        console.log(date);
        this.props.getRecentMatches(date);
        // this.props.getMatchesDate();
=======
  state = {
    selected: false,
    list: []
  };
  componentWillReceiveProps(nextProps) {
    const list = nextProps.date.map(date => {
      return { match_date: date.match_date };
    });
    console.log(list);
    this.setState({ menuItems: Menu(list, selected) });
    this.setState({ list });
  }
  componentDidMount() {
    function yyyymmdd() {
      var now = new Date();
      var y = now.getFullYear();
      var m = now.getMonth() + 1;
      var d = now.getDate();
      var mm = m < 10 ? "0" + m : m;
      var dd = d < 10 ? "0" + d : d;
      return y + "-" + mm + "-" + dd;
>>>>>>> df7da74d40afc058f5d692744048bba21c613ea0
    }
    var date = yyyymmdd();
    console.log(date);
    this.props.getRecentMatches(date);
    this.props.getMatchesDate();
  }

<<<<<<< HEAD
    // onSelect = key => {
    //     this.setState({ selected: key });
    //     this.props.getRecentMatches(key);
    // };
    render() {
        // console.log(this.state);
        // const { selected } = this.state;
        // // Create menu from items
        // const menu = this.state.menuItems;

        return (
            <div>
                <div>
                    <Navbar />
                </div>

                <div style={{ marginTop: "80px" }}>
                    {/* <div className="timeline" style={{ marginBottom: "50px" }}>
                        <ScrollMenu
                            data={menu}
                            arrowLeft={ArrowLeft}
                            arrowRight={ArrowRight}
                            selected={selected}
                            onSelect={this.onSelect}
                        />
                    </div> */}

                    <div>
                        {this.props.matches.length === 0 ? (
                            <h2 className="h1-match" style={{ textAlign: "left", margin: "20px" }}>
                                No Matches</h2>
                        ) : (<h2 className="h2-recent-matches" style={{ textAlign: "left", margin: "20px" }}>
                            Fixtures:</h2>
                            )}
=======
  onSelect = key => {
    this.setState({ selected: key });
    this.props.getRecentMatches(key);
  };
  render() {
    console.log(this.state);
    const { selected } = this.state;
    // Create menu from items
    const menu = this.state.menuItems;

    return (
      <div>
        <Navbar />

        <div style={{ marginTop: "80px" }}>
          <div>
            <h1
              className="h1-match"
              style={{ textAlign: "left", margin: "20px" }}
            >
              Matches
            </h1>
          </div>
          <div className="timeline" style={{ marginBottom: "50px" }}>
            <ScrollMenu
              data={menu}
              arrowLeft={ArrowLeft}
              arrowRight={ArrowRight}
              selected={selected}
              onSelect={this.onSelect}
            />
          </div>

          <div>
            {this.props.matches.length === 0 ? (
              <h2
                className="h1-match"
                style={{ textAlign: "left", margin: "20px" }}
              >
                No Matches
              </h2>
            ) : (
              <h2
                className="h2-recent-matches"
                style={{ textAlign: "left", margin: "20px" }}
              >
                Fixtures:
              </h2>
            )}
          </div>
          {this.props.matches.length > 0 ? (
            <div className="all-recent-matches-box">
              {console.log("props matches", this.props.matches)}
              {this.props.matches.map(match => (
                <div
                  className="inside-recent-matches-box"
                  onClick={() => {
                    this.props.history.push(
                      "/match/details/" + match.match_id,
                      {
                        match
                      }
                    );
                  }}
                >
                  <span className="tournamnet-name">{match.match_type}</span>
                  <div className="Team-data">
                    <div className="TeamOne-name">{match.teamTwo}</div>
                    <div className="TeamOne-score">
                      {match.teamOneScore}/{match.teamone_wicket} (50 overs)
>>>>>>> df7da74d40afc058f5d692744048bba21c613ea0
                    </div>
                  </div>
                  <div className="Team-data">
                    <div className="TeamTwo-name">{match.teamOne}</div>
                    <div className="TeamTwo-score">
                      {match.teamTwoScore}/{match.teamtwo_wicket} (50 overs)
                    </div>
                  </div>
                  <span className="winner-name">{match.team_winner} won</span>
                </div>
              ))}
            </div>
          ) : (
            console.log("do nothing")
          )}
          {/* <Scroll date={this.props.date} /> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  matches: state.matchreducer.matches,
  date: state.matchreducer.match_date
});

export default connect(
  mapStateToProps,
  { getRecentMatches, getMatchesDate }
)(MatchLandingPage);
