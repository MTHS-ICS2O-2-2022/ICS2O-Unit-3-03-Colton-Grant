// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Colton
// Created on: april 2023
// This program calculate the volume of a sphere

'use strict'
/**
* This function calculates area and perimeter of rectangle.
*/
function calculate() {
 // input
  const raduis = parseInt(document.getElementById('Raduis').value)



 // process
 const volume = (4/3 * Math.PI * Math.pow(raduis, 3)).toFixed(2)


 // output
  document.getElementById('volume').innerHTML =
   'volume is: ' + volume + ' cm³'
}
