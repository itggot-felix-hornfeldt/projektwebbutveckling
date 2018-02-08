let bookInfoArr = [];

function choiceTrainingGroup() {
    document.querySelector('#siteBookParagraphFirstChoice').innerHTML = "Gruppträning";
    document.querySelector('.siteBookChoiceBoxTraining').style.display = "none";
    document.querySelector('.siteBookChoiceBoxType').style.display = "grid";
    bookInfoArr.push('Gruppträning');
}

// function choiceTypeCardio() {
//     document.querySelector('#siteBookParagraphSecondChoice').innerHTML = "Kondition";
//     document.querySelector('.siteBookChoiceBoxType').style.display = "none";
//     document.querySelector('.siteBookChoiceBoxWeek').style.display = "grid";
//     document.querySelector('.siteBookFirstArrowRight').style.display = "grid";
//     bookInfoArr.push('Konditions');
// }

function choiceTypeStrength() {
    document.querySelector('#siteBookParagraphSecondChoice').innerHTML = "Styrka";
    document.querySelector('.siteBookChoiceBoxType').style.display = "none";
    document.querySelector('.siteBookChoiceBoxWeek').style.display = "grid";
    document.querySelector('.siteBookFirstArrowRight').style.display = "grid";
    bookInfoArr.push('Styrke');
}

function choiceTypeYoga() {
    document.querySelector('#siteBookParagraphSecondChoice').innerHTML = "Yoga";
    document.querySelector('.siteBookChoiceBoxType').style.display = "none";
    document.querySelector('.siteBookChoiceBoxWeek').style.display = "grid";
    document.querySelector('.siteBookFirstArrowRight').style.display = "grid";
    bookInfoArr.push('Yoga');
}

function choiceThisWeek() {
    document.querySelector('#siteBookParagraphThirdChoice').innerHTML = "Denna veckan";
    document.querySelector('.siteBookChoiceBoxWeek').style.display = "none";
    document.querySelector('.siteBookChoiceBoxTimes').style.display = "grid";
    document.querySelector('.siteBookSecondArrowRight').style.display = "grid";
    bookInfoArr.push('nu på');
}

function choiceNextWeek() {
    document.querySelector('#siteBookParagraphThirdChoice').innerHTML = "Nästa vecka";
    document.querySelector('.siteBookChoiceBoxWeek').style.display = "none";
    document.querySelector('.siteBookChoiceBoxTimes').style.display = "grid";
    // document.querySelector('.siteBookChoiceBoxTimes').className = "siteBookChoiceBoxTimes grid"
    document.querySelector('.siteBookSecondArrowRight').style.display = "grid";
    bookInfoArr.push('nästa');
}

function choiceTime() {
    document.querySelector('#siteBookParagraphForthChoice').innerHTML = "tis 17:30";
    document.querySelector('.siteBookChoiceBoxTimes').style.display = "none";
    document.querySelector('.siteBookChoiceBoxConformation').style.display = "grid";
    document.querySelector('.siteBookThirdArrowRight').style.display = "grid";
    bookInfoArr.push('Tisdag', '17:30');
    conformationInfo();
}

function conformationInfo() {
    document.querySelector('#firstConformation').innerHTML = bookInfoArr[1];
    document.querySelector('#secondConformation').innerHTML = bookInfoArr[0];
    document.querySelector('#thirdConformation').innerHTML = bookInfoArr[2];
    document.querySelector('#forthConformation').innerHTML = bookInfoArr[3];
    document.querySelector('#fifthConformation').innerHTML = bookInfoArr[4];
}

function conformationYes() {
    document.querySelector('.siteBookChoiceBoxConformation').style.display = "none";
    document.querySelector('.siteBookChoiceBoxDone').style.display = "grid";
}

function conformationNo() {
    location.reload();
}