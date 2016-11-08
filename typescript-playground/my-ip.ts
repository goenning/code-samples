import * as axios from "axios";

interface IpisifyResponse {
  ip: string;
}

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

async function getMyIP() {
  try {
    console.log("Fetching my IP ...");
    const resposta = await axios.get<IpisifyResponse>("https://api.ipify.org/?format=json");
    console.log(`HTTP Status: ${resposta.status}`); 
    console.log(`My IP is: ${resposta.data.ip}`); 
    console.log("Finished");
  } catch (err) {
    console.log(`Ops, an error: ${err.message}`);
  }
}

(async () => getMyIP())();