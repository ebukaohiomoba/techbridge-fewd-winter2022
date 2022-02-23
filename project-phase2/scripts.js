//scripts for problems


function resetFindInGrid() {
    //set tbNumberToFind to blank
    let tbNumberToFind = document.getElementById("tbNumberToFind");
    tbNumberToFind.value = '';

    //unhighlight spans
    let spans = document.getElementsByTagName('span');
    console.log("spans: ", spans);
    for (let index = 0; index < spans.length; index++) {
        spans[index].classList.remove('spanHighlighted');
    }
}

function resetFindInList() {
     //set tbTextToFind to blank
    let tbTextToFind = document.getElementById("tbTextToFind");
    tbTextToFind.value = '';

    //unhighlight spans
    let spans = document.getElementsByTagName('span');
    console.log("spans: ", spans);
    for (let index = 0; index < spans.length; index++) {
        spans[index].classList.remove('spanHighlighted');
    }
}



function reloadPage() {
    window.location.reload();
    return false;
}


function findInGrid() {

    //Grabs rows in the grid
    let tbNumberToFind = document.getElementById("tbNumberToFind").value;
    console.log(tbNumberToFind);
    let gridRows = document.getElementsByClassName("row");
    for(let row = 0; row < gridRows.length; row++){
        //Collects the spans from a row 
        let spanofgridRow = gridRows[row].getElementsByClassName("spanName");
        console.log(spanofgridRow);
        console.log(spanofgridRow.length);

        //loop through each span in the collection
        for(let i = 0; i < spanofgridRow.length; i++) {
            //log the row
            console.log("Span collection: ", spanofgridRow[i]);
            let spanText = spanofgridRow[i].innerText;
            console.log("spanText: ", spanText);
            if(spanText == tbNumberToFind) {
                spanofgridRow[i].classList.add('spanHighlighted');
            }  else {
                spanofgridRow[i].classList.remove('spanHighlighted');

            }
        }

    }



}


function findInList() {
//Grabs the number that user enters in input box
let tbTextToFind = document.getElementById("tbTextToFind").value;
console.log(tbNumberToFind);
let gridRows = document.getElementsByClassName("row");
for(let row = 0; row < gridRows.length; row++){
    //Collects the spans from a row 
    let gridRow = gridRows[row].getElementsByClassName("spanName");
    console.log(gridRow);
    console.log(gridRow.length);

    //loop through each span in the collection
    for(let i = 0; i < gridRow.length; i++) {
        //log the row
        console.log("Span collection: ", gridRow[i]);
        //get the id of the span
        //let spanID = gridRow[i].id;
        //console.log("spanID: ", spanID);

        let spanText = gridRow[i].innerText;
        console.log("spanText: ", spanText);
        if(spanText == tbNumberToFind) {
            //document.getElementById("span3-1").className = 'spanHighlighted'
            //document.getElementsByClassName("spanName").className = 'spanHighlighted';
           
        }

    }}

function sortIt() {
    //
}
}