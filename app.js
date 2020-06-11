/* Main JS File for sorting visualizer */

/* Get slider to show value */
var slider = document.getElementById("myRange");
var output = document.getElementById("slideVal");
output.innerHTML = slider.value; // Display the default slider value

// Get the number of array elements the user wants //
var defaultSize = 25;
var arrSize = defaultSize;

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  arrSize = parseInt(output.innerHTML);
}

// Change value back to 500 on double click
slider.ondblclick = function() {
  slider.value = defaultSize;
  output.innerHTML = defaultSize;
  arrSize = parseInt(output.innerHTML);
}


/* Get info bar to show text explaining each element on the page */
var bubble = document.getElementById("bubble");
var selection = document.getElementById("selection");
var insertion = document.getElementById("insertion");
var merge = document.getElementById("merge");
var arrGen = document.getElementById("arrGen");
var arrGenMobile = document.getElementById("arrGenMobile");
var changeArr = document.getElementById("changeArr");
var sort = document.getElementById("sort");
var sortMobile = document.getElementById("sortMobile");
var speed = document.getElementById("speed");
var hoverList = [bubble, selection, insertion, merge, arrGen, changeArr, slider, sort, speed, arrGenMobile, sortMobile];

var pageTitle = document.getElementById("pageTitle")

var infoBar = document.getElementById("infoBar");
const infoDefault = "Visualizes your favorite sorting algorithms with JavaScript. To get started, choose a sorting algorithm, generate a random array, and press sort!";
infoBar.innerHTML = infoDefault;

// Display explanation upon hovering
bubble.onmouseover = function() {
  infoBar.innerHTML = "Bubble Sort steps through the list of numbers and compares adjacent elements. The lower of the two is shifted left if they are in the wrong order.";
}
selection.onmouseover = function() {
  infoBar.innerHTML = "Selection Sort steps through the list, finds the minimum number, and places it at the beginning.";
}
insertion.onmouseover = function() {
  infoBar.innerHTML = "Insertion Sort steps through the list and compares each element to the numbers left of it. It inserts that element in the correct position in the sorted array.";
}
merge.onmouseover = function() {
  infoBar.innerHTML = "Merge Sort divides the input list in half, calls itself to sort each half recursively, and then merges them together.";
}
arrGen.onmouseover = function() {
  infoBar.innerHTML = "Generate an array of given size with random numbers. The maximum will be 1 less than the array size.";
}
changeArr.onmouseover = function() {
  infoBar.innerHTML = "Change the number of elements in the array.";
}
slider.onmouseover = function() {
  infoBar.innerHTML = "Change the number of elements in the array.";
}
sort.onmouseover = function() {
  infoBar.innerHTML = "It's time to sort!";
}
speed.onmouseover = function() {
  infoBar.innerHTML = "Set how fast you want the algorithm to sort."
}
pageTitle.onmouseover = function() {
  infoBar.innerHTML = infoDefault;
}
arrGenMobile.onmouseover = function() {
  infoBar.innerHTML = "Generate an array of given size with random numbers. The maximum will be 1 less than the array size.";
}
sortMobile.onmouseover = function() {
  infoBar.innerHTML = "It's time to sort!";
}
// Return to default after hovering
for (let i=0; i < hoverList.length; i++) {
  hoverList[i].onmouseleave = function() {
    infoBar.innerHTML = "Sort away!";
  }
}


/* Enable Sort button once an algorithm is chosen and change style of algorithm link*/
bubble.onclick = function() {
  sort.disabled = false;
  sortMobile.disabled = false;
  infoBar.innerHTML = "Press Sort to implement Bubble Sort!";
  bubble.style.color = "black";
  bubble.classList.add("click-border");
  selection.style.color = 'gray';
  selection.classList.remove("click-border");
  insertion.style.color = 'gray';
  insertion.classList.remove("click-border");
  merge.style.color = 'gray';
  merge.classList.remove("click-border");
}
selection.onclick = function() {
  sort.disabled = false;
  sortMobile.disabled = false;
  infoBar.innerHTML = "Press Sort to implement Selection Sort!";
  selection.style.color = "black";
  selection.classList.add("click-border");
  bubble.style.color = 'gray';
  bubble.classList.remove("click-border");
  insertion.style.color = 'gray';
  insertion.classList.remove("click-border");
  merge.style.color = 'gray';
  merge.classList.remove("click-border");
}
insertion.onclick = function() {
  sort.disabled = false;
  sortMobile.disabled = false;
  infoBar.innerHTML = "Press Sort to implement Insertion Sort!";
  insertion.style.color = "black";
  insertion.classList.add("click-border");
  selection.style.color = 'gray';
  selection.classList.remove("click-border");
  bubble.style.color = 'gray';
  bubble.classList.remove("click-border");
  merge.style.color = 'gray';
  merge.classList.remove("click-border");
}
merge.onclick = function() {
  sort.disabled = false;
  sortMobile.disabled = false;
  infoBar.innerHTML = "Press Sort to implement Merge Sort!";
  merge.style.color = "black";
  merge.classList.add("click-border");
  selection.style.color = 'gray';
  selection.classList.remove("click-border");
  insertion.style.color = 'gray';
  insertion.classList.remove("click-border");
  bubble.style.color = 'gray';
  bubble.classList.remove("click-border");
}


