<template>
  <v-container>
    <!-- Header -->
    <header
      class="w3-display-container w3-content w3-wide w3-animate-zoom"
      style="max-width:1500px;"
      id="home"
    >
      <img class="w3-image" src="/assets/mainPage.jpg" alt="MainPage" width="1500" height="800" />
      <div class="w3-display-middle w3-margin-top w3-center">
        <h1 class="w3-xxlarge w3-text-white">
          <span class="w3-padding w3-black w3-opacity-min">
            <b>Alexander</b>
          </span>
          <span class="w3-hide-small w3-text-light-grey">Pan</span>
        </h1>
      </div>
    </header>

    <!-- Page content -->
    <div class="w3-content w3-padding" style="max-width:1564px">
      <!-- Project Section -->
      <div class="w3-container w3-padding-32" id="projects">
        <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">Projects</h3>
      </div>

      <div class="w3-row-padding">
        <div class="w3-col l3 m6 w3-margin-bottom">
          <router-link to="/metalle">
          <div class="w3-display-container projectsPhoto" type="button">
           
              <div class="w3-display-topleft w3-black w3-padding">Apex Metalle Design</div>
              <img src="/assets/metalle.jpg" alt="Apex" style="width:100%" />
           
          </div>
        </router-link>
        </div>
        <div class="w3-col l3 m6 w3-margin-bottom">
          <router-link to="/computex">
          <div class="w3-display-container projectsPhoto" type="button">
            <div class="w3-display-topleft w3-black w3-padding">Computex</div>
            <img src="/assets/computex.png" alt="GreenHouse" style="width:100%" />
          </div>
          </router-link>
        </div>
        <div class="w3-col l3 m6 w3-margin-bottom">
          <router-link to="/gface">
          <div class="w3-display-container projectsPhoto" type="button">
            <div class="w3-display-topleft w3-black w3-padding">GFaceManager</div>
            <img src="/assets/gFace.jpg" alt="GFace" style="width:100%" />
          </div>
          </router-link>
        </div>
        <div class="w3-col l3 m6 w3-margin-bottom">
          <router-link to="/wood">
          <div class="w3-display-container projectsPhoto" type="button">
            <div class="w3-display-topleft w3-black w3-padding">WOOD Coffee Company</div>
            <img src="/assets/woodCoffee.jpg" alt="WOOD" style="width:100%" />
          </div>
          </router-link>
        </div>
      </div>

      <div class="w3-row-padding">
        <div class="w3-col l3 m6 w3-margin-bottom">
          <div class="w3-display-container projectsPhoto" type="button">
            <div class="w3-display-topleft w3-black w3-padding">Postgirl</div>
            <img src="/assets/postgirl.png" alt="Postgirl" style="width:100%" />
          </div>
        </div>
        <div class="w3-col l3 m6 w3-margin-bottom">
          <div class="w3-display-container projectsPhoto" type="button">
            <div class="w3-display-topleft w3-black w3-padding">Ubet</div>
            <img src="/assets/dice.png" alt="Ubet" style="width:100%;" />
          </div>
        </div>
      </div>

      <!-- About Section -->
      <div class="w3-container w3-padding-32" id="about">
        <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">About</h3>
        <p>
          Hi there! I combine my unique, cross-cultural and interdisciplinary experiences into a tool kit that aids my clients in everything from
          branding to web design. As an freelance Web & brand Designer, I am working to integrate UX methodology and research into my work
          as a designer to create beautiful and meaningful visual experiences. My interests include data visualization,
          visual design psychology, and graphical design. You'll often find me drinking iced Americano
          (year-round) at a local coffee shop, poorly tending to my succulents, and playing with film camera.
        </p>
      </div>

      <div class="w3-row-padding w3-redscal aboutBox" align="center">
        <!-- WTFWTFWTF -->
        <div class="w3-col l3 m6 w3-margin-bottom">
          <div>
            <img src="/assets/alexProfilePic.jpg" alt="Alex" style="width:100%" />
          </div>
          <h3>Alexander Pan</h3>
          <p class="w3-opacity">Developer & Designer</p>
          <p>
            I'm a Designer with a passion for effective design that helps both the client and user achieve their goals.
            I'm currently planing on pursuing a Master's degree in Human-Computer Interaction while working
            as an Full-Stack Developer intern at GIGABYTE Technology. Feel free to take a look at some of my work.
          </p>
          <p>
            <a href="#contact">
              <button style="margin-bottom:5px;" class="w3-button w3-dark-grey w3-block">Contact</button>
            </a>
            <a href="/assets/APAN.pdf" target="_blank">
              <button class="w3-button w3-dark-grey w3-block">Resume</button>
            </a>
          </p>
        </div>
      </div>

      <!-- Contact Section -->
      <div class="w3-container w3-padding-32" id="contact">
        <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">Contact</h3>
        <p>Lets get in touch and talk about your next project.</p>
        <form action="/action_page.php" target="_blank">
          <input class="w3-input w3-border" type="text" placeholder="Name" required name="Name" />
          <input
            class="w3-input w3-section w3-border"
            type="text"
            placeholder="Email"
            required
            name="Email"
          />
          <input
            class="w3-input w3-section w3-border"
            type="text"
            placeholder="Subject"
            required
            name="Subject"
          />
          <input
            class="w3-input w3-section w3-border"
            type="text"
            placeholder="Comment"
            required
            name="Comment"
          />
          <button class="w3-button w3-black w3-section" type="submit">
            <i class="fa fa-paper-plane"></i> SEND MESSAGE
          </button>
        </form>
      </div>

      <!-- Image of location/map -->
      <div class="w3-container">
        <img src="/assets/mountainView.jpg" class="w3-image" style="width:100%" />
      </div>

      <!-- End page content -->
    </div>
  </v-container>
</template>

<script>
export default {
  name: "aa",

  data: () => ({}),

  $( document ){ready(function() {
 Email.send({
Host : "smtp.gmail.com",
Username : "a0912716568",
Password : "Alex37123712@",
To : 'them@website.com',
From : "a0912716568@gmail.com",
Subject : "This is the subject",
Body : "And this is the body"}).then( message => alert(message));});
},}
</script>
