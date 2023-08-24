# belly-button-challenge

## Background
In this assignment, I built an interactive dashboard to explore the Belly Button Biodiversity dataset to an external site., which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## The Features

The D3 librarywas used to read in samples.json from the URL <https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.> 

### Bar Chart
A horizontal bar chart with a dropdown menu was created to display the top 10 OTUs found in that individual.

Sample_values were used as the values for the bar chart, otu_ids as the labels for the bar chart and otu_labels as the hovertext for the chart.

![image](https://github.com/AnaTipps/belly-button-challenge/assets/131827518/3ddbafcc-67c4-4b87-a091-1110357181dd)

### Bubble Chart

A bubble chart was created to displays each sample. Otu_ids were used as the x values, sample_values for the y values, sample_values for the marker size, otu_ids for the marker colors and  otu_labels for the text values.

![image](https://github.com/AnaTipps/belly-button-challenge/assets/131827518/42b0f82d-b36e-415b-9447-8b90f8ec92ab)

### Sample Metadata
The sample metadata is displayed , i.e., an individual's demographic information, on the right top corner of the page.

![image](https://github.com/AnaTipps/belly-button-challenge/assets/131827518/9960e661-780f-4d07-b013-6b07b219d705)

