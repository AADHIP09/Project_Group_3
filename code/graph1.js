
async function fetchData() {
  try {
      const response = await fetch('http://127.0.0.1:5000/results4'); // Replace with your API endpoint
      const data = await response.json();
      console.log(data);
      return data;
  } catch (error) {
      console.error('Error fetching data:', error);
  }
}

// Function to create a chart
async function createChart() {
    const data = await fetchData();

  // Extract data for the chart (modify as per your API response structure)
    const labels = data.map(item => item._id);
    const values = data.map(item => item.Box_Office);

  // Create a chart using Chart.js
    const ctx = document.getElementById('myChart').getContext('2d');

    const myChart = new Chart(ctx, {
        type: 'bar', // Change the chart type as needed
        data: {
            labels: labels,
            datasets: [{
                label: 'Average Box Office Revenue',
                data: values,
                backgroundColor: 'rgba(75, 160, 40, 0.2)',
                borderColor: 'rgba(75, 160, 40, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x: {
                    
                    postition: 'bottom',
                    title: {
                    display: true,
                    text: 'Directors',
                    },
                },
                y: {
                
                position: 'left',
                title: {
                    display: true,
                    text: 'Avg. Box Office',
                    },
                },
            },
        plugins: {
            legend: {
                display: true,
                position: "top",
                align: "end",
            },
            title: {
                display: true,
                text: "Avg. Box Office Earnings - By Directors"
            }
        },
        }
    });

    } 


function updatePlotly() {
    // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select(".graphSelect");
    // Assign the value of the dropdown menu option to a variable
    let dataset = dropdownMenu.property("value");
};    

// Call the createChart function to generate the chart
createChart();