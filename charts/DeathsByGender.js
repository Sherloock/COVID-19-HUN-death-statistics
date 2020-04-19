class DeathsByGender {
  id;
  constructor(id) {
    this.id = id;
  }

  getChart() {
    const stuff = this.getData();
    // const labels = deathsByGenderLabels(data, tick);
    // console.log({ stuff: stuff });
    const data = Object.values(stuff);
    const labels = Object.keys(stuff);
    // console.log({ data: data, labels: labels });

    var ctx = document.getElementById(this.id).getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      reponsive: true,
      aspectRatio: 2,
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Elhalálozások száma (fő)',
            data: data,
            backgroundColor: [
              getColors().gender.women.getCSSIntegerRGBA(),
              getColors().gender.men.getCSSIntegerRGBA(),
            ],
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

  getData() {
    let result = [];
    deaths.forEach((row) => {
      const agegroup = row.Nem;
      if (result[agegroup] == undefined) {
        result[agegroup] = 1;
      } else {
        result[agegroup]++;
      }
    });
    return result;
  }
}