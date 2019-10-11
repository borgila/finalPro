import React, { Component } from "react";
import "./Chart.css";
import { Line } from "react-chartjs-2";
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

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerSelected: this.props.playerSelected
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, playerSelected: nextProps.playerSelected });
  }
  componentDidUpdate() {
    this.chartUpdate();
  }
  chartUpdate() {
    let data = {
      labels: [0, 20, 40, 60],
      datasets: [
        {
          label: "Weight Kg",
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
          data: []
        }
      ]
    };
    if (!!this.state.playerSelected)
      this.state.playerSelected.map(
        stat => (
          data.labels.push(stat.Name),
          data.datasets[0].data.push(stat.FieldGoalsPercentage)
        )
      );
    return data;
  }
  render() {
    // console.log(this.props.player);
    return (
      <Line data={() => this.chartUpdate()} legend={legend} options={options} />
    );
  }
}
