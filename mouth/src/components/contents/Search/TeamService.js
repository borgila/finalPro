import axios from "axios";

class TeamService {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/api/search`,
      // baseURL: "http://localhost:4000/api/search",
      withCredentials: true
    });
  }
  getAllTeams = () => {
    return this.service.get(`/searchAllTeams`).then(res => res.data);
  };
  getOneTeam = key => {
    return this.service.get(`/selectOneTeam/${key}`).then(res => {
      return res.data;
    });
  };
  getOnePlayer = _id => {
    return this.service.get(`/selectOnePlayer/${_id}`).then(res => res.data);
  };
  showMyTeam = () => {
    return this.service.get(`/showMyTeam`).then(res => res.data);
  };
  removePlayer = id => {
    return this.service.delete(`/deletePlayer/${id}`).then(res => {
      return res.data;
    });
  };
  SearchPlayer = name => {
    console.log(name)
    return this.service
      .get(`/searchPlayer/${name}`)

      .then(res => res.data);
  };
}

export default TeamService;
