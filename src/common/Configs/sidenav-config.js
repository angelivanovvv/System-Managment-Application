import { library } from "@fortawesome/fontawesome-svg-core";
import { Routes } from "../ClientRoutes/clientRoutes";

import {
  faPlus,
  faTimes,
  faPencilAlt,
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";

library.add(faPlus, faPencilAlt, faTimes, faArrowLeft);

const config = [
  {
    itemName: "Add",
    itemType: "create",
    itemIcon: faPlus,
    itemSize: "2x"
  },
  {
    itemName: "Edit",
    itemType: "edit",
    itemIcon: faPencilAlt,
    itemSize: "2x"
  },
  {
    itemName: "Remove",
    itemType: "remove",
    itemIcon: faTimes,
    itemSize: "2x"
  },
  {
    itemName: "Back",
    itemType: "back",
    itemIcon: faArrowLeft,
    itemSize: "2x",
    itemLink: Routes.HOME()
  }
];

export default config;
