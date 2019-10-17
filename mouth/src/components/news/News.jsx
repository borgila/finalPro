import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./News.css";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],

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
    
    return (
      <React.Fragment>
        <div className="news-main">
          <Link to={`/`}>Home</Link>
          {this.state.news.map((el, index) => {
            return (
              <a href={el.links.web.href}>
                <div className="single-new" key={index}>
                  <h1 className="new-title">{el.headline} </h1>
                  <p className="new-text">{el.description} </p>
                  <img className="new-image" src={el.images[0].url} alt="" />
                </div>
              b </a>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
