/**Method that instantiates and injects the app into the DOM */
import { createApp } from "vue";
/**Root component */
import App from "./App.vue";
//Global styles import
import "./assets/global.css";

/**Mount the root component */
createApp(App).mount("#app");
