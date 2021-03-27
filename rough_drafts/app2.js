//code for the plotly challenge


//read in the json
//source is a herokuapp because that's how I managed to solve the CORS problem
//app.py shows the code I used to make that. 

d3.json("https://secret-anchorage-45447.herokuapp.com/").then(function(data){

    console.log(data);
    //unpack data arrays into variables
    let nameArray = data.names;
    let sampleArray = data.samples;
    let metaData = data.metadata;
           
    let testVar = 'test'

   
    console.log(nameArray)
    console.log(typeof nameArray)

    //use d3 to bind the selector switch and add options
    d3.select('#selDataset').append('option').text(testVar);
        //.append('option')
        //.select('option')
        //.data(testVar)
        //.enter()
        //.text(testVar);

    
    

});


