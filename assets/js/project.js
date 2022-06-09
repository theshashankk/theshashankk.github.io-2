AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Zypher",
    cardImage: "https://th.bing.com/th/id/OIP.4JpohfpcReab5qWTH17SQwHaGH?w=202&h=180&c=7&r=0&o=5&pid=1.7",
    description: "A telegram userbot made using python and telethon framework",
    tagimg: "https://th.bing.com/th/id/OIP.4JpohfpcReab5qWTH17SQwHaGH?w=202&h=180&c=7&r=0&o=5&pid=1.7",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "LionX",
    cardImage: "https://cdn5.telegram-cdn.org/file/awMdMSQUrGJcVI0jnQCgl9Akutx__lFOuH66VOHhC7wfK7iCN9OkuAz6vHC89gudp37XVnX84LJfvJUzUkeY9IV73ZWE4n43ysTnAZfm_Pw3FkBsgnXikdzsK0WjKHHFKDNO0z0WoiWQI4bPLY5_8gai-xUQBymtVxji1W-Xrjelr-l58TSv7xJAn2v7_SCuMsYGzvhqz4TIp9qrGiUq09UOLj4gF111e2Zu6Zz0YDwel0b8IGphpp94VPAqDSFxiQ5MHUugEHn2phSV19LmWT2sZQ2YxD3vvYii3q2HJ4K9F-LKsDICHEf5aj6OxVESkGAZj9C4LhQFU6jWPj9rdg.jpg",
    description: "A telegram userbot made using python and telethon framework"
  },
  {
    title: "black lightning",
    cardImage: "https://camo.githubusercontent.com/e6b8352a0343689ccffc69ea87b3539740a6e0c66644ad593005aa7a3fb461fe/68747470733a2f2f74656c656772612e70682f66696c652f3037643535643731393434613835326163366435652e6a7067",
    description: "A Powerful, Smart And Simple Userbot In Telethon."
  },
  {
    title: "yui music",
    cardImage: "https://telegra.ph/file/c83b000f004f01897fe18.png",
  }
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
