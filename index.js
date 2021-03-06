const fs=require("fs");
const csv = require("csvtojson");
const MATCHES_FILE_PATH="./csv_data/matches.csv"
const MATCHES_DELIVERIES_PATH="./csv_data/deliveries.csv"
const JSON_OUTPUT_FILE_PATH = "./public/data.json";
const extraRuns=require("./ipl/extraRuns");
const matchesPlayedPerYear=require("./ipl/matchesPlayedPerYear");
const winsByAllTheTeams=require("./ipl/winsByAllTheTeams");
const topEcoBowlers=require("./ipl/topEcoBowlers.js");
const rcbStory=require("./ipl/rcbStory.js");


function main() {
    csv()
      .fromFile(MATCHES_FILE_PATH)
      .then(matches => {
        let result = matchesPlayedPerYear(matches);
        let val=winsByAllTheTeams(matches);
        let rcb=rcbStory(matches);
        console.log(rcb);
      csv()
      .fromFile(MATCHES_DELIVERIES_PATH)
      .then(deliveries => {
        let runs=extraRuns(deliveries);
        let eco=topEcoBowlers(deliveries);
        saveMatchesPlayedPerYear(result,val,runs,eco,rcb);
      })
  });
}

  function saveMatchesPlayedPerYear(result1,result2,result3,result4,result5) {
    const jsonData = {
      matchesPlayedPerYear: result1,
      winsByAllTheTeams: result2,
      extraRuns: result3,
      topEcoBowlers:result4,
      rcbStories:result5
    };
    const jsonString = JSON.stringify(jsonData);
    fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
      if (err) {
        console.error(err);
      }
    });
  }
  main();