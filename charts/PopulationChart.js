class PopulationChart {
  id;
  constructor(id) {
    this.id = id;
  }

  getChart() {
    const tick = 5;
    const data = this.getData(tick);

    const labels = Population.data.map((row) => row.Age).reverse();
    // console.log({ data: data, labels: labels });

    var ctx = document.getElementById(this.id).getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'horizontalBar',
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
                beginAtZero: false,
              },
              scaleLabel: {
                display: true,

                labelString: 'életkor',
                fontFamily: style.font.axis,
                fontSize: style.fontsize.axis,
              },
            },
          ],
          xAxes: [
            {
              stacked: true,
              ticks: {
                callback: function (value, index, values) {
                  // console.log({ value: value, index: index, values: values });
                  return Math.abs(value) / 1000;
                },
              },
              scaleLabel: {
                display: true,
                labelString: 'ezer fő',
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
              // console.log({ tooltipItem: tooltipItem, data: data });

              var gender = data.datasets[tooltipItem.datasetIndex].label;
              var valor =
                data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];

              if (valor == undefined) {
                return '';
              }

              valor = Math.abs(valor);

              window[gender] = valor;
              window.total += valor;

              return (
                gender +
                ': ' +
                valor

                  .toFixed(0)
                  // .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ' ') +
                ' fő'
              );
            },
            footer: function () {
              return (
                'Férfiak aránya: ' +
                // window['Férfi'] / window['Nő'] +
                ((window['Férfi'] / window.total) * 100).toFixed(2) +
                '%' +
                '\n' +
                'Összesen: ' +
                window.total
                  // .toString()
                  .toFixed(0)
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ' ') +
                ' fő'
              );
            },
          },
        },
      },
    });
  }

  getData() {
    let result = [];
    result['Férfi'] = [];
    result['Nő'] = [];
    Population.data.forEach((row) => {
      // result['Férfi'].push(-row.M);
      // result['Nő'].push(row.F);
      result['Férfi'].splice(0, 0, row.M);
      result['Nő'].splice(0, 0, -row.F);
    });
    return result;
  }
}
