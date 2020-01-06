<template>
  <div id="app">
    <HelloWorld></HelloWorld>
    <div class="w3-top">
      <div style="display:flex" class="w3-bar w3-white w3-wide w3-padding w3-card">
        <a href="#home" class="w3-bar-item w3-button">
          <b>Alexander</b> Pan
        </a>
        <div style="margin-left:auto; margin-right:0">
          <a href='https://www.facebook.com/a0912716568' target="_blank"> <v-btn icon small style="padding-right:8px;">
            <v-icon>{{fbLogo}}</v-icon>
          </v-btn></a>
          <a href='https://www.instagram.com/alexanderpanboy' target="_blank"> <v-btn icon small style="padding-right:8px;">
            <v-icon>{{igLogo}}</v-icon>
          </v-btn></a>
          <a href='https://github.com/alexanderpanboy' target="_blank"><v-btn icon small style="padding-right:8px;">
            <v-icon>{{gitHubLogo}}</v-icon>
          </v-btn></a>
          <a href='https://www.linkedin.com/in/alexander-a-pan-444755151' target="_blank"><v-btn icon small style="padding-right:8px;">
            <v-icon>{{linkedInLogo}}</v-icon>
          </v-btn></a>
        </div>

        <!-- Float links to the right. Hide them on small screens -->
        <div class="w3-right w3-hide-small">
          <a href="#projects" class="w3-bar-item w3-button">Projects</a>
          <a href="#about" class="w3-bar-item w3-button">About</a>
          <a href="#contact" class="w3-bar-item w3-button">Contact</a>
        </div>
      </div>
    </div>

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
          <div class="w3-display-container">
            <div class="w3-display-topleft w3-black w3-padding">Apex Metalle Design</div>
            <img src="/assets/metalle.jpg" alt="Apex" style="width:100%" />
          </div>
        </div>
        <div class="w3-col l3 m6 w3-margin-bottom">
          <div class="w3-display-container">
            <div class="w3-display-topleft w3-black w3-padding">Ubet</div>
            <img src="/assets/ubet.jpg" alt="Ubet" style="width:100%" />
          </div>
        </div>
        <div class="w3-col l3 m6 w3-margin-bottom">
          <div class="w3-display-container">
            <div class="w3-display-topleft w3-black w3-padding">GFaceManager</div>
            <img src="/assets/gFace.jpg" alt="GFace" style="width:100%" />
          </div>
        </div>
        <div class="w3-col l3 m6 w3-margin-bottom">
          <div class="w3-display-container">
            <div class="w3-display-topleft w3-black w3-padding">Wood Coffee Company</div>
            <img src="/assets/woodCoffee.jpg" alt="WOOD" style="width:100%" />
          </div>
        </div>
      </div>

      <div class="w3-row-padding">
        <div class="w3-col l3 m6 w3-margin-bottom">
          <div class="w3-display-container">
            <div class="w3-display-topleft w3-black w3-padding">mag</div>
            <img src="/w3images/house4.jpg" alt="House" style="width:99%" />
          </div>
        </div>
        <div class="w3-col l3 m6 w3-margin-bottom">
          <div class="w3-display-container">
            <div class="w3-display-topleft w3-black w3-padding">foto</div>
            <img src="/w3images/house3.jpg" alt="House" style="width:99%" />
          </div>
        </div>
      </div>

      <!-- About Section -->
      <div class="w3-container w3-padding-32" id="about">
        <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">About</h3>
        <p>Hi there! I combine my unique design experiences into a tool kit that aids my clients in everything from branding to web design. As an HCI student, I am working to integrate UX methodology and research into my work as a designer to create beautiful and meaningful visual experiences. My interests include data visualization, visual design psychology, and micro-interaction design. You'll often find me drinking iced Americano (year-round) at a local coffee shop, poorly tending to my succulents, and playing with film camera.</p>
      </div>

      <div class="w3-row-padding w3-redscale">
        <div class="w3-col l3 m6 w3-margin-bottom">
          <div>
            <img src="/assets/alexProfilePic.jpg" alt="Alex" style="width:100%" />
          </div>
          <h3>Alexander Pan</h3>
          <p class="w3-opacity">CEO & Founder</p>
          <p>
            I'm a Designer with a passion for effective design that helps both the client and user achieve their goals.
            I'm currently pursuing a Master's degree in Human-Computer Interaction and Design at UC Irvine while working as an intern full stack developer at GIGABYTE Technology. Feel free to take a look at some of my work.
          </p>
          <p>
            <button class="w3-button w3-light-grey w3-block">Contact</button>
            <a href='https://documentcloud.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3Ab7d88a64-e0a7-4615-8b49-83fc18d28f35' target="_blank"><button class="w3-button w3-light-grey w3-block">Resume</button></a>
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

    <!-- Footer -->
    <footer class="w3-center w3-black w3-padding-16">
      <p>
        Powered by
        <a
          href="https://www.w3schools.com/w3css/default.asp"
          title="W3.CSS"
          target="_blank"
          class="w3-hover-text-green"
        >w3.css</a>
      </p>
    </footer>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import {
  mdiFacebook,
  mdiInstagram,
  mdiGithubCircle,
  mdiLinkedin
} from "@mdi/js";

export default {
  name: "app",
  components: {
    HelloWorld
  },
  data() {
    return {
      fbLogo: mdiFacebook,
      igLogo: mdiInstagram,
      gitHubLogo: mdiGithubCircle,
      linkedInLogo: mdiLinkedin
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.w3-animate-zoom {
  animation: animatezoom 2.7s;
}
</style>
