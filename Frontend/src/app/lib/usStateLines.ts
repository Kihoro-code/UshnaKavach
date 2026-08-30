type Pt = [number, number]; // [lat, lng]

// US internal state border line segments
// Each element is a polyline: [[lat,lng], [lat,lng], ...]
// Western states use precise meridians/parallels; eastern states are simplified
export const US_STATE_LINES: Pt[][] = [

  // ─── WESTERN RECTANGULAR STATES ───────────────────────────────────────────

  // Colorado – north border: 41°N from -109.045°W to -102.04°W
  [[41.0, -109.045], [41.0, -102.04]],
  // Colorado – south border: 37°N
  [[37.0, -109.045], [37.0, -102.04]],
  // Colorado – west border: -109.045°W, 37°N to 41°N
  [[37.0, -109.045], [41.0, -109.045]],
  // Colorado – east border: -102.04°W, 37°N to 41°N
  [[37.0, -102.04], [41.0, -102.04]],

  // Wyoming – north border: 45°N from -111.05°W to -104.05°W
  [[45.0, -111.05], [45.0, -104.05]],
  // Wyoming – south border: 41°N (shared with Colorado north)
  [[41.0, -111.05], [41.0, -104.05]],
  // Wyoming – west border: -111.05°W, 41°N to 45°N
  [[41.0, -111.05], [45.0, -111.05]],
  // Wyoming – east border: -104.05°W, 41°N to 45°N
  [[41.0, -104.05], [45.0, -104.05]],

  // Montana – south border: 45°N from -111.05°W to -104.05°W (shared with Wyoming north)
  // already covered by Wyoming north — add east continuation to -104.04°W
  // Montana – east border: -104.04°W, 45°N to 49°N
  [[45.0, -104.04], [49.0, -104.04]],
  // Montana – north border: 49°N from -116.05°W to -104.04°W
  [[49.0, -116.05], [49.0, -104.04]],
  // Montana – west border: approximate, follows Idaho's eastern border
  [[44.35, -111.05], [45.0, -111.05], [49.0, -116.05]],

  // North Dakota – south border: 45.935°N from -104.04°W to -96.56°W
  [[45.935, -104.04], [45.935, -96.56]],
  // North Dakota – north border: 49°N from -104.04°W to -96.56°W
  [[49.0, -104.04], [49.0, -96.56]],
  // North Dakota – east border: -96.56°W, 45.935°N to 49°N
  [[45.935, -96.56], [49.0, -96.56]],
  // North Dakota – west border: -104.04°W, 45.935°N to 49°N (shared with Montana east)

  // South Dakota – north border: 45.935°N (shared with ND south)
  // South Dakota – south border: 42.998°N from -104.04°W to -96.44°W
  [[42.998, -104.04], [42.998, -96.44]],
  // South Dakota – east border: -96.44°W, 42.998°N to 45.935°N
  [[42.998, -96.44], [45.935, -96.44]],
  // South Dakota – west border: -104.04°W, 42.998°N to 45.935°N
  [[42.998, -104.04], [45.935, -104.04]],

  // Nebraska – north border: 42.998°N from -104.05°W to ~-98.5°W, then NE border curves slightly
  [[42.998, -104.05], [42.998, -98.5], [42.85, -97.0], [42.51, -96.44]],
  // Nebraska – south border: 40°N from -104.05°W to -95.31°W
  [[40.0, -104.05], [40.0, -95.31]],
  // Nebraska – west border: -104.05°W, 40°N to 43°N
  [[40.0, -104.05], [42.998, -104.05]],
  // Nebraska – east border (Missouri River): approximate
  [[42.51, -96.44], [41.86, -96.0], [41.3, -95.86], [40.57, -95.31]],

  // Kansas – north border: 40°N from -102.05°W to -94.61°W
  [[40.0, -102.05], [40.0, -94.61]],
  // Kansas – south border: 37°N from -102.05°W to -94.61°W
  [[37.0, -102.05], [37.0, -94.61]],
  // Kansas – west border: -102.05°W, 37°N to 40°N
  [[37.0, -102.05], [40.0, -102.05]],
  // Kansas – east border: -94.61°W, 37°N to 40°N
  [[37.0, -94.61], [40.0, -94.61]],

  // New Mexico – north border: 37°N from -109.045°W to -103°W
  [[37.0, -109.045], [37.0, -103.0]],
  // New Mexico – south border: 31.33°N from -108.21°W to -106.02°W, then Texas border
  [[31.33, -108.21], [31.78, -106.53], [32.0, -106.62]],
  // New Mexico – west border: -109.045°W, 31.33°N to 37°N (simplified)
  [[31.33, -109.045], [37.0, -109.045]],
  // New Mexico – east border: -103°W, 37°N to 32°N, then Texas panhandle
  [[37.0, -103.0], [32.0, -103.0]],
  // New Mexico – south border west: 31.33°N
  [[31.33, -109.045], [31.33, -108.21]],

  // Utah – north border: 42°N from -114.05°W to -111.05°W
  [[42.0, -114.05], [42.0, -111.05]],
  // Utah – south border: 37°N from -114.05°W to -109.045°W
  [[37.0, -114.05], [37.0, -109.045]],
  // Utah – west border: -114.05°W, 37°N to 42°N
  [[37.0, -114.05], [42.0, -114.05]],
  // Utah – east border: -109.045°W, 37°N to 42°N (shared with CO/WY west)
  [[37.0, -109.045], [41.0, -109.045], [42.0, -111.05]],

  // Arizona – north border: 37°N from -114.05°W to -109.045°W (shared with UT south)
  // Arizona – west border: Colorado River (simplified)
  [[37.0, -114.05], [36.1, -114.75], [34.85, -114.62], [33.6, -114.52], [32.72, -114.72], [32.5, -114.81]],
  // Arizona – south border: 31.33°N from -111.06°W to -114.81°W
  [[31.33, -111.06], [31.33, -114.81]],
  // Arizona – east border: -109.045°W, 31.33°N to 37°N
  [[31.33, -109.045], [37.0, -109.045]],

  // Nevada – north border: 42°N from -120.0°W to -114.05°W
  [[42.0, -120.0], [42.0, -114.05]],
  // Nevada – south border (tip): 35.0°N to ~36.0°N (southern tip area)
  [[35.0, -114.63], [36.1, -114.75]],
  // Nevada – west border: approximate eastern California border
  [[42.0, -120.0], [39.0, -120.0], [38.5, -119.3], [37.5, -118.35], [35.77, -117.63]],
  // Nevada – east border: -114.05°W, 37°N to 42°N (shared with UT west)
  [[37.0, -114.05], [42.0, -114.05]],

  // Idaho – south border: 42°N from -117.02°W to -111.05°W
  [[42.0, -117.02], [42.0, -114.05], [42.0, -111.05]],
  // Idaho – east border: -111.05°W, 42°N to 44.35°N (Utah/Wyoming border)
  [[42.0, -111.05], [44.35, -111.05]],
  // Idaho – north border: 49°N from -117.03°W to -116.05°W (panhandle)
  [[49.0, -117.03], [49.0, -116.05]],
  // Idaho panhandle east border
  [[44.35, -111.05], [45.0, -111.05], [49.0, -116.05]],
  // Idaho west border (approximate, Snake River / Oregon border)
  [[42.0, -117.02], [43.59, -117.02], [44.0, -116.93], [44.67, -116.5], [46.0, -117.03], [49.0, -117.03]],

  // Oregon – south border: 42°N from -124.2°W to -117.02°W
  [[42.0, -124.2], [42.0, -117.02]],
  // Oregon – north border: Columbia River then 46.26°N
  [[46.26, -124.05], [45.65, -121.05], [45.72, -120.0], [46.0, -119.0], [46.0, -117.03]],
  // Oregon – east border: -117.02°W (shared with Idaho west)

  // Washington – south border: Columbia River / 46.26°N (shared with Oregon north)
  // Washington – east border: -117.03°W, 46.0°N to 49°N
  [[46.0, -117.03], [49.0, -117.03]],
  // Washington – north border: 49°N from -117.03°W to coast
  [[49.0, -117.03], [49.0, -123.32]],

  // California – north border: 42°N (shared with Oregon south)
  // California – east border (Nevada): already as Nevada west border reversed
  [[42.0, -120.0], [39.0, -120.0], [38.5, -119.3], [37.5, -118.35], [35.0, -114.63]],
  // California – east border (Arizona): Colorado River
  [[35.0, -114.63], [34.85, -114.62], [33.6, -114.52], [32.72, -114.72], [32.5, -114.81]],

  // ─── GREAT PLAINS / MIDWEST ───────────────────────────────────────────────

  // Minnesota – west border (Dakota side): -96.56°W / -97°W, 43.5°N to 49°N
  [[43.5, -96.56], [45.3, -96.84], [45.935, -96.56], [49.0, -96.56]],
  // Minnesota – north border: 49°N from -96.56°W to -89.5°W
  [[49.0, -96.56], [49.0, -89.5]],
  // Minnesota – east border (Lake Superior / Wisconsin): approximate
  [[49.0, -89.5], [47.3, -90.4], [46.6, -92.1], [46.1, -92.29], [45.56, -92.76], [44.54, -92.32], [43.5, -91.22]],
  // Minnesota – south border: 43.5°N from -96.56°W to -91.22°W
  [[43.5, -96.56], [43.5, -91.22]],

  // Iowa – north border: 43.5°N from -96.48°W to -91.22°W (shared with MN south)
  // Iowa – south border: Missouri border (Missouri River then latitude)
  [[40.57, -95.76], [40.38, -95.31], [40.0, -91.73], [40.38, -91.0]],
  // Iowa – east border (Mississippi River): approximate
  [[43.5, -91.22], [43.17, -91.08], [42.69, -90.64], [42.0, -90.16], [41.46, -90.14], [40.38, -91.0]],
  // Iowa – west border (Missouri River): approximate
  [[43.5, -96.48], [42.74, -96.62], [41.86, -96.0], [41.3, -95.86], [40.57, -95.76]],

  // Missouri – north border: 40.57°N from -95.76°W to -91.73°W (Iowa south)
  [[40.57, -95.76], [40.38, -95.31], [40.0, -91.73]],
  // Missouri – south border: 36.5°N from -94.62°W to -89.1°W
  [[36.5, -94.62], [36.5, -89.52], [36.5, -89.1]],
  // Missouri – west border: -94.62°W then Missouri River
  [[40.57, -95.76], [40.0, -94.62], [38.0, -94.62], [36.99, -94.62]],
  // Missouri – east border (Mississippi River)
  [[40.38, -91.0], [39.73, -91.37], [38.96, -91.0], [38.0, -90.36], [37.0, -89.52], [36.5, -89.1]],

  // Arkansas – north border: 36.5°N (shared with MO south)
  [[36.5, -94.62], [36.5, -89.52]],
  // Arkansas – south border: Louisiana border ~33°N
  [[33.0, -94.05], [33.0, -91.0], [33.0, -90.3]],
  // Arkansas – east border (Mississippi River): approximate
  [[36.5, -89.52], [36.0, -89.73], [35.15, -90.06], [34.37, -90.55], [33.65, -90.3], [33.0, -90.3]],
  // Arkansas – west border: ~-94.05°W
  [[36.5, -94.62], [35.0, -94.48], [33.63, -94.05]],

  // Louisiana – north border: 33°N west; Red River area
  [[33.0, -94.05], [33.0, -91.0]],
  // Louisiana – east border (Mississippi River area)
  [[33.0, -91.0], [32.5, -91.15], [31.0, -91.64]],

  // Mississippi – north border: 35°N (Tennessee border)
  [[35.0, -88.2], [35.0, -90.3]],
  // Mississippi – west border (Mississippi River)
  [[35.0, -90.3], [34.37, -90.55], [33.65, -90.3], [33.0, -90.3], [32.5, -91.15], [31.0, -91.64]],

  // Tennessee – north border (Kentucky): approximate
  [[36.68, -88.07], [36.68, -89.54], [36.5, -90.37], [36.5, -89.52]],
  // Tennessee – north border (west to east)
  [[36.68, -88.07], [36.6, -86.52], [36.59, -84.78], [36.59, -81.68]],
  // Tennessee – south border: 35°N (approx)
  [[35.0, -88.2], [35.0, -85.6], [34.98, -84.32]],

  // Kentucky – south border (Tennessee north): approx
  [[36.68, -88.07], [36.6, -86.52], [36.59, -84.78], [36.59, -81.68]],
  // Kentucky – north border (Ohio River): approximate
  [[37.8, -84.78], [38.42, -85.2], [38.03, -86.0], [37.8, -87.07], [37.5, -88.07], [36.99, -89.13]],
  // Kentucky – west border
  [[36.5, -89.1], [36.68, -88.07]],

  // ─── OHIO RIVER BORDERS ───────────────────────────────────────────────────

  // Ohio River (Indiana/Ohio south border with KY):
  [[38.8, -84.82], [38.42, -85.2], [38.03, -86.0], [37.8, -87.07], [37.5, -88.07]],
  // Ohio River (PA/WV to Ohio): upper reach
  [[40.64, -80.52], [40.0, -80.52], [39.4, -81.0], [38.8, -82.0], [38.42, -82.74], [38.05, -84.82]],

  // ─── MISSISSIPPI RIVER (state border segments) ────────────────────────────

  // Upper Mississippi (MN/WI to IA/IL border)
  [[43.5, -91.22], [43.17, -91.08], [42.69, -90.64], [42.0, -90.16], [41.46, -90.14], [40.38, -91.0]],
  // Mid Mississippi (MO/IL border)
  [[40.38, -91.0], [39.73, -91.37], [38.96, -91.0], [38.0, -90.36], [37.0, -89.52], [36.5, -89.1]],
  // Lower Mississippi (AR/TN/MS/LA border)
  [[36.5, -89.52], [36.0, -89.73], [35.15, -90.06], [34.37, -90.55], [33.65, -90.3], [33.0, -90.3],
   [32.5, -91.15], [31.0, -91.64], [30.0, -91.2]],

  // ─── EASTERN STATES ───────────────────────────────────────────────────────

  // Illinois – north border: 42.5°N from -87.53°W to -90.64°W
  [[42.5, -87.53], [42.5, -90.64]],
  // Illinois – west border (Mississippi River): ~-90.16°W to -89.1°W
  [[42.5, -90.64], [42.0, -90.16], [41.46, -90.14], [40.38, -91.0], [39.73, -91.37], [38.96, -91.0], [37.0, -89.52]],
  // Illinois – east border (Indiana): -87.53°W, 37.8°N to 42.5°N
  [[37.8, -87.53], [40.0, -87.53], [42.5, -87.53]],
  // Illinois – south border (Ohio River meets KY)
  [[37.0, -89.52], [37.5, -88.07], [37.8, -87.53]],

  // Indiana – west border: -87.53°W (IL/IN)
  [[37.8, -87.53], [40.0, -87.53], [41.75, -87.53]],
  // Indiana – north border: 41.75°N from -87.53°W to -84.82°W
  [[41.75, -87.53], [41.75, -84.82]],
  // Indiana – east border: -84.82°W, 38.8°N to 41.75°N
  [[38.8, -84.82], [41.75, -84.82]],
  // Indiana – south border (Ohio River)
  [[37.8, -87.07], [38.03, -86.0], [38.42, -85.2], [38.8, -84.82]],

  // Ohio – west border: -84.82°W (IN/OH), 38.8°N to 41.75°N
  [[38.8, -84.82], [41.7, -84.82]],
  // Ohio – north border: 41.7°N to Lake Erie, then east
  [[41.7, -84.82], [41.7, -82.43], [41.99, -80.52]],
  // Ohio – east border: ~-80.52°W, 40.64°N to 41.99°N
  [[40.64, -80.52], [41.99, -80.52]],
  // Ohio – south border (Ohio River)
  [[38.42, -82.74], [38.8, -82.0], [39.4, -81.0], [40.0, -80.52], [40.64, -80.52]],

  // Michigan (lower peninsula) – west border
  [[41.75, -86.82], [43.0, -86.43], [45.8, -84.72]],
  // Michigan – east border
  [[41.75, -84.82], [43.0, -83.45], [43.8, -82.48], [45.8, -84.72]],

  // Wisconsin – west border (St. Croix / Mississippi River)
  [[42.5, -90.64], [43.17, -91.08], [43.5, -91.22], [44.54, -92.32], [45.08, -92.76], [46.6, -92.1]],
  // Wisconsin – north border: Lake Superior / Michigan border
  [[46.6, -92.1], [46.6, -90.4], [47.0, -88.0], [46.1, -86.97], [45.8, -84.72]],
  // Wisconsin – east border: Lake Michigan
  [[42.5, -87.53], [43.0, -87.76], [44.0, -87.55], [45.0, -86.97], [45.8, -84.72]],
  // Wisconsin – south border: 42.5°N
  [[42.5, -87.53], [42.5, -90.64]],

  // Michigan – south border: 41.75°N (shared with IN/OH north)
  [[41.75, -84.82], [41.75, -86.82]],
  [[41.75, -87.53], [41.75, -86.82]],

  // Pennsylvania – north border: 42°N from -80.52°W to -75.36°W
  [[42.0, -80.52], [42.0, -75.36]],
  // Pennsylvania – south border: Mason-Dixon / 39.72°N from -80.52°W to -75.79°W
  [[39.72, -80.52], [39.72, -76.24], [39.72, -75.79]],
  // Pennsylvania – east border: -75.14°W Delaware River, then north
  [[39.72, -75.14], [40.0, -74.98], [41.36, -74.7], [42.0, -75.36]],
  // Pennsylvania – west border: -80.52°W, 39.72°N to 42°N
  [[39.72, -80.52], [42.0, -80.52]],

  // New York – south border: PA/NJ border (approx)
  [[42.0, -75.36], [41.86, -74.69], [41.36, -74.7], [40.98, -73.89], [40.65, -73.67]],
  // New York – north border: 45°N from -71.5°W to -74.7°W (Canada)
  [[45.0, -71.5], [45.0, -74.7], [44.99, -76.82]],
  // New York – west border: Lake Erie / Niagara
  [[42.0, -80.52], [42.86, -79.1], [43.27, -79.05], [44.99, -76.82]],
  // New York – east border (CT/MA/VT)
  [[40.98, -73.65], [41.2, -73.55], [42.05, -73.49], [42.74, -73.27], [45.0, -73.34]],

  // New Jersey – west border (Delaware River)
  [[40.13, -74.72], [39.72, -75.14], [39.3, -75.55], [38.96, -75.39]],
  // New Jersey – north border: 41.36°N
  [[41.36, -74.7], [40.98, -74.02], [40.65, -73.67]],

  // Maryland / Delaware / Virginia borders
  // Maryland – north border: Mason-Dixon, 39.72°N from -77.45°W to -75.79°W
  [[39.72, -80.52], [39.72, -77.45], [39.72, -75.79]],
  // Maryland – south border: Potomac River
  [[39.72, -77.45], [38.88, -77.45], [38.63, -77.3], [38.35, -76.95], [38.0, -76.3]],
  // West Virginia – north border: PA south / OH River
  [[39.72, -80.52], [39.72, -79.48]],
  // West Virginia – east border
  [[39.72, -79.48], [39.47, -78.45], [38.88, -77.83], [37.75, -80.29], [37.2, -81.68]],
  // West Virginia – south border
  [[37.2, -81.68], [37.5, -82.3], [37.75, -82.72], [38.05, -84.82]],

  // Virginia – north border (Potomac)
  [[38.88, -77.45], [38.63, -77.3], [38.35, -76.95], [38.0, -76.3]],
  // Virginia – west border
  [[36.59, -81.68], [37.2, -81.68], [37.75, -80.29], [38.88, -77.83]],
  // Virginia/NC border: 36.59°N
  [[36.59, -81.68], [36.59, -75.9]],

  // North Carolina – north border: 36.59°N
  [[36.59, -84.32], [36.59, -81.68], [36.59, -75.9]],
  // North Carolina – south border (SC/GA): approximate
  [[35.1, -84.32], [34.48, -82.9], [34.0, -81.04], [33.84, -79.67]],
  // North Carolina – west border
  [[35.1, -84.32], [36.59, -84.32]],

  // South Carolina – north border (NC border)
  [[35.1, -84.32], [34.48, -82.9], [34.0, -81.04], [33.84, -79.67]],
  // South Carolina – west border (Savannah River / GA border)
  [[35.1, -84.32], [34.47, -83.32], [33.95, -83.0], [33.0, -81.42], [32.03, -81.12]],

  // Georgia – north border
  [[34.98, -84.32], [34.47, -83.32], [35.0, -82.0]],
  [[35.0, -82.0], [34.98, -84.32]],
  // Georgia – west border: ~-84.9°W (Chattahoochee River simplified)
  [[34.98, -84.32], [34.5, -85.3], [33.0, -85.18], [31.0, -85.07], [30.35, -84.86]],
  // Georgia – north border full
  [[34.98, -84.32], [35.0, -85.6], [35.0, -88.2]],

  // Alabama – north border: 35°N from -88.2°W to -84.9°W (TN south)
  [[35.0, -88.2], [35.0, -85.6], [34.98, -84.32]],
  // Alabama – west border: ~-88.2°W, 30.23°N to 35°N
  [[35.0, -88.2], [32.0, -88.47], [30.23, -88.1]],
  // Alabama – east border: Chattahoochee River
  [[35.0, -85.18], [33.5, -85.18], [32.0, -85.0], [31.0, -85.07], [30.35, -84.86]],

  // Florida – north border (GA/FL): 30.35°N to 30.72°N
  [[30.35, -84.86], [30.56, -83.0], [30.72, -82.04], [30.6, -81.5]],
  [[30.35, -84.86], [31.0, -85.07], [30.23, -88.1]],

  // Mississippi – north border: 35°N (TN south)
  // (already in TN section)
  // Mississippi – east border: ~-88.47°W (AL/MS)
  [[35.0, -88.2], [32.0, -88.47], [30.23, -88.1]],

  // Louisiana – north border west: 33°N from -94.05°W to -91°W
  [[33.0, -94.05], [33.0, -91.0]],
  // Louisiana – east border (Pearl River area)
  [[31.0, -91.64], [30.5, -91.15], [30.0, -89.75]],

  // Texas – north border: 36.5°N from -103°W to -100°W, then Red River
  [[36.5, -103.0], [36.5, -100.0]],
  // Texas – Red River (TX/OK border): approximate
  [[36.5, -100.0], [36.17, -99.0], [33.96, -96.56], [33.54, -96.0], [33.63, -94.05]],
  // Texas – west border: -103°W to El Paso, then Rio Grande
  [[36.5, -103.0], [32.0, -103.0], [31.78, -106.53], [31.75, -106.49]],
  // Texas – NM border south: -103°W, 32°N to ~31.78°N
  [[36.5, -103.0], [32.0, -103.0]],
  // Texas – north panhandle west: -103°W, 36.5°N (shared with NM east)
  [[37.0, -103.0], [36.5, -103.0]],
  // Texas – Oklahoma panhandle south: 36.5°N from -103°W to -100°W
  [[36.5, -103.0], [36.5, -100.0]],

  // Oklahoma – north border: 37°N from -103°W to -94.62°W
  [[37.0, -103.0], [37.0, -94.62]],
  // Oklahoma – south border (Red River / TX border): same as Red River above
  [[36.5, -100.0], [36.17, -99.0], [33.96, -96.56], [33.54, -96.0], [33.63, -94.05]],
  // Oklahoma – west border: -103°W, 36.5°N to 37°N
  [[36.5, -103.0], [37.0, -103.0]],
  // Oklahoma – east border: -94.62°W, 37°N to 33.63°N
  [[37.0, -94.62], [36.5, -94.62], [33.63, -94.05]],

  // ─── RED / CANADIAN RIVER AREA ────────────────────────────────────────────

  // Red River simplified (additional points for OK/TX border detail)
  [[33.63, -94.05], [33.78, -95.0], [33.96, -96.56], [34.08, -97.64], [34.12, -99.0], [36.5, -100.0]],

  // ─── VERMONT / NEW HAMPSHIRE / MAINE ──────────────────────────────────────

  // Vermont – west border (NY/VT): Lake Champlain / ~-73.27°W
  [[42.74, -73.27], [43.57, -73.37], [44.0, -73.34], [45.0, -73.34]],
  // Vermont – east border (NH/VT): Connecticut River
  [[42.74, -72.46], [43.0, -72.26], [44.0, -72.02], [45.0, -71.5]],
  // Vermont – south border: 42.74°N
  [[42.74, -73.27], [42.74, -72.46]],

  // New Hampshire – west border (VT): Connecticut River
  [[42.74, -72.46], [43.0, -72.26], [44.0, -72.02], [45.3, -71.08]],
  // New Hampshire – east border (ME/NH): approximate
  [[43.06, -70.83], [43.68, -71.04], [44.75, -71.08], [45.3, -71.08]],
  // New Hampshire – south border: 42.74°N
  [[42.74, -72.46], [43.06, -70.83]],

  // Maine – west border (NH/ME)
  [[43.06, -70.83], [43.68, -71.04], [44.75, -71.08], [45.3, -71.08], [47.46, -69.23]],
  // Maine – north border: St. John River / Canada
  [[47.46, -69.23], [47.1, -68.25], [47.36, -68.0]],

  // ─── CONNECTICUT / RHODE ISLAND / MASSACHUSETTS ───────────────────────────

  // Massachusetts – west border: NY/MA -73.49°W
  [[42.05, -73.49], [42.74, -73.27]],
  // Massachusetts – south border: CT/RI/MA
  [[42.05, -73.49], [41.99, -72.13], [41.95, -71.8], [41.63, -71.38]],
  // Massachusetts – north border: NH/MA 42.74°N
  [[42.74, -73.27], [42.74, -72.46], [42.74, -70.83]],
  // Massachusetts – RI east border
  [[41.63, -71.38], [41.88, -71.38], [42.01, -71.38], [42.74, -71.08]],

  // Connecticut – north border: MA/CT 42°N (approx)
  [[42.05, -73.49], [41.99, -72.13], [41.95, -71.8]],
  // Connecticut – west border: NY/CT -73.54°W
  [[41.1, -73.54], [42.05, -73.49]],
  // Connecticut – east border: RI/CT
  [[41.95, -71.8], [41.32, -71.86], [41.1, -71.86]],

  // Rhode Island – west border: CT/RI
  [[41.95, -71.8], [41.32, -71.86], [41.1, -71.86]],
  // Rhode Island – north border: MA/RI
  [[41.95, -71.8], [41.95, -71.38]],

  // ─── MID-ATLANTIC ─────────────────────────────────────────────────────────

  // Delaware – north border: arc/line with PA ~39.72°N
  [[39.72, -75.79], [39.72, -75.44]],
  // Delaware – west border: MD/DE
  [[39.72, -75.79], [39.3, -75.69], [38.96, -75.39]],

  // Maryland – east border (Chesapeake/DE): approximate
  [[39.72, -75.79], [38.96, -75.39], [38.0, -76.3]],

];