/* Generate array of random numbers based on size of array, aka arrSize */
// Uses onclick event from Generate Array button //
var arr;
var bar;
var barWidth;
var percent = "%";;
var barWidthString;
var vertbar;
var graph;
var newDiv;
var numDiv;
var numDivVal;
var maxArr;

// Access bargraph container //
graph = document.getElementById("graph")

function arrayGenerator() 
{
  // Generate random array //
  arr = [];
  // Max of this array is 350. Repeated numbers allowed. //
  for (let i=0; i < arrSize; i++) {
    arr.push(Math.floor(Math.random()*350) + 1);
  }
  maxArr = Math.max(...arr);

  // Delete pre-existing divs to make room for new ones //
  graph.innerHTML = '';

  // Create an arrSize number of vertical bars //
  for (let i=0; i < arrSize; i++) {
    newDiv = document.createElement("div");
    newDiv.classList.add("vertbar");
    graph.appendChild(newDiv);
  }

  vertbar = document.querySelectorAll(".vertbar");
  barWidth = 60 / arrSize; // Will later be converted to percent, 60 because 3/4 bar, 1/4 space //

  // Convert variables to string percents
  barWidthString = barWidth.toString().concat(percent);
  
  /* Change width and height of vertical bars where height and width are in percent */
  for (let i=0; i < vertbar.length; i++) {
    vertbar[i].style.width = barWidthString;
    vertbar[i].style.height = (arr[i] / 4).toString().concat(percent);

    // If array size is less than or equal to 30, show the number on the bar
    if (arrSize <= 35) {
      numDiv = document.createElement("h2");
      numDivVal = arr[i].toString();
      numDiv.innerHTML = numDivVal;
      // Place number on top of bar if bar is too short
      if (arr[i] < 0.25 * maxArr) {
        numDiv.classList.add("numdivshort");
        vertbar[i].appendChild(numDiv);
      }
      else {
        numDiv.classList.add("numdiv");
        vertbar[i].appendChild(numDiv);
      }
    }
  }
   
}


/* Function to get speed of sorting algorithm */
var delay = 100;
// 100 is default/medium speed
// below is the user-chosen speed
var veryslow = document.getElementById("veryslow");
var slow = document.getElementById("slow");
var medium = document.getElementById("medium");
var fast = document.getElementById("fast");
var veryfast = document.getElementById("veryfast");

function speedSort(userSpeed) 
{
  if (userSpeed == "veryslow") {
    delay = 400;
    speed.innerHTML = "Very Slow";
  }
  else if (userSpeed == "slow") {
    delay = 200;
    speed.innerHTML = "Slow";
  }
  else if (userSpeed == "medium") {
    delay = 100;
    speed.innerHTML = "Medium";
  }
  else if (userSpeed == "fast") {
    delay = 1;
    speed.innerHTML = "Fast";
  }
  else if (userSpeed == "veryfast") {
    delay = 0.01;
    speed.innerHTML = "Very Fast";
  }

}

/* Sleep Function to be used on algorithms */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


/* Bubble Sort Algorithm */
async function bubbleSort(arr)
{
  // Make it so other algorithms can't be run at the same time
  finished = false;
  sort.disabled = true;
  arrGen.disabled = true;
  slider.disabled = true;
  sortMobile.disabled = true;
  arrGenMobile.disabled = true;

  let temp = [];
  for (let i=0; i < arrSize; i++) {
    for (let j=i+1; j < arrSize; j++) {
      // If the adjacent elements are in order or equal, do nothing. Else, swap.
      if (arr[i] > arr[j]) {
        // Swaps values every value of time so users can see the change
        await sleep(delay);
        swap(arr, i, j);
      }
    }
  }
  // Ensure all vertbars have the sorted color
  for (let w=0; w<arrSize; w++) {
    vertbar[w].style.backgroundColor = sortColor;
  }

  finished = true;
  sort.disabled = false;
  arrGen.disabled = false;
  slider.disabled = false;
  sortMobile.disabled = false;
  arrGenMobile.disabled = false;

  return arr;
}

