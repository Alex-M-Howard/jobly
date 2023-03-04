import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_REACT_APP_BASE_URL;

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /////////////////////
  //**
  //** User Routes
  //**
  /////////////////////

  // Get all users
  static async getUsers() {
    let res = await this.request(`users/`);
    return res.user;
  }

  // Get user by username
  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  // Add user as admin
  static async addUser(data) {
    let res = await this.request(`users/`, data, (method = "post"));
    return res.user;
  }

  // User apply for job
  static async userApplyJob(username, jobId) {
    let res = await this.request(
      `users/${username}/jobs/${jobId}`,
      (method = "post")
    );
    return res.user;
  }

  // Edit user
  static async updateUser(username, data) {
    let res = await this.request(`users/${username}`, data, (method = "patch"));
    return res.user;
  }

  // Delete user
  static async deleteUser(username) {
    let res = await this.request(`users/${username}`, (method = "delete"));
    return res.user;
  }

  /////////////////////
  //**
  //** Company Routes
  //**
  /////////////////////

  // Get all companies
  static async getCompanies() {
    let res = await this.request(`companies/`);
    return res.companies;
  }

  // Get filtered companies
  static async searchCompanies(qString) {
    let res = await this.request(`companies?name=${qString}`);
    return res.companies;
  }

  // Get company by handle
  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  // Add company
  static async addCompany(data) {
    let res = await this.request(`companies/`, data, (method = "post"));
    return res.company;
  }

  // Edit company
  static async updateCompany(handle, data) {
    let res = await this.request(
      `companies/${handle}`,
      data,
      (method = "patch")
    );
    return res.company;
  }

  // Delete company
  static async deleteCompany(handle) {
    let res = await this.request(`companies/${handle}`, (method = "delete"));
    return res.company;
  }

  /////////////////////
  //**
  //** Job Routes
  //**
  /////////////////////

  // Get all jobs
  static async getJobs() {
    let res = await this.request(`jobs/`);
    return res.jobs;
  }

  // Get filtered jobs
  static async searchJobs(qString) {
    let res = await this.request(`jobs?title=${qString}`);
    return res.jobs;
  }

  // Get job by id
  static async getJob(id) {
    let res = await this.request(`jobs/${id}`);
    return res.job;
  }

  // Add job
  static async addJob(data) {
    let res = await this.request(`jobs/`, data, (method = "post"));
    return res.job;
  }

  // Edit job
  static async updateJob(id, data) {
    let res = await this.request(`jobs/${id}`, data, (method = "patch"));
    return res.job;
  }

  // Delete job
  static async deleteJob(id) {
    let res = await this.request(`jobs/${id}`, (method = "delete"));
    return res.job;
  }

  /////////////////////
  //**
  //** Auth Routes
  //**
  /////////////////////

  // Register new user
  static async registerUser(data, method = 'post') {
    try {
      let res = await this.request(`auth/register`, data, method);
      return { result: 'success', token: res.token };
    } catch (err) {
      return { result: 'fail', error: err };
    }  
  }

  // Get user token
  static async loginUser(data) {
    let res = await this.request(`auth/token`, data, (method = "post"));
    return res.token;
  }
}

// for now, put token ("testuser" / "password" on class)
JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default JoblyApi;