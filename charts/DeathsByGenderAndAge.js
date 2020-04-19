class DeathsByGenderAndAge {
  id;
  constructor(id) {
    this.id = id;
  }

  getChart(tick) {
    const data = this.getData(tick);
    const labels = this.getLabels(data['Férfi'], tick);
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
            label: 'Nő',
            backgroundColor: colors.gender.women,
            data: data['Nő'],
          },
          {
            label: 'Férfi',
            backgroundColor: colors.gender.men,
            data: data['Férfi'],
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
      if (result[row.Nem] == undefined) {
        result[row.Nem] = [];
      }
      if (result[row.Nem][agegroup] == undefined) {
        result[row.Nem][agegroup] = 1;
      } else {
        result[row.Nem][agegroup]++;
      }
    });
    return result;
  }
}

//deathsByAge

// DATASET
