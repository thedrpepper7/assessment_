const imageslider = document.querySelector('#imagesliderdots')

//every span tag (the dots)
const dots = imageslider.querySelectorAll('span');

//where the image replaces
const imageplacholder = document.querySelector('#imgcover');

//where the header replacees
const slide_header = document.querySelector('#sliderheader');

//where the description replaces 
const slide_description = document.querySelector('#sliderdescription')

const image1 = document.querySelector('#slideimg1');
const image2 = document.querySelector('#slideimg2');
const image3 = document.querySelector('#slideimg3');
const image4 = document.querySelector('#slideimg4');
const image5 = document.querySelector('#slideimg5');
const image6 = document.querySelector('#slideimg6');
const image7 = document.querySelector('#slideimg7');


let technologycompany = {
    button: image1,
    image: `img/technology.png`,
    header: `The East Of England's Leading Technology Company`,
    description: `Performance-driven digital and technology services with complete transparency.`
}

let bespokesoftware = {
    button: image2,
    image: `img/bespoke.jpg`,
    header: `Bespoke Software`,
    description: `Delivering expert bespoke software solutions across a range of industries.`
}

let itsupport = {
    button: image3,
    image: `img/it.png`,
    header: `IT Support`,
    description: `Fast and cost-effective IT support services for your business.`
}

let digitalmarketing = {
    button: image4,
    image: `img/digitalmarketing.png`,
    header: `Digital Marketing`,
    description: `Generating your new business through results-driven marketing activites.`
}

let telecomsservices = {
    button: image5,
    image: `img/telecoms.png`,
    header: `Telecoms Services`,
    description: `A new approach to connectivity, see how we can help your business`
}

let webdesign = {
    button: image6,
    image: `img/webdesign.jpg`,
    header: `Web Design`,
    description: `For businesses looking to make a strong and effective first impression`
}

let cybersecurity = {
    button: image7,
    image: `img/cyber.png`,
    header: `Cyber Security`,
    description: `Keeping businesses and their customers sensitive information protected`
}

let sliders = [
    technologycompany,
    bespokesoftware,
    itsupport,
    digitalmarketing,
    telecomsservices,
    webdesign,
    cybersecurity
]

for (let i = 0; i < dots.length; i++){
    sliders[i].button.addEventListener('click', (e)=>{
        dots.forEach(dot => {
            dot.classList.remove('selected');
            dot.classList.add('imagedots');
        })
        imageplacholder.style.backgroundImage = `url(${sliders[i].image})`;
        slide_description.innerHTML = `<strong>${sliders[i].description}</strong>`
        slide_header.innerHTML = `${sliders[i].header}`
        e.target.className = `selected`;

    })

}


