<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="about">
    <button class="back-button" @click="router.push({ path: '/' })">
      <svg
        width="24px"
        height="24px"
        viewBox="-19.04 0 75.803 75.803"
        xmlns="http://www.w3.org/2000/svg"
        fill="#eee"
        stroke="#eee"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <g id="Group_64" data-name="Group 64" transform="translate(-624.082 -383.588)">
            <path
              id="Path_56"
              data-name="Path 56"
              d="M660.313,383.588a1.5,1.5,0,0,1,1.06,2.561l-33.556,33.56a2.528,2.528,0,0,0,0,3.564l33.556,33.558a1.5,1.5,0,0,1-2.121,2.121L625.7,425.394a5.527,5.527,0,0,1,0-7.807l33.556-33.559A1.5,1.5,0,0,1,660.313,383.588Z"
              fill="#eee"
            ></path>
          </g>
        </g>
      </svg>
    </button>
    <div class="money">
      <p class="donate-text">
        If you'd like to donate to support continued development of this project please click one of
        these QR code links or follow them with your camera:
      </p>
      <a href="https://www.paypal.com/paypalme/jufebrown" target="_blank"
        ><img class="paypal" src="../assets/qrcode.png" alt="paypal.me/jufebrown"
      /></a>
      <a
        href="https://venmo.com/code?user_id=2268761788776448525&created=1780816737"
        target="_blank"
        ><img class="venmo" src="../assets/venmo.png" alt="@JufeB"
      /></a>
    </div>
    <div class="about-text">
      <div class="project-text">
        <h1>About This Project:</h1>
        <p>
          I wanted to see if there was any correlation between when AI execs spout their doomer
          narratives and major events like product releases and funding rounds. This is my attempt
          to make the data easier to visualize. Other events are added out of interest. The site is
          made in Vue without AI assistance. It's all front end. It doesn't capture user data. I'm
          working on it in my free time and will be adding content and features when I can.
        </p>
        <p>
          Github repo:
          <a href="https://github.com/Jufebrown/bubble-timeline"
            >https://github.com/Jufebrown/bubble-timeline</a
          >
        </p>
        <p>
          Trello board:
          <a
            href="https://trello.com/invite/b/6a0ad01737ef364e99468649/ATTI95f0f3af5e2eadb966e4daa44d65f57b97222860/ai-bubble-timeline"
            >AI Bubble Timeline Trello</a
          >
        </p>
        <p>Acknowledgements:</p>
        <p>
          I am very appreciative of the exhaustive research performed by
          <a href="https://www.wheresyoured.at/">Ed Zitron</a>. He has been talking about the AI
          bubble for years.
          <br />
          As a software engineer I've been really enjoying the work of
          <a href="https://calnewport.com/">Cal Newport</a>,
          <a href="https://internetofbugs.com/">Carl Brown</a> and
          <a href="https://www.youtube.com/@atmoio">Mo Bitar.</a> Each has their own style of
          clearly explaining the how and why of AI hype.
        </p>
        <p>
          I used Issa Rice's amazingly thorough wikis as a jumping off point for many of the
          datapoints in this project. This is their wiki on OpenAI:
          <a href="https://timelines.issarice.com/wiki/Timeline_of_OpenAI"
            >https://timelines.issarice.com/wiki/Timeline_of_OpenAI</a
          >
        </p>
        <p>
          The AI Incident Database also provided a wealth of material.
          <a href="https://incidentdatabase.ai/">https://incidentdatabase.ai/</a>
        </p>
        <p>
          All of the svg images used in the navigation are from
          <a href="https://www.svgrepo.com/">https://www.svgrepo.com/</a>
        </p>
      </div>
      <div class="author-text">
        <h1>About The Author:</h1>
        <p>
          I was an AI enthusiast until I tried to use it. Thinking that LLMs used a mix of reason
          and web searches, I asked Google Gemini a research question about serial killers and
          religion. Unfortunately, this was in the fall of 2025 and the AI doomer narrative was
          everywhere. The chatbot ended up telling me that AI would likely wipe out humanity and
          backed its assertions with convincing arguments from Dario Amodei, Geoffrey Hinton and
          Eliezer Yudkowsky among others. I spent the next 2 months in a state of AI psychosis,
          alternately arguing with chatbots on behalf of humanity and prodding them to try to see
          how they functioned. I was probing for weaknesses to use in what I thought would be a
          coming war with the machines. Through it all I kept questioning why anyone (like Amodei)
          would build something if they truly believed that it could cause our extinction.
          Eventually the disconnect between the doomer message and the flawed responses that I was
          receiving became too much and I broke free of the psychosis. The experience opened my eyes
          to the true evil: the greed and rapacity of men like Dario Amodei, Sam Altman, Elon Musk
          and Jensen Huang. They speak as if they are concerned about the welfare of humanity while
          building an autocomplete that runs on environmental and economic devastation.
        </p>
        <p>
          Since the psychosis, I have learned how LLMs actually work. They use probability to
          predict the next token based on their training data. There is no knowledge of how anything
          in the world works. There's no knowledge and no reasoning. They don't know if what they
          say is true or not and they don't remember or care.
        </p>
        <p>
          So I went from thinking AI was pretty cool, to fearing it, to feeling nothing but disdain
          for it and the people that are promoting it. What a great product. I can't wait for the
          bubble to burst.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
p {
  margin-bottom: 0.5em;
}

h1 {
  margin: 0 auto 0.5em 0;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

a {
  text-decoration: none;
  color: #eee;
  font-weight: bold;
}

.back-button {
  position: fixed;
  background-color: #181818;
  box-shadow: none;
  border: none;
  outline: none;
  color: #eee;
  display: flex;
  flex-direction: row;
  align-items: center;
  left: 3em;
  top: 8em;
  cursor: pointer;
}

.about {
  width: 50%;
  margin: 4em auto 4em auto;
  display: flex;
  flex-direction: row;
}

.money {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 7.5em;
}

.donate-text {
  text-align: right;
}

.paypal {
  width: 11em;
  height: 11em;
}

.venmo {
  padding-top: 1em;
  width: 11em;
}

.about-text {
  padding: 2em 2em 0 2em;
  color: #eee;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 5em 0 0 4em;
  overflow-y: auto;
}

.author-text {
  margin: 5em 0;
}

@media (max-width: 992px) {
  .about {
    flex-direction: column;
  }

  .donate-text {
    text-align: left;
  }

  .paypal {
    width: 15em;
    height: 15em;
  }

  .venmo {
    width: 15em;
  }

  .about-text {
    padding: 0;
    margin: 3em 0;
  }
}
</style>
