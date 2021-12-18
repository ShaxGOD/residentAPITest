const axios = require("axios");

var apiHelper = function () {
  this.getRequest = async function (getAPIUrl) {
    try {
      const headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
      };
      const response = await axios({
        method: "get",
        url: getAPIUrl,
        headers: headers,
      });
      return await response;
    } catch (error) {
      console.log(
        ("Failed to execute GET request" + url) & "Found Error as",
        error
      );
    }
  };


  this.putRequest = async function (getAPIUrl, payload) {
    try {
      const headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
      };
      const response = await axios({
        method: 'put',
        url: getAPIUrl,
        body: payload,
        headers: headers,
      });
      return await response;
    } catch (error) {
      console.log(
        ("Failed to execute PUT request" + url) & "Found Error as",
        error
      );
    }
  };


  this.postRequest = async function (getAPIUrl, dataPayload) {
    try {
      const headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
      };
      const response = await axios({
        method: 'post',
        url: getAPIUrl,
        data: dataPayload,
        headers: headers,
      });
      return await response;
    } catch (error) {
      console.log(
        ("Failed to execute POST request" + url) & "Found Error as",
        error
      );
    }
  };

  this.deleteRequest = async function (getAPIUrl) {
    try {
      const headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
      };
      const response = await axios({
        method: "delete",
        url: getAPIUrl,
        headers: headers,
      });
      return await response;
    } catch (error) {
      console.log(
        ("Failed to execute DELETE request" + url) & "Found Error as",
        error
      );
    }
  };


};
module.exports = new apiHelper();
