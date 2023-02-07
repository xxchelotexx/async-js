const API = 'https://youtube-v31.p.rapidapi.com/captions?part=snippet&videoId=M7FIvfx5J10';

const content = null || document.getElementById('content');

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

(async()=>{
    try{
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video=>`
            <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
                title
                </h3>
            </div>
        ` ).slice(0,4).join('')}
            
        `;
        content.innerHTML = view;
    }catch(error){
        console.log(error);
    }
    
})();