#!/usr/bin/env node
import lodde from "lodde";

const loddeClient = lodde.init();

function getAll() {
  loddeClient
    .getAll()
    .then((responseData) => {
      console.log(responseData);
    })
    .catch((error) => {
      console.log(error);
    });
}

function getAllBy(key, value) {
  loddeClient
    .getAllBy({
      parameters: {
        search: "{" + '"' + key + '": "' + value + '"}',
      },
    })
    .then((responseData) => {
      console.log(responseData);
    })
    .catch((error) => {
      console.log(error);
    });
}

getAll();
