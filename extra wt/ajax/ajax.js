console.log("Ajax tutorial .. ");

let fetchbtn = document.getElementById('fetchbtn');
fetchbtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler(){
    console.log('you have clicked the fetchbutton');
    //instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //open the object
    //(GET request, from where the data is coming, sync-blocking -> false / asynch-non blocking request -> true)
    // here GET means that only fetch the data , POST means also some data is to be sent
    xhr.open('GET','pratik.txt',true);
    //we first instantiate an xhr object and then open it.

    //what to do on progress (optional bcz not always necessary to track the progress)
    xhr.onprogress = function(){       
        console.log('On progress');
    }

    //what to do when response is ready
    xhr.onload = function(){
        if(this.status === 200){  // 200 is the http request (you can search on google) 200 means that its ok no error
            // so here if there is no error then only show the response text.
        console.log(this.responseText)
    }
    else{
        console.error("some error occured")
        }
      }
    // send the request
    xhr.send(); //after this only all above code will run as before sending only, you cant do anything .
}