// Write your JavaScript code here.
// Remember to pay attention to page loading!

//Load function to make sure everything happens after the page is fully loaded
window.addEventListener("load", function(){
    //IDs/Variables for buttons
    let liftOff = document.getElementById("takeoff");
    let landing = document.getElementById("landing");
    let abortMission = document.getElementById("missionAbort");
    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let left = document.getElementById("left");
    let right = document.getElementById("right");
    let shuttleHeight = 0;

    //IDS/Variables for different ids (flightstatus, background, etc)
    let flightStatus = document.getElementById("flightStatus");
    let background = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let rocket = document.getElementById("rocket");

    //Function for the lift off button that does a bunch of stuff when a button is pressed
    liftOff.addEventListener("click", function(event){
        //Creates a window asking the user to confirm an action
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        //Does a bunch of stuff if the user confirms
        if(response = true){
            flightStatus.innerHTML = "Shuttle in flight.";
            background.style.backgroundColor = "blue";
            shuttleHeight += 10000;
            spaceShuttleHeight.innerHTML = shuttleHeight;
        }
    })

    //Function for the landing button
    landing.addEventListener("click", function(event){
        //Does a bunch of stuff when the landing button is clicked (no confirm window)
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        background.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;   
    })

    //Function for the abort mission button
    abortMission.addEventListener("click", function(event){
        let response = window.confirm("Confirm that you want to abort the mission.");

        //Does a bunch of stuff if the user confirms
        if(response = true){
            flightStatus.innerHTML = "Mission aborted.";
            background.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0;
        }
    })

    //This is supposed to move the shuttle upward but it's just not making sense to me, sorry
    up.addEventListener("click", function(event){
        rocket.style.position = "relative";
        rocket.style.top += 10 + "px";
    })

    down.addEventListener("click", function(event){
        
    })

    left.addEventListener("click", function(event){
        
    })

    right.addEventListener("click", function(event){
        
    })


    


})