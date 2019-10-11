// import React, { Component } from 'react'
// import Chart from "../chart/Chart.js";
// import Select from "../Select/Select";


// export default class ChartBox extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedPlayer: this.props.selectedPlayer,
//       playerStats: [],
//       selectedStat: null,
//       validationError: "",
      
//     };
//   }
  
//   selectStat = stat => {
//     console.log("GIMMMMEEEEE SOME")
//     this.setState({ ...this.state, selectedStat: stat });
//   };
//   render() {
//     console.log(this.props)
//     return (
//       <div>
//         <Select selectedPlayer={this.props.selectedPlayer}
//         selectStat={stat => this.selectStat(stat)}
//         validationError={this.state.validationError}
//           />
//         <Chart selectedStat={this.state.selectedStat} />
//       </div>
//     )
//   }
// }
