import { Location } from "../../types/project";
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import { useCallback, useEffect, useState } from "react";
import { IconArrowOutSimple, IconBike, IconClose, IconMinus, IconPlus } from "../icons";
import ToggleButton from "../togglebutton";
mapboxgl.accessToken = 'pk.eyJ1Ijoia29sdHpvdyIsImEiOiJoMF9VWGNVIn0.gUcDGBeqENii_Njl1idrdQ';

const FILTERS: {
    value?: string;
    label?: string;
}[] = [
        {
            value: 'all',
            label: 'Alle',
        }, {
            value: 'schools',
            label: 'Skoler og barnehager',
        }, {
            value: 'shopping',
            label: 'Handel',
        }, {
            value: 'transport',
            label: 'Transport',
        }, {
            value: 'health',
            label: 'Helse',
        }, {
            value: 'activities',
            label: 'Aktiviteter',
        }
    ];

const Location = ({
    latitude,
    longitude,
    address,
    city,
    zip_code,
    country,
    //country_code,
}: Location) => {

    const [map, setMap] = useState<mapboxgl.Map | null>(null);
    const [fullscreen, setFullscreen] = useState(false);
    const [filter, setFilter] = useState<(string | number | boolean | null)[]>(['all']);

    const zoomIn = () => {
        map && map.zoomIn({ duration: 1000 });
    };
    const zoomOut = () => {
        map && map.zoomOut({ duration: 1000 });
    };

    const rotateCamera = useCallback((timestamp: number) => {

        // clamp the rotation between 0 -360 degrees
        // Divide timestamp by 100 to slow rotation to ~10 degrees / sec
        map && map.rotateTo((timestamp / -700) % 360, { duration: 0 });
        // Request the next frame of the animation.
        requestAnimationFrame(rotateCamera);
    }, [map]);

    const handleFullscreen = (): void => {

        if (document.fullscreenElement === null && fullscreen == false) {
            map && map.getContainer().requestFullscreen();
            setFullscreen(true);
        } else {
            document && document.fullscreenElement && document.exitFullscreen();
            setFullscreen(false);
        }
    };

    const updateFilter = (selected: boolean, returnValue: number | boolean | string | null): void => {

        let newArray = [];

        if (!selected === true) {
            newArray = [...filter].filter(v => v !== returnValue);
        } else {
            newArray = [...filter, returnValue];
        }

        setFilter(newArray);

    }

    useEffect(() => {

        if (longitude && latitude) {

            const map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v10', //'mapbox://styles/mapbox/light-v10'
                center: [longitude, latitude],
                zoom: 15,
                pitch: 45,
                bearing: 0,
                antialias: true,
                dragPan: true,
                dragRotate: false,
                //cooperativeGestures: true
            });

            //rotateCamera(0);
            map.scrollZoom.disable();

            map.on('style.load', () => {

                map.addSource('mainBuilding', {
                    'type': 'geojson',
                    'data': {
                        'type': 'Feature',
                        'properties': {},
                        'geometry': {
                            'type': 'Polygon',
                            'coordinates': [
                                [
                                    [longitude + 0.01, latitude - 0.01],
                                    [longitude + 0.01, latitude + 0.01],
                                    [longitude - 0.01, latitude + 0.01],
                                    [longitude - 0.01, latitude - 0.01],
                                ]
                            ]
                        }
                    }
                });

                // Add a new layer to visualize the polygon.
                map.addLayer({
                    'id': 'mainBuilding',
                    'type': 'fill',
                    'source': 'maine', // reference the data source
                    'layout': {},
                    'paint': {
                        'fill-color': '#0080ff', // blue color fill
                        'fill-opacity': 0.5
                    }
                });

                //add main marker
                new mapboxgl.Marker({ color: '#004afe' })
                    .setLngLat([longitude, latitude])
                    .addTo(map);

                //remove label layers to enhance the map
                for (const layer of map.getStyle().layers) {
                    if (layer && layer.type === 'symbol' && layer.layout && layer.layout['text-field']) {
                        map.removeLayer(layer.id);
                    }
                }

                map.addSource('poi', {
                    'type': 'vector',
                    'url': 'mapbox://mapbox.82pkq93d'
                });

                //add 3d buildings
                map.addLayer({
                    'id': '3d-buildings',
                    'source': 'composite',
                    'source-layer': 'building',
                    'filter': ['==', 'extrude', 'true'],
                    'type': 'fill-extrusion',
                    'minzoom': 15,
                    'paint': {
                        'fill-extrusion-color': '#ddd',
                        'fill-extrusion-height': [
                            'interpolate',
                            ['linear'],
                            ['zoom'],
                            15,
                            0,
                            15.05,
                            ['get', 'height']
                        ],
                        'fill-extrusion-base': [
                            'interpolate',
                            ['linear'],
                            ['zoom'],
                            15,
                            0,
                            15.05,
                            ['get', 'min_height']
                        ],
                        'fill-extrusion-opacity': 0.6
                    }
                });


            });

            setMap(map);

        }
    }, [latitude, longitude]);

    return (
        <div className="flex flex-col gap-8">
            <div className=" w-full flex justify-center px-8">
                <div className="w-full max-w-[1440px] flex flex-col gap-8 z-[1] relative">
                    <div>
                        <h2 className="text-2xl md:text-3xl">Beliggenhet</h2>
                        {(address || zip_code || city || country) && <p className="text-lg mt-4">{address}, {zip_code}, {city}, {country}</p>}
                    </div>
                    {latitude && longitude &&
                        <div className="flex gap-2 flex-wrap pointer-events-auto">
                            {FILTERS.map((f, i) => f.value && (
                                <ToggleButton key={i} defaultSelected={i == 0} returnValue={f.value} onChange={updateFilter}>{f.label}</ToggleButton>
                            ))}
                        </div>}
                </div>
            </div>
            {latitude && longitude &&
                <div>
                    <div className="h-[600px] md:h-[700px] w-full bg-[#ccc] relative">

                        <div id="map" className="absolute left-0 top-0 w-full h-full bg-black"></div>

                        <div className="absolute left-0 top-0 w-full h-full flex justify-center items-center px-8 pointer-events-none">

                            <div className="w-full h-full max-w-[1440px] relative">
                                <div className="absolute bg-white p-2 rounded-md left-0 top-8 z-[10] flex gap-2 items-center pointer-events-auto">
                                    <button className="flex justify-center items-center h-10 w-10 bg-secondary"><IconBike /></button>
                                    <input type="text" placeholder="Rute til" className="text-md px-4 py-3 bg-white rounded-sm" />
                                    <button className="px-4 py-3 bg-secondary  hover:bg-[#ddd] text-black rounded-full text-md">Bereg rute</button>
                                </div>
                                <button className="bg-white p-2 rounded-full hover:bg-secondary absolute right-0 bottom-32 pointer-events-auto z-[10]" onClick={handleFullscreen}>{fullscreen ? <IconClose /> : <IconArrowOutSimple />}</button>

                                <div className="flex flex-col z-[10] absolute bottom-8 right-0 pointer-events-auto">
                                    <button className="bg-white  p-2 rounded-t-full hover:bg-secondary" onClick={zoomIn}><IconPlus /></button>
                                    <button className="bg-white  p-2 rounded-b-full hover:bg-secondary" onClick={zoomOut}><IconMinus /></button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>}
        </div>
    );
};

export default Location;