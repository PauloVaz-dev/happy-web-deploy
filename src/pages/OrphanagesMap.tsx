import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarkerImg from '../images/map-marker.svg';
import mapIcon from '../utils/mapIcon';
import api from '../services/api';

import '../styles/global.css';
import '../styles/pages/orphanages-map.css';

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    })
  }, []);

  return (
    <div id="page-map">
    <aside>
      <header>
        <img src={mapMarkerImg} alt="Happy" />

        <h2>Localize um ecoponto no mapa</h2>
        <p>A natureza agradece :)</p>
      </header>

      <footer>
        <strong>Natal</strong>
        <span>Rio Grande do Norte</span>
      </footer>
    </aside>

    <Map
      center={[-5.8250878664378964, -35.21860834426493]}
      zoom={12}
      style={{ width: '100%', height: '100%' }}
    >
      {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
      />

      {orphanages.map(orphanage => (
        <Marker
        key={orphanage.id}
        icon={mapIcon}
        position={[orphanage.latitude, orphanage.longitude]}
        >
          <Popup closeButton={false}  minWidth={240} maxWidth={240} className="map-popup">
            {orphanage.name}
            <Link to={`/orphanages/${orphanage.id}`}>
              <FiArrowRight size={20} color="#fff" />
            </Link>
          </Popup>
        </Marker>
      ))}
    </Map>

    <Link to="/orphanages/create" className="create-orphanage">
      <FiPlus size={32} color="#fff" />
    </Link>
  </div>
  );
};

export default OrphanagesMap;
