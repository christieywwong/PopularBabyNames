document.addEventListener("DOMContentLoaded", function() {
    let cyanButton = document.querySelectorAll(".cyanButton");
    let greenButton = document.querySelectorAll(".greenButton");
    let orangeButton = document.querySelectorAll(".orangeButton");
    let redButton = document.querySelectorAll(".redButton");

    cyanButton.forEach(function(button) {
        button.addEventListener("click", function() {
            cyanButton.forEach(function(btn) {
                btn.classList.remove("cyanButtonClicked");
            });
            button.classList.add("cyanButtonClicked");
        });
    });

    greenButton.forEach(function(button) {
        button.addEventListener("click", function() {
            greenButton.forEach(function(btn) {
                btn.classList.remove("greenButtonClicked");
            });
            button.classList.add("greenButtonClicked");
        });
    });

    orangeButton.forEach(function(button) {
        button.addEventListener("click", function() {
            orangeButton.forEach(function(btn) {
                btn.classList.remove("orangeButtonClicked");
            });
            button.classList.add("orangeButtonClicked");
        });
    });

    redButton.forEach(function(button) {
        button.addEventListener("click", function() {
            redButton.forEach(function(btn) {
                btn.classList.remove("redButtonClicked");
            });
            button.classList.add("redButtonClicked");
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    
    let wButton2011 = document.getElementById("W2011");
    let wButton2012 = document.getElementById("W2012");
    let wButton2013 = document.getElementById("W2013");
    let wButton2014 = document.getElementById("W2014");
    let wButton2015 = document.getElementById("W2015");
    let wButton2016 = document.getElementById("W2016");
    let wButton2017 = document.getElementById("W2017");
    let wButton2018 = document.getElementById("W2018");
    let wButton2019 = document.getElementById("W2019");
    
    let wCircleContainer2011 = document.getElementById("w-circle-container2011");
    let wCircleContainer2012 = document.getElementById("w-circle-container2012");
    let wCircleContainer2013 = document.getElementById("w-circle-container2013");
    let wCircleContainer2014 = document.getElementById("w-circle-container2014"); 
    let wCircleContainer2015 = document.getElementById("w-circle-container2015");
    let wCircleContainer2016 = document.getElementById("w-circle-container2016");
    let wCircleContainer2017 = document.getElementById("w-circle-container2017");
    let wCircleContainer2018 = document.getElementById("w-circle-container2018");
    let wCircleContainer2019 = document.getElementById("w-circle-container2019");

    function showContainer(container) {
        container.classList.remove("fade-out");
        container.classList.add("fade-in");
    }

    wButton2011.addEventListener("click", function() {
        wCircleContainer2011.style.display = "block";
        wCircleContainer2012.style.display = "none";
        wCircleContainer2013.style.display = "none";
        wCircleContainer2014.style.display = "none";
        wCircleContainer2015.style.display = "none";
        wCircleContainer2016.style.display = "none";
        wCircleContainer2017.style.display = "none";
        wCircleContainer2018.style.display = "none";
        wCircleContainer2019.style.display = "none";
    });
    wButton2012.addEventListener("click", function() {
        wCircleContainer2011.style.display = "none";
        wCircleContainer2012.style.display = "block";
        wCircleContainer2013.style.display = "none";
        wCircleContainer2014.style.display = "none";
        wCircleContainer2015.style.display = "none";
        wCircleContainer2016.style.display = "none";
        wCircleContainer2017.style.display = "none";
        wCircleContainer2018.style.display = "none";
        wCircleContainer2019.style.display = "none";
    });
    wButton2013.addEventListener("click", function() {
        wCircleContainer2011.style.display = "none";
        wCircleContainer2012.style.display = "none";
        wCircleContainer2013.style.display = "block";
        wCircleContainer2014.style.display = "none";
        wCircleContainer2015.style.display = "none";
        wCircleContainer2016.style.display = "none";
        wCircleContainer2017.style.display = "none";
        wCircleContainer2018.style.display = "none";
        wCircleContainer2019.style.display = "none";
    });
    wButton2014.addEventListener("click", function() {
        console.log("hi")
        wCircleContainer2011.style.display = "none";
        wCircleContainer2012.style.display = "none";
        wCircleContainer2013.style.display = "none";
        wCircleContainer2014.style.display = "block";
        wCircleContainer2015.style.display = "none";
        wCircleContainer2016.style.display = "none";
        wCircleContainer2017.style.display = "none";
        wCircleContainer2018.style.display = "none";
        wCircleContainer2019.style.display = "none";      
    });
    wButton2015.addEventListener("click", function() {
        wCircleContainer2011.style.display = "none";
        wCircleContainer2012.style.display = "none";
        wCircleContainer2013.style.display = "none";
        wCircleContainer2014.style.display = "none";
        wCircleContainer2015.style.display = "block";
        wCircleContainer2016.style.display = "none";
        wCircleContainer2017.style.display = "none";
        wCircleContainer2018.style.display = "none";
        wCircleContainer2019.style.display = "none";    
    });
    wButton2016.addEventListener("click", function() {
        wCircleContainer2011.style.display = "none";
        wCircleContainer2012.style.display = "none";
        wCircleContainer2013.style.display = "none";
        wCircleContainer2014.style.display = "none";
        wCircleContainer2015.style.display = "none";
        wCircleContainer2016.style.display = "block";
        wCircleContainer2017.style.display = "none";
        wCircleContainer2018.style.display = "none";
        wCircleContainer2019.style.display = "none";   
    });
    wButton2017.addEventListener("click", function() {
        wCircleContainer2011.style.display = "none";
        wCircleContainer2012.style.display = "none";
        wCircleContainer2013.style.display = "none";
        wCircleContainer2014.style.display = "none";
        wCircleContainer2015.style.display = "none";
        wCircleContainer2016.style.display = "none";
        wCircleContainer2017.style.display = "block";
        wCircleContainer2018.style.display = "none";
        wCircleContainer2019.style.display = "none";   
    });
    wButton2018.addEventListener("click", function() {
        wCircleContainer2011.style.display = "none";
        wCircleContainer2012.style.display = "none";
        wCircleContainer2013.style.display = "none";
        wCircleContainer2014.style.display = "none";
        wCircleContainer2015.style.display = "none";
        wCircleContainer2016.style.display = "none";
        wCircleContainer2017.style.display = "none";
        wCircleContainer2018.style.display = "block";
        wCircleContainer2019.style.display = "none";
    });
    wButton2019.addEventListener("click", function() {
        wCircleContainer2011.style.display = "none";
        wCircleContainer2012.style.display = "none";
        wCircleContainer2013.style.display = "none";
        wCircleContainer2014.style.display = "none";
        wCircleContainer2015.style.display = "none";
        wCircleContainer2016.style.display = "none";
        wCircleContainer2017.style.display = "none";
        wCircleContainer2018.style.display = "none";
        wCircleContainer2019.style.display = "block";
    });
});



document.addEventListener("DOMContentLoaded", function() {
    let circles = document.querySelectorAll(".cyan-circle, .white-circle, .green-circle, .orange-circle, .red-circle, .circle7-position1, .circle9-position2");

    circles.forEach(function(circle) {
        let closeButton = circle.querySelector(".close-button");
        let content = circle.querySelector(".content");
        let rank = circle.querySelector(".rank");

        // Initially show the rank for all circles
        rank.classList.remove("hidden");

        circle.addEventListener("click", function(event) {
            event.stopPropagation();

            // Show close button and content, hide rank
            closeButton.classList.remove("hidden");
            content.classList.remove("hidden");
            rank.classList.add("hidden");

            // Change circle background color to colored and text color to black
            if  (circle.classList.contains("circle7-position1")) {
                circle.style.marginLeft = "-20%";
                circle.style.backgroundColor = "white";
                circle.style.color = "black";
            } else if (circle.classList.contains("circle9-position2") && circle.classList.contains("red-circle")) {
                circle.style.marginLeft = "-20%";
                circle.style.backgroundColor = "#E14729";
                circle.style.color = "black";
            } else if (circle.classList.contains("circle9-position2") && circle.classList.contains("orange-circle")) {
                circle.style.marginLeft = "-20%";
                circle.style.backgroundColor = "#F37F26";
                circle.style.color = "black";
            } else if (circle.classList.contains("circle9-position2") && circle.classList.contains("cyan-circle")) {
                circle.style.marginLeft = "-20%";
                circle.style.backgroundColor = "#00F0FF";
                circle.style.color = "black";
            } else if (circle.classList.contains("circle9-position2") && circle.classList.contains("green-circle")) {
                circle.style.marginLeft = "-20%";
                circle.style.backgroundColor = "#88EE22";

                circle.style.color = "black";
            } else if (circle.classList.contains("cyan-circle")) {
                circle.style.backgroundColor = "#00F0FF";
                circle.style.color = "black"; 
            } else if (circle.classList.contains("green-circle")) {
                circle.style.backgroundColor = "#88EE22";
                circle.style.color = "black";
                console.log("green");
            } else if (circle.classList.contains("orange-circle")) {
                circle.style.backgroundColor = "#F37F26";
                circle.style.color = "black";
                console.log("orange");
            } else if (circle.classList.contains("red-circle")) {
                circle.style.backgroundColor = "#E14729";
                circle.style.color = "black";
                console.log("red");
            } else {
                circle.style.backgroundColor = "white";
                circle.style.color = "black"
            }

            circle.classList.add("expanded");
            circle.style.zIndex = "9";


    
            // Reset other circles to their original state
            circles.forEach(function(otherCircle) {
                if (otherCircle !== circle) {
                    let otherCloseButton = otherCircle.querySelector(".close-button");
                    let otherContent = otherCircle.querySelector(".content");
                    let otherRank = otherCircle.querySelector(".rank");

                    otherCloseButton.classList.add("hidden");
                    otherContent.classList.add("hidden");
                    otherRank.classList.remove("hidden");

                    // Reset other circles' background color and text color
                    if (otherCircle.classList.contains("circle9-position2")) {
                        otherCircle.style.marginLeft = "0";
                        otherCircle.style.backgroundColor = "transparent";
                        if (otherCircle.classList.contains("red-circle")) {
                            otherCircle.style.color = "#E14729";
                        }
                        else if (otherCircle.classList.contains("orange-circle")) {
                            otherCircle.style.color = "#F37F26";
                        }
                        else if (otherCircle.classList.contains("cyan-circle")) {
                            otherCircle.style.color = "#00F0FF";
                        }
                        else if (otherCircle.classList.contains("green-circle")) {
                            otherCircle.style.color = "#88EE22";
                        }
                    } else if (otherCircle.classList.contains("circle7-position1")) {
                        otherCircle.style.marginLeft = "0";
                        otherCircle.style.backgroundColor = "transparent";
                        otherCircle.style.color = "white";
                    } else if (otherCircle.classList.contains("cyan-circle")) {
                        otherCircle.style.backgroundColor = "transparent";
                        otherCircle.style.color = "#00F0FF";
                    } else if (otherCircle.classList.contains("green-circle")) {
                        otherCircle.style.backgroundColor = "transparent";
                        otherCircle.style.color = "#88EE22";
                    } else if (otherCircle.classList.contains("orange-circle")) {
                        otherCircle.style.backgroundColor = "transparent";
                        otherCircle.style.color = "#F37F26";
                    } else if (otherCircle.classList.contains("red-circle")) {
                        otherCircle.style.backgroundColor = "transparent";
                        otherCircle.style.color = "#E14729";
                    } else {
                        otherCircle.style.backgroundColor = "transparent";
                        otherCircle.style.color = "white";
                    }

                    // Reset other circles' size and z-index
                    otherCircle.classList.remove("expanded");
                    otherCircle.style.zIndex = "0"        
                }
            });
        });

        // Event listener for the close button click
        closeButton.addEventListener("click", function(event) {
            event.stopPropagation();

            // Hide close button and content, show rank
            closeButton.classList.add("hidden");
            content.classList.add("hidden");
            rank.classList.remove("hidden");

            // Reset circle size
            circle.classList.remove("expanded");

            // Reset circle z-index
            circle.style.zIndex = "1";

            // Reset circle background color and text color
            if (circle.classList.contains("circle9-position2") && circle.classList.contains("cyan-circle")) {
            circle.style.marginLeft  = "0";
            circle.style.backgroundColor = "black";
            circle.style.color  = "#00F0FF";
            } else if (circle.classList.contains("circle9-position2") && circle.classList.contains("red-circle")) {
                circle.style.marginLeft  = "0";
                circle.style.backgroundColor = "black";
                circle.style.color  = "#E14729";
            } else if (circle.classList.contains("circle9-position2") && circle.classList.contains("orange-circle")) {
                circle.style.marginLeft  = "0";
                circle.style.backgroundColor = "black";
                circle.style.color  = "#F37F26";
            } else if (circle.classList.contains("circle9-position2") && circle.classList.contains("green-circle")) {
                circle.style.marginLeft  = "0";
                circle.style.backgroundColor = "black";
                circle.style.color  = "#88EE22";
            } else if (circle.classList.contains("circle7-position1")) {
                circle.style.marginLeft  = "0";
                circle.style.backgroundColor = "black";
                circle.style.color = "white";
            } else if (circle.classList.contains("cyan-circle")) {
                circle.style.backgroundColor = "black";
                circle.style.color = "#00F0FF";
            } else if (circle.classList.contains("green-circle")) {
                circle.style.backgroundColor = "black";
                circle.style.color  = "#88EE22";
            } else if (circle.classList.contains("orange-circle")) {
                circle.style.backgroundColor = "black";
                circle.style.color  = "#F37F26";
            } else if (circle.classList.contains("red-circle")) {
                circle.style.backgroundColor = "black";
                circle.style.color  = "#E14729";
            } else {
                circle.style.backgroundColor = "black";
                circle.style.color = "white";
            }


            
        });
    });

    // Close the content and rank if user clicks anywhere else on the document
    document.addEventListener("click", function(event) {
        circles.forEach(function(circle) {
            let closeButton = circle.querySelector(".close-button");
            let content = circle.querySelector(".content");
            let rank = circle.querySelector(".rank");

            

            // Hide close button and content, show rank if the circle background color is not transparent
            if (circle.style.backgroundColor !== "transparent") {
                closeButton.classList.add("hidden");
                content.classList.add("hidden");
                rank.classList.remove("hidden");

                // Reset circle background color and text color
                circle.style.backgroundColor = "transparent";
                if (circle.classList.contains("circle7-position1")) {
                    circle.style.marginLeft  = "0";
                    circle.style.color = "white";
                } else if (circle.classList.contains("circle9-position2") && circle.classList.contains("red-circle")) {
                    circle.style.marginLeft  = "0";
                    circle.style.color = "#E14729";
                } else if (circle.classList.contains("circle9-position2") && circle.classList.contains("orange-circle")) {
                    circle.style.marginLeft  = "0";
                    circle.style.color = "#F37F26";
                } else if (circle.classList.contains("circle9-position2") && circle.classList.contains("cyan-circle")) {
                    circle.style.marginLeft  = "0";
                    circle.style.color = "#00F0FF";
                } else if (circle.classList.contains("circle9-position2") && circle.classList.contains("green-circle")) {
                    circle.style.marginLeft  = "0";
                    circle.style.color = "#88EE22";
                } else if (circle.classList.contains("cyan-circle")) {
                    circle.style.color = "#00F0FF";
                    console.log("spacce");
                } else if (circle.classList.contains("green-circle")) {
                    circle.style.color = "#88EE22";
                    console.log("spacce");
                } else if (circle.classList.contains("orange-circle")) {
                    circle.style.color = "#F37F26";
                    console.log("spacce");
                } else if (circle.classList.contains("red-circle")) {
                    circle.style.color = "#E14729";
                    console.log("spacce");
                } else {
                    circle.style.color = "white";
                }

                // Reset circle size
                circle.classList.remove("expanded");
                
                // Reset circle z-index
                circle.style.zIndex = "1";
            }
        });
    });
});
