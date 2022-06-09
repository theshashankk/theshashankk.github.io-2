AOS.init();

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Keinshin",
    cardImage: "https://avatars.githubusercontent.com/u/73867910?v=4",
    description: "He is good python programmer, he is known for his black lightning userbot",
  },
  {
    title: "Aditya",
    cardImage: "https://telegra.ph/file/8d057ee3f2814cb50b59c.jpg",
    description: "He is a python programmer",
  },
  {
    title: "Cyrax",
    cardImage: "https://telegra.ph/file/b30c451170c59287a97c3.jpg",
    description:
      "He is a full stack developer",
  },
  {
    title: "Gaurav",
    cardImage: "https://telegra.ph/file/bb9331bd480e0de5134c4.jpg",
    description: "He is a javascript programer",
  },
  {
    title: "Cybus",
    cardImage: "https://telegra.ph/file/4683fa8bd494b566d6a62.jpg",
    description: "He is a python programmer",
  },
  {
    title: "Athanasy Fotis",
    cardImage: "https://telegra.ph/file/2a434f5c6eb3b45bdcf75.jpg",
    description: "He is a good python programmer"
  }
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

