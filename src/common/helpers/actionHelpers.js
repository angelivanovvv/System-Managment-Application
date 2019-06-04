import * as _ from "ramda";

const transformDirectoriesList = directories => {
  var indexMap = {};
  let currentNode;
  let result = {};

  if (!Array.isArray(directories)) {
    return (result = {});
  }

  for (let i = 0; i < directories.length; i++) {
    indexMap[directories[i].id] = i;
    directories[i].children = [];
  }

  for (let i = 0; i < directories.length; i++) {
    currentNode = directories[i];

    if (currentNode.parentId !== undefined) {
      directories[indexMap[currentNode.parentId]].children.push(currentNode);
    } else {
      result = directories[0];
    }
  }

  return result;
};

const transformSingleDirectory = (sngDir, directories) => {
  let result = {
    id: sngDir.id,
    name: sngDir.name,
    parentId: sngDir.parentId
  };

  let hasChildren = directories.filter(directory => {
    return result.id === parseInt(directory.parentId);
  });

  result.children = hasChildren;

  if (result.parentId == undefined) delete result.parentId;

  return result;
};

const filterNotices = (notices, dirId) => {
  let filteredNotes = [];
  let id = parseInt(dirId);

  filteredNotes = notices.filter(singleNote => {
    return parseInt(singleNote.directoryId) === id;
  });

  return filteredNotes;
};

const filterDirectoriesForItem = (directories, item) => {
  return directories.filter(directory => {
    return directory.name !== item;
  });
};

const filterDirectoriesForRoot = (directories, root) => {
  return directories.filter(directory => {
    return directory.name === root;
  });
};

/*---------------------- SEARCH HELPERS ---------------------*/

const findByTitle = (title, items) => {
  let toLowerTitle = _.toLower(title);
  let toLowerItems = _.map(item => {
    return {
      id: item.id,
      title: _.toLower(item.title)
    };
  }, items);

  return _.find(_.propEq("title", toLowerTitle))(toLowerItems);
};

const getByName = notices => {
  return notices.map(notice => {
    return _.pick(["id", "title"], notice);
  });
};

const advanceFilter = (value, list) => {
  return list.filter(item => {
    if (item["title"].indexOf(value) > -1) {
      return item;
    } else if (item["description"].indexOf(value) > -1) {
      return item;
    } else if (_.indexOf(value, item["tags"]) > -1) {
      return item;
    }
  });
};

export {
  transformDirectoriesList,
  transformSingleDirectory,
  filterNotices,
  filterDirectoriesForItem,
  filterDirectoriesForRoot,
  findByTitle,
  getByName,
  advanceFilter
};
