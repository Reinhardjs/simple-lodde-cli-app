#!/usr/bin/env node
import { v4 as uuidv4 } from "uuid";
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

function addRecord(data) {
  loddeClient
    .addRecord({
      body: {
        uuid: uuidv4(),
        ...data,
      },
    })
    .then((responseData) => {
      console.log(responseData);
    })
    .catch((error) => {
      console.log(error);
    });
}
