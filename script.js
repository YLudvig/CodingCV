console.log('Hej från JS');

async function fetchCV() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();

        console.log(data);

        const competencies = data.competencies;
        const proLang = data.programmingLanguages;

        console.log(competencies);
        console.log(proLang);

        const container = document.getElementById('container');

        const compDiv = document.createElement('div');

        const compHeading = document.createElement('h1');
        compHeading.textContent = 'Competencies';
        compDiv.appendChild(compHeading);

        data.competencies.forEach(comp => {

            const compLi = document.createElement('li');
            compLi.textContent = comp;
            compDiv.appendChild(compLi);
            container.append(compDiv);
        });


        const langDiv = document.createElement('div');

        const langHeading = document.createElement('h1');
        langHeading.textContent = 'Programming Languages';
        langDiv.appendChild(langHeading);
        data.programmingLanguages.forEach(lang => {

            const langLi = document.createElement('li');
            langLi.textContent = `Knowledge of ${lang.language}: ${lang.proficiency}`;
            langDiv.appendChild(langLi);

            container.appendChild(langDiv);
        });



    } catch (error) {
        console.error('Error fetching user data: ', error);
    }
}

fetchCV();

async function updateCV() {
    try {
        /*         const urlPages = 'https://yludvig.github.io/CodingCV/data.json';
         */
    } catch (error) {
        console.error('Error fetching user data: ', error);
    }
}