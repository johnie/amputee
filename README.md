# amputee

> A super-small (505 B gzipped), non-dependent JavaScript framework that allows you to slice up your HTML in separate files.

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

## Examples

You can't run the examples via the `file://` protocol so you have run it with a server. In this example we are using `serve`.

Go to [http://localhost:3000/examples](http://localhost:3000/examples).

```
npm install -g serve
serve .
```

## Contribute

See the [contributing guide](CONTRIBUTING.md)

### Licence

[MIT](licence) © Johnie Hjelm
