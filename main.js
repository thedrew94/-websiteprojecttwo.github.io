'use strict';

//MAP DISPLAY

const map = L.map('map').setView([35.227764, 139.032011], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([35.227764, 139.032011]).addTo(map)
    .bindPopup('Welcome to Hakone')
    .openPopup();
    

// 35.227764, 139.032011
