const HOST = "localhost:3000";
const API_BASE = "/api/v1";
const BASE_URL = `http://${HOST}${API_BASE}`;

const Question = {
  all() {
    return fetch(`${BASE_URL}/questions`, { credentials: "include" }).then(
      res => res.json()
    );
  },
  one(id) {
    return fetch(`${BASE_URL}/questions/${id}`, {
      credentials: "include"
    }).then(res => res.json());
  },
  create(params) {
    return fetch(`${BASE_URL}/questions/`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  }
};

export default Question;
