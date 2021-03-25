//code for the plotly challenge

//define unpack

//@param {array} rows
//@param {integer} ind


function unpack(rows, index) {
    return rows.map(function(row) {
      return row[index];
    });
  }
  

//read in the json
//source is a herokuapp because that's how I managed to solve the CORS problem
//app.py shows the code I used to make that. 

d3.json("https://secret-anchorage-45447.herokuapp.com/").then(function(data){

    console.log(data);
    //unpack data arrays into variables
    let nameArray = data.names;
    let sampleArray = data.samples;
    let metaData = data.metadata;
    let ages = unpack(data.metadata, 0);
    //destructure name data
    
    console.log(ages)
    console.log(nameArray)
    console.log(typeof nameArray)

    //use d3 to bind the selector switch and add options
    d3.select('#selDataset')
        .data(nameArray)
        .enter()
        .append('option')
        .text(function(d){return nameArray[d]});

    
    

});


