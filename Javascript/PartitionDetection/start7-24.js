// function hasPartitions(width, height, walls) {
  console.log(`W: ${width} - H:${height}`);
  console.log("walls: ",walls.length, " - ", walls);

  const nWalls = walls.length;
  let passH = false;
  let passW = false;
  let xLineNums = [];
  let yLineNums = [];

// LOOP through each wall
  walls.forEach((wall, wallNum) => {
    console.log("wall# ", wallNum,":", wall)
    let xWidth = 0;
    let yHeight = 0;
    let lineMin = 0;
    let lineMax = 0;
    
// LOOP Through to grap each x point on wall
    const xPoints = wall.map((point, i) => {
      console.log("point# ", i,":", point.x);
      return point.x
    });
    console.log(xPoints, "<- xPoints")
    
    const yPoints = wall.map((point, i) => {
      console.log("point# ", i,":", point.y);
      return point.y
    });
    console.log(yPoints, "<- yPoints")
    
// find length of line
    const x1 = xPoints[0] < 0 ? 0 : xPoints[0];
    const x2 = xPoints[1] < 0 ? 0 : xPoints[1];
    const y1 = yPoints[0] < 0 ? 0 : yPoints[0];
    const y2 = yPoints[1] < 0 ? 0 : yPoints[1];
    
    xWidth = Math.abs(x2 - x1);
    yHeight = Math.abs(y2 - y1);
    
    console.log(xWidth, "< -- xLength")
    console.log(yHeight, "< -- yHeight")
    
// Check if X points are a line
    if (xWidth === 0) {
      console.log(xLineNums, " <-- xLines so far")
      console.log(" --- X = ",xPoints[0]," - LINE ----");
      console.log(xLineNums.includes(xPoints[0]), "<< includes?")
      const matchLines = xLineNums.length > 0 ? xLineNums.reduce((arr) => arr[0] === xPoints[0]) : "";
      console.log(matchLines, "<<< match line")

      if ( !matchLines) {
        xLineNums.push([xPoints[0], Math.min(...yPoints), Math.max(...yPoints) ]) // ADD MIN AND MAX Y's HERE ********
        console.log(" +++++ ADDED X Line Num +++")
      } else {
        // compare existing max wit current min/ max ]
        // and then evaluate Yheight
        matchLines[1] = Math.min(matchLines[1], ...yPoints)
        matchLines[2] = Math.max(matchLines[2], ...yPoints)
        console.log(" ++++ UPDATED min and max for line ^^  ++++")
        console.log(matchLines)
      }
    } else {
// Check if length exceeds h or W
      passW = xWidth >= width ? true : passW; 
    }
    console.log("xLines : ", xLineNums)
    
    // Check if Y points are a line
    if (yHeight === 0) {
      console.log(yLineNums, " <-- yLines so far")
      console.log(" --- Y = ",yPoints[0]," - LINE ----");
      console.log(yLineNums.includes(yPoints[0]), "<< includes?")
      const matchLines = yLineNums.length > 0 ? yLineNums.reduce((arr) => arr[0] === yPoints[0]) : "";
      console.log(matchLines, "<<< match line")

      if ( !matchLines) {
        yLineNums.push([yPoints[0], Math.min(...xPoints), Math.max(...xPoints) ]) // ADD MIN AND MAX Y's HERE ********
        console.log(" +++++ ADDED Y Line Num +++")
      } else {
        // compare existing max wit current min/ max ]
        // and then evaluate Yheight
        matchLines[1] = Math.min(matchLines[1], ...xPoints)
        matchLines[2] = Math.max(matchLines[2], ...xPoints)
        console.log(" ++++ UPDATED min and max for line ^^  ++++")
        console.log(matchLines)
      }
    } else {
// Check if length exceeds h or W
      passH = yHeight >= height ? true : passH; 
    }
    
    
    
//     const xs = wall.map((point) => point.x);
//     const ys = wall.map((point) => point.y);
//     const minX = Math.min(...xs);
//     const maxX = Math.max(...xs);
//     const minY = Math.min(...ys);
//     const maxY = Math.max(...ys);

//     const xDiff = maxX - minX;
//     const yDiff = maxY - minY;

//     if (xDiff === 0) {
//       passH = yDiff >= height ? true : passH;
//       console.log(`yDiff: ${yDiff}`);
//     }

//     if (yDiff === 0) {
//       passW = xDiff >= width ? true : passW;
//       console.log(`xDiff: ${xDiff}`);
//     }
  });

  let pass = passH || passW ? true : false;
  return pass;
}

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