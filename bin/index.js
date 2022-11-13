#!/usr/bin/env node
import { v4 as uuidv4 } from "uuid";
import lodde from "lodde";

// import lodde from "../../lodde/lib/index.js";

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

function getAllByRange(by, from, start) {
  loddeClient
    .getAllByRange(by, from, start)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.log(error));
}

function getMaxPrice() {
  loddeClient
    .getMaxPrice()
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

function getMostRecord(by, value) {
  loddeClient
    .getMostRecord(by, value)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

function getById(id) {
  // "2c75f19f-ac7a-4c28-9459-8fbb64c8cb00"
  loddeClient
    .getById(id)
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

function updateRecord(condition, set) {
  loddeClient
    .updateRecord(condition, set)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}
