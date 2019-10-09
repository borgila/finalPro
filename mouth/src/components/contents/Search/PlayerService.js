import axios from 'axios';

class PlayerService {
  constructor() {
    this.service = axios.create({
      baseURL: 'https://api.sportsdata.io/v3/nba',
      withCredentials: true
    });
    // https://api.sportsdata.io/v3/nba/stats/json/Players/atl?KEY=5aac1eb3365f42588ddcb3a0fb574c09
  }
  getPlayersFromTeam=(Key)=>{
    return this.service.get(`/stats/json/Players/${Key}?KEY=5aac1eb3365f42588ddcb3a0fb574c09`)
    .then(res=>res.data)
  }

}

export default PlayerService;