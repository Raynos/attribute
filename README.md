# attribute

Stream that updates attributes on elements

## Example

Creates a [delta-stream][1] which when written to updates attributes

``` js
var delta = Attribute(someElement)

delta.set("anyAttribute", "anyValue")
```

## Installation

`npm install attribute`

## Contributors

 - Raynos

## MIT Licenced

  [1]: http://github.com/Raynos/delta-stream