const lodde = require("lodde");

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
    .addRecord(data)
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

function deleteRecord(condition) {
  loddeClient
    .deleteRecord(condition)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = {
  getAll,
  getAllBy,
  getAllByRange,
  getMaxPrice,
  getMostRecord,
  getById,
  addRecord,
  updateRecord,
  deleteRecord,
};
