
async function fetchData() {
    try {
        const response = await fetch('http://127.0.0.1:5000/results6'); // Replace with your API endpoint
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
    const values = data.map(item => item.AvgBudget);
    const values2 = data.map(item =>item.AvgBO)
  
    // Create a chart using Chart.js
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar', // Change the chart type as needed
        data: {
            labels: labels,
            datasets: [
                {
                label: 'Avg. Budget',
                data: values,
                borderColor: "rgb(255, 0, 0, 0.5)",
                backgroundColor: "rgb(255, 0, 0, 0.5)",
                },
                {
                    label: 'Avg. Box Office Earnings',
                    data: values2,
                    borderColor: "rgb(0,0,255, 0.5)",
                    backgroundColor: "rgb(0,0,255, 0.5)",
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: "top",
                    align: "end",
                },
              title: {
                  display: true,
                  text: "Avg Budget vs Avg Box-Office by Year",               
              }              
            },
        }
    });
  }
  
  // Call the createChart function to generate the chart
  createChart();