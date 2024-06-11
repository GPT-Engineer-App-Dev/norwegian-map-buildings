import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Container } from "@chakra-ui/react";
import BuildingInfoCard from "../components/BuildingInfoCard";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Dummy data for buildings and sensor data
const buildings = [
  {
    id: 1,
    name: "Building 1",
    position: [59.911491, 10.757933],
    sensorData: { temperature: 22, humidity: 45, co2: 400 },
  },
  {
    id: 2,
    name: "Building 2",
    position: [60.391263, 5.322054],
    sensorData: { temperature: 21, humidity: 50, co2: 420 },
  },
  {
    id: 3,
    name: "Building 3",
    position: [63.430515, 10.395053],
    sensorData: { temperature: 20, humidity: 55, co2: 410 },
  },
  {
    id: 4,
    name: "Building 4",
    position: [58.969975, 5.733107],
    sensorData: { temperature: 23, humidity: 40, co2: 430 },
  },
  {
    id: 5,
    name: "Building 5",
    position: [59.13118, 11.38754],
    sensorData: { temperature: 19, humidity: 60, co2: 440 },
  },
  {
    id: 6,
    name: "Building 6",
    position: [59.263889, 10.4075],
    sensorData: { temperature: 24, humidity: 35, co2: 450 },
  },
  {
    id: 7,
    name: "Building 7",
    position: [59.913869, 10.752245],
    sensorData: { temperature: 22, humidity: 45, co2: 400 },
  },
  {
    id: 8,
    name: "Building 8",
    position: [60.472024, 8.468946],
    sensorData: { temperature: 21, humidity: 50, co2: 420 },
  },
  {
    id: 9,
    name: "Building 9",
    position: [69.649205, 18.955324],
    sensorData: { temperature: 20, humidity: 55, co2: 410 },
  },
  {
    id: 10,
    name: "Building 10",
    position: [68.43925, 17.42158],
    sensorData: { temperature: 23, humidity: 40, co2: 430 },
  },
];

// Fix for default icon issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const Index = () => {
  const [selectedBuilding, setSelectedBuilding] = useState(null);

  return (
    <Container maxW="100vw" maxH="100vh" p={0} m={0} centerContent>
      <MapContainer
        center={[60.472024, 8.468946]}
        zoom={5}
        style={{ height: "100vh", width: "100vw" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {buildings.map((building) => (
          <Marker
            key={building.id}
            position={building.position}
            eventHandlers={{
              click: () => {
                setSelectedBuilding(building);
              },
            }}
          >
            <Popup>{building.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
      <BuildingInfoCard building={selectedBuilding} />
    </Container>
  );
};

export default Index;