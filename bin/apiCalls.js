// import lodde from "lodde";
import lodde from "../../lodde/lib/index.js";

const loddeClient = lodde.init();

export function getAll() {
  loddeClient
    .getAll()
    .then((responseData) => {
      console.log(responseData);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getAllBy(key, value) {
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

export function getAllByRange(by, from, start) {
  loddeClient
    .getAllByRange(by, from, start)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.log(error));
}

export function getMaxPrice() {
  loddeClient
    .getMaxPrice()
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getMostRecord(by, value) {
  loddeClient
    .getMostRecord(by, value)
    .then((response) => {
      console.log(response);
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
      console.log(responseData);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function addRecord(data) {
  loddeClient
    .addRecord(data)
    .then((responseData) => {
      console.log(responseData);
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
