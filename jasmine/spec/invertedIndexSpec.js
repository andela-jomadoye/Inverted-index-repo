const books = require('../jasmine/assets/correct.json');
const wrongdata = require('../jasmine/assets/wrongFormat.json');
const emptyfile = require('../jasmine/assets/emptyfile.json');
const smallfile = require('../jasmine/assets/smallcorrectfile.json');
const uniqueTermsBook = ["alice", "falls", "into", "a", "rabbit", "hole", "and", "enters", "world", "full", "of", "imagination", "an", "unusual", "alliance", "man", "elf", "dwarf", "wizard", "hobbit", "seek", "to", "destroy", "powerful", "ring"];

describe('InvertedIndex Class', () => {
  beforeAll(() => {
    this.invertedIndex = new InvertedIndex();
  });

  describe('Constructor', () => {
    it('can create inverted index instance', () => {
      expect(typeof this.invertedIndex)
        .toEqual('object');
      expect(this.invertedIndex instanceof InvertedIndex)
        .toBe(true);
    });

    it('has an indexes object to hold all indexes', () => {
      expect(typeof this.invertedIndex.indexedDB)
        .toEqual('object');
    });
  });

  describe("tokenize", () => {
    it("checks the tokenize function", () => {
      let input = "jed is a boy"
      let output = ["jed", "is", "a", "boy"];
      expect(this.invertedIndex.tokenize(input))
        .toEqual(output);
    });

    it("checks the tokenize function", () => {
      let input = "tracy is not invited to my wedding"
      let output = ["tracy", "is", "not", "invited", "to", "my", "wedding"];
      expect(this.invertedIndex.tokenize(input))
        .toEqual(output);
    });

    it("checks the tokenize function", () => {
      let input = "faith is on a call"
      let output = ["faith", "is", "on", "a", "call"];
      expect(this.invertedIndex.tokenize(input))
        .toEqual(output);
    });
  });

  describe('getTextFromJsonObj', () => {
    it('should return an array of words', () => {
      expect(this.invertedIndex.getTextFromJsonObj(smallfile))
        .toEqual(["alice", "falls", "into", "a", "rabbit"]);
    });

    it('filters out symbols', () => {
      expect(this.invertedIndex.getTextFromJsonObj(smallfile))
        .toEqual(["alice", "falls", "into", "a", "rabbit"]);
    });
  });

  describe("uniqueWords", () => {
    it("checks the uniqueWords function", () => {
      let input = ["aa", "aa", "aa"];
      let output = ["aa"];
      expect(this.invertedIndex.uniqueWords(input))
        .toEqual(output);
    });

    it("checks the uniqueWords function", () => {
      let input = ["aa", "bb", "bb", "aa"];
      let output = ['aa', 'bb'];
      expect(this.invertedIndex.uniqueWords(input))
        .toEqual(output);
    });

    it("checks the uniqueWords function", () => {
      let input = [1, 1, 1, 1];
      let output = [1];
      expect(this.invertedIndex.uniqueWords(input))
        .toEqual(output);
    });
  });

  describe('Validate Files ', () => {
    it('verifies that the JSON file is valid', () => {
      expect(this.invertedIndex.validateFile(JSON.parse(books))
          .valid)
        .toBe(true);
      expect(this.invertedIndex.validateFile(JSON.parse(wrongfile))
          .valid)
        .toBe(false);
      expect(this.invertedIndex.validateFile(JSON.parse(emptyfile))
          .valid)
        .toBe(false);
      expect(this.invertedIndex.validateFile(JSON.parse(wrongdata))
          .valid)
        .toBe(false);
    });
  });

  describe('CreateIndex', () => {
    beforeAll(() => {
      this.invertedIndex.createIndex(smallfile, ["alice", "falls", "into", "a", "rabbit"], 'smallcorrectfile.json');
      this.invertedIndex.createIndex(books, uniqueTermsBook, 'correct.json');
    });
    it('creates an index', () => {
      expect(this.invertedIndex.getIndex('correct.json'))
        .toBeTruthy();
      expect(this.invertedIndex.getIndex('smallcorrectfile.json'))
        .toBeTruthy();
    });
    it('creates the correct index', () => {
      expect(this.invertedIndex.getIndex('correct.json')
          .a)
        .toEqual([true, true, true, true]);
      expect(this.invertedIndex.getIndex('correct.json')
          .alice)
        .toEqual([true, false, false, false]);
      expect(this.invertedIndex.getIndex('smallcorrectfile.json')
          .falls)
        .toEqual([true]);
      expect(this.invertedIndex.getIndex('smallcorrectfile.json')
          .rabbit)
        .toEqual([true]);
    });
  });

  describe('GetIndex', () => {
    it('should return "undefined" if index does not exist', () => {
      expect(this.invertedIndex.getIndex(' '))
        .toEqual(undefined);
      expect(this.invertedIndex.getIndex('fakeName'))
        .toEqual(undefined);
    });
    it('returns the exact result of the index', () => {
      this.invertedIndex.createIndex(smallfile, ["alice", "falls", "into", "a", "rabbit"], 'smallcorrectfile.json');
      expect(this.invertedIndex.getIndex('smallcorrectfile.json'))
        .toEqual({
          a: [true],
          alice: [true],
          falls: [true],
          into: [true],
          rabbit: [true]
        });
    });
  });

  describe('searchIndex', () => {
    it("returns empty if element being searched for does not exist", function () {
      let keyword = "alice";
      let indexedData = {
        "dan": [false, false],
        "brown": [false, false],
        "john": [false, false],
        "grisham": [false, false]
      };
      let output = {};
      expect(this.invertedIndex.searchIndex(keyword, indexedData))
        .toEqual(output);
    });

    it("returns the element being searched for", function () {
      let keyword = "brown";
      let indexedData = {
        "dan": [false, false],
        "brown": [false, false],
        "john": [false, false],
        "grisham": [false, false]
      };
      let output = {
        "brown": [false, false]
      };
      expect(this.invertedIndex.searchIndex(keyword, indexedData))
        .toEqual(output);
    });

    it("returns the element being searched for", function () {
      let keyword = "alice";
      let indexedData = {
        "alice": [true, false, false, false],
        "falls": [false, false, false, false],
        "into": [false, false, false, false],
        "a": [true, false, false, false],
        "rabbit": [false, false, false, false],
        "hole": [false, false, false, false],
        "and": [true, false, false, false],
        "ring": [false, true, true, true]
      };
      let output = {
        "alice": [true, false, false, false]
      };
      expect(this.invertedIndex.searchIndex(keyword, indexedData))
        .toEqual(output);
    });
  });
});
