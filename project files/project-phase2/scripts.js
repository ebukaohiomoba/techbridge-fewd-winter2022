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
//Grabs items in the list
let tbTextToFind = document.getElementById("tbTextToFind").value;
console.log(tbTextToFind);
let listRow = document.getElementsByClassName("row");
for(let row = 0; row < listRow.length; row++){
    //Collects the spans from a row 
    let spanoflistRow = listRow[row].getElementsByClassName("spanName");
    console.log(spanoflistRow);
    console.log(spanoflistRow.length);

    //loop through each span in the collection
    for(let i = 0; i < spanoflistRow.length; i++) {
        //log the row
        console.log("Span collection: ", spanoflistRow[i]);
        let spanText = spanoflistRow[i].innerText;
        console.log("spanText: ", spanText);
        if(spanText == tbTextToFind) {
            spanoflistRow[i].classList.add('spanHighlighted');
        }  else {
            spanoflistRow[i].classList.remove('spanHighlighted');

        }
    }

}

}
function sortIt() {
    let finalResult = document.getElementById('resultsRow')
    let rowListReview = document.getElementById("row0").children;
     console.log(rowListReview)
     let newArray = [];
    for (let t = 0; t < rowListReview.length; t++){
        console.log(rowListReview[t].innerText);
        newArray.push(rowListReview[t].innerText);
        newArray.sort()
    }
    console.log(newArray);
    let gone = []
    for (let t =0; t < rowListReview.length; t++){
    for (let v =0; v < newArray.length; v++){
        if (newArray[t] == rowListReview[v].innerText)
    gone.push(rowListReview[v]) 
    }    
}for (let t=0; t < gone.length; t++){
    finalResult.appendChild(gone[t])
} 
}