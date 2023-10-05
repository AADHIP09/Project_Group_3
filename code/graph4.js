
async function fetchData() {
  try {
      const response = await fetch('http://127.0.0.1:5000/results10'); // Replace with your API endpoint
      const jsonData = await response.json();

      console.log(jsonData);
      return jsonData;
  } catch (error) {
      console.error('Error fetching data:', error);
  }
}


// Function to create a chart
async function createChart() {
    const jsonData = await fetchData();

  // Extract data for the chart (modify as per your API response structure)
    const xData = [];
    const yData = [];
    for (let i of jsonData) {
        xData.push(i.rating);
        yData.push(i.box_office)
    }; 
    console.log(xData)
    console.log(yData)

  // Create a chart using Chart.js
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'scatter', // Change the chart type as needed
        data: {
            labels: xData,
            datasets: [{
                label: "Ratings vs. Box Office Earnings",
                data: yData,
                backgroundColor: 'rgb(0, 255, 0, 0.2)',
                borderColor: 'rgba(75, 192, 192, 0.8)',
                pointRadius: 4,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
// Call the createChart function to generate the chart
createChart();