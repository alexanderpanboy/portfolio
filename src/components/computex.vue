<template>
  <v-container>
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
        <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">Computex</h3>
      </div>
      <div style="text-align: left;">
        <div align="right">
          <router-link to="/">
         <v-btn depressed>Back to Projects</v-btn>
          </router-link>
        </div>
        <span>Computex is a project about intellectual greenhouse that is able to monitor and contorl every single paramenter of the crops</span>
        <br>
        <span>Web designs for Computex that entails:</span>
        <div style="padding: 10px;">
        <ul>
          <li>HTML5, CSS3, Javascript</li>
          <li>CSS List based navigation bar</li>
          <li>Flexbox, Transition</li>
          <li>100% width responsive background</li>
          <li>Show/Hide div that opens from a link within a page</li>
        </ul>
        </div>
        <span style="padding: 10px;"><p><strong>Programs: </strong>Vue.js (Code), Adobe XD, Adobe Photoshop (Concept Design)</p></span>
        
              </div>
      

      <v-carousel :show-arrows="false" style="height: auto;">
        <v-carousel-item
          v-for="(maccomp,i) in maccomps"
          :key="i"
          :src="maccomp.src"
        ></v-carousel-item>
      </v-carousel>


        <!-- About Section -->
        <div class="w3-container w3-padding-32" id="about">
        <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">About</h3>
<v-container>
<v-row style="justify-space-between">
  <v-col cols="5">
<div>
            <img src="/assets/about2.png" alt="Alex" style="width:100%" />
</div>
          <h3>Alexander Pan</h3>
          <p class="w3-opacity">Developer & Designer</p>

  </v-col>

  <v-col cols="7">
     <p>
          Hi there! I combine my unique, cross-cultural and interdisciplinary experiences into a tool kit that aids my clients in everything from
          branding to web design. As an freelance Web & brand Designer, I am working to integrate UX methodology and research into my work
          as a designer to create beautiful and meaningful visual experiences. My interests include data visualization,
          visual design psychology, and graphical design. You'll often find me drinking iced Americano
          (year-round) at a local coffee shop, poorly tending to my succulents, and playing with film camera.
        </p>   
    <div>
            <img src="/assets/about1.jpg" alt="Alex" style="width:100%" />
</div>
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

  </v-col>
</v-row>
</v-container>
      </div>
  
        <!-- Contact Section -->
        <div class="w3-container w3-padding-32" id="contact">
          <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">Contact</h3>
          <p>Lets get in touch and talk about your next project.</p>
          <form v-on:submit.prevent>
          <input
            class="w3-input w3-border"
            type="text"
            placeholder="Name"
            required
            name="Name"
            v-model="contacts.name"
             id="inputbox1"
          />
            <input
              class="w3-input w3-section w3-border"
              type="text"
              placeholder="Email"
              required
              name="Email"
              id="inputbox2"
            />
            <input
              class="w3-input w3-section w3-border"
              type="text"
              placeholder="Subject"
              required
              name="Subject"
              id="inputbox3"
            />
            <input
              class="w3-input w3-section w3-border"
              type="text"
              placeholder="Comment"
              required
              name="Comment"
              id="inputbox4"
            />
            <button class="w3-button w3-black w3-section" v-on:click="sendMail">
               SEND MESSAGE
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
  name: "computex",

  data() { return {

maccomps: [
    {
      src:'/assets/maccomp1.png',
    },
    {
      src:'/assets/maccomp2.png',
    },
    {
      src:'/assets/maccomp3.png',
    }, {
      src:'/assets/maccomp4.png',
    }, {
      src:'/assets/maccomp5.png',
    }, {
      src:'/assets/maccomp6.png',
    }, {
      src:'/assets/maccomp7.png',
    },
  ],
  contacts: [{ email: "", subject: "", content: "", name: "" }],

};
},
methods: {
    sendMail: function(event) {
      console.log(this.$data.contacts.email);
      emailjs.init("user_u4GAv8TMoLRBRzc85WVML");
      document.getElementById("inputbox1").value = "";
      document.getElementById("inputbox2").value = "";
      document.getElementById("inputbox3").value = "";
      document.getElementById("inputbox4").value = "";
      if (!(this.contacts.email, this.contacts.subject, this.contacts.content, this.contacts.name)) return;
      var templateParams = {
        from: this.contacts.email,
        subject: this.contacts.subject,
        content: this.contacts.content,
        name: this.contacts.name
      };

      emailjs.send("gmail", "template_SnVkR0DV", templateParams).then(
        function(response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function(error) {
          console.log("FAILED...", error);
        }
      );
    }
  }
};
</script>
