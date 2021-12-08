const optionsStatistcs = {
  method: "GET",
  url: "https://covid-193.p.rapidapi.com/statistics",
  headers: {
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
    "x-rapidapi-key": "13151510acmsh62fd268e766c9c7p139129jsn781bd573ca57",
  },
};

const optionsStatistcsCoutry = {
  method: "GET",
  url: "https://covid-193.p.rapidapi.com/statistics",
  params: { country: "Brasil" },
  headers: {
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
    "x-rapidapi-key": "13151510acmsh62fd268e766c9c7p139129jsn781bd573ca57",
  },
};

export { optionsStatistcs, optionsStatistcsCoutry };
