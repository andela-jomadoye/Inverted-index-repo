// Instance the tour
const tour = new Tour({
  steps: [{
    element: '.chooseFile',
    title: 'Select a JSON file',
    content: "Select a JSON file with keys of 'title' and 'text'.",
  }, {
    element: '.uploadFile',
    title: 'Save File',
    content: 'Click this button to save the file or files to the local storage.',
  }, {
    element: '.createIndex',
    title: 'Create Inverted-Index',
    content: 'Click this button to create the index of a file.',
  }, {
    element: '.searchIndex',
    title: 'Search Index ',
    content: 'Type here to search for one or more words in the index table.',
  }, {
    element: '.verticalLine',
    title: 'For more Info',
    content: 'Read here for more information, or make a pull request on the repository',
  }],
  backdrop: true,
  storage: false,
});
tour.init();

startTour = () => {
  tour.restart();
};
