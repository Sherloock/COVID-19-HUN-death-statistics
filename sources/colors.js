function getColors() {
  return {
    gender: {
      women: new RGBColour(255, 99, 132, 0.6),
      men: new RGBColour(25, 99, 255, 0.6),
    },
    standalone: new RGBColour(30, 130, 30, 0.6),
    age: {
      young: new RGBColour(98, 240, 143, 0.8),
      old: new RGBColour(46, 32, 17, 0.8),
    },
  };
}

function colorTransition(cA, cB, count) {
  console.log({ cA: cA, cB: cB, count: count });

  let diff = {
    r: cA.r - cB.r,
    g: cA.g - cB.g,
    b: cA.b - cB.b,
    a: cA.a - cB.a,
  };
  console.log({ diff: diff });

  let result = [];
  for (let i = 0; i < count; i++) {
    result.push(
      new RGBColour(
        cA.r - (diff.r / count) * i,
        cA.g - (diff.g / count) * i,
        cA.b - (diff.b / count) * i,
        cA.a - (diff.a / count) * i
      )
    );
  }
  console.log({
    colorTransitionRes: result.map((a) => a.getCSSIntegerRGBA()),
  });
  return result;
}
