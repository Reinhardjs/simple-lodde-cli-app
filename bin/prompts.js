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
