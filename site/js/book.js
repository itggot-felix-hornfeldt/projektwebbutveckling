function choiceGroup() {
    document.querySelector('#siteBookParagraphFirstChoice').innerHTML = "Gruppträning";
    document.querySelector('.siteBookChoiceBoxTraining').style.display = "none";
    document.querySelector('.siteBookChoiceBoxType').style.display = "grid";
}

function choiceTypeCardio() {
    document.querySelector('#siteBookParagraphSecondChoice').innerHTML = "Kondition";
    document.querySelector('.siteBookChoiceBoxType').style.display = "none";
    document.querySelector('.siteBookChoiceBoxWeek').style.display = "grid";
}