const { default: axios } = require("axios");

const ApiHandler = async (response, numberType) => {
  const primeApi = "http://20.244.56.144/evaluation-service/primes";
  const evenApi = "http://20.244.56.144/evaluation-service/even";
  const randApi = "http://20.244.56.144/evaluation-service/rand";
  const fiboApi = "http://20.244.56.144/evaluation-service/fibo";
  const Data = [];
  const windowSize = 10;

  let previousData = [...Data]
  try {
    const res = await axios.post(
      "http://20.244.56.144/evaluation-service/auth",
      {
        email: "22a52.harshith@sjec.ac.in",
        name: "harshith rai",
        rollNo: "4so22cs052",
        accessCode: "KjJAxP",
        clientID: "d5310477-43bd-44d5-be08-2c7cad96c57a",
        clientSecret: "JmQYTVydpHaaXdwk",
      }
    );

    let apiData;
    let accesstoken = res.data.access_token;
    if (!accesstoken) {
      return;
    }

    let currentapi;
    if (numberType == "p") {
      currentapi = primeApi;
    } else if (numberType == "r") {
      currentapi = randApi;
    } else if (numberType == "f") {
      currentapi = fiboApi;
    } else {
      currentapi = evenApi;
    }
    const { data } = await axios.get(
      currentapi,
      {
        headers: {
          Authorization: `Bearer ${accesstoken}`,
        },
      },
      { timeout: 500 }
    );
    apiData = data.numbers;
    console.log(apiData);

    for (let i = 0; i < apiData.length; i++) {
      if (!Data.includes(apiData[i])) {
        if (Data.length == windowSize) {
          Data.shift();
        }

        Data.push(apiData[i]);
      }
    }

    let sum = 0;
    for (let i = 0; i < apiData.length; i++) {
      sum += apiData[i];
    }

    let avg = sum / windowSize;
    return response.json({
      windowPrevState: previousData,
      windowCurrState: Data,
      numbers: apiData,
      avg: avg,
    });
  } catch (error) {
    return response.json({"error":error.message})
  }
};
module.exports = { ApiHandler };
