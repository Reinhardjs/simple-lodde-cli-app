#!/usr/bin/env node

import {
  getAll,
  getAllBy,
  getAllByRange,
  getMaxPrice,
  getMostRecord,
  getById,
  addRecord,
  updateRecord,
  deleteRecord,
} from "./apiCalls.js";
import chalk from "chalk";
import boxen from "boxen";
import translate from "@vitalets/google-translate-api";
import figlet from "figlet";
