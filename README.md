# Inverted-index-repo
[![Build Status](https://travis-ci.org/andela-jomadoye/Inverted-index-repo.svg?branch=master)](https://travis-ci.org/andela-jomadoye/Inverted-index-repo) [![Code Climate](https://codeclimate.com/github/andela-jomadoye/Inverted-index-repo/badges/gpa.svg)](https://codeclimate.com/github/andela-jomadoye/Inverted-index-repo) [![Test Coverage](https://codeclimate.com/github/andela-jomadoye/Inverted-index-repo/badges/issue_count.svg)](https://codeclimate.com/github/andela-jomadoye/Inverted-index-repo) [![Coverage Status](https://coveralls.io/repos/github/andela-jomadoye/Inverted-index-repo/badge.svg)](https://coveralls.io/github/andela-jomadoye/Inverted-index-repo)
[![Known Vulnerabilities](https://snyk.io/test/github/andela-jomadoye/inverted-index-repo/badge.svg)](https://snyk.io/test/github/andela-jomadoye/inverted-index-repo)

## Introduction
Inverted index takes a JSON array of text objects and creates an index from the array. The index allows a user to search for text blocks in the array that contain a specified collection of words.

## Key Features

* Supports Upload of JSON file created following the format displayed below:

```
[
    {"title": "Required",
    "text":"Do include some content on the subject matter."
    },
    {"title": "eg. Checkpoint 1",
    "text": "This Checkpoint is called inverted Index."
    }
]
```

* Creates an Index for any selected JSON file.

* Searching of a specific JSON file or all indexed JSON files.
* Find a particular index.
* Full text search of created indexes.

## Technologies
- Node.js
- EchmaScript 6 (JavaScript 2015)
- Angular.js
- Gulp (Task runner)
- Karma (Generates Test Coverage Folder)
- Browserify

## Usage
  - The app can be deployed directly to Heroku by clicking this  [button](https://slimjed.github.io/)
  - Or you can clone this repository and run the app locally.

## Local Development
- Install npm dependencies `npm install`
- Start a local server `npm start`
- To test the app run: `npm test`

## Troubleshooting & FAQ
- What is a valid file format for this app?
    - It must be a .json file.
    - It must be an array of objects.
    - It must strictly have keys of "title" and "text" for each object.

- Why is my search index showing a blank page?
    - You need to create the index of a file before you can search the file.

- Can I upload multiple Files?
    - Yes you can.

- Can I search for multiple words
    - Yes you can.

- Can I search multiple files?
    - Yes you can.

- I still dont know what this application does.
    - No problem, visit [Here](https://en.wikipedia.org/wiki/Inverted_index) or [Here](https://www.elastic.co/guide/en/elasticsearch/guide/current/inverted-index.html).

- How do I learn to use this application.
    - You can take a tour of the app by clicking the "Take a tour" button.
    - You can just play around with the application

## Contributing
1. Fork this repositry to your account.
1. Clone your repositry: `git clone git@github.com:your-username/inverted-index.git`
1. Create your feature branch: `git checkout -b new-feature`
1. Commit your changes: `git commit -m "did something"`
1. Push to the remote branch: `git push origin new-feature`
1. Open a pull request.
