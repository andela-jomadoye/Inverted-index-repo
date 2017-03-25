/**
 * The Inverted Index class.
 * @class
 */
class InvertedIndex {

  /**
   * [constructor description]
   * @return {[type]} [description]
   */
  constructor() {
    this.unique = [];
    this.tableObj = {};
  }

  /**
   * [searchAllFiles description]
   * @return {[type]} [description]
   */
  searchAllFiles() {
    return this.tableObj;
  }

  /**
   * A method that tokenizes the string that is passed through it
   * @param  {[string]} data [the string that is gotten from the "text" key in the JSON object]
   * @return {[String]}      [returns an Array of strings]
   */
  tokenize(data) {
    this.terms = data.replace(/[^\w\s]/gi, ' ')
      .match(/\w+/g);
    return this.terms;
  }

  /**
   * A method that filters the array passed into it for unique words
   * @param {[String]} data [Array of strings]
   * @returns {[String]} Returns array
   */
  uniqueWords(data) {
    this.unique = [...new Set(data)];
    return this.unique;
  }

  /**
   * A method that tokenizes an object value and gets the unique terms in the object values
   * @param  {[Object]} fileJsonObject [the uploaded JSON file object]
   * @return {[Array]}  Returns an array of the unique terms
   */
  getTextFromJsonObj(fileJsonObject) {
    let newText = ' ';
    Object.keys(fileJsonObject)
      .forEach((key) => {
        const obj = fileJsonObject[key];
        newText += ' ';
        newText += obj.text;
      });
    const uniqueTerms = this.uniqueWords(this.tokenize(newText))
      .map(x => x.toLowerCase());
      console.log(uniqueTerms);
    return uniqueTerms;
  }

  /**
   * A method to validate a JSON file.
   * it checks if the file has an extension of .json
   * it check if the format of the .json file contains strictly
   * keys of ["title","text"]
   *
   * @param {[Object]} parsedFile object
   * @returns {[Object]} Returns boolean and a message.
   */
  validateFile(parsedFile) {
    this.isValid = {
      valid: false,
      message: 'This is an Invalid JSON File',
    };
    Object.keys(parsedFile)
      .forEach((key) => {
        const obj = parsedFile[key];
        const validFormat = ['title', 'text'];
        const parsedFileFormat = Object.keys(obj);
        const arr = Object.keys(parsedFileFormat)
          .map(objKeys => parsedFileFormat[objKeys]);
        if (validFormat.toString() === arr.toString()) {
          this.isValid = {
            valid: true,
            message: 'This JSON Format is correct',
          };
        } else {
          this.isValid = {
            valid: false,
            message: 'This JSON Format is Incorrect',
          };
        }
      });
    return this.isValid;
  }

  /**
   * A method that create the index
   *
   * @param  {[Object]} fileJsonObject [the uploaded file object]
   * @param  {[Array]} uniqueTerms    [the unique terms in the JSON file]
   * @param  {[String]} fileName    [The file name]
   * @return {[Object]}  Returns a promise containing an object
   */
  createIndex(fileJsonObject, uniqueTerms, fileName) {
    const indexedDB = {};
    uniqueTerms.forEach((uniqueKeys) => {
      const arr = [];
      fileJsonObject.forEach((jsonObjText) => {
        arr.push((jsonObjText.text.toLowerCase())
          .includes(uniqueKeys));
      });
      indexedDB[uniqueKeys] = arr;
    });
    return this.tableObj[fileName] = indexedDB;
  }

  /**
   * A method that a specific index from the database object
   *
   * @param {[String]} fileName [the file name]
   * @return {[Object]} [It returns an object containing keys of filenames and values of arrays]
   */
  getIndex(fileName) {
    return this.tableObj[fileName];
  }


  /**
   * immediatly the user starts typing on the search box, this if statemant becomes,
   * true, because "keyword" becomes equal to a string and it's length is greater than 0.
   * i created a new object, that contained only the element the user inputed in the searchbox,
   * and i used it to populate the table.
   * Searches through the table for a keyword
   * @param  {[String]} keywords     [The string you are currently typing]
   * @param  {[Object]} indexedData [An object of the table you are currently searching on]
   * @return {[Object]}             [A filtered down version of the object you are currently
   *                                   searching, based on the string you are typing]
   */
  searchIndex(keywords, indexedData) {
    if (keywords !== undefined && keywords.length > 0) {
      const keyword = keywords.replace(/[^\w\s]/gi, ' ')
        .match(/\w+/g);
      this.data = {};
      keyword.forEach((KEY) => {
        const key = KEY.toLowerCase();
        if (key in indexedData) {
          this.data[key] = indexedData[key];
        }
      });
      return this.data;
    }
    return indexedData;
  }

}
module.exports.InvertedIndex = InvertedIndex;
