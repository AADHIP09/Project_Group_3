
async function fetchData() {
  try {
      const response = await fetch('http://127.0.0.1:5000/results2'); // Replace with your API endpoint
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
  const values = data.map(item => item.Box_office);

  // Create a chart using Chart.js
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'line', // Change the chart type as needed
    data: {
        labels: labels,
        datasets: [{
            label: 'Box Office Revenue',
            data: values,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2
        }]
    },
        options: {
            scales: {
                x: {              
                    postition: 'bottom',
                    title: {
                    display: true,
                    text: 'Year',
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
                title: {
                display: true,
                text: "Average Box Office - by Year",
                fullSize: true               
                },
                legend: {
                    display: true,
                    position: "top",
                    align: "end",
                },
                font: {
                weight: "bold"
                }
            
            },
        }
  });
}

// Call the createChart function to generate the chart
createChart();
