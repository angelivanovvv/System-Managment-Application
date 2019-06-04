import Layout from "../../customModules/Layout/Layout-container";
import Body from "../../customModules/Layout/Body/Body-component";

import Home from "../../customModules/Home/Home-container";

import AddDirectory from "../../customModules/Folders/АddFolder/Add-container";
import EditDirectory from "../../customModules/Folders/EditFolder/Edit-container";
import RemoveDirectory from "../../customModules/Folders/RemoveFolder/Remove-container";

import AddNotice from "../../customModules/Notices/AddNotice/Add-container";
import EditNotice from "../../customModules/Notices/EditNotice/Edit-container";
import RemoveNotice from "../../customModules/Notices/RemoveNotice/Remove-container";
import Notice from "../../customModules/Notices/Notice/Notice-container";

const Pages = Object.freeze({
  Layout: Layout,
  Body: Body,
  Home: Home,
  AddDirectory: AddDirectory,
  EditDirectory: EditDirectory,
  RemoveDirectory: RemoveDirectory,
  AddNote: AddNotice,
  EditNote: EditNotice,
  RemoveNotice: RemoveNotice,
  Notice: Notice
});

export default Pages;
