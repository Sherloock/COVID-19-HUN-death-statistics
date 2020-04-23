class DeathsByPercentOfPopulation {
  id;
  constructor(id) {
    this.id = id;
  }

  getChart() {
    const tick = 5;
    const data = this.getData(tick);

    const labels = this.getLabels(data['Férfi'], tick);
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
            label: 'Nő',
            backgroundColor: getColors().gender.women.getCSSIntegerRGBA(),
            data: data['Nő'],
          },
          {
            label: 'Férfi',
            backgroundColor: getColors().gender.men.getCSSIntegerRGBA(),
            data: data['Férfi'],
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              stacked: true,
              ticks: {
                beginAtZero: true,
              },
              scaleLabel: {
                display: true,
                labelString: 'Egymillió főre jutó elhalálozások száma (fő)',
                fontFamily: style.font.axis,
                fontSize: style.fontsize.axis,
              },
            },
          ],
          xAxes: [
            {
              stacked: true,

              scaleLabel: {
                display: true,
                labelString: 'életkor',
                fontFamily: style.font.axis,
                fontSize: style.fontsize.axis,
              },
            },
          ],
        },
        tooltips: {
          mode: 'label',
          callbacks: {
            title: function (tooltipItem) {
              // console.log(tooltipItem);
              return tooltipItem[0].label + ' éves';
            },

            afterTitle: function () {
              window.total = 0;
              // return ' fő';
            },

            label: function (tooltipItem, data) {
              var gender = data.datasets[tooltipItem.datasetIndex].label;
              var valor =
                data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
              window.total += valor;

              if (valor == undefined) {
                return '';
              }

              return (
                gender +
                ': ' +
                valor
                  // .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') +
                  .toFixed(2) +
                ' fő'
              );
            },
            footer: function () {
              return (
                'Összesen: ' +
                window.total
                  // .toString()
                  // .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
                  .toFixed(2) +
                ' fő'
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
    let result = [];

    Deaths.getData().forEach((row) => {
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
    result['Férfi'] = this.perCapita(result['Férfi'], 'M');
    result['Nő'] = this.perCapita(result['Nő'], 'F');
    return result;
  }

  perCapita(data, gender) {
    for (let i = 0; i < data.length; i++) {
      if (data[i] == undefined) {
        data[i] = 0;
      }
      data[i] /= population[i][gender] / 1000000;
    }
    return data;
  }
}
