import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons"; // Import all solid icons
import { fab } from "@fortawesome/free-brands-svg-icons"; // Import all brand icons
import { far } from "@fortawesome/free-regular-svg-icons"; // Import all regular icons

// Add all icons to the library (you can also add only specific ones)
library.add(fas, fab, far);

export default FontAwesomeIcon;
