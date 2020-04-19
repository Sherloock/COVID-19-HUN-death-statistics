class DeathsByAge {
  id;
  constructor(id) {
    this.id = id;
  }

  getChart(tick) {
    const data = this.getData(tick);
    const labels = this.getLabels(data, tick);
    console.log({ data: data, labels: labels });
    const totalDeathCount = deaths.length;

    var ctx = document.getElementById(this.id).getContext('2d');
    var myChdeathsByAgeChartart = new Chart(ctx, {
      type: 'pie',
      reponsive: true,
      aspectRatio: 2,
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            label: 'Elhalálozások száma (fő)',
            backgroundColor: colorTransition(
              getColors().age.young.getIntegerRGB(),
              getColors().age.old.getIntegerRGB(),
              data.length
            ).map((color) => color.getCSSIntegerRGBA()),
            borderWidth: 1,
          },
        ],
      },
      options: {
        tooltips: {
          mode: 'label',
          callbacks: {
            // label: function (tooltipItem, data) {
            //   var corporation = data.datasets[tooltipItem.datasetIndex].label;
            //   var valor =
            //     data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
            //   window.total += valor;
            //   return (
            //     corporation +
            //     ': ' +
            //     valor.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
            //   );
            // },
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

  getLabels(data, tick) {
    let result = [];
    for (let i = 0; i < data.length; i++) {
      result.push(tick * i + '-' + (tick * i + tick - 1));
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
