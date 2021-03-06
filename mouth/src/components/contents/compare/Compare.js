import React, { Component } from "react";
import "./Chart.css";
import { Bar } from "react-chartjs-2";
let legend = {
  labels: {
    fontColor: "#000000",
    fontSize: 50,
    margin: 20
  },
  maintainAspectRatio: true
};

let options = {
  scales: {
    xAxes: [{ ticks: { autoSkip: false, fontSize: 40, padding: 10 } }],
    yAxes: [{ ticks: { autoSkip: false, fontSize: 40, padding: 10 } }]
  }
};

export default class Compare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlayer: this.props.selectedPlayer,
      selectedPlayer2: this.props.selectedPlayer2
    };
    this.chartUpdate = this.chartUpdate.bind(this);
  }
  componentDidMount() {
    // console.log("PROOOOOPS", this.props);
    // console.log("STAAAATES UNATES", this.state);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, selectedPlayer: nextProps.selectedPlayer });
  }
  componentDidUpdate() {
    this.chartUpdate();
  }
  chartUpdate() {
    const {
      Assists, FreeThrowsPercentage, TwoPointersPercentage,ThreePointersPercentage,Points,FantasyPoints,Name
    } = this.state.selectedPlayer;
    let data = {
      labels: ["Assists","FTP", "FGP", "3PP", "Points","Fantasy"],
      datasets: [
        {
          label: Name,
          fill: true,
          lineTension: 0.5,
          backgroundColor: "rgba(51, 109, 233,0.4)",
          borderColor: "red",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          // legend.labels.fontSize:20,
          // legend: {
          //     display: false,
          //     labels: {
          //         fontColor: "#00ff00",
          //         fontSize: 200
          //     }
          data: [Assists, FreeThrowsPercentage, TwoPointersPercentage,ThreePointersPercentage,Points,FantasyPoints]
        }
      ]
    };
    return data;
  }
  render() {
      
    console.log(this.state.selectedPlayer);

    let plStats = [];
    for (let key in this.state.selectedPlayer) {
      {
        plStats = [...plStats, key + ": " + this.state.selectedPlayer[key]];
      }
    }
    return (
      <React.Fragment  >
      
        <Bar data={this.chartUpdate} legend={legend} options={options} series={this.state.series} />
      </React.Fragment>
    );
  }
}
