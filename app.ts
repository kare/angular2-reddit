/// <reference path="typings/angular2/angular2.d.ts" />

import {
  Component,
  NgFor,
  View,
  bootstrap,
} from "angular2/angular2";

class Article {
  title: string;
  link: string;
  votes: number;

  constructor(title, link) {
    this.title = title;
    this.link = link;
    this.votes = 0;
  }
}

@Component({
  selector: 'reddit-article'
})

@View({
  template: `
  <article>
    <div class="votes">{{ article.votes }}</div>
    <div class="main">
      <h2>
        <a href="{{ article.link }}">{{ article.title }}</a>
      </h2>
      <ul>
        <li><a href (click)='voteUp()'>upvote</a></li>
        <li><a href (click)='voteDown()'>downvote</a></li>
      </ul>
    </div>
  </article>
  `
})

class RedditArticle {
  article: Article;
  constructor() {
    this.article = new Article('Angular 2', 'http://angular.io');
  }
  voteUp() {
    this.article.votes++
    return false
  }
  voteDown() {
    this.article.votes--
    return false
  }
}

@Component({
  selector: 'reddit'
})

@View({
  template: `
    <section class="new-link">
      <div class="control-group">
        <div><label for="title">Title:</label></div>
        <div><input name="title" #newtitle></div>
      </div>
      <div class="control-group">
        <div><label for="link">Link:</label></div>
        <div><input name="link" #newlink></div>
      </div>
      <button (click)="addArticle(newtitle, newlink)">Submit Link</button>
    </section>

    <reddit-article></reddit-article>
  `,
  directives: [RedditArticle]
})

class RedditApp {
  addArticle(title, link) {
    console.log("Adding article with title", title.value, "and link", link.value);
  }
}

bootstrap(RedditApp);
