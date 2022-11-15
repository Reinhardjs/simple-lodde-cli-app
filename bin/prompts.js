import inquirer from "inquirer";
import {
  getAllBy,
  getAllByRange,
  getMostRecord,
  getById,
  addRecord,
  updateRecord,
  deleteRecord,
} from "./apiCalls.js";

export async function promptGetAllBy() {
  var allAnswer = {};
  var answer = {};
  answer = await inquirer.prompt([
    {
      name: "key",
      message: "Get all records by column:",
      type: "string",
    },
  ]);
  Object.assign(allAnswer, answer);

  answer = await inquirer.prompt([
    {
      name: "value",
      message: "Enter the '" + allAnswer.key + "' value:",
      type: "string",
    },
  ]);
  Object.assign(allAnswer, answer);

  getAllBy(allAnswer.key, allAnswer.value);
}

export async function promptGetAllByRange() {
  var answer = await inquirer.prompt([
    {
      name: "by",
      message: "Get records in range by column:",
      type: "string",
      suffix: "[price|size]",
    },
    {
      name: "from",
      message: "From value:",
      type: "string",
    },
    {
      name: "to",
      message: "To value:",
      type: "string",
    },
  ]);

  getAllByRange(answer.by, answer.from, answer.to);
}

export async function promptGetMostRecord() {
  var answer = await inquirer.prompt([
    {
      name: "by",
      message: "Enter by column:",
      type: "string",
      suffix: "[komoditas|area_provinsi|area_kota]",
    },
    {
      name: "value",
      message: "Enter value:",
      type: "string",
    },
  ]);

  getMostRecord(answer.by, answer.value);
}

export async function promptGetById() {
  var answer = await inquirer.prompt([
    {
      name: "id",
      message: "Enter id:",
      type: "string",
    },
  ]);

  getById(answer.id);
}

export async function propmtAddRecord() {
  var answer = await inquirer.prompt([
    {
      name: "komoditas",
      message: "Enter komoditas value: ",
    },
    {
      name: "area_provinsi",
      message: "Enter area_provinsi value: ",
    },
    {
      name: "area_kota",
      message: "Enter area_kota value: ",
    },
    {
      name: "size",
      message: "Enter size value: ",
    },
    {
      name: "price",
      message: "Enter price value: ",
    },
  ]);

  addRecord(answer);
}

export async function promptUpdateRecord() {
  var answer = await inquirer.prompt([
    {
      name: "condition",
      message: "Enter condition in json string: ",
      suffix: '[example: {"uuid":"<id>", ...}] ',
    },
    {
      name: "set",
      message: "Enter new data in json string: ",
      suffix: '[example: {"size": 100, ...}] ',
    },
  ]);

  var condition, set;
  try {
    condition = JSON.parse(answer.condition);
    set = JSON.parse(answer.set);
  } catch (error) {
    console.log("Please enter valid value!");
  }

  updateRecord(condition, set);
}

export async function promptDeleteRecord() {
  var answer = await inquirer.prompt([
    {
      name: "condition",
      message: "Enter condition in json string: ",
      suffix: '[example: {"uuid":"<id>", ...}] ',
    },
  ]);

  var condition;
  try {
    condition = JSON.parse(answer.condition);
  } catch (error) {
    console.log("Please enter valid value!");
  }

  deleteRecord(condition);
}
