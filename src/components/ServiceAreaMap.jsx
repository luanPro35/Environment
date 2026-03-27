import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle, CircleMarker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default Leaflet marker icons in React (needed if we use standard Markers)
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const ServiceAreaMap = () => {
  const mainLocation = [39.6133, -105.0210]; // Littleton
  
  // Example project "dots" (red dots) - These can be updated by the user later
  const previousProjects = [
    { pos: [39.6133, -105.0210], name: "Retaining Wall - Littleton" },
    { pos: [39.6800, -105.0800], name: "Sod Installation - Lakewood" },
    { pos: [39.5600, -104.9900], name: "Flower Bed Design - Highlands Ranch" },
    { pos: [39.7392, -104.9903], name: "Hardscape Project - Denver" },
    { pos: [39.6478, -104.9878], name: "Lawn Maintenance - Englewood" },
  ];

  return (
    <div className="h-full w-full rounded-sm overflow-hidden border-[2px] border-[#5aa142]/20 shadow-2xl z-0">
      <MapContainer 
        center={mainLocation} 
        zoom={10} 
        scrollWheelZoom={false} 
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Main Service Area (Large faint green circle) */}
        <Circle
          center={mainLocation}
          pathOptions={{ fillColor: '#5aa142', color: '#5aa142', weight: 1, opacity: 0.2, fillOpacity: 0.05 }}
          radius={25000} // 25km radius
        />

        {/* Project Points (Red dots with selection circles) */}
        {previousProjects.map((proj, idx) => (
          <React.Fragment key={idx}>
            {/* The "Khoanh tròn" (Visual Ring/Selection) - As requested by user */}
            <Circle 
              center={proj.pos}
              radius={800} 
              pathOptions={{ color: '#ef4444', weight: 1, fillOpacity: 0, opacity: 0.5 }}
            />
            {/* The "Điểm đỏ" (Red Solid Dot / Point) */}
            <CircleMarker
              center={proj.pos}
              pathOptions={{ fillColor: '#ef4444', color: 'white', weight: 2, fillOpacity: 1, opacity: 1 }}
              radius={7}
            >
               <Popup>
                <div className="text-[#1d4f79] font-bold text-sm">
                  {proj.name}
                  <div className="text-[10px] text-gray-500 font-normal mt-1 uppercase tracking-widest">Completed Project</div>
                </div>
              </Popup>
            </CircleMarker>
          </React.Fragment>
        ))}
      </MapContainer>
    </div>
  );
};

export default ServiceAreaMap;
