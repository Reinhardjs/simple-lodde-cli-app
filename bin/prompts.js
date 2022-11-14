import inquirer from "inquirer";
import {
  getAllBy,
  getAllByRange,
  getMaxPrice,
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
