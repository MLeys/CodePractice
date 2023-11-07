// Check if a point (x, y) lies inside a given rectangle
function isInsideRectangle(x, y, rect) {
  const { x1, y1, x2, y2 } = rect;
  return x >= x1 && x <= x2 && y >= y1 && y <= y2;
}

// Check if two line segments intersect
function doSegmentsIntersect(a, b) {
  // Implementation of doSegmentsIntersect function (as mentioned in the previous response)
}

// Check if a shape appears inside a grid
function doesShapeAppearInGrid(width, height, gridLines, shape) {
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let isInShape = true;
      for (const line of gridLines) {
        if (isInsideRectangle(x, y, line)) {
          isInShape = false;
          break;
        }
        for (const shapeLine of shape) {
          if (doSegmentsIntersect(line.corners, shapeLine)) {
            isInShape = false;
            break;
          }
        }
        if (!isInShape) {
          break;
        }
      }
      if (isInShape) {
        return true;
      }
    }
  }
  return false;
}

// Function to check if walls divide a rectangular room into two or more partitions
function hasPartitions(width, height, walls) {
  const gridLines = walls.map((wall) => {
    const [point1, point2] = wall;
    return {
      x1: point1.x,
      y1: point1.y,
      x2: point2.x,
      y2: point2.y,
      corners: wall,
    };
  });

  // The shape, where each line segment is represented by its two points (x1, y1) and (x2, y2)
  const shape = [
    [{ x: 0, y: 0 }, { x: width, y: 0 }],
    [{ x: width, y: 0 }, { x: width, y: height }],
    [{ x: width, y: height }, { x: 0, y: height }],
    [{ x: 0, y: height }, { x: 0, y: 0 }],
  ];

  const result = doesShapeAppearInGrid(width, height, gridLines, shape);
  return result;
}