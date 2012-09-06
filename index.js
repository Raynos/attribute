var forEach = require("iterators").forEachSync
    , Delta = require("delta-stream")

module.exports = AttributeStream

function AttributeStream(elem) {
    var delta = Delta()

    delta.on("changes", setAttribute)

    return delta

    function setAttribute(key, value) {
        elem.setAttribute(key, value)
    }
}