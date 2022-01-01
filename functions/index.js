const BASE_URL = "https://passticketgo.herokuapp.com/api"
// const BASE_URL = "http://localhost:39637/api";

const func = {
  createUser: async (data = {}) => {
    const response = await fetch(BASE_URL + "/createUser", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json();
  },
  getUser: async (data = {}) => {
    const response = await fetch(BASE_URL + "/getUser", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json();
  },
  getEvents: async (data = {}) => {
    const response = await fetch(BASE_URL + "/getEvents", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.json();
  },
  reqOrganizer: async (data = {}) => {
    const response = await fetch(BASE_URL + "/organizerRequest", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json();
  },
  createEvent: async (data = {}) => {
    const response = await fetch(BASE_URL + "/createEvent", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json();
  },
  getEventsBy: async (data = {}) => {
    const response = await fetch(BASE_URL + "/getEventsBy", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json();
  },
  buyTicket: async (data = {}) => {
    const response = await fetch(BASE_URL + "/buyTicket", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "Origin": "*"
        // "Access-Control-Allow-Origin": "https://passticketgo.herokuapp.com"
      },
      body: JSON.stringify(data),
    });

    return response.json();
  },
  getTicket: async (data) => {
    const response = await fetch(BASE_URL + "/getTicket/" + data, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.json();
  },
  withdraw: async (data = {}) => {
    const response = await fetch(BASE_URL + "/requestWithdrawal", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json();
  },
  checkSlug: async (data = {}) => {
    const response = await fetch(BASE_URL + "/checkSlug/" + data.id, {
      method: "GET",
    });

    return response.json();
  },
};

export default func;
