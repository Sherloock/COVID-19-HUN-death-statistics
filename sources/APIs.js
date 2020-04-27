class APIs {
  // https://rapidapi.com/Gramzivi/api/covid-19-data?endpoint=apiendpoint_a0a3b806-6a57-4726-8fe7-6883b6dbaa9e
  get = async (
    date,
    code = 'hun',
    format = 'json',
    dateformat = 'YYYY-MM-DD'
  ) => {
    var settings = {
      async: true,
      crossDomain: true,
      url: `https://covid-19-data.p.rapidapi.com/report/country/code?
        format=${format}&
        date-format=${dateformat}&
        date=${date}&
        code=${code}`,
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
        'x-rapidapi-key': 'b3cc91c8e2msh93158856652ae6fp1c3551jsn03909724826f',
      },
    };

    return $.ajax(settings);

    //  .done(async function (response) {
    //     console.log(response);
    //     //File.saveTextAsFile(JSON.stringify(response));
    //     return await response;
    //   });

    ///////////////////////////////////////////////////////////////////
    // const response = await fetch(
    //   `https://covid-19-data.p.rapidapi.com/report/country/code?
    //      format=${format}&
    //      date-format=${dateformat}&
    //      date=${date}&
    //      code=${code}`,
    //   {
    //     method: 'GET',
    //     headers: {
    //       'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
    //       'x-rapidapi-key':
    //         'b3cc91c8e2msh93158856652ae6fp1c3551jsn03909724826f',
    //     },
    //   }
    // )
    //   .then((response) => {
    //     console.log(response);
    //     File.saveTextAsFile(JSON.stringify(response));
    //     return response;
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // return response; //
  };
}
