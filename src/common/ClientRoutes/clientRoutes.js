import { push } from "react-router-redux";

// static paths for pages
const Paths = Object.freeze({
  HOME: "/",

  ADD_DIRECTORY: "/add-directory",
  ADD_NOTE: "/add-note",

  EDIT_DIRECTORY: "/edit-directory",
  EDIT_NOTE: "/edit-note",

  VISIT_NOTE: "/note",

  REMOVE_DIRECTORY: "/remove-directory",
  REMOVE_NOTE: "/remove-note"
});

// routes for navigation to all pages
const Routes = Object.freeze({
  HOME: () => Paths.HOME,

  ADD_DIRECTORY: () => Paths.ADD_DIRECTORY,
  ADD_NOTE: () => Paths.ADD_NOTE,

  EDIT_DIRECTORY: () => Paths.EDIT_DIRECTORY,
  EDIT_NOTE: () => Paths.EDIT_NOTE,

  REMOVE_DIRECTORY: () => Paths.REMOVE_DIRECTORY,
  REMOVE_NOTE: () => Paths.REMOVE_NOTE,

  VISIT_NOTE: id => `${Paths.VISIT_NOTE}/${id}`

  // EDIT_DIRECTORY_BY_ID: id => `${Paths.EDIT_DIRECTORY}/${id}`,
  // EDIT_NOTE_BY_ID: id => `${Paths.EDIT_NOTE}/${id}`,

  // REMOVE_DIRECTORY_BY_ID: id => `${Paths.REMOVE_DIRECTORY}/${id}`,
  // REMOVE_NOTE_BY_ID: id => `${Paths.REMOVE_NOTE}/${id}`,
});

// routes action for nagivation to all pages
const RoutesActions = Object.freeze({
  toHome: () => push(Routes.HOME()),
  toEditDirectory: () => push(Routes.EDIT_DIRECTORY())
});

export { Paths, Routes, RoutesActions };
