import { faFolder, faStickyNote } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import { Routes } from "../ClientRoutes/clientRoutes";

library.add(faFolder, faStickyNote);

const ModalTypes = {
  type: {
    create: "create",
    edit: "edit",
    remove: "remove"
  }
};

const AddModal = {
  typeClass: "ang-create",
  title: "Create",
  description: "Folder or Notice",
  options: [
    {
      title: "Folder",
      icon: faFolder,
      link: Routes.ADD_DIRECTORY(),
      size: "3x",
      style: {
        marginBottom: "10px"
      }
    },
    {
      title: "Notice",
      icon: faStickyNote,
      size: "3x",
      link: Routes.ADD_NOTE(),
      style: {
        marginBottom: "10px"
      }
    }
  ]
};

const EditModal = {
  typeClass: "ang-edit",
  title: "Edit",
  description: "Folder or Notice",
  options: [
    {
      title: "Folder",
      icon: faFolder,
      size: "3x",
      link: Routes.EDIT_DIRECTORY(),
      style: {
        marginBottom: "10px"
      }
    },
    {
      title: "Notice",
      icon: faStickyNote,
      size: "3x",
      link: Routes.EDIT_NOTE(),
      style: {
        marginBottom: "10px"
      }
    }
  ]
};

const RemoveModal = {
  typeClass: "ang-remove",
  title: "Remove",
  description: "Folder or Notice",
  options: [
    {
      title: "Folder",
      icon: faFolder,
      size: "3x",
      link: Routes.REMOVE_DIRECTORY(),
      style: {
        marginBottom: "10px"
      }
    },
    {
      title: "Notice",
      icon: faStickyNote,
      size: "3x",
      link: Routes.REMOVE_NOTE(),
      style: {
        marginBottom: "10px"
      }
    }
  ]
};

export { ModalTypes, AddModal, EditModal, RemoveModal };
