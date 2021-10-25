$(document).ready(function(){
  function updateList() {
  // declare an array 
    let Array1 = [$("#Thing1").val(), $("#Thing2").val(), $("#Thing3").val(), $("#Thing4").val(), $("#Thing5").val(), $("#Thing6").val()];
  // create a smaller array
      let smallArray = new Array();
  // store the values of the inputs in this original array
  // use the newArray.push(originalarray[0]); on indexes 0 1 and 2 of the original array
    smallArray.push(Array1[0]);
    smallArray.push(Array1[1]);
    smallArray.push(Array1[2]);
  // set the text of the list elements named #1 #2 and #3 equal to the newArray[n] where n=1,2,3
    $("#1").text(smallArray[0]);
    $("#2").text(smallArray[1]);
    $("#3").text(smallArray[2]);
  }


  // when the form is filled out and the submit button is clicked
  $("#subButton").click(function() {
    // call out new function
    updateList();
    // hide the form
    $(".primary").addClass("hidden");
    // show the unordered list
    $(".secondary").removeClass("hidden");
  });

  
});