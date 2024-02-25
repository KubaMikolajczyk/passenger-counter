let count = 0
let savedIdNum = 0;
let countEl = document.getElementById("count-el")

function resetCount(){
    count = 0;
    countEl.textContent = count;
}

function increment(){
    count += 1
    countEl.textContent = count
}

function subtract(){
    if (count > 0){
        count -= 1
        countEl.textContent = count
    } else {
        return
    }
}

function addElement(fullDate, fullTime){
    console.log(fullDate);
    console.log(fullTime);


    // CREATE MAIN DIV 
    // and add a class to it
    const mainDiv = document.createElement("div");
    mainDiv.classList.add('saved-count');

    //----------------------------------------------------------------
    // COUNT DIV
    // Create a div for label and value
    const countDiv = document.createElement("div");
    countDiv.classList.add("saved-value")

    // Create count label
    const countLabel = document.createElement("p");
    const countLabelText = document.createTextNode("Counted");
    countLabel.classList.add("saved-label");
    countLabel.appendChild(countLabelText);

    // Create a <p> element and add count to it
    const paraCount = document.createElement("p");
    const countText = document.createTextNode(count);
    paraCount.appendChild(countText);

    // Add count label and count value to their container div
    countDiv.appendChild(countLabel);
    countDiv.appendChild(paraCount);

    //----------------------------------------------------------------
    // DATE DIV
    // Create a div for label and value
    const dateDiv = document.createElement("div");
    dateDiv.classList.add("saved-value")

    // Create date label
    const dateLabel = document.createElement("p");
    const dateLabelText = document.createTextNode("Date");
    dateLabel.classList.add("saved-label");
    dateLabel.appendChild(dateLabelText);

    // Create a <p> element and add date to it
    const paraDate = document.createElement("p");
    const dateText = document.createTextNode(fullDate);
    paraDate.appendChild(dateText);

    // Add date label and date value to their container div
    dateDiv.appendChild(dateLabel);
    dateDiv.appendChild(paraDate);

    //----------------------------------------------------------------
    // TIME DIV
    // Create a div for label and value
    const timeDiv = document.createElement("div");
    timeDiv.classList.add("saved-value")

    // Create time label
    const timeLabel = document.createElement("p");
    const timeLabelText = document.createTextNode("Time");
    timeLabel.classList.add("saved-label");
    timeLabel.appendChild(timeLabelText);

    // Create a <p> element and add time to it
    const paraTime = document.createElement("p");
    const timeText = document.createTextNode(fullTime);
    paraTime.appendChild(timeText);

    // Add time label and time value to their container div
    timeDiv.appendChild(timeLabel);
    timeDiv.appendChild(paraTime);

    //----------------------------------------------------------------
    // REMOVE BUTTON
    // Create button
    const removeBtn = document.createElement("button");
    removeBtn.setAttribute("id", "remove-btn")
    
    // Create button label
    const removeIcon = document.createElement("i");
    removeIcon.classList.add("ri-close-fill")
    removeBtn.appendChild(removeIcon);

    // Add remove onclick function to btn
    removeBtn.setAttribute("onclick","removeItem('" + "saved-count-" + savedIdNum + "')");

    // ----------------------------------------------------------------
    // ADD ALL DIVS TO MAIN DIV
    // Add <p> with time to main div
    mainDiv.appendChild(countDiv);
    mainDiv.appendChild(dateDiv);
    mainDiv.appendChild(timeDiv);
    mainDiv.appendChild(removeBtn);

    // ADD ID TO MAIN DIV
    mainDiv.setAttribute("id","saved-count-"+savedIdNum);
    savedIdNum += 1;


    // INSERT MAIN DIV INSIDE OF CONTAINER
    const parentDiv = document.getElementById("saves-container");
    parentDiv.insertAdjacentElement("afterbegin", mainDiv)
}

function save(){
    // Output the current count
    console.log(count)

    // Output the current date and time
    const now = new Date();
    let fullTime = now.getHours() + ":" + now.getMinutes();
    let fullDate = now.toDateString().split(' ').slice(1).join(' ');
    // console.log(fullDate)
    // console.log(fullTime)

    // Create new element in html
    addElement(fullDate, fullTime)

    // Reset the counter
    resetCount();
}

function removeItem(objectID){
    objectToRemove = document.getElementById(objectID);
    objectToRemove.remove();
}