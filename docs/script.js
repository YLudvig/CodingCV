console.log('Hej från JS');

async function fetchCV() {
    try {
        const url = 'https://yludvig.github.io/CodingCV/data.json';


        const competencies = await fetch(url); 
        const data = await competencies.json();

        console.log(data);

    } catch (error) {
        console.error('Error fetching user data: ', error);
    }
}

fetchCV();

async function updateCV() {
    try {
        
    } catch (error) {
        console.error('Error fetching user data: ', error);
    }
}