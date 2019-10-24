drop database if exists dummydata;
create database dummydata;

\c dummydata;

create table delivery
(
    match_id int,
    inning int,
    overs float,
    striker int,
    non_striker int,
    bowler int,
    batsman_run int,
    extra_id int,
    wicket_id int,
    total_runs int
);

create table extras
(
    extras_id serial,
    extras_type varchar(255),
    extras_run int
);

create table match
(
    match_id serial,
    match_type varchar(255),
    toss_winner int,
    toss_decision varchar(255),
    innings_one_team int,
    innings_two_team int,
    outcome varchar(255),
    player_of_the_match varchar
    [],
    gender varchar
    (255),
    winner int,
    summary varchar
    (8000),
    venue_id int,
    competition varchar
    (255)
);

create table dummy 
(
    player_name varchar(255),
    player_country varchar(100),
    batting_style varchar(255),
    bowling_style varchar(255),
    bowling_style varchar(255),
    player_dob date,
    player_role varchar(255),
    debut_odi_match varchar(500),
    debut_test_match varchar(500),
    debut_t20_match varchar(500)
);

    create table match_date
    (
        match_id int,
        match_date date
    );

    create table match_team_player
    (
        match_id int,
        team_id int,
        player_id int
    );

    create table match_type
    (
        match_type_id serial,
        match_type varchar(255),
        match_values varchar(255)
    );

    create table match_umpire
    (
        match_id int,
        umpire_id int
    );

    create table news
    (
        news_id serial,
        news_content varchar(8000),
        news_title varchar(500),
        news_date date,
        news_image varchar
    );

    create table player
    (
        player_id serial,
        player_name varchar(255),
        player_gender varchar(100),
        batting_style varchar(255),
        bowling_style varchar(255),
        player_dob date,
        player_role varchar(255),
        debut_odi_match varchar(255),
        debut_test_match varchar(255),
        debut_t20_match varchar(255),
        player_country varchar(255),
        player_image varchar
    );

    create table player_stats
    (
        player_stats_id serial,
        player_id int,
        player_stats_name varchar(100),
        player_stats_value varchar(100),
        match_type varchar(30),
        competition varchar(255)
    );

    create table team
    (
        team_id serial,
        team_name varchar(255),
        team_image varchar
    );

    create table umpire
    (
        umpire_id serial,
        umpire_name varchar(255)
    );

    create table users
    (
        user_id serial,
        user_name varchar(255),
        user_email varchar(255),
        user_password varchar(255),
        isAdmin boolean
    );

    create table users_team
    (
        user_id int,
        team_id int
    );

    create table venue
    (
        venue_id serial,
        venue_name varchar(255),
        venue_city varchar(255)
    );

    create table wickets
    (
        wicket_id serial,
        wicket_type varchar(255),
        fielder_one int,
        fielder_two int,
        player_out int
    );

insert into extras(extras_id,extras_type, extras_run) values(0,'NA',0);
insert into team(team_id,team_name, team_image) values(0,'NA','NA');
insert into player values(0,'NA','NA','NA','NA','0000-00-00','NA','NA','NA','NA','NA','NA');
insert into wickets values(0,'NA',0,0,0)