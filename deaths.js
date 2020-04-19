// deathsByGender
function deathsByGenderChart() {
  console.log(populationpyramid);
  const stuff = deathsByGenderData();
  // const labels = deathsByGenderLabels(data, tick);
  console.log({ stuff: stuff });
  const data = Object.values(stuff);
  const labels = Object.keys(stuff);
  console.log({ data: data, labels: labels });

  var ctx = document.getElementById('deathsByGenderChart').getContext('2d');
  var myChdeathsByAgeChartart = new Chart(ctx, {
    type: 'bar',
    reponsive: true,
    aspectRatio: 2,
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Deaths by Gender',
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

function deathsByGenderData() {
  let result = [];
  data.forEach((row) => {
    const agegroup = row.Nem;
    if (result[agegroup] == undefined) {
      result[agegroup] = 1;
    } else {
      result[agegroup]++;
    }
  });
  return result;
}

//deathsByAge
function deathsByAgeChart(tick) {
  const data = deathsByAgeData(tick);
  const labels = deathsByAgeLabels(data, tick);
  console.log({ data: data, labels: labels });

  var ctx = document.getElementById('deathsByAgeChart').getContext('2d');
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

function deathsByAgeLabels(data, tick) {
  result = [];
  for (let i = 0; i < data.length; i++) {
    result.push(tick * i + ' - ' + (tick * i + tick - 1));
  }

  return result;
}

function deathsByAgeData(tick = 1) {
  // const ages = data.map(row => row.Kor);
  let result = [];
  data.forEach((row) => {
    const agegroup = Math.floor(row.Kor / tick);
    if (result[agegroup] == undefined) {
      result[agegroup] = 1;
    } else {
      result[agegroup]++;
    }
  });
  return result;
}

// DATASET
