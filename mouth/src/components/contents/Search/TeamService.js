import axios from "axios";

class TeamService {
  constructor() {
    this.service = axios.create({
      baseURL: "http://localhost:4000/api/search",
      withCredentials: true
    });
  }
  getAllTeams = () => {
    
    return this.service.get(`/searchAllTeams`).then(res => res.data);
  };
  getOneTeam = key => {
    console.log("hola")
    return this.service.get(`/selectOneTeam/${key}`).then(res => {
      console.log(res);
      return res.data;
    });
  };
  getOnePlayer = _id => {
    return this.service.get(`/selectOnePlayer/${_id}`).then(res => res.data);
  };
  showMyTeam = ()=>{
    return this.service.get(`/showMyTeam`)
    .then(res=>res.data)
  }
}

export default TeamService;
