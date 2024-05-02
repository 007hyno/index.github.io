document.addEventListener('DOMContentLoaded', function() {
const videos = [
    ['https://www.youtube.com/embed/GLClx8FOZ0s', 'Hari Hari | DAKAIT X Aniket Raturi X 2FISTD | Nature Visuals', 'Description about the following video here..', '5min'],
    ['https://www.youtube.com/embed/GLClx8FOZ0s', 'Hari Hari | DAKAIT X Aniket Raturi X 2FISTD | Nature Visuals', 'Description about the following video here..', '5min'],
    ['https://www.youtube.com/embed/GLClx8FOZ0s', 'Hari Hari | DAKAIT X Aniket Raturi X 2FISTD | Nature Visuals', 'Description about the following video here..', '5min'],
    ['https://www.youtube.com/embed/GLClx8FOZ0s', 'Hari Hari | DAKAIT X Aniket Raturi X 2FISTD | Nature Visuals', 'Description about the following video here..', '5min']
  ];

  // Function to generate HTML for the video list
function generateVideoListHTML(videos) {
    return videos.map(video => {
      const [embedLink, title, description, length] = video;
      return `
        <div class="listContainer">
          <div class="listItem">
            <div class="listLeft">
              <iframe id="youtube-video" src="${embedLink}" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="listRight">
              <p class="title">${title}</p>
              <p class="description">${description}</p>
              <p class="status">${length}</p>
            </div>
          </div>
        </div>
      `;
    }).join(''); // Join all the generated items into a single string
  }
  
  // Insert the generated HTML into the DOM
  const listHTML = generateVideoListHTML(videos);
  document.querySelector('.listContainer').innerHTML = listHTML;

});