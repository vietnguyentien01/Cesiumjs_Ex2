import React from "react";
import {
  Ion,
  Viewer,
  createWorldTerrain,
  Cartesian3,
  Entity,
  PolygonGraphics
} from "cesium";
import degreesPolygon from "./polygon.json";

function App() {
  // Your access token can be found at: https://com/ion/tokens.
  // This is the default access token
  Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1MDEzZmIzZC02Mjg2LTRkYzctYTA2OC03NjZiMTIzOWU5ZmEiLCJpZCI6MTI5Mzk0LCJpYXQiOjE2NzkyNzkxNzd9.py3wkN3X__f-hIC5640AUIETxpwq5ojaHejtV5Dz2LQ";

  let viewer = new Viewer("cesiumContainer", {
    terrainProvider: createWorldTerrain()
  });

  let arrDegreesPolygon = Object.entries(degreesPolygon);

  function returnValue() {
    let degreesArr = [];
    for (let i = 0; i < arrDegreesPolygon[i][1].length; i++) {
      degreesArr = arrDegreesPolygon[i][1];
    }
    return degreesArr;
  }

  function returnDegrees() {
    let degreesArr = [];
    let value = returnValue();
    for (let i = 0; i < value.length; i++) {
      let data = value[i];
      degreesArr = data;
    }
    return degreesArr;
  }

  var imgArr = [];
  for (let i = 0; i < arrDegreesPolygon.length; i++) {
    imgArr[i] = new Entity();
    imgArr[i].name = "Textured polygon " + i;
    let newImg = new PolygonGraphics();
    newImg.hierarchy = new Cartesian3.fromDegreesArrayHeights([
      arrDegreesPolygon[i][1][0],
      arrDegreesPolygon[i][1][1],
      arrDegreesPolygon[i][1][2],
      arrDegreesPolygon[i][1][3],
      arrDegreesPolygon[i][1][4],
      arrDegreesPolygon[i][1][5],
      arrDegreesPolygon[i][1][6],
      arrDegreesPolygon[i][1][7],
      arrDegreesPolygon[i][1][8],
      arrDegreesPolygon[i][1][9],
      arrDegreesPolygon[i][1][10],
      arrDegreesPolygon[i][1][11]
    ]);
    newImg.material = `https://obt-test-eu.s3.eu-west-1.amazonaws.com/DJI_0028/${arrDegreesPolygon[i][0].split('"').join("")}`;
    imgArr[i].polygon = newImg;
    viewer.entities.add(imgArr[i]);
  }

// const texturedPolygon = viewer.entities.add({
//   name:
//     "Extruded textured polygon with per-position heights and custom texture coordinates",
//   polygon: {
//     hierarchy: Cartesian3.fromDegreesArrayHeights([
//       arrDegreesPolygon[0][1][0],
//       arrDegreesPolygon[0][1][1],
//       arrDegreesPolygon[0][1][2],
//       arrDegreesPolygon[0][1][3],
//       arrDegreesPolygon[0][1][4],
//       arrDegreesPolygon[0][1][5],
//       arrDegreesPolygon[0][1][6],
//       arrDegreesPolygon[0][1][7],
//       arrDegreesPolygon[0][1][8],
//       arrDegreesPolygon[0][1][9],
//       arrDegreesPolygon[0][1][10],
//       arrDegreesPolygon[0][1][11]
//     ]),
//     perPositionHeight: true,
//     extrudedHeight: 0,
//     material: `https://obt-test-eu.s3.eu-west-1.amazonaws.com/DJI_0028/${arrDegreesPolygon[0][0]
//       .split('"')
//       .join("")}`
//   }
// });

// const texturedPolygon2 = viewer.entities.add({
//   name:
//     "Extruded textured polygon with per-position heights and custom texture coordinates",
//   polygon: {
//     hierarchy: Cartesian3.fromDegreesArrayHeights([
//       arrDegreesPolygon[1][1][0],
//       arrDegreesPolygon[1][1][1],
//       arrDegreesPolygon[1][1][2],
//       arrDegreesPolygon[1][1][3],
//       arrDegreesPolygon[1][1][4],
//       arrDegreesPolygon[1][1][5],
//       arrDegreesPolygon[1][1][6],
//       arrDegreesPolygon[1][1][7],
//       arrDegreesPolygon[1][1][8],
//       arrDegreesPolygon[1][1][9],
//       arrDegreesPolygon[1][1][10],
//       arrDegreesPolygon[1][1][11]
//     ]),
//     perPositionHeight: true,
//     extrudedHeight: 0,
//     material: `https://obt-test-eu.s3.eu-west-1.amazonaws.com/DJI_0028/${arrDegreesPolygon[1][0]
//       .split('"')
//       .join("")}`
//   }
// });

  viewer.zoomTo(imgArr[0]);

  return <div />;
}

export default App;
