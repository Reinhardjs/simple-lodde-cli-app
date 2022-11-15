#!/usr/bin/env node

import { getAll, getMaxPrice } from "./apiCalls.js";
import {
  promptDeleteRecord,
  promptGetAllBy,
  promptGetAllByRange,
  promptGetById,
  promptGetMostRecord,
  promptUpdateRecord,
  propmtAddRecord,
} from "./prompts.js";
import chalk from "chalk";
import boxen from "boxen";
import figlet from "figlet";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

const usage =
  boxen(
    chalk.green(
      "Lodde client app that enable us to call api requests from command"
    ),
    {
      padding: 1,
      borderColor: "green",
      borderStyle: "double",
    }
  ) + "\ntype --help to get list of available commands \n";

const argv = yargs(hideBin(process.argv))
  .help()
  .option("request", {
    alias: "r",
    type: "string",
    description: "API Request Function",
  })
  .parse();

if (argv.request == null) {
  console.log(
    chalk.yellow(figlet.textSync("Lodde-CLI", { horizontalLayout: "full" }))
  );
  console.log(usage);
} else {
  if (argv.request === "getAll") {
    getAll();
  }

  if (argv.request === "getMaxPrice") {
    getMaxPrice();
  }

  if (argv.request === "getAllBy") {
    promptGetAllBy();
  }

  if (argv.request === "getAllByRange") {
    promptGetAllByRange();
  }

  if (argv.request === "getMostRecord") {
    promptGetMostRecord();
  }

  if (argv.request === "getById") {
    promptGetById();
  }

  if (argv.request === "addRecord") {
    propmtAddRecord();
  }

  if (argv.request === "updateRecord") {
    promptUpdateRecord();
  }

  if (argv.request === "deleteRecord") {
    promptDeleteRecord();
  }
}
