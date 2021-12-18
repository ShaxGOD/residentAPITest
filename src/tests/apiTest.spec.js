const { test, expect } = require("@playwright/test");
const axios = require("axios").default;
const api = require("../utils/apiHelper");

test.describe("CRUD Operations", async () => {
    test("Get user by ID = 12", async () => {
      const response = await api.getRequest("https://reqres.in/api/users/12");
      const status = response.status;
      const firstName = response.data.data.first_name;
      const lastName = response.data.data.last_name;

      console.log(response.data.data);
      console.log('Status: ' + status + '\n' +'First name: ' + firstName + '\n' + 'Last name: ' + lastName);

      expect(status).toEqual(200);
      expect(firstName).toEqual("Rachel");
      expect(lastName).toEqual("Howell");
    });

    test("Update user by ID = 12", async () => {
      const requestURL = 'https://reqres.in/api/users/12';
      const updatedLoadData = {
          "name": "Shakh",
          "job": "QA Automation engineer"
      };
      const response = await api.putRequest(requestURL, updatedLoadData);
      const status = response.status;

      console.log("Data: ", await response.data);
      console.log("Status: ", await status)
      expect(status).toEqual(200);

    });

  test("Create user", async () => {
    const requestURL = "https://reqres.in/api/users/";
    const dataToBeUpload = {
      name: "Shakhmardan",
      job: "AQA",
    };
    const response = await api.postRequest(requestURL, dataToBeUpload);
    const status = response.status;
 
    console.log(response.data);
    console.log(status);

    expect(status).toEqual(201);
  });

  test("Delete user by ID = 12", async () => {
    const requestURL = "https://reqres.in/api/users/12";
    const response = await api.deleteRequest(requestURL);
    const status = response.status;

    console.log("Status: " + status);

    expect(status).toEqual(204);

  });

});
