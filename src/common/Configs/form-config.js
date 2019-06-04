const searchConfig = Object.freeze({
  SIMPLE_SEARCH: [
    { key: "noteInput", type: "text", placeholder: "Enter notice name..." }
  ],
  ADVANCE_SEARCH: [
    { key: "noteInput", type: "text", placeholder: "Enter notice name..." },
    { key: "contentInput", type: "text", placeholder: "Enter content..." },
    { key: "tagsInput", type: "text", placeholder: "Entar tag..." }
  ]
});

export default searchConfig;
