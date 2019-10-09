import axios from 'axios';

class TeamService {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:4000/api/search',
      withCredentials: true
    });
  }
  getAllTeams=()=>{
    return this.service.get(`/searchAllTeams`)
    .then(res=>res.data)
  }
  getOneTeam=(key)=>{
    
    return this.service.get(`/selectOneTeam/${key}`)
    .then(res=>{
      console.log(res)
      return res.data})
  }
}

export default TeamService;