/* Selection Sort Algorithm */
async function selectionSort(arr)
{
  // Make it so other algorithms can't be run at the same time
  finished = false;
  sort.disabled = true;
  arrGen.disabled = true;
  slider.disabled = true;
  sortMobile.disabled = true;
  arrGenMobile.disabled = true;

  // Set first value equal to minimum, if any number in list is less than the min, move it to the front
  for (let i=0; i < arrSize; i++) {
    let minInd = i;

    for (let j=i+1; j<arrSize; j++) {

      if (arr[j] < arr[minInd]) {
        minInd = j;
      }
    }

    // Avoid swap of element with itself
    await sleep(delay);
    if (i !== minInd) {
      swap(arr, i, minInd);
    }

  }
  // Ensure all vertbars have the sorted color
  for (let w=0; w<arrSize; w++) {
    vertbar[w].style.backgroundColor = sortColor;
  }
  finished = true;
  sort.disabled = false;
  arrGen.disabled = false;
  slider.disabled = false;
  sortMobile.disabled = false;
  arrGenMobile.disabled = false;

  return arr;
}

/* Insertion sort algorithm */
async function insertionSort(arr) {
  // Make it so other algorithms can't be run at the same time
  finished = false;
  sort.disabled = true;
  arrGen.disabled = true;
  slider.disabled = true;
  sortMobile.disabled = true;
  arrGenMobile.disabled = true;

  for (let i=1; i < arrSize; i++) {
    let j = i;
    // While an array index is less than what is to its left, shift it left
    while (arr[j-1] > arr[j]) {
      await sleep(delay);
      swap(arr, j, j-1);
      // After swap, increment down to continue left
      j = j-1;
    }
  }
  // Ensure all vertbars have the sorted color
  for (let w=0; w<arrSize; w++) {
    vertbar[w].style.backgroundColor = sortColor;
  }

  sort.disabled = false;
  arrGen.disabled = false;
  finished = true;
  slider.disabled = false;
  sortMobile.disabled = false;
  arrGenMobile.disabled = false;

  return arr;   
}


/* Merge Sort algorithm */
var mergeHist = []; // an array of arrays at each step in the merge sort process
var counter = 0;
var arrThree = []
/* mergeSort splits the array in half, merger merges them together in sorted order, mergeSwap is the visual version */
function mergeSort(newArr) {
  
  // If the array has a length of 1, stop the mergesort function from splitting it
  if (newArr.length <= 1) {
    return newArr;
  }

  var midpoint = Math.floor(newArr.length / 2);

  // If on first recursive loop, set counter = 0 and log what algorithm is doing in mergeHist
  if (midpoint == Math.floor(arrSize / 2)) {
    counter = 0;
    mergeHist[0] = newArr;
    counter++;
  }

  // If odd, right list will have one additional index
  var arrOne = newArr.slice(0, midpoint);
  var arrTwo = newArr.slice(midpoint);

  arrOne = mergeSort(arrOne);
  arrTwo = mergeSort(arrTwo);

  // Function calls itself to split arrays further
  // Merge arrays together
  return merger(arrOne, arrTwo);
  
}


function merger(arrOne, arrTwo)
{
  let leftInd = 0,
  rightInd = 0;
  arrThree = [];
  // While both arrays still have elements left, will take away from either arr and add to the other
  while (leftInd < arrOne.length && rightInd < arrTwo.length) {
    if (arrOne[leftInd] < arrTwo[rightInd]) {
      // Apend smaller element to new array and get rid of index
      arrThree.push(arrOne[leftInd]);
      leftInd++;
    }
    else {
      arrThree.push(arrTwo[rightInd]);
      rightInd++;
    }
  }

  // Now, one of the arrays is empty, so add remaining elements to new array
  let arrNew=arrThree.concat(arrOne.slice(leftInd)).concat(arrTwo.slice(rightInd));
  mergeHist[counter] = arrNew;
  counter++;

  return arrNew;
}


