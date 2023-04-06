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

  viewer.zoomTo(imgArr[0]);

  return <div />;
}

export default App;
