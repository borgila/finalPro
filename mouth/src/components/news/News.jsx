import React, { Component } from "react";
import axios from "axios";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }
  getNews = () => {
    return axios
      .get(` http://site.api.espn.com/apis/site/v2/sports/basketball/nba/news`)

      .then(res => res);
  };
  componentDidMount() {
    this.getNews().then(res => {
      let dailyNews = res.data.articles;
      let arrNews = [...dailyNews];
      console.log(arrNews);

      this.setState({ ...this.state, news: arrNews }, () =>
        console.log(this.state.news)
      );
    });
  }

  render() {
    console.log(this.state.news);
    return (
      <div>
        {this.state.news.map((el, index) => {
          return (
            <div key={index}>
              <h1>{el.headline} </h1>
              <p>{el.description} </p>
              <img src={el.images[0].url} alt="#" />
            </div>
          );
        })}
      </div>
    );
  }
}
