//1st
function fetchAndVisualizeData() {
    fetch("./data.json")
      .then(r => r.json())
      .then(visualizeData);
  }
  
  fetchAndVisualizeData();

  function visualizeData(data) {
    visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
    visualizeMatchesWonByEachTeam(data.winsByAllTheTeams);
    visualizeExtraRuns(data.extraRuns);
    visualizeTopEcoBowlers(data.topEcoBowlers);
    visualizeRcbStories(data.rcbStories);
    return;
  }
  //1
  function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
    const seriesData = [];
    for (let year in matchesPlayedPerYear) {
      seriesData.push([year, matchesPlayedPerYear[year]]);
    }
   
    Highcharts.chart("matches-played-per-year", {
      chart: {
        type: "column"
      },
      title: {
        text: "Matches Played Per Year"
      },
      subtitle: {
        text:
          'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
      },
      xAxis: {
        type: "category"
      },
      yAxis: {
        min: 0,
        title: {
          text: "Matches"
        }
      },
      series: [
        {
          name: "Years",
          data: seriesData
        }
      ]
    });
  }
//2
 function visualizeMatchesWonByEachTeam(winsByAllTheTeams){
  const seriesData = [];
  for (let team in winsByAllTheTeams) {
    seriesData.push([team, winsByAllTheTeams[team]]);
  }
  Highcharts.chart("wins-by-each-teams", {
    chart: {
      type: "column"
    },
    title: {
      text: "wins-by-each-teams"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      title: {
        text: "wins"
      }
    },
    series: [
      {
        name: "Teams",
        data: seriesData
      }
    ]
  });
 }
 //3
 function visualizeExtraRuns(extraRuns){
  const seriesData = [];
  for (let runs in extraRuns) {
    seriesData.push([runs, extraRuns[runs]]);
  }
  Highcharts.chart("extra-runs", {
    chart: {
      type: "column"
    },
    title: {
      text: "ExtraRuns"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      title: {
        text: "runs"
      }
    },
    series: [
      {
        name: "Teams",
        data: seriesData
      }
    ]
  });
 }
 //4
 function visualizeTopEcoBowlers(topEcoBowlers){
  const seriesData = [];
  for (let eco in topEcoBowlers) {
    seriesData.push([eco, topEcoBowlers[eco]]);
  }
  Highcharts.chart("top-Eco-Bowlers", {
    chart: {
      type: "column"
    },
    title: {
      text: "Top 10 econmical bowlers"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      title: {
        text: "matches"
      }
    },
    series: [
      {
        name: "Bowlers",
        data: seriesData
      }
    ]
  });
 }
 //5
 function visualizeRcbStories(rcbStories){
 const seriesData = [];
 for (let year in rcbStories) {
   seriesData.push([year, rcbStories[year]]);
 }

 Highcharts.chart("rcb-Stories", {
   chart: {
     type: "column"
   },
   title: {
     text: "Story of RCB Wins Per Year"
   },
   subtitle: {
     text:
       'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
   },
   xAxis: {
     type: "category"
   },
   yAxis: {
     min: 0,
     title: {
       text: "Matches"
     }
   },
   series: [
     {
       name: "Years",
       data: seriesData
     }
   ]
 });

 }