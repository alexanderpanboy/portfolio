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
        <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">GFaceManager</h3>
      </div>
      <div style="text-align: left;">
        <span>GFaceManager is a project about Face Recognition System of GIGABYTE Technology that has demonstrated its potential over multiple applications</span>
        <br>
        <span>Web designs for GFaceManager that entails:</span>
        <div style="padding: 10px;">
        <ul>
          <li>HTML5, CSS3, Javascript</li>
          <li>CSS List based navigation bar</li>
          <li>Flexbox, Transition</li>
          <li>100% width responsive background</li>
          <li>Show/Hide div that opens from a link within a page</li>
        </ul>
        </div>
        <span style="padding: 10px;"><p><strong>Programs: </strong>Vue.js (Code for Web page), Adobe XD, Adobe Photoshop (Concept Design), Python (ML Algorithm), OpenVINO (ML Model)</p></span>
        
              </div>

      <v-carousel :show-arrows="false">
        <v-carousel-item
          v-for="(macgf,i) in macgfs"
          :key="i"
          :src="macgf.src"
        ></v-carousel-item>
      </v-carousel>


        <!-- About Section -->
        <div class="w3-container w3-padding-32" id="about">
          <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16" style="display: flex;">About</h3>
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
  name: "gface",

  data() { return {

macgfs: [
        {
          src:'/assets/macgf1.jpg',
    
        },
        {
          src:'/assets/macgf2.jpg',
    
        },  {
          src:'/assets/macgf3.jpg',
    
        },  {
          src:'/assets/macgf4.jpg',
    
        }, {
          src:'/assets/macgf5.jpg',
    
        },
      ],
      contacts: [{ email: "", subject: "", content: "", name: "" }],

};
},
methods: {
    sendMail: function(event) {
      console.log(this.$data.contacts.email);
      emailjs.init("user_u4GAv8TMoLRBRzc85WVML");
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
