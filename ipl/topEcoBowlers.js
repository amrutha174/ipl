function topEcoBowlers(deliveries){
    let result = {};
    const bowl = [];
    const run = [];
    for(let deliverie of deliveries){
        const bowler = deliverie.bowler;
        const match_id = deliverie.match_id;
        const total_runs = deliverie.total_runs;
        if(parseInt(match_id) > 517 && parseInt(match_id) < 577){
            // console.log(bowler);
            if(run[bowler]){
                run[bowler] += parseInt(total_runs);
            }else{
                run[bowler] = parseInt(total_runs);
            }

            if(bowl[bowler]){
                bowl[bowler] += 1;
            }else{
                bowl[bowler] = 1;
            }
        }
    }
    for(let b in bowl){
        // console.log(parseInt(bowl[b]/6)+"."+parseInt(bowl[b]%6));
        bowl[b] = parseFloat(parseInt(bowl[b]/6)+"."+parseInt(bowl[b]%6));
    }

    for(let r in run){
        // console.log(parseInt(run[r])/bowl[r]);
        run[r] = parseInt(run[r])/bowl[r];
    }


    const test = [];
    for(let rr in run){
        test.push(run[rr])
    }
    test.sort(function(a, b){return a - b}).splice(10,test.length);
    // console.log(test);

    for(let rrr in run){
        if(test.includes(parseFloat(run[rrr]))){
            // console.log([rrr, run[rrr]]);
            result[rrr] = run[rrr];
        } 
    }
    // result = result.sort(function(a,b) {
    //     return a.vao
    // })
    // console.log(result);

    return result;
}

module.exports = topEcoBowlers;