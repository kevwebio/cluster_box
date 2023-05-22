const { cuboid, cylinder } = require('@jscad/modeling').primitives;
const { translate } = require('@jscad/modeling').transforms;
const { subtract } = require('@jscad/modeling').booleans;

const main = (params) => {
  // Extract parameters
  const { length, height, wallThickness, rodDiameter } = params;

  // Create the corner piece
  const outerCorner = cuboid({ size: [length, length, height] });
  const innerCorner = cuboid({ size: [length - wallThickness, length - wallThickness, height - wallThickness] });
  const hollowCorner = subtract(outerCorner, translate([wallThickness, wallThickness, wallThickness], innerCorner));

  // Create the rod hole
  const rodHole = cylinder({ height: height, radius: rodDiameter / 2 });
  const rodHolePosition = [-(length / 2 - wallThickness / 2 - rodDiameter / 2), -(length / 2 - wallThickness / 2 - rodDiameter / 2), 0];
  const cornerPiece = subtract(hollowCorner, translate(rodHolePosition, rodHole));

  return cornerPiece;
};

const getParameterDefinitions = () => {
  return [
    { name: 'length', type: 'number', initial: 66.5, min: 75, max: 300, step: 1, caption: 'Length & Width (mm)' },
    { name: 'height', type: 'number', initial: 33, min: 10, max: 100, step: 1, caption: 'Height (mm)' },
    { name: 'wallThickness', type: 'number', initial: 11, min: 1, max: 20, step: 1, caption: 'Wall Thickness (mm)' },
    { name: 'rodDiameter', type: 'number', initial: 7, min: 1, max: 30, step: 1, caption: 'Rod Diameter (mm)' }
  ];
};

module.exports = { main, getParameterDefinitions };
