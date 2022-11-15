import lodde from "lodde";
import { getRateFromUSDToIDR } from "./converter.js";
// import lodde from "../../lodde/lib/index.js";

const loddeClient = lodde.init();

function handleResolve(responseData) {
  getRateFromUSDToIDR()
    .then((rate) => {
      if (responseData instanceof Array) {
        const modifiedArray = responseData.map((item) => {
          item.price = (item.price / rate).toFixed(2) + " USD";
        });
        console.log(modifiedArray);
      }
      if (responseData instanceof Object) {
        responseData.price = (responseData.price / rate).toFixed(2) + " USD";
        console.log(responseData);
      }
    })
    .catch((err) => console.log(err));
}

export function getAll() {
  loddeClient
    .getAll()
    .then((responseData) => {
      handleResolve(responseData);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getAllBy(key, value) {
  loddeClient
    .getAllBy(key, value)
    .then((responseData) => {
      handleResolve(responseData);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getAllByRange(by, from, to) {
  loddeClient
    .getAllByRange(by, from, to)
    .then((responseData) => {
      handleResolve(responseData);
    })
    .catch((error) => console.log(error));
}

export function getMaxPrice() {
  loddeClient
    .getMaxPrice()
    .then((responseData) => {
      handleResolve(responseData);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getMostRecord(by, value) {
  loddeClient
    .getMostRecord(by, value)
    .then((responseData) => {
      handleResolve(responseData);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getById(id) {
  // "2c75f19f-ac7a-4c28-9459-8fbb64c8cb00"
  loddeClient
    .getById(id)
    .then((responseData) => {
      handleResolve(responseData);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function addRecord(data) {
  loddeClient
    .addRecord(data)
    .then((responseData) => {
      handleResolve(responseData);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function updateRecord(condition, set) {
  loddeClient
    .updateRecord(condition, set)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function deleteRecord(condition) {
  loddeClient
    .deleteRecord(condition)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}
