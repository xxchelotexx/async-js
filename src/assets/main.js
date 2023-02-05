const API = 'https://youtube-v31.p.rapidapi.com/captions?part=snippet&videoId=M7FIvfx5J10';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f90da44e63msh588ea659c84a6fcp1c4804jsn3086e833211b',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData (urlAPI){
    const response = await fetch(urlAPI, options);
    const data = await response.json();
    return data;
}

