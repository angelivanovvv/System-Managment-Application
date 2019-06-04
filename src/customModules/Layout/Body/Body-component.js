import React from "react";
import { Switch, Route } from "react-router-dom";

import Pages from "../../../common/Exports/pages-export";
import { Paths } from "../../../common/ClientRoutes/clientRoutes";

class Body extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path={Paths.HOME} component={Pages.Home} />
        <Route path={Paths.ADD_DIRECTORY} component={Pages.AddDirectory} />
        <Route path={Paths.ADD_NOTE} component={Pages.AddNote} />
        <Route path={Paths.EDIT_DIRECTORY} component={Pages.EditDirectory} />
        <Route path={Paths.EDIT_NOTE} component={Pages.EditNote} />
        <Route
          path={Paths.REMOVE_DIRECTORY}
          component={Pages.RemoveDirectory}
        />
        <Route path={Paths.REMOVE_NOTE} component={Pages.RemoveNotice} />
        <Route
          path={Paths.VISIT_NOTE + "/:noticeId"}
          component={Pages.Notice}
        />
      </Switch>
    );
  }
}

export default Body;
