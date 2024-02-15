import React, { useLayoutEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
    useLayoutEffect(() => {
        const existingMap = L.DomUtil.get('map');
        const wrapper = existingMap.querySelector('.leaflet-control-container')
        if (!wrapper) {
            const map = L.map('map').setView([51.505, -0.09], 13);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors',
            }).addTo(map);
        }
    }, []);

    return (
        <div id="map" style={{ height: '400px', width: '100%' }}>
            {/* Карта будет отображена здесь */}
        </div>
    );
};

export default Map;