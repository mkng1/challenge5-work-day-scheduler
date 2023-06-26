var now = dayjs().format('MMM D, YYYY');
var currentHour = dayjs().hour();
var todayText = document.querySelector("#currentDay");
var hour9 = document.querySelector("#hour-9");
var hour10 = document.querySelector("#hour-10");
var hour11 = document.querySelector("#hour-11");
var hour12 = document.querySelector("#hour-12");
var hour13 = document.querySelector("#hour-13");
var hour14 = document.querySelector("#hour-14");
var hour15 = document.querySelector("#hour-15");
var hour16 = document.querySelector("#hour-16");
var hour17 = document.querySelector("#hour-17");

var note9 = document.querySelector(".hour9");
var note10 = document.querySelector(".hour10");
var note11 = document.querySelector(".hour11");
var note12 = document.querySelector(".hour12");
var note13 = document.querySelector(".hour13");
var note14 = document.querySelector(".hour14");
var note15 = document.querySelector(".hour15");
var note16 = document.querySelector(".hour16");
var note17 = document.querySelector(".hour17");


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  
  todayText.textContent = now;
  note9.value = localStorage.getItem("hour9");
  hour9.children[2].addEventListener("click", function(){
  localStorage.setItem("hour9", note9.value);});

  note10.value = localStorage.getItem("hour10");
  hour10.children[2].addEventListener("click", function(){
  localStorage.setItem("hour10", note10.value);});

  note11.value = localStorage.getItem("hour11");
  hour11.children[2].addEventListener("click", function(){
  localStorage.setItem("hour11", note9.value);});

  note12.value = localStorage.getItem("hour12");
  hour12.children[2].addEventListener("click", function(){
  localStorage.setItem("hour12", note12.value);});

  note13.value = localStorage.getItem("hour13");
  hour13.children[2].addEventListener("click", function(){
  localStorage.setItem("hour13", note13.value);});

  note14.value = localStorage.getItem("hour14");
  hour14.children[2].addEventListener("click", function(){
  localStorage.setItem("hour14", note14.value);});

  note15.value = localStorage.getItem("hour15");
  hour15.children[2].addEventListener("click", function(){
  localStorage.setItem("hour15", note15.value);});

  note16.value = localStorage.getItem("hour16");
  hour16.children[2].addEventListener("click", function(){
  localStorage.setItem("hour16", note16.value);});

  note17.value = localStorage.getItem("hour17");
  hour17.children[2].addEventListener("click", function(){
  localStorage.setItem("hour17", note17.value);});

  if (currentHour === 9) {
    hour9.classList.add("present");
    hour10.classList.add("future");
    hour11.classList.add("future");
    hour12.classList.add("future");
    hour13.classList.add("future");
    hour14.classList.add("future");
    hour15.classList.add("future");
    hour16.classList.add("future");
    hour17.classList.add("future");
  } else if (currentHour === 10) {
    hour9.classList.add("past");
    hour10.classList.add("present");
    hour11.classList.add("future");
    hour12.classList.add("future");
    hour13.classList.add("future");
    hour14.classList.add("future");
    hour15.classList.add("future");
    hour16.classList.add("future");
    hour17.classList.add("future");
  } else if (currentHour === 11) {
    hour9.classList.add("past");
    hour10.classList.add("past");
    hour11.classList.add("present");
    hour12.classList.add("future");
    hour13.classList.add("future");
    hour14.classList.add("future");
    hour15.classList.add("future");
    hour16.classList.add("future");
    hour17.classList.add("future");
  } else if (currentHour === 12) {
    hour9.classList.add("past");
    hour10.classList.add("past");
    hour11.classList.add("past");
    hour12.classList.add("present");
    hour13.classList.add("future");
    hour14.classList.add("future");
    hour15.classList.add("future");
    hour16.classList.add("future");
    hour17.classList.add("future");
  } else if (currentHour === 13) {
    hour9.classList.add("past");
    hour10.classList.add("past");
    hour11.classList.add("past");
    hour12.classList.add("past");
    hour13.classList.add("present");
    hour14.classList.add("future");
    hour15.classList.add("future");
    hour16.classList.add("future");
    hour17.classList.add("future");
  } else if (currentHour === 14) {
    hour9.classList.add("past");
    hour10.classList.add("past");
    hour11.classList.add("past");
    hour12.classList.add("past");
    hour13.classList.add("past");
    hour14.classList.add("present");
    hour15.classList.add("future");
    hour16.classList.add("future");
    hour17.classList.add("future");
  } else if (currentHour === 15) {
    hour9.classList.add("past");
    hour10.classList.add("past");
    hour11.classList.add("past");
    hour12.classList.add("past");
    hour13.classList.add("past");
    hour14.classList.add("past");
    hour15.classList.add("present");
    hour16.classList.add("future");
    hour17.classList.add("future");
  } else if (currentHour === 16) {
    hour9.classList.add("past");
    hour10.classList.add("past");
    hour11.classList.add("past");
    hour12.classList.add("past");
    hour13.classList.add("past");
    hour14.classList.add("past");
    hour15.classList.add("past");
    hour16.classList.add("present");
    hour17.classList.add("future");
  } else if (currentHour === 17) {
    hour9.classList.add("past");
    hour10.classList.add("past");
    hour11.classList.add("past");
    hour12.classList.add("past");
    hour13.classList.add("past");
    hour14.classList.add("past");
    hour15.classList.add("past");
    hour16.classList.add("past");
    hour17.classList.add("present");
  } else {
    hour9.classList.add("future");
    hour10.classList.add("future");
    hour11.classList.add("future");
    hour12.classList.add("future");
    hour13.classList.add("future");
    hour14.classList.add("future");
    hour15.classList.add("future");
    hour16.classList.add("future");
    hour17.classList.add("future");
  } 

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  });