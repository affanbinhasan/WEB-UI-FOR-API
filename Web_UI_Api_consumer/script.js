var myArray = ['Affan','101'];

//var inputid = document.getElementById("inputText").value;

var content = document.getElementById("SearchId")

//console.log(inputid)

function getserverbyid() {
    let inputid = document.getElementById("inputText").value;
    let content = document.getElementById("SearchId");
    let url = 'http://localhost:8080/api/getserverbyid/' + inputid;
    if(inputid === ''){
        content.innerHTML += `<p>Please provide a value</p>`
    }
    else{
        content.innerHTML += `<a href = ${url}>Click on this link to see the Result</a>`
    }
}

function getserverbyname() {
    let inputid = document.getElementById("inputName").value;
    let content = document.getElementById("SearchName");
    let url = 'http://localhost:8080/api/getserverbyname/'+inputid;
    if(inputid === ''){
        content.innerHTML += `<p>Please provide a value</p>`
    }
    else{
        content.innerHTML += `<a href = ${url}>Click on this link to see the Result</a>`
    }
}

function deleteserverbyid() {
    let inputid = document.getElementById("delete").value;
    let content = document.getElementById("DeleteId");
    let url = 'http://localhost:8080/api/deleteserver/'+inputid;
    if(inputid === ''){
        content.innerHTML += `<p>Please provide a value</p>`
    }
    else{
        content.innerHTML += `<a href = ${url}>Click on this link to see the Result</a>`
    }
}

// var getJSON = function(url, callback) {

//     var xmlhttprequest = new XMLHttpRequest();
//     xmlhttprequest.open('GET', url, true);
//     xmlhttprequest.responseType = 'json';

//     xmlhttprequest.onload = function() {

//         var status = xmlhttprequest.status;

//         if (status == 200) {
//             callback(null, xmlhttprequest.response);
//         } else {
//             callback(status, xmlhttprequest.response);
//         }
//     };

//     xmlhttprequest.send();
// };

// getJSON('http://localhost:8080/api/getservers',  function(err, data) {

//     if (err != null) {
//         console.error(err);
//     } else {

//        var display = `User_ID: ${data.id}
//                         ID: ${data.name}
//                         Title: ${data.language} 
//                         Completion_Status: ${data.framework}`;
//     }
//   console.log(display);
// });
