// const fetch = require('node-fetch');

const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCCB0Jw056rPFh0QFtAsqg8Q&part=snippet%2Cid&order=date&maxResults=8';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b07d5af8b9msh1885a1c78e2462cp1e762bjsn5eff22dec4ff',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

async function fetchData(urlAPI) {
    const response = await fetch(urlAPI, options);
    const data = await response.json();
    return data;
}

(async ()=>{
    try { 
        const videos = await fetchData(API);
        let view = `${videos.items.map(video => `
        <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
    `).slice(0,8).join('')}
    `;

    content.innerHTML = view;
  }
    catch (e) {
        console.log(e);
    }
})();