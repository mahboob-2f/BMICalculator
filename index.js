

//       whenever we click on submit button of form ( by method get or post ) then all data entered by user will go to server
//           so we have to stop that from happening , so that we can perform calculation for bmi 

const form = document.querySelector("form");

//           we are storing values from input tag only when submit event takes place

form.addEventListener("submit", function (ghost) {
    ghost.preventDefault();                                  //      we prevent the default action of form from sending data to server or somewhere else
    let h = parseInt(document.getElementById("height").value);      //      data enter by user will be string or object type so we have to convert to number 

    let m = parseInt(document.getElementById("weight").value);
    // console.log( (h) + "----" +  (m));

    let result = document.querySelector(".ghost");

    let ans;

    if (h === '' || h <= 0 || isNaN(h)) {
        result.innerText = "Please enter a valid height";
        result.style.color = "red";
    } else if (m === '' || m <= 0 || isNaN(m)) {
        result.innerText = "Please enter a valid weight";
        result.style.color = "red";
    } else {
        ans = (m / ((m * h) / 10000)).toFixed(2);
    }

    console.log(ans);
    if (ans > 18.6 && ans < 24.9) {
        document.querySelector(".ans").innerHTML = ans;
        document.querySelector(".ghost").style.color = "green";
    } else {
        document.querySelector(".ans").innerHTML = ans;
        document.querySelector(".ghost").style.color = "red";

    }
})



let r = document.querySelector("#refresh");
r.addEventListener("click", function () {
    location.reload();
});


 