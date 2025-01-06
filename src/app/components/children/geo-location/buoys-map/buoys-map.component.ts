import { AfterViewInit, OnInit, Component } from '@angular/core';
import * as LeafletMap from 'leaflet';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-buoys-map',
  standalone: true,
  imports: [],
  templateUrl: './buoys-map.component.html',
  styleUrl: './buoys-map.component.css'
})
export class BuoysMapComponent implements OnInit, AfterViewInit {

  private map!: L.Map
  markers: L.Marker[] = [
    LeafletMap.marker([-23.9880567, 31.2251997]),
  ];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initMap();
    this.centerMap();
  }


  private initMap() {
    const baseMapURl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    this.map = LeafletMap.map('map');
    LeafletMap.tileLayer(baseMapURl).addTo(this.map);

    LeafletMap.marker([-24.029367, 31.466426], {
      icon: LeafletMap.divIcon({
        className: 'custom-marker-red',
        html: `<i class="${PrimeIcons.MAP_MARKER}"></i>`,
        iconSize: [32, 32]
      })
    }).addTo(this.map);

    LeafletMap.marker([-24.033964, 31.488252], {
      icon: LeafletMap.divIcon({
        className: 'custom-marker-red',
        html: `<i class="${PrimeIcons.MAP_MARKER}"></i>`,
        iconSize: [32, 32]
      })
    }).addTo(this.map);

    LeafletMap.marker([-24.035534, 31.556885], {
      icon: LeafletMap.divIcon({
        className: 'custom-marker-red',
        html: `<i class="${PrimeIcons.MAP_MARKER}"></i>`,
        iconSize: [32, 32]
      })
    }).addTo(this.map);

    LeafletMap.marker([-24.043149, 31.576774], {
      icon: LeafletMap.divIcon({
        className: 'custom-marker-red',
        html: `<i class="${PrimeIcons.MAP_MARKER}"></i>`,
        iconSize: [32, 32]
      })
    }).addTo(this.map);

    LeafletMap.marker([-24.049308, 31.609002], {
      icon: LeafletMap.divIcon({
        className: 'custom-marker-red',
        html: `<i class="${PrimeIcons.MAP_MARKER}"></i>`,
        iconSize: [32, 32]
      })
    }).addTo(this.map);

    LeafletMap.marker([-24.017998, 31.636993], {
      icon: LeafletMap.divIcon({
        className: 'custom-marker-red',
        html: `<i class="${PrimeIcons.MAP_MARKER}"></i>`,
        iconSize: [32, 32]
      })
    }).addTo(this.map);

  }


  private centerMap() {

    const bounds = LeafletMap.latLngBounds(this.markers.map(marker => marker.getLatLng()));
    
    this.map.fitBounds(bounds);

    this.map.setZoom(10);

  }


}