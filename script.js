// 지도 초기화
const map = L.map('map').setView([36.5, 127.8], 7);

// OSM 타일 레이어 추가
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// 마커 추가 예시
L.marker([37.5665, 126.9780])
  .addTo(map)
  .bindPopup('서울: 범죄 다발 지역')
  .openPopup();

L.marker([35.173117, 129.071407])
.addTo(map)
.bindPopup('부산: 화재 및 자살 다발 지역')
.openPopup();

L.marker([37.410190, 127.515813])
.addTo(map)
.bindPopup('경기: 범죄 다발 지역')
.openPopup();

L.marker([35.149077, 126.854055])
.addTo(map)
.bindPopup('광주: 교통사고 다발 지역')
.openPopup();

L.marker([37.466203, 126.632807])
.addTo(map)
.bindPopup('인천: 감염병 다발 지역')
.openPopup();

L.marker([36.358697, 127.384009])
.addTo(map)
.bindPopup('대전: 범죄 다발 지역')
.openPopup();

L.marker([35.536198, 129.327366])
.addTo(map)
.bindPopup('울산: 자살 다발 지역')
.openPopup();

L.marker([33.384854, 126.537772])
.addTo(map)
.bindPopup('제주: 생활안전 및 범죄 다발 지역')
.openPopup();

L.marker([35.450162, 128.196781])
.addTo(map)
.bindPopup('경남: 범죄 다발 지역')
.openPopup();

L.marker([36.282993, 128.861877])
.addTo(map)
.bindPopup('경북: 교통사고 다발 지역')
.openPopup();

L.marker([34.878466, 126.952020])
.addTo(map)
.bindPopup('전남: 감염병 및 화재 다발 지역')
.openPopup();

L.marker([35.723890, 127.155736])
.addTo(map)
.bindPopup('전북: 교통사고 다발 지역')
.openPopup();

L.marker([37.830809, 128.180021])
.addTo(map)
.bindPopup('강원: 자살 다발 지역')
.openPopup();


L.marker([36.992646, 127.636902])
.addTo(map)
.bindPopup('충북: 자살 다발 지역')
.openPopup();

L.marker([36.724541, 126.768982])
.addTo(map)
.bindPopup('충남: 생활안전 및 자살 다발 지역')
.openPopup();