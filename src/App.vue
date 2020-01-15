<template>
  <div id="app">
    <div class="w3-top">
      <div style="display:flex" class="w3-bar w3-white w3-wide w3-padding w3-card">
        <a href="#home" class="w3-bar-item w3-button">
          <b>Alexander</b> Pan
        </a>
        <div style="margin-left:auto; margin-right:0">
          <a href="https://www.facebook.com/a0912716568" target="_blank">
            <v-btn icon small style="padding-right:18px; padding-left:8px;">
              <v-icon>{{fbLogo}}</v-icon>
            </v-btn>
          </a>
          <a href="https://www.instagram.com/alexanderpanboy" target="_blank">
            <v-btn icon small style="padding-right:18px; padding-left:8px;">
              <v-icon>{{igLogo}}</v-icon>
            </v-btn>
          </a>
          <a href="https://github.com/alexanderpanboy" target="_blank">
            <v-btn icon small style="padding-right:18px; padding-left:8px;">
              <v-icon>{{gitHubLogo}}</v-icon>
            </v-btn>
          </a>
          <a href="https://www.linkedin.com/in/alexander-a-pan-444755151" target="_blank">
            <v-btn icon small style="padding-right:18px; padding-left:8px;">
              <v-icon>{{linkedInLogo}}</v-icon>
            </v-btn>
          </a>
        </div>
        <!-- Float links to the right. Hide them on small screens -->
        <div class="w3-right w3-hide-small">
          <a href="#projects" class="w3-bar-item w3-button">Projects</a>
          <a href="#about" class="w3-bar-item w3-button">About</a>
          <a href="#contact" class="w3-bar-item w3-button">Contact</a>
        </div>
      </div>
    </div>

    <router-view></router-view>

    <!-- Footer -->
    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-title class="w3-dark-grey">
          <strong class="subheading">Get connected with me on social networks!</strong>
          <div style="margin-left:auto; margin-right:0">
            <a href="https://www.facebook.com/a0912716568" target="_blank">
              <v-btn icon small style="padding-right:18px; padding-left:8px;">
                <v-icon>{{fbLogo}}</v-icon>
              </v-btn>
            </a>
            <a href="https://www.instagram.com/alexanderpanboy" target="_blank">
              <v-btn icon small style="padding-right:18px; padding-left:8px;">
                <v-icon>{{igLogo}}</v-icon>
              </v-btn>
            </a>
            <a href="https://github.com/alexanderpanboy" target="_blank">
              <v-btn icon small style="padding-right:18px; padding-left:8px;">
                <v-icon>{{gitHubLogo}}</v-icon>
              </v-btn>
            </a>
            <a href="https://www.linkedin.com/in/alexander-a-pan-444755151" target="_blank">
              <v-btn icon small style="padding-right:18px; padding-left:8px;">
                <v-icon>{{linkedInLogo}}</v-icon>
              </v-btn>
            </a>
          </div>
        </v-card-title>
        <v-card-text class="w3-black py-2 white--text text-center">
          <v-icon>{{copyRightLogo}}</v-icon>
          {{ new Date().getFullYear() }} —
          <strong>Alexander Pan</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
import {
  mdiFacebook,
  mdiInstagram,
  mdiGithubCircle,
  mdiLinkedin,
  mdiCopyright
} from "@mdi/js";

export default {
  name: "app",
  components: {},
  data() {
    return {
      fbLogo: mdiFacebook,
      igLogo: mdiInstagram,
      gitHubLogo: mdiGithubCircle,
      linkedInLogo: mdiLinkedin,
      copyRightLogo: mdiCopyright
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
.projectsPhoto > div {
  z-index: 2;
}
.projectsPhoto > img:hover {
  transform: scale(1.2);
  transition: all 500ms ease-in;
  filter: invert(1);
  opacity: 0.5;
}

.projectsPhoto {
  overflow: hidden;
}
.aboutBox {
  margin: 0 auto;
}
.v-image__image--cover {
  background-size: contain !important;
}
</style>