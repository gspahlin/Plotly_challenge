//code for the plotly challenge



//read in the json
//source is a herokuapp because that's how I managed to solve the CORS problem
//app.py shows the code I used to make that. 

d3.json("https://secret-anchorage-45447.herokuapp.com/").then(function(data){

    console.log(data);
    //unpack data arrays into variables
    let nameObject = data.names;
    let sampleObject = data.samples;
    let metaData = data.metadata;
    let nameArray = Object.values(nameObject)       
    let dropDown = d3.select('#selDataset');

   
    console.log(nameArray)
    console.log(typeof nameArray)

    //use d3 to bind the selector switch and add options

    nameArray.forEach((sample) => {
        dropDown.append('option').text(sample).property("value", sample);

    });

    //now define what happens when the option changes (optionChanged)

    dropDown.on("change", buildPlots);

    //write a function to update the plots

    console.log(sampleObject);

    function buildPlots(){

        let samp = dropDown.property("value");

        //select data for plotting a barchart
        // loop through the object and find the relevant values
        let caller;

        for (let s = 0; s < 152; s++){

            console.log(samp)
            console.log(sampleObject[s].id)
            console.log(sampleObject[0])
            console.log(sampleObject["0"])

            if (sampleObject[s].id == samp){

                caller = s;
                console.log(caller);

                
            }
            
        }
      
        console.log(samp)
        console.log(sampleObject[0].id)
        console.log(caller)
        console.log (sampleObject[caller].id)

        //build a barchart        

    }
    

});


