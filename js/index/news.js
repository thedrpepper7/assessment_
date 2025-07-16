const template = `
<div class="news1">
    <img src="../img/LatestNews/roys.png" alt="Roys Of Wroxham" class="newsimage"/>
    <div class="NewsTag">
        <a href="#">News</a>
    </div>
    <div class="news1header">
        <h3 class="news1title">
            Case Study: Roys of Wroxham - A Future-Proof...
        </h3>
        <p class="newsdescription">
            Who Is The Client? Roys of Wroxham is a long-established
            independant department store with deep root...
        </p>
        <p><a href="#">Read More</a></p>
        <div class="seperator"></div>
    </div>
    <div class="details">
        <img src="../img/Netmatters/netmatters-logo.png" alt="Netmatters Logo"/>
        <div><strong>Posted by Netmatters</strong> 3rd April 2025</div>
    </div>
</div>`;

const news1 = document.querySelector(".news1");
console.log(news1);

function changeTab(newsSelection) {
  const skeleton = `
    <img src="..<?= $imageLink[${newsSelection}] ?>" alt="Technician Hiring" class="newsimage"/>
    <div class="NewsTag">
    <a href="<?= $tagLink[${newsSelection}] ?>">News</a>
    </div>
    <div class="news3header">
    <h3 class="news3title">
    <?= $newsHeader[${newsSelection}] ?>
    </h3>
    <p class="newsdescription"> 
    <?= $newsContent[${newsSelection}] ?>
    </p>
    <p><a href="<?= $readmoreLink[${newsSelection}] ?>">Read More</a></p>
    <div class="seperator"></div>
    </div>
    <div class="details">
    <img src="../img/Netmatters/netmatters-logo.png" alt="Netmatters Logo"/>
    <div><strong>Posted by <?= $author[${newsSelection}] ?></strong> <?= $datePosted[${newsSelection}] ?></div>
    </div>
    `;
}
