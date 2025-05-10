const { default: axios } = require("axios");

const ApiHandler = async (numberType) => {
    const primeApi="http://20.244.56.144/evaluation-service/primes"
    const evenApi="http://20.244.56.144/evaluation-service/even"
    const randApi="http://20.244.56.144/evaluation-service/rand"
    const fiboApi="http://20.244.56.144/evaluation-service/fibo"
  const Data = [];
  const windowSize = 10;

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

    let apiData
    let accesstoken = res.data.access_token;
    if (!accesstoken) {
      return;
    }

    let currentapi
    if(numberType=="p"){
        currentapi=primeApi
    }
    else if(numberType=="r"){
        currentapi=randApi
    }
    else if(numberType=="f"){
        currentapi=fiboApi
    }
    else{
        currentapi=evenApi
    }
      const {data} = await axios.get(
        currentapi,
        {
          headers: {
            Authorization: `Bearer ${accesstoken}`,
          },
        }
      );
      apiData=data

    console.log(apiData?.numbers);
    
  } catch (error) {
    console.log(error.message);
  }

};
module.exports = { ApiHandler };
