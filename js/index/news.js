function dataTransform(tableName) {
  const skeletons = [];

  // Loop through the first 3 items (newest 3)
  for (let i = 0; i < 3 && i < tableName.length; i++) {
    const news = tableName[i];

    const skeletonHTML = `
      <img src="${news.image_link}" alt="News Image" class="newsimage"/>
      <div class="NewsTag">
        <a href="${news.tag_link}">News</a>
      </div>
      <div class="newsheader">
        <h3 class="newstitle">${news.news_header}</h3>
        <p class="newsdescription">${news.news_content}</p>
        <p><a href="${news.read_more_link}">Read More</a></p>
        <div class="seperator"></div>
      </div>
      <div class="details">
        <img src="img/Netmatters/netmatters-logo.png" alt="Netmatters Logo"/>
        <strong>Posted by ${news.author}</strong> ${news.date_posted}
      </div>
    `;

    skeletons.push(skeletonHTML);
  }

  return skeletons;
}

// run the function to get the 3 cards
const skeletons = dataTransform(newsItems);

// add the content from skeleton into html
for (let i = 0; i < skeletons.length; i++) {
  document.querySelector(`.news${i + 1}`).innerHTML = skeletons[i];
}
