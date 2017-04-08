// Instance the tour
const tour = new Tour({
  steps: [{
    element: '.fileUpload',
    title: 'Select a JSON file',
    content: "Select a JSON file with keys of 'title' and 'text'.",
  }, {
    element: '.uploadFile',
    title: 'Save File',
    content: 'Click this button to save the file(s) to the local storage.',
  }, {
    element: '.createIndex',
    title: 'Create Inverted-Index',
    content: 'Click this button to create the index of a file.',
  }, {
    element: '.searchIndex',
    title: 'Search Index ',
    content: 'Type here to search for one or more words in the index table.',
  }, {
    element: '#uploadedFilesSearch',
    title: 'Select file',
    content: 'Select a file to search or "all" to search all files',
  }, {
    element: '.well',
    title: 'For more Info',
    content: 'Read here for more info, or make a pull request on the repo',
  }],
  backdrop: true,
  storage: false,
});
tour.init();

startTour = () => {
  tour.restart();
};
