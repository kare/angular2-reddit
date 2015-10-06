/// <reference path="typings/angular2/angular2.d.ts" />

import {
  Component,
  View,
  bootstrap,
} from "angular2/angular2";

@Component({
  selector: 'hello-world'
}) @View({
  template: `<div>Hello world</div>`
})

class HelloWorld {
}

bootstrap(HelloWorld);
