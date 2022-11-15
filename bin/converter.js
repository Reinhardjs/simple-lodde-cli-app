import XMLHttpRequest from "xhr2";

export async function getRateFromUSDToIDR() {
  return new Promise((resolve, reject) => {
    var requestURL = "https://api.exchangerate.host/convert?from=USD&to=IDR";
    var request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();

    request.onload = () => {
      var response = request.response;
      var rate = response.result;
      resolve(rate);
    };

    request.onerror = () => {
      reject("Error get rate from USD to IDR");
    };
  });
}
