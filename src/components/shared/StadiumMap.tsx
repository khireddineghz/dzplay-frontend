import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Leaflet with webpack/vite
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

interface StadiumMapProps {
  latitude: number;
  longitude: number;
  stadiumName: string;
  address: string;
}

export const StadiumMap = ({ latitude, longitude, stadiumName, address }: StadiumMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || mapInstance.current) return;

    // Initialize map
    const map = L.map(mapContainer.current, {
      center: [latitude, longitude],
      zoom: 15,
      zoomControl: true,
      scrollWheelZoom: false,
    });

    mapInstance.current = map;

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    // Create custom marker icon
    const customIcon = L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="
          background: linear-gradient(135deg, #7f13ec 0%, #5e0eb0 100%);
          width: 40px;
          height: 40px;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 8px rgba(127, 19, 236, 0.4);
        ">
          <span style="
            transform: rotate(45deg);
            color: white;
            font-size: 20px;
            margin-top: -4px;
          " class="material-symbols-outlined">sports_soccer</span>
        </div>
      `,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    });

    // Add marker
    const marker = L.marker([latitude, longitude], { icon: customIcon }).addTo(map);

    // Add popup
    marker.bindPopup(`
      <div style="font-family: 'Lexend', sans-serif; min-width: 200px;">
        <h3 style="margin: 0 0 8px 0; color: #1e293b; font-weight: 700; font-size: 14px;">${stadiumName}</h3>
        <p style="margin: 0 0 12px 0; color: #64748b; font-size: 12px; line-height: 1.4;">${address}</p>
        <a 
          href="https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}" 
          target="_blank" 
          rel="noopener noreferrer"
          style="
            display: inline-flex;
            align-items: center;
            gap: 4px;
            color: #7f13ec;
            font-weight: 600;
            font-size: 12px;
            text-decoration: none;
          "
        >
          <span>Open in Google Maps</span>
          <span class="material-symbols-outlined" style="font-size: 14px;">open_in_new</span>
        </a>
      </div>
    `);

    // Open popup by default
    marker.openPopup();

    // Cleanup
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [latitude, longitude, stadiumName, address]);

  return (
    <div className="relative w-full h-[320px] rounded-xl overflow-hidden shadow-md">
      <div ref={mapContainer} className="w-full h-full" />
      <style>{`
        .leaflet-popup-content-wrapper {
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
        .leaflet-popup-tip {
          display: none;
        }
        .custom-marker {
          background: transparent;
          border: none;
        }
      `}</style>
    </div>
  );
};
