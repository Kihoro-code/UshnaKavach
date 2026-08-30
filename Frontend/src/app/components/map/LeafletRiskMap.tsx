import { useEffect, useMemo } from "react";
import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { INDIA_STATES_FEATURE_COLLECTION, type StateFeature } from "../../lib/indiaGeo";
import { riskColor, riskLevelForScore, type RiskLevel } from "../../lib/colors";
import type { RegionSummary } from "../../lib/types";

// Deterministic per-state risk so the choropleth is stable (not random each render).
function stateRisk(id: string): number {
  let h = 2166136261;
  for (let i = 0; i < id.length; i++) {
    h ^= id.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  const u = ((h >>> 0) % 1000) / 1000;
  return Math.round(15 + u * 85);
}

interface Props {
  regions?: RegionSummary[];
  selectedState?: string;
  onSelectRegion?: (regionId: string) => void;
  height?: number;
}

/** Alternative Leaflet choropleth of Indian states, coloured by heat risk.
 *  This is the token-free fallback the handoff calls for — one click to swap to it. */
export function LeafletRiskMap({ regions = [], selectedState, onSelectRegion, height = 460 }: Props) {
  // Map region → state abbreviation for the active-level hover. Regions have ids like
  // "mh-nagpur"; the two-letter state code is embedded in the id prefix + region list.
  const stateToRegion = useMemo(() => {
    const map: Record<string, RegionSummary> = {};
    for (const r of regions) {
      const code = r.id.split("-")[0]?.toUpperCase();
      if (code && !map[code]) map[code] = r;
    }
    return map;
  }, [regions]);

  function styleFor(feature: StateFeature) {
    const code = feature.properties.id;
    const region = stateToRegion[code];
    const score = region ? region.risk_score : stateRisk(code);
    const level: RiskLevel = region ? region.risk_level : riskLevelForScore(score);
    return {
      color: "var(--strata-line-strong)",
      weight: 1,
      fillColor: riskColor(level),
      fillOpacity: 0.72,
    };
  }

  function onEach(feature: StateFeature, layer: any) {
    const code = feature.properties.id;
    const region = stateToRegion[code];
    const score = region ? region.risk_score : stateRisk(code);
    const level: RiskLevel = region ? region.risk_level : riskLevelForScore(score);
    layer.bindTooltip(`${feature.properties.name} · ${level}${region ? ` · ${region.risk_score}` : ""}`);
    layer.on({
      click: () => {
        if (onSelectRegion && region) onSelectRegion(region.id);
      },
      mouseover: () => layer.setStyle({ fillOpacity: 0.92 }),
      mouseout: () => layer.setStyle({ fillOpacity: 0.72 }),
    });
  }

  return (
    <MapContainer
      center={[22.5, 79]}
      zoom={5}
      minZoom={4}
      maxZoom={8}
      style={{ height, width: "100%", background: "var(--strata-bg)" }}
      scrollWheelZoom
      attributionControl
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON data={INDIA_STATES_FEATURE_COLLECTION} style={styleFor as any} onEachFeature={onEach as any} />
    </MapContainer>
  );
}
