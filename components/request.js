// import Constants from "expo-constants";
// const { manifest } = Constants;
// const aaaaaaaaa = `http://${manifest.debuggerHost.split(':').shift()}:4000`;
// console.log(aaaaaaaaa)


// export async function callAPI(uri, method, params) {

//     console.log('...callAPI.....: ');

//     let para = Object.keys(params).length > 0 ? JSON.stringify(params) : null;

//     const url = 'http://192.168.1.4/fuelin/' + uri;

//     console.log('...url....: ', url);

//     const headers = {
//         "Content-Type": "application/json",
//         'Accept': 'application/json'
//     };

//     let response = await fetch(
//         url,
//         {
//             method: method,
//             headers: headers,
//             body: para
//         }
//     );

//     return await response.json;
// }

export const getVehiclesCall = async(id) => {

    // let caller = callAPI('fuel/getVehicles', 'POST', {'id':id});


    return fetch(`http://192.168.1.4/fuelin/fuel/getVehicles`, {

        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'id':1})
    })
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
                return result;
            },
            (error) => {
                console.log('error', error);
                return '';
            }
        )


    // let promise = new Promise(function(resolve, reject){
    //     caller.then(data => {
    //         console.log('.....a......')
    //         console.log(data)
    //         resolve(data);
    //     });
    // });

    // return promise;

}

// export default getVehiclesCall;