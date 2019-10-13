import React, { Component } from "react";

export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerStats: [],
      selectedStat: null,
      validationError: "",
      // selectedPlayer: this.props.selectedPlayer,
      selectedPlayer: ""
    };
  }
  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     ...this.state,
  //     selectedStat: nextProps.selectedStat,
  //     selectedPlayer: nextProps.selectedPlayer
  //   });
  // }
  render() {
   
    return (
      <div>
        <select
          value={this.props.selectedStat}
          onChange={e =>
            this.props.selectStat({
              selectedStat: e.target.value,
              validationError:
                e.target.value === "" ? "You must select a stat" : ""
            })
          }
        >
          {this.props.playerStats.map(stat => (
            <option key={stat.value} value={stat.value}></option>
          ))}
        </select>
      </div>
    );
  }
}
