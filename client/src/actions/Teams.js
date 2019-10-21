import {
  GET_TEAMS,
  GET_RANKS,
  GET_MATCHBYTEAMID,
  GET_TEAM_BATSMEN,
  GET_TEAM_BOWLERS,
  GET_TEAM_FIXTURES,
  GET_TEAM_STATS
  // GET_HIGHEST_TOTALS,
  // GET_LOWEST_TOTALS
} from "./Types";

import { startLoading, stopLoading } from "./LoadingAction";

import axios from "axios";

export const getTeams = match_type => dispatch => {
  return axios
    .post("http://localhost:5000/cricketalpha/teams", match_type)
    .then(res => {
      dispatch({
        type: GET_TEAMS,
        payload: res.data.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const getRanks = (gender, ranking) => dispatch => {
  return axios
    .post(
      "http://localhost:5000/cricketalpha/teams/rankings/" + gender,
      ranking
    )
    .then(res => {
      dispatch({
        type: GET_RANKS,
        payload: res.data.data
      });
      console.log("from actions", ranking);
    })
    .catch(err => {
      console.log(err);
    });
};

export const getMatch = (team_id, gender, match_type) => dispatch => {
  dispatch(startLoading());
  return axios
    .post(
      "http://localhost:5000/cricketalpha/teams/match/" +
        team_id +
        "/" +
        gender,
      match_type
    )
    .then(res => {
      dispatch(stopLoading());
      dispatch({
        type: GET_MATCHBYTEAMID,
        payload: res.data.data
      });
    })
    .catch(err => {
      dispatch(startLoading());
      console.log(err);
    });
};

export const getTeamBatsmen = (gender, match_type) => dispatch => {
  return axios
    .post(
      "http://localhost:5000/cricketalpha/teams/topbatsmen/" + gender,
      match_type
    )
    .then(res => {
      dispatch({
        type: GET_TEAM_BATSMEN,
        payload: res.data.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const getTeamBowlers = (gender, match_type) => dispatch => {
  return axios
    .post(
      "http://localhost:5000/cricketalpha/teams/topbowlers/" + gender,
      match_type
    )
    .then(res => {
      dispatch({
        type: GET_TEAM_BOWLERS,
        payload: res.data.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const getFixtures = (team_id, match_type) => dispatch => {
  return axios
    .post(
      "http://localhost:5000/cricketalpha/teams/fixtures/" + team_id,
      match_type
    )
    .then(res => {
      dispatch({
        type: GET_TEAM_FIXTURES,
        payload: res.data.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const getTeamStats = (team_id, gender, type) => dispatch => {
  console.log("getTeamStats action- ", team_id, gender, type);

  // dispatch(startLoading());
  return axios
    .post(
      "http://localhost:5000/cricketalpha/teams/stats/" +
        team_id +
        "/" +
        gender,
      type
    )

    .then(res => {
      // dispatch(stopLoading());
      console.log("getTeamStats Action");
      dispatch({
        type: GET_TEAM_STATS,
        payload: res.data.data
      });
    })
    .catch(err => {
      // dispatch(startLoading());
      console.log(err);
    });
};
