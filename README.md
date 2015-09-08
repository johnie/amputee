# amputee

> A super-small, non-dependent JavaScript framework that allows you to slice up your HTML in separate files.

## Examples

To test the examples you have run it with a server. In this example we are using `serve`.

```
npm install -g serve
serve .
```

Go to [http://localhost:3000/examples](http://localhost:3000/examples).

## Install

**Bower**
```bash
$ bower install amputee
```

**npm**
```bash
$ npm install amputee
```

## Usage

```html
<html>
  <head>
    <title>amputee</title>
    <meta charset="UTF-8">
  <body>
    
    <amputee src="hello.html"></amputee>

    <script src="amputee.js"></script>
```

**hello.html**

```html
<h1>Hello World</h1>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit…</p>
```

## Contribute

See the [contributing guide](CONTRIBUTING.md)

### Licence

[MIT](licence) © Johnie Hjelm
