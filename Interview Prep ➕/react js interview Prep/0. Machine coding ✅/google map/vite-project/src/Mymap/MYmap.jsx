
import React, { useEffect, useRef, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Autocomplete
} from "@react-google-maps/api";
import BusinessCard from "./BusinessCard";

const containerStyle = {
  width: "100%",
  height: "500px"
};

const defaultCenter = {
  lat: 28.6139,
  lng: 77.2090
};

const businessTypes = [
  "restaurant",
  "cafe",
  "bar",
  "lodging",
  "store"
];

const MapContainer = () => {
  const [center, setCenter] = useState(defaultCenter);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [autocompleteRef, setAutocompleteRef] = useState(null);
  const [places, setPlaces] = useState([]);
  const [selectedType, setSelectedType] = useState("restaurant");
  const [minRating, setMinRating] = useState(0);
  const mapRef = useRef(null);

  // Get user's location on load
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        setCurrentLocation(coords);
        setCenter(coords);
        fetchPlaces(coords, selectedType);
      },
      () => alert("Geolocation not allowed"),
      { enableHighAccuracy: true }
    );
  }, []);

  const handlePlaceChanged = () => {
    const place = autocompleteRef.getPlace();
    if (place.geometry) {
      const location = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      };
      setCenter(location);
      fetchPlaces(location, selectedType);
    }
  };

  const fetchPlaces = (location, type) => {
    const service = new window.google.maps.places.PlacesService(
      mapRef.current
    );
    const request = {
      location,
      radius: 5000,
      type
    };
    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        const filtered = results.filter(
          (p) => p.rating >= minRating
        );
        setPlaces(filtered);
      }
    });
  };

  const handleTypeChange = (e) => {
    const newType = e.target.value;
    setSelectedType(newType);
    fetchPlaces(center, newType);
  };

  const handleRatingChange = (e) => {
    const rating = parseFloat(e.target.value);
    setMinRating(rating);
    fetchPlaces(center, selectedType);
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDnwBHYVZjvlrU2FHW5ZxTs1VFPzNxXDWE"
      libraries={["places"]}
    >
      <div style={{ padding: "10px" }}>
        <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
          <Autocomplete
            onLoad={(ref) => setAutocompleteRef(ref)}
            onPlaceChanged={handlePlaceChanged}
          >
            <input
              type="text"
              placeholder="Search places"
              style={{ padding: "10px", width: "300px" }}
            />
          </Autocomplete>

          <button
            onClick={() => {
              if (currentLocation) {
                setCenter(currentLocation);
                fetchPlaces(currentLocation, selectedType);
              }
            }}
          >
            Use My Location
          </button>

          <select onChange={handleTypeChange} value={selectedType}>
            {businessTypes.map((type) => (
              <option key={type} value={type}>
                {type.toUpperCase()}
              </option>
            ))}
          </select>

          <select onChange={handleRatingChange} value={minRating}>
            <option value={0}>All Ratings</option>
            <option value={3}>3+ Stars</option>
            <option value={4}>4+ Stars</option>
            <option value={4.5}>4.5+ Stars</option>
          </select>
        </div>

        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
          onLoad={(map) => (mapRef.current = map)}
        >
          {places.map((place, idx) => (
            <Marker
              key={idx}
              position={{
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng()
              }}
            />
          ))}
        </GoogleMap>

        <div style={{ marginTop: "20px" }}>
          {places.map((place, idx) => (
            <BusinessCard key={idx} place={place} />
          ))}
        </div>
      </div>
    </LoadScript>
  );
};

export default MapContainer;
