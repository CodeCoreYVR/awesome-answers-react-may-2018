const HOST = "localhost:3000";
const API_BASE = "/api/v1";
const BASE_URL = `http://${HOST}${API_BASE}`;

const Session = {
  create(params) {
    return fetch(`${BASE_URL}/session`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  }
};

export default Session;
