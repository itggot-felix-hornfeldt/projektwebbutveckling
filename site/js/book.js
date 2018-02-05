function choiceTrainingGroup() {
    document.querySelector('#siteBookParagraphFirstChoice').innerHTML = "Gruppträning";
    document.querySelector('.siteBookChoiceBoxTraining').style.display = "none";
    document.querySelector('.siteBookChoiceBoxType').style.display = "grid";
}

function choiceTypeCardio() {
    document.querySelector('#siteBookParagraphSecondChoice').innerHTML = "Kondition";
    document.querySelector('.siteBookChoiceBoxType').style.display = "none";
    document.querySelector('.siteBookChoiceBoxWeek').style.display = "grid";
    document.querySelector('.siteBookFirstArrowRight').style.display = "grid";
}

function choiceTypeStrength() {
    document.querySelector('#siteBookParagraphSecondChoice').innerHTML = "Styrka";
    document.querySelector('.siteBookChoiceBoxType').style.display = "none";
    document.querySelector('.siteBookChoiceBoxWeek').style.display = "grid";
    document.querySelector('.siteBookFirstArrowRight').style.display = "grid";
}

function choiceTypeYoga() {
    document.querySelector('#siteBookParagraphSecondChoice').innerHTML = "Yoga";
    document.querySelector('.siteBookChoiceBoxType').style.display = "none";
    document.querySelector('.siteBookChoiceBoxWeek').style.display = "grid";
    document.querySelector('.siteBookFirstArrowRight').style.display = "grid";
}

function choiceThisWeek() {
    document.querySelector('#siteBookParagraphThirdChoice').innerHTML = "Denna veckan";
    document.querySelector('.siteBookChoiceBoxWeek').style.display = "none";
    document.querySelector('.siteBookChoiceBoxTimes').style.display = "grid";
    document.querySelector('.siteBookSecondArrowRight').style.display = "grid";
}

function choiceNextWeek() {
    document.querySelector('#siteBookParagraphThirdChoice').innerHTML = "Nästa vecka";
    document.querySelector('.siteBookChoiceBoxWeek').style.display = "none";
    document.querySelector('.siteBookChoiceBoxTimes').style.display = "grid";
    document.querySelector('.siteBookSecondArrowRight').style.display = "grid";
}