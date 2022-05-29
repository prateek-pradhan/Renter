import { React, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "../assets/constants";
import dialog from "./Popup";



const Map = () => {
  
  return (
    <div>
      <div
        id="map"
        className="w-full h-[90px] items-center text-center justify-center p-10 mt-[100px] ml-[100px] mr-[100px] mb-[100px]"
      >
        <MapContainer
          center={[30.735060, 76.750505]}
          zoom={15}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker icon = {icon} position={[30.735060, 76.750505]}>
            <Popup>
              <a href="result.html">
              Bikes : 2 <br />
              Pennyboards: 5 <br />
              </a>
            </Popup>
          </Marker>

          <Marker icon = {icon} position={[30.728693, 76.745317]}>
            <Popup>
              Bikes : 2 <br />
              Rollerblades: 4 <br />
            </Popup>
          </Marker>
          <Marker icon = {icon} position={[30.732444, 76.766786]}>
            <Popup>
              Rollerblades : 2 <br />
              Umbrellas: 3 <br />
            </Popup>
          </Marker>
          <Marker icon = {icon} position={[30.729761, 76.767960]}>
            <Popup>
              Rollerblades : 2 <br />
              Umbrellas: 3 <br />
            </Popup>
          </Marker>
          <Marker icon = {icon} position={[30.730579, 76.762021]}>
            <Popup>
              Rollerblades : 2 <br />
              Umbrellas: 4 <br />
            </Popup>
          </Marker>
          
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
