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
    const totalDeathCount = Deaths.getCount();

    var ctx = document.getElementById(this.id).getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'pie',
      reponsive: true,
      aspectRatio: 2,
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Elhalálozások száma (fő)',
            data: data,
            backgroundColor: [
              this.getColor(labels[0]),
              this.getColor(labels[1]),
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        tooltips: {
          mode: 'label',
          callbacks: {
            footer: function (tooltipItem, data) {
              return (
                (
                  (data.datasets[0].data[tooltipItem[0].index] /
                    totalDeathCount) *
                  100
                ).toFixed(2) + '%'
              );
            },
          },
        },
      },
    });
  }

  getColor(gender) {
    return gender === 'Nő'
      ? getColors().gender.women.getCSSIntegerRGBA()
      : getColors().gender.men.getCSSIntegerRGBA();
  }

  getData() {
    let result = [];
    Deaths.getData().forEach((row) => {
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
