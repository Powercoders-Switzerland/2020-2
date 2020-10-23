const key = "3de624277f18f4fb395b12b283d86902-us4";
const form = document.querySelector("form");
/** Mailchimp does not allow frontend api access anymore due to security (api key is readable). For a while the no-cors solution below still used to work. You would need to change that to be executed as server side script, e.g. node.js (https://www.codementor.io/@mattgoldspink/integrate-mailchimp-with-nodejs-app-du10854xp), python or php   */
form.onsubmit = async (e) => {
    e.preventDefault();

    let data = new FormData(form);
    let fname,lname,lang,mail;
    for(var pair of data.entries()){
        switch(pair[0]){
            case "FirstName":
                fname = pair[1];
                break;
            case "LastName":
                lname = pair[1];
                break;
            case "MailG":
                mail = pair[1];
                break;
            case "Sprache":
                lang = pair[1];
                break;
        }
    }

    let authenticationString = btoa('susanne.koenig@gmail.com:'+key);
    authenticationString = "Basic " + authenticationString;
    //authenticationString = "auth "+key;

    let response = await fetch('https://us4.api.mailchimp.com/3.0/lists/378831/members', {
      mode: 'no-cors',
      method: 'POST',
      headers: {
        'authorization': authenticationString,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "apikey": "3de624277f18f4fb395b12b283d86902-us4",
        "id": "378831",
        "email_address": mail,
        "status": "pending",
        "merge_fields": {
            "FNAME": fname,
            "LNAME": lname,
            "LANG": lang
        },
        "send_welcome": false
      })
    }).then(function(e){
        console.log("fetch finished");
    }).catch(function(e){
        console.log("fetch error");
    });
    
    
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let json = await response.json();
        alert(json.message);
      } else {
        alert("HTTP-Error: " + response.status);
      }


  };
