"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const axios = require("axios");
/*
function getMyIP() {
  console.log("Fetching my IP ...");
  axios.get<IpisifyResponse>("https://api.ipify.org/?format=json").then(function (x) {
    console.log(`HTTP Status: ${x.status}`);
    console.log(`My IP is: ${x.data.ip}`);
  }).catch(function(err) {
    console.log(`Ops, an error: ${err.message}`);
  });
  console.log("Finished...");
}

getMyIP();
*/
function getMyIP() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("Fetching my IP ...");
            const resposta = yield axios.get("https://api.ipify.org/?format=json");
            console.log(`HTTP Status: ${resposta.status}`);
            console.log(`My IP is: ${resposta.data.ip}`);
            console.log("Finished");
        }
        catch (err) {
            console.log(`Ops, an error: ${err.message}`);
        }
    });
}
(() => __awaiter(this, void 0, void 0, function* () { return getMyIP(); }))();
