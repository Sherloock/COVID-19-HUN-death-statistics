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
      type: 'pie',
      reponsive: true,
      aspectRatio: 2,
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            // backgroundColor: colors.standalone,
            backgroundColor: colorTransition(
              getColors().age.young.getIntegerRGB(),
              getColors().age.old.getIntegerRGB(),
              data.length
            ).map((color) => color.getCSSIntegerRGBA()),
            borderWidth: 1,
          },
        ],
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
