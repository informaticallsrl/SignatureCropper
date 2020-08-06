const sharp = require("sharp");

const inputFile = "assets/test.png"
const outputFile = "assets/result.png"

// Ratio = 5
const maxHeight = 80
const maxWidth = 400

sharp(inputFile)
  .trim()
  //.flatten({r:255,g: 255, b:255})
  .resize({width: maxWidth * 0.95, height: maxHeight * 0.95, fit: sharp.fit.contain, background: {r:255,g: 255, b:255}})
  .extend ({
    top: maxHeight * 0.25,
    bottom: maxHeight * 0.25,
    left: maxWidth * 0.25,
    right: maxWidth * 0.25,
    background: {r:255,g: 255, b:255}
  })
  .flatten({r:255,g: 255, b:255})
  .toFile(outputFile, function(err) {
    // Extract a region, resize, then extract from the resized image
  });

  