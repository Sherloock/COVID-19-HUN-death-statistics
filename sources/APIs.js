class APIs {
  get() {
    fetch('https://covid-19-data.p.rapidapi.com/help/countries?format=json', {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
        'x-rapidapi-key': 'b3cc91c8e2msh93158856652ae6fp1c3551jsn03909724826f',
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
