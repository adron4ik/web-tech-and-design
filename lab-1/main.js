 const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

      const data = {
        labels: labels,
        datasets: [{
          label: "Ssdsd",
          data: [32, 15, 84, 89, 32, 22, 11],
          borderColor: "rgba(255, 99, 132, 1)",
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 255, 0.6)",
            "rgba(255, 159, 64, 0.6)",
            "rgba(201, 203, 207, 0.6)"
          ],
          fill: true,
          tension: 0.3
        }]
      };

      const config = {
        type: "line",
        data: data,
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Sales for week"
            },
            legend: {
              position: "right"
            },
            customCanvasBackgroundColor: {
              color: 'lightGreen',
            },
            subtitle: {
              Display: true,
              text: 'sdsdsdsd'
            }
          },
          
          
        }
      };

      new Chart(
        document.getElementById("sales"),
        config
      );