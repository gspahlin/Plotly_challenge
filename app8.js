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

            if (sampleObject[s].id == samp){

                caller = s;
                console.log(caller);
                
            }
            
        }
      
        console.log(samp);        
        console.log (sampleObject[caller].id);
        console.log(caller);

        //Add user selected data to relevant variables
        let selSample = sampleObject[caller];
        let selMeta = metaData[caller];

        console.log(selSample);
        console.log(selMeta);
        
        //build a barchart 
        //pull out info for the first 10 organisms 
        let chartDom = [];
        let chartRan = [];
        let chartLbl = [];
        
        for (let t = 0; t < 10; t++){
            chartDom.push(selSample.otu_ids[t]);
            chartRan.push(selSample.sample_values[t]);
            chartLbl.push(selSample.otu_labels[t]);

        }
        console.log(chartRan);
        console.log(chartDom);
        console.log (chartLbl);

        //Build the plot

        //build a table for the metadata
        

    }
    

});


