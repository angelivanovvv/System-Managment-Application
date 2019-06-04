import * as _ from "ramda";

const reduceEditDirectoryData = formData => {
  for (let prop in formData) {
    if (
      formData[prop] === undefined ||
      formData[prop] === "default" ||
      formData[prop] === null
    )
      delete formData[prop];
  }
  return formData;
};

const changeNoticePosition = (notices, index, newIndex, oldIndex) => {
  let changedPositions = [];

  for (let i = 0; i < notices.length; i++) {
    if (i === index) notices[i].position = newIndex;
    if (i === newIndex) notices[i].position = oldIndex;
    changedPositions.push(notices[i]);
  }
  return changedPositions;
};

const sortNoticeByPosition = notices => {
  const compare = (a, b) => {
    if (a.position < b.position) {
      return -1;
    }
    if (a.position > b.position) {
      return 1;
    }
    return 0;
  };

  let sortedNotices = notices.sort(compare);

  return sortedNotices;
};

const tagsToArray = value => {
  var regex = /(?:^|\s)(?:#)([a-zA-Z\d]+)/gm;
  var matches = [];
  var match;

  while ((match = regex.exec(value))) {
    matches.push(match[1]);
  }

  return matches;
};

const setFormInvalid = (self, state) => {
  return self.setState({
    ...state,
    formInvalid: true
  });
};

const clearFormInvalid = (self, state) => {
  return self.setState({
    ...state,
    formInvalid: false
  });
};

const clearNoticeState = (self, state) => {
  return self.setState({
    ...state,
    folderId: null,
    noticeName: null,
    tags: null,
    description: null,
    formErrors: {
      folderId: "",
      noticeName: "",
      tags: "",
      description: ""
    }
  });
};

const clearDirectoryState = (self, state) => {
  return self.setState({
    ...state,
    folderName: null,
    folderId: null,
    formErrors: {
      folderName: "",
      folderId: ""
    }
  });
};

export {
  setFormInvalid,
  clearFormInvalid,
  clearNoticeState,
  clearDirectoryState,
  reduceEditDirectoryData,
  tagsToArray,
  changeNoticePosition,
  sortNoticeByPosition
};
