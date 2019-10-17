class BarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded"
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"]
        },
        xaxis: {
          categories: [
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct"
          ]
        },
        yaxis: {
          title: {
            text: "$ (thousands)"
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function(val) {
              return "$ " + val + " thousands";
            }
          }
        }
      },
      series: [
        {
          name: "Net Profit",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        {
          name: "Free Cash Flow",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
      ]
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height="350"
        />
      </div>
    );
  }
}

// render() {
//   //

//   return (
//     <div className="main">
//       <UserCard></UserCard>
//       <div className="carrousel-teams">
//         {this.state.teams.map((team, idx) => {
//           return (
//             <div
//               key={idx}
//               onClick={() => this.selectTeam(team)}
//               className="carrousel-teams-item"
//             >
//               <img className="img-team" src={team.WikipediaLogoUrl} alt="#" />
//             </div>
//           );
//         })}
//       </div>
//       {this.state.selectedTeam ? (
//         <img
//           className="img-team"
//           src={this.state.selectedTeam.WikipediaLogoUrl}
//           alt="#"
//         />
//       ) : null}
//       );
//     </div>
//
