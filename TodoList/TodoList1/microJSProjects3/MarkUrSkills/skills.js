let skillList = [{
    skillName: "HTML",
    uniqueNo: 1,
},
{
    skillName: "CSS",
    uniqueNo: 2,
},
{
    skillName: "JavaScript",
    uniqueNo: 3,
}

];
let skillListContainerElement = document.getElementById("skillListContainer");

function onMarkSkill(labelId) {
let labelReaction = document.getElementById(labelId);
labelReaction.classList.toggle("selected");
}


function createAndAppendSkill(skill) {

let checkboxId = "checkbox" + skill.uniqueNo;
let labelId = "label" + skill.uniqueNo;

let listElement = document.createElement("li");
listElement.classList.add("p-1");
skillListContainerElement.appendChild(listElement);

let inputElement = document.createElement("input");
inputElement.type = "checkbox";
inputElement.id = checkboxId;
inputElement.onclick = function() {
    onMarkSkill(labelId);
};
skillListContainerElement.appendChild(inputElement);


let labelElement = document.createElement("label");
labelElement.setAttribute("for", checkboxId);
labelElement.classList.add("checkbox-label");
labelElement.id = labelId;
labelElement.textContent = skill.skillName;
skillListContainerElement.appendChild(labelElement);

}

for (let skill of skillList) {
createAndAppendSkill(skill);
}