/* Visualizes merge sort with history array */
async function mergeVisual(unsortedArr)
{
  // Make it so other algorithms can't be run at the same time
  finished = false;
  sort.disabled = true;
  arrGen.disabled = true;
  slider.disabled = true;
  sortMobile.disabled = true;
  arrGenMobile.disabled = true;

  let i, j; 
  let w = 0; // must initialize this since we start at the beginning of the array
  // Must re-call mergeSort since mergehistory isn't cleared everytime it is called
  mergeHist = [];
  let sortedArr = mergeSort(unsortedArr);

  let mergeLength = mergeHist.length; // number of steps taken by mergesort algorithm
  let tempLength, // length of individual array in mergeHist
  counter = 0;
  let tempArr = []; // array of lengths of arrays in mergeHist
  let startInd=0, endInd=0;

  // For smaller arrays, remove numbers for the sorting
  if (arrSize <= 35) {
    let h2element = document.querySelectorAll("h2");
    for (i=0; i < h2element.length; i++) {
      let h2el = h2element[i];
      h2el.parentNode.removeChild(h2el);
    }
  }

  // Turn whole array to midcolor briefly to start then back to black to show initialization
  for (i=0; i<arrSize; i++) {
    vertbar[i].style.backgroundColor = midColor;
  }
  await sleep(500);
  for (i=0; i<arrSize; i++) {
    vertbar[i].style.backgroundColor = "black";
  }
  
  // Go through mergeHist and make new array with lengths of arrays in mergeHist called tempArr
  tempArr = [];
  counter=0;
  for (i=1; i<mergeLength; i++) {
    // If tempArr doesn't already have length of array in mergeHist, add it to tempArr
    if (!tempArr.includes(mergeHist[i].length)) {
      tempArr[counter] = mergeHist[i].length;
      counter++;
    }
  }

  // Go through mergeHist and step through changes, start on 1 because first index is original array 
  // Iterate through arrays of 2, then 4, then so on
  for (j=0; j < tempArr.length; j++) {
    startInd = 0;
    endInd = 0;
    tempLength = tempArr[j];
    
    for (i=1; i < mergeLength; i++) {
      // If mergeHist array has size of tempArr at same index, change graph visuals
      if (mergeHist[i].length == tempLength) {
        // Get "frame" of sorting by starting with 0 and then shifting over by tempLength
        endInd += tempLength;

        for (w=startInd; w<endInd; w++) {
          // Color number based on if it is sorted or unsorted
          if (unsortedArr[w] == sortedArr[w]) {
            vertbar[w].style.backgroundColor = sortColor;
          }
          // Or unsorted
          else {
            vertbar[w].style.backgroundColor = unsortColor;
            await sleep(delay);
            vertbar[w].style.backgroundColor = "black";
          }
          vertbar[w].style.height = (mergeHist[i][w - startInd] / 4).toString().concat(percent);
        } 
        // Shift up start and end indices to compare to array
        startInd += tempLength;
        await sleep(delay);
      }
    }
  }
  await sleep(delay);

  // Add numbers to vertbars when needed and make everything sorted color
  for (i=0; i< arrSize; i++) {
    // If array size is less than or equal to 30, show the number on the bar
    if (arrSize <= 35) {
      numDiv = document.createElement("h2");
      numDivVal = sortedArr[i].toString();
      numDiv.innerHTML = numDivVal;
      // Place number on top of bar if bar is too short
      if (sortedArr[i] < 0.25 * maxArr) {
        numDiv.classList.add("numdivshort");
        vertbar[i].appendChild(numDiv);
      }
      else {
        numDiv.classList.add("numdiv");
        vertbar[i].appendChild(numDiv);
      }
    }

    // Color everything sorted
    vertbar[i].style.backgroundColor = sortColor;
    await sleep(30);
  }

  sort.disabled = false;
  arrGen.disabled = false;
  slider.disabled = false;
  finished = true;
  sortMobile.disabled = false;
  arrGenMobile.disabled = false;
}


/* Sorting colors */
var unsortColor = "rgb(240, 173, 78)";
var sortColor = "rgb(2, 117, 216)";
var midColor = "rgb(155, 58, 155)";

/* Swap function to swap array indices */
async function swap(arr, i, j)
{
  let temp;
  temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
  await sleep(delay);
  swapHeight(arr, i, j);
}

/* Swap function to swap heights and text of vertbars */
async function swapHeight(arr, i, j)
{
  // Change color to unsorted color 
  vertbar[i].style.backgroundColor = unsortColor;
  vertbar[j].style.backgroundColor = unsortColor;
  await sleep(delay);

  let tempHeight = vertbar[j].style.height;
  vertbar[j].style.height = vertbar[i].style.height;
  vertbar[i].style.height = tempHeight;
  await sleep(delay);

  if (arrSize <= 35) {
    let tempHeightVal = vertbar[i].innerHTML;  
    vertbar[i].innerHTML = vertbar[j].innerHTML;
    vertbar[j].innerHTML = tempHeightVal;
  }

  // Change background color to sorted color
  vertbar[i].style.backgroundColor = sortColor;
  vertbar[j].style.backgroundColor = sortColor;

}


/* Overall Sort function */
// Determines which sorting algorithm was chosen and sorts when clicked //
function sortFun()
{
  // Chosen sorting algorithm is black
  if (bubble.style.color=='black' && isFinished()) {
    bubbleSort(arr);
  }
  if (selection.style.color=='black' && isFinished()) {
    selectionSort(arr);
  }
  if (insertion.style.color=='black' && isFinished()) {
    insertionSort(arr);
  }
  if (merge.style.color=='black' && isFinished()) { 
    // Call mergesort to sort array and get history array for visualizer
    let unsortedArr = arr;
    mergeVisual(unsortedArr);
  }

}

// Disables arrGen and other sort algorithms from being clicked while sort is running
var finished = true;

function isFinished()
{
  if (!arr) {
    return false;
  }
  while (finished == true) {
    return true;
  }

}