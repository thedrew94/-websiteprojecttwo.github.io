'use strict';


//ALERT PROJECT INFO
alert("This project is a replica of the official Hakone Navi website.\n\
It was created with the goal of refining my skills in JavaScript, HTML, and CSS.\n\
Some features are still under development and may differ from the original.Not yet 100% implemented for phone\n\
This project was completed by Tornyai Laurentiu Andrei.");

//MAP DISPLAY

const map = L.map('map').setView([35.227764, 139.032011], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([35.227764, 139.032011]).addTo(map)
    .bindPopup('Welcome to Hakone')
    .openPopup();
    

// 35.227764, 139.032011
