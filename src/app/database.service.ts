import { Injectable } from '@angular/core';

let javaScript = {
  topicName: 'JavaScript',
  articles: [
    { _id: 'article01', name: 'First Article', url: 'http://www.google.com', completed: false },
    { _id: 'article02', name: 'Second Article', url: 'http://www.yahoo.com', completed: false }
  ],
  youtubeVideos: [
    { _id: 'video01', name: 'First Video', url: 'www.google.com', completed: false },
    { _id: 'video02', name: 'Second Video', url: 'www.yahoo.com', completed: false }
  ],
  books: [
    { _id: 'book01', name: 'First Book', url: 'www.google.com', completed: false },
    { _id: 'book02', name: 'Second Book', url: 'www.yahoo.com', completed: false }
  ]
}

let nodeJs = {
  topicName: 'NodeJs',
  articles: [
    { _id: 'article01', name: 'First Article', url: 'www.google.com', completed: false },
    { _id: 'article02', name: 'Second Article', url: 'www.yahoo.com', completed: false }
  ],
  youtubeVideos: [
    { _id: 'video01', name: 'First Video', url: 'www.google.com', completed: false },
    { _id: 'video02', name: 'Second Video', url: 'www.yahoo.com', completed: false }
  ],
  books: [
    { _id: 'book01', name: 'First Book', url: 'www.google.com', completed: false },
    { _id: 'book02', name: 'Second Book', url: 'www.yahoo.com', completed: false }
  ]
}

@Injectable()
export class DatabaseService {

  sources = [ javaScript, nodeJs ]

  constructor() { }

}