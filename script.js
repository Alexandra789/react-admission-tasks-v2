const label = document.querySelector('.dropdown__filter-selected')
const options = Array.from(document.querySelectorAll('.dropdown__select-option'))
const tasksList = document.querySelectorAll('.task');

options.forEach((option) => {
    option.addEventListener('click', () => {
        label.textContent = option.textContent;
        const taskNumber = option.getAttribute('data-task-number')
        tasksList.forEach(task => task.classList.add('d-none'));
        const tasksArray = [task1, task2, task3, task4];
        document.querySelector(`.task${taskNumber}`).classList.remove('d-none');
        tasksArray[taskNumber - 1]();
    })
})

document.addEventListener('click', (e) => {
    const toggle = document.querySelector('.dropdown__switch');
    const element = e.target;

    if (element == toggle) return;

    const isDropdownChild = element.closest('.dropdown__filter');

    if (!isDropdownChild) {
        toggle.checked = false;
    }
})

function task1() {
    const terminalBody = document.querySelector('.terminal__body');
    const paragraphs = terminalBody.querySelectorAll('p');

    paragraphs.forEach(paragraph => {
        paragraph.remove();
    });

    function logMessage(firstLetter, lastLetter) {
        const firstLetterCode = firstLetter.charCodeAt(0);
        const lastLetterCode = lastLetter.charCodeAt(0) + 1;
        let currentCode = firstLetterCode;


        function logCharactersWithDelay() {
            if (currentCode < lastLetterCode) {
                console.log(String.fromCharCode(currentCode));
                terminalBody.innerHTML += `<p>${String.fromCharCode(currentCode)}</p>`;
                currentCode++;
            }

        }
        setInterval(() => { logCharactersWithDelay(); }, 1000);
    }
    logMessage('A', 'F');
}


function task2() {
    const btnContainer = document.querySelector('.task2 .button-container');
    btnContainer.innerHTML = '';

    function PoemButton(buttonCaption, alertText) {
        this.buttonCaption = buttonCaption;
        this.alertText = alertText;
    }

    PoemButton.prototype.buttonPressed = function () {
        alert(this.alertText);
    }

    PoemButton.prototype.buttonCreate = function () {
        const button = document.createElement('button');
        button.classList.add('btn');
        button.textContent = this.buttonCaption;
        button.onclick = () => this.buttonPressed();
        btnContainer.appendChild(button);
    }

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://fe.it-academy.by/Examples/test_JSE.json");
    xhr.send();
    xhr.onload = function () {
        if (xhr.status != 200) {
            console.error(`Error loading file, ${xhr.status}: ${xhr.statusText}`);
        } else {
            let responseArray = JSON.parse(xhr.response);;
            for (let i = 0; i < responseArray.length; i++) {
                new PoemButton(responseArray[i].buttonCaption, responseArray[i].alertText).buttonCreate();
            }
        }
    };
}

function task3() {
    const btnContainer = document.querySelector('.task3 .button-container');
    btnContainer.innerHTML = '';

    class PoemButton {
        constructor(buttonCaption, alertText) {
            this.buttonCaption = buttonCaption;
            this.alertText = alertText;
        }

        buttonPressed() {
            alert(this.alertText);
        }

        buttonCreate() {
            const button = document.createElement('button');
            button.classList.add('btn');
            button.textContent = this.buttonCaption;
            button.onclick = () => this.buttonPressed();
            btnContainer.appendChild(button);
        }
    }

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://fe.it-academy.by/Examples/test_JSE.json");
    xhr.send();
    xhr.onload = function () {
        if (xhr.status !== 200) {
            console.error(`Error loading file, ${xhr.status}: ${xhr.statusText}`);
        } else {
            const responseArray = JSON.parse(xhr.response);
            responseArray.forEach(item => {
                new PoemButton(item.buttonCaption, item.alertText).buttonCreate();
            });
        }
    };
}

function task4() {
    const terminalBody = document.querySelector('.terminal__body.terminal__body--height');
    const paragraphs = terminalBody.querySelectorAll('p');

    paragraphs.forEach(paragraph => {
        paragraph.remove();
    });

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://fe.it-academy.by/Examples/test_JSE.txt");
    xhr.send();
    xhr.onload = function () {
        if (xhr.status !== 200) {
            console.error(`Error loading file, ${xhr.status}: ${xhr.statusText}`);
        } else {
            const text = xhr.response;

            const regex = /(["'])(?:(?=(\\?))\2.)*?\1/g;
            const matches = text.match(regex);

            if (matches) {
                matches.forEach(match => {
                    terminalBody.innerHTML += `<p>${match}</p>`;
                    console.log(match);
                });
            }
        }
    };
}