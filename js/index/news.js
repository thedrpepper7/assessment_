function dataTransform(tableName) {
  const amountNewsEntries = tableName.length;
  const usedIndexes = [];
  const skeletons = [];

  // Keep picking random numbers until there are 3 unique
  while (usedIndexes.length < 3) {
    const randomIndex = Math.floor(Math.random() * amountNewsEntries);
    if (!usedIndexes.includes(randomIndex)) {
      usedIndexes.push(randomIndex);

      // Skeleton Html
      const news = tableName[randomIndex];
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
  }

  return skeletons;
}

const skeletons = dataTransform(newsItems);

document.querySelector(".news1").innerHTML = skeletons[0];
document.querySelector(".news2").innerHTML = skeletons[1];
document.querySelector(".news3").innerHTML = skeletons[2];
