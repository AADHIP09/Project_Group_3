
async function fetchData() {
    try {
        const response = await fetch('http://127.0.0.1:5000/results12'); // Replace with your API endpoint
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
    const xData = [];
    const yData = [];
    const rData = [];
    const lData = [];
    for (let i of jsonData) {
        xData.push(i.AvgBO);
        yData.push(i.AvgBudget)
        rData.push(i.count)
        lData.push(i._id)
    }; 
    console.log(xData)
    console.log(yData)
    console.log(rData)
    console.log(lData)
    // Extract data for the chart (modify as per your API response structure)
    // Create a chart using Chart.js
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bubble', // Change the chart type as needed
        data: {
            datasets: [{
                label: 'Divide 3rd coordinate by 5 to get count of movies per bubble',
                data: xData.map((x, index) => ({
                    x,
                    y: yData[index],
                    r:(rData[index])*5,
                    label: lData[index]
                })),
                backgroundColor: 'rgba(0, 255, 0, 0.6)',
                borderColor: 'rgba(0, 255, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    postition: 'bottom',
                    title: {
                        display: true,
                        text: 'Avg. Box Office',
                    },
                },
                y: {
                    type: 'linear',
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Avg. Budget',
                    },
                },
            },
        },
    });
  }
  // Call the createChart function to generate the chart
  createChart();