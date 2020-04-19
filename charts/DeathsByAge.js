class DeathsByAge {
  id;
  constructor(id) {
    this.id = id;
  }

  getChart(tick) {
    const data = this.getData(tick);
    const labels = this.getLabels(data, tick);
    console.log({ data: data, labels: labels });

    var ctx = document.getElementById(this.id).getContext('2d');
    var myChdeathsByAgeChartart = new Chart(ctx, {
      type: 'bar',
      reponsive: true,
      aspectRatio: 2,
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Deaths by Age',
            data: data,
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }

  getLabels(data, tick) {
    let result = [];
    for (let i = 0; i < data.length; i++) {
      result.push(tick * i + ' - ' + (tick * i + tick - 1));
    }

    return result;
  }

  getData(tick = 1) {
    // const ages = data.map(row => row.Kor);
    let result = [];
    deaths.forEach((row) => {
      const agegroup = Math.floor(row.Kor / tick);
      if (result[agegroup] == undefined) {
        result[agegroup] = 1;
      } else {
        result[agegroup]++;
      }
    });
    return result;
  }
}

//deathsByAge

// DATASET
