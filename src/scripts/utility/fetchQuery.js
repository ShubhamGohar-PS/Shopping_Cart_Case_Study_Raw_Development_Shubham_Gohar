import axios from "axios";

class FetchQuery {
  constructor(url, method) {
    this.url = url;
    this.method = method;
  }
  async fetch() {
    if (this.method == "get") {
      const response = await axios.get(
        `http://localhost:5000/${this.url}`
      );
      const resData = response.data;
      return resData;
    }else{
        const response = await axios.post(`http://localhost:5000/${this.url}`)
        const resData = await response.data
        return resData
    }
  }
}

export default FetchQuery;
