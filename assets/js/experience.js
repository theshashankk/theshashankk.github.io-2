AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Python programming",
    cardImage: "data:image/jpeg;base64,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",
    place: "github",
    time: "(2020 - present)",
    desp: "<li>I've made some open source projects and some closed on github</li>",
  },
  {
    title: "Student Developer",
    cardImage: "assets/images/experience-page/gsoc.png",
    place: "Google Summer Of Code",
    time: "(Mar - Aug, 2020)",
    desp: "<li>Worked with MOZILLA as a part of Google Summer Of Code.</li><li>Worked on Extension Activity Monitor which is a privileged extension for Firefox that uses the activityLog API (privileged API) to monitor the activities of the other installed extensions.</li><li>The activityLog API listens for logs from other installed extensions.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "OMEGA PROJECTS",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the project ",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "Iwallet",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the iwallet.",
  },
  {
    title: "Hakin-Codes",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Was developing hacking and ddos tools.",
  },
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

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "WaffleHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/wafflehacks.png",
    desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
  },
  {
    title: "Elevate Tech",
    subtitle: "Judge",
    image: "assets/images/experience-page/elevate.png",
    desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
  },
  {
    title: "PitchTeen",
    subtitle: "Judge",
    image: "assets/images/experience-page/pitchteen.png",
    desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
  },
  {
    title: "Hack-A-Solution",
    subtitle: "Judge",
    image: "assets/images/experience-page/hackasolution.png",
    desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
  },
  {
    title: "UniGlobe Hacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/uniglobe.png",
    desp: "UniGlobe Hacks 2.0 is an upcoming 4-day long hackathon run by high school students held during 28-31 July 2021.",
  },
  {
    title: "AtlasHacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/atlas.png",
    desp: "AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.",
  },
  {
    title: "NeoHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/neo.png",
    desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
  },
  {
    title: "Mission Inspired",
    subtitle: "Judge",
    image: "assets/images/experience-page/mission.png",
    desp: "InspireEd Hacks is a nationwide initiative organized by the student-for-student nonprofit, Mission InspirEd, challenging students ages 10-18 to synthesize their creativity and coding experience into a product beneficial to the educational community.",
  },
  {
    title: "Hack3",
    subtitle: "Judge",
    image: "assets/images/experience-page/hack3.png",
    desp: "Hack3 2021 is an upcoming global online hackathon that aims to enable high school students to learn computer science, with a broader message of (everyone can code) targeting underrepresented demographics to improve diversity and inclusion of individuals in the computer technology space.",
  },
  {
    title: "JITHack",
    subtitle: "Mentor",
    image: "assets/images/experience-page/jithack.png",
    desp: "JITHack is an upcoming virtual design and development hackathon organized by the students of Jyothy Institute of Technology, Bengaluru on June 26, 2021, where participants have 24 hours to build something incredible.",
  },
  {
    title: "Recess Hacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/recess.png",
    desp: "Recess Hacks is an upcoming hackathon for high school students in the Greater Toronto Area that strives to encourage innovation among high school students and get involved in technology.",
  },
  {
    title: "Citro Tech",
    subtitle: "Mentor",
    image: "assets/images/experience-page/citro.png",
    desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
  },
  {
    title: "NHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/nhacks.png",
    desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
