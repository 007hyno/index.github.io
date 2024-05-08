document.addEventListener('DOMContentLoaded', function() {

  const videoData = [
    {
      "url": "https://www.youtube.com/embed/GLClx8FOZ0s",
      "title": "PPDT | What is PPDT | Steps to understand",
      "description": "What is PPDT?",
      "duration": "5min",
      "image":"image1.webp",
      "type":"ppdt"
    },
    {
      "url": "https://www.youtube.com/embed/mn-kkuS_GGA",
      "title": "Hari Hari | DAKAIT X Aniket Raturi X 2FISTD | Nature Visuals",
      "description": "Description about the following video here..",
      "duration": "5min",
      "image":"image2.webp",
      "type":"srt"
    },
    {
      "url": "https://www.youtube.com/embed/mn-kkuS_GGA",
      "title": "Hari Hari | DAKAIT X Aniket Raturi X 2FISTD | Nature Visuals",
      "description": "Description about the following video here..",
      "duration": "5min",
      "image":"image2.webp",
      "type":"gd"
    },
    {
      "url": "https://www.youtube.com/embed/mn-kkuS_GGA",
      "title": "Hari Hari | DAKAIT X Aniket Raturi X 2FISTD | Nature Visuals",
      "description": "Description about the following video here..",
      "duration": "5min",
      "image":"image2.webp",
      "type":"wat"
    },
    {
      "url": "https://www.youtube.com/embed/mn-kkuS_GGA",
      "title": "Hari Hari | DAKAIT X Aniket Raturi X 2FISTD | Nature Visuals",
      "description": "Description about the following video here..",
      "duration": "5min",
      "image":"image2.webp",
      "type":"ppdt"
    },
    {
      "url": "https://www.youtube.com/embed/mn-kkuS_GGA",
      "title": "Hari Hari | DAKAIT X Aniket Raturi X 2FISTD | Nature Visuals",
      "description": "Description about the following video here..",
      "duration": "5min",
      "image":"image2.webp",
      "type":"wat"
    },
    {
      "url": "https://www.youtube.com/embed/mn-kkuS_GGA",
      "title": "Hari Hari | DAKAIT X Aniket Raturi X 2FISTD | Nature Visuals",
      "description": "Description about the following video here..",
      "duration": "5min",
      "image":"image2.webp",
      "type":"srt"
    },
    {
      "url": "https://www.youtube.com/embed/mn-kkuS_GGA",
      "title": "Hari Hari | DAKAIT X Aniket Raturi X 2FISTD | Nature Visuals",
      "description": "Description about the following video here..",
      "duration": "5min",
      "image":"image2.webp",
      "type":"ppdt"
    }
    // Add more video objects here following the same format
  ];

  function setYoutubeVideo(url) {
    const embedElement = document.querySelector(".video-container");
    embedElement.innerHTML = `<iframe id="youtube-video" width="560" height="315" src="${url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  }
  function generateVideoList() {
  ppdt();
  srt();
  wat();
  gd();
  }
  function generateVideoList() {
    
    videoData.forEach(video => {
      var videoListElement = document.querySelector(`.${video.type}ListContainer`);
      // videoListElement.innerHTML = ""; // Clear existing content
      const listItem = `
        <div class="listItem">
          <div class="listLeft">
            <img class="thumbnail" src="./img/${video.image}" alt="${video.title} Thumbnail" />
          </div>
          <div class="listRight">
            <p class="title">${video.title}</p>
            <p class="description">${video.description}</p>
            <p class="status">${video.duration}</p>
          </div>
        </div>
      `;
  
      const listItemElement = document.createElement('div');
      listItemElement.classList.add("listItem");
      listItemElement.innerHTML = listItem; // Set innerHTML using the template literal
  
      listItemElement.addEventListener("click", () => {
        setYoutubeVideo(video.url);
        // Scroll to top smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });      videoListElement.appendChild(listItemElement);
    });
  }
  
  // Call the function to generate the list on page load
  generateVideoList();
  setYoutubeVideo("https://www.youtube.com/embed/mn-kkuS_GGA")

});