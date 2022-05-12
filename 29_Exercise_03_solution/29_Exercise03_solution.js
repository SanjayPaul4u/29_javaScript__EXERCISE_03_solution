console.log("This is project number 01... This is note making project");
//for showing notes after display also;
showNotes();
//If use adds a note, add this note at local storage.
let button = document.getElementById("addBtn");
button.addEventListener("click", function (e) {
    let textArea = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");//UPDATE1📌📌📌 FOR ADDING title

    let notes = localStorage.getItem("note");
    let noteObj;
    if (notes === null) {
        noteObj = [];
    }
    else {
        noteObj = JSON.parse(notes);
    }

    myObj = {//UPDATE2📌📌📌
        title: addTitle.value,
        text: textArea.value
    }
    // noteObj.push(textArea.value);
    noteObj.push(myObj);
    localStorage.setItem("note", JSON.stringify(noteObj));
    textArea.value = "";
    addTitle.value = "";//UPDATE3📌📌📌
    console.log(noteObj);
    showNotes();
})


//Showing card in display
function showNotes() {
    let notes = localStorage.getItem("note");
    let noteObj;
    if (notes === null) {
        noteObj = [];
    }
    else {
        noteObj = JSON.parse(notes);
    }

    let html = "";
    noteObj.forEach(function (element, index) {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 style = "color: red; display: inline-block">${index+1}> </h5>

            <h5 class="card-title" style ="display: inline-block;">${element.title}</h5>
            <p class="card-text">${element.text}</p>
            <button id = ${index} onclick = "deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>
             `//console.log(noteObj[0].title);//UPDATE4📌📌📌
             //console.log(noteObj[0].text);------------>this way function will be work
    })



    let notelm = document.getElementById("notes");
    if(noteObj.length != 0){
        notelm.innerHTML = html;
    }
    else{
        notelm.innerHTML = `Nothing to show🙁! Use "Add a notes" section avobe to add note👆😀`
    }

}


// function for deleting
function deleteNote(index){
    console.log("I am deleting...", index);

    let notes = localStorage.getItem("note");
    let noteObj;
    if (notes === null) {
        noteObj = [];
    }
    else {
        noteObj = JSON.parse(notes);
    }

    noteObj.splice(index, 1);

    // this is for update
    localStorage.setItem("note", JSON.stringify(noteObj));

    showNotes();
}



//FOR SEARCH INPUT📌📌📌

let search  = document.getElementById("searchTxt");
search.addEventListener("input", function(element){

    let val = search.value.toLowerCase();
    // console.log("input event fired!",val);

    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        let cardTitle= element.getElementsByTagName("h5")[1].innerText;//UPDATE 5📌📌📌
        let cardTitleNum= element.getElementsByTagName("h5")[0].innerText;//UPDATE 5📌📌📌

        if(cardTxt.includes(val) || cardTitle.includes(val)|| cardTitleNum.includes(val)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";

        }
        // console.log(cardTxt);
    });
})



/*FURTHER FEATURES
1. add title
2. mark a note as a importatn
3. seperates note for different user
4. sync with server and host
 */