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
//   );