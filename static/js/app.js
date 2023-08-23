// Get the Samples endpoint
const samples =
  "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data from the endpoint and confirm to the console if the promise has been fulfilled.
const dataPromise = d3.json(samples);
console.log("Data Promise: ", dataPromise);

// Retrieves the belly-button JSON data and console logs it.
d3.json(samples).then(function(data) {
    console.log(data);
});
// Fetch the belly button jason data JSON data
d3.json(samples).then(function (data) {

    // Display and update metadata function
  function metadata_val(key) {
    d3.select(".panel-body").html(
      "Key:" + `${data.metadata.map((i, j) => j)[key]}` + "<br><br>" +
      "id:" + `${data.metadata[key].id}` + "<br>" +
      "ethnicity:" + `${data.metadata[key].ethnicity}` + "<br>" +
      "gender:" + `${data.metadata[key].gender}` + "<br>" +
      "age:" + `${data.metadata[key].age}` + "<br>" +
      "location:" + `${data.metadata[key].location}` + "<br>" +
      "bbtype:" + `${data.metadata[key].bbtype}` + "<br>" +
      "wfreq:" + `${data.metadata[key].wfreq}` + "<br>"
    )
  };


  // retrive options
  let options = "";
  for (let i = 0; i < data.metadata.length; i++) {
    options += "<option value=" + `${data.metadata[i].id}` + ">" + `${data.metadata[i].id}` + "</option> <br>";
  }

  // Declare options list
  d3.select("#selDataset").html(options);

  // Action to be deployed when options change
  d3.selectAll("#selDataset").on("change", optionChanged);

  //Function when options change - calls update to plots and metadata
  function optionChanged() {
    let dropdownMenu = d3.select("#selDataset");
    let new_id = data.names.indexOf(dropdownMenu.property("value"));

    // Call function to update the chart and metadata
    updatePlotly(new_id);
    // Update Metadata and Key-Value pair
    metadata_val(new_id);

  }
    
  // Initial Plots and Data key
  let init_id = 0;

  // Display the default plot
  function init_bar() {
    let plotdata = [
      {
        type: "bar",
        title: "Top OTUs present in patient sample",
        x: data.samples[init_id].sample_values.slice(0, 10),
        y: data.samples[init_id].otu_ids
          .slice(0, 10)
          .map(item => "OTU " + item.toString()),
        text: data.samples[init_id].otu_labels.slice(0, 10),
        orientation: "h",
        transforms: [
          {
            type: "sort",
            target: "x",
            order: "ascending",
          },
          {
            type: "filter",
            target: "x",
            operation: ">",
            value: 1,
          },
        ],
      },
    ];

    let layout = {
      height: 600,
      width: 800,
    };

    Plotly.newPlot("bar", plotdata, layout);
  }

  // Display the default plot
  function init_bubble() {
    let plotdata = [
      {
        x: data.samples[init_id].otu_ids,
        y: data.samples[init_id].sample_values,
        text: data.samples[init_id].otu_labels,
        mode: "markers",
        marker: {
          size: data.samples[init_id].sample_values,
          color: data.samples[init_id].otu_ids,
          colorscale: 'Earth'
        },
      },
    ];

    let layout = {
      xaxis: {
        title: {
          text: "Belly Button Biodiversity",
        },
      },
      height: 600,
      width: 1100,
    };

    Plotly.newPlot("bubble", plotdata, layout);
  }

  

  // Update the plot's  and metadata
  function updatePlotly(new_id) {
    // Update bar chart
    Plotly.restyle("bar", "x", [data.samples[new_id].sample_values.slice(0, 10)]);
    Plotly.restyle("bar", "y", [data.samples[new_id].otu_ids.slice(0, 10).map(item => "OTU " + item.toString())]);
    Plotly.restyle("bar", "text", [data.samples[new_id].otu_labels.slice(0, 10)]);

    // Update bubble chart
    Plotly.restyle("bubble", "x", [data.samples[new_id].otu_ids]);
    Plotly.restyle("bubble", "y", [data.samples[new_id].sample_values]);
    Plotly.restyle("bubble", "text", [data.samples[new_id].otu_labels]);
    Plotly.restyle("bubble", "marker", [{
      size: data.samples[new_id].sample_values,
      color: data.samples[new_id].otu_ids,
      colorscale: 'Earth' 
    }]);

    // Update Metadata and Key-Value pair
    metadata_val(new_id);

  }

  // Call initial plots and data
  metadata_val(init_id);
  init_bar();
  init_bubble();
  metadata_val(init_id);

});
