// export const addDataToSpreadSheet = (formData) => {
//     const { firstPlayer, secondPlayer } = formData;
//     const firstPlayerValues = Object.values(firstPlayer).filter((item, index) => index > 0 );
//     const secondPlayerValues = Object.values(secondPlayer).filter((item, index) => index > 0 );
//     const values = firstPlayer.concat(secondPlayer);
//     const body = {
//         values: values
//     };

    // window.gapi.client.sheets.spreadsheets.values.append({
    //     spreadsheetId: SPREADSHEET_ID,
    //     range: "Hoja 1",
    //     valueInputOption: 'RAW',
    //     insertDataOption: 'INSERT_ROWS',
    //     resource: body
    // }).then(res => console.log(res))
    // .catch(error => console.log(error));
// }

// export const initClient = (googleApiKey, clientId, discoveryDocs, scope) => {
//     gapi.client.init({
//         apiKey: googleApiKey,
//         clientId: clientId,
//         discoveryDocs: discoveryDocs,
//         scopes: scope
//     }).then(
//         res => console.log()
//     )
// }
