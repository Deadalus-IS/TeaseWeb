import { BASE_URL_GET, BASE_URL_POST } from "../config/api";
import { BASE_URL_ADMIN_GET, BASE_URL_ADMIN_POST } from "../config/api";
import { eraseCookie } from "./cookies";

const func = {
  createUser: async (data = {}) => {
    const response = await fetch(BASE_URL_POST + "/createUser", {
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
    const response = await fetch(BASE_URL_POST + "/getUser", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json();
  },

  authUser: async (data = {}) => {
    const response = await fetch(BASE_URL_POST + "/getAuth", {
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
    const response = await fetch(BASE_URL_POST + "/getEvents", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.json();
  },

  reqOrganizer: async (data = {}) => {
    const response = await fetch(BASE_URL_POST + "/organizerRequest", {
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
    const response = await fetch(BASE_URL_POST + "/createEvent", {
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
    const response = await fetch(BASE_URL_POST + "/getEventsBy", {
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
    const response = await fetch(BASE_URL_POST + "/buyTicket", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        Origin: "*",
        // "Access-Control-Allow-Origin": "http://api.tixvote.com:443/"
      },
      body: JSON.stringify(data),
    });

    return response.json();
  },
  getTicket: async (data) => {
    const response = await fetch(BASE_URL_GET + "/getTicket/" + data, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.json();
  },
  withdraw: async (data = {}) => {
    const response = await fetch(BASE_URL_POST + "/requestWithdrawal", {
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
    const response = await fetch(BASE_URL_GET + "/checkSlug/" + data.id, {
      method: "GET",
    });

    return response.json();
  },
  generateQuickGuid: function () {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  },

  signOut: () => {
    window.localStorage.clear();
    eraseCookie("auth");
  },

  getPolls: async (data = {}) => {
    const response = await fetch(BASE_URL_GET + "/getPolls/" + data?.id, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.json();
  },

  createPoll: async (data = {}) => {
    const response = await fetch(BASE_URL_POST + "/createPolls", {
      method: "Post", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json();
  },

  addNominee: async (data = {}) => {
    const response = await fetch(BASE_URL_POST + "/addNominee", {
      method: "Post", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json();
  },

  getNomineesBy: async (data = {}) => {
    const response = await fetch(BASE_URL_POST + "/getNomineesBy", {
      method: "Post", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json();
  },
  castVote: async (data = {}) => {
    const response = await fetch(BASE_URL_POST + "/castVote", {
      method: "Post", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json();
  },
  getTransactions: async (data = {}) => {
    const response = await fetch(BASE_URL_GET + "/transactions/" + data?.id, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(data),
    });

    return response.json();
  },

  voteWithdraw: async (data = {}) => {
    const response = await fetch(BASE_URL_POST + "/withdrawalRequestVote", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json();
  },

  getTransactionsAdmin: async (data = {}) => {
    const response = await fetch(BASE_URL_ADMIN_POST + "/getTransactions/", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(data),
    });

    return response.json();
  },

  getPollsAdmin: async (data = {}) => {
    const response = await fetch(BASE_URL_ADMIN_POST + "/getPolls/", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(data),
    });

    return response.json();
  },

  getEventsAdmin: async (data = {}) => {
    const response = await fetch(BASE_URL_ADMIN_POST + "/getEvents/", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(data),
    });

    return response.json();
  },

  getUsersAdmin: async (data = {}) => {
    const response = await fetch(BASE_URL_ADMIN_POST + "/getUsers/", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(data),
    });

    return response.json();
  },
  getApprovalsAdmin: async (data = {}) => {
    const response = await fetch(BASE_URL_ADMIN_POST + "/getApprovals/", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(data),
    });

    return response.json();
  },
  getSMS: async (data = {}) => {
    const response = await fetch(BASE_URL_GET + "/getSMSBy/" + data?.id, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(data),
    });

    return response.json();
  },
  sendSMS: async (data = {}) => {
    const response = await fetch(BASE_URL_POST + "/SendSMS", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json();
  },
  buyCredit: async (data = {}) => {
    const response = await fetch(BASE_URL_POST + "/buyCredit", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json();
  },
  showResults: async (data = {}) => {
    const response = await fetch(BASE_URL_POST + "/showResults", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json();
  },
  stopEvent: async (data = {}) => {
    const response = await fetch(BASE_URL_POST + "/stopEvent", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json();
  },
  approveEvent: async (data = {}) => {
    const response = await fetch(BASE_URL_POST + "/approveEvent", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json();
  },
  deletePoll: async (data = {}) => {
    const response = await fetch(BASE_URL_GET + "/deletePoll/" + data.id, {
      method: "GET",
    });

    return response.json();
  },
};

export default func;
