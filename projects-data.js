/* ==========================================================================
   PROJECTS DATA
   ==========================================================================
   This is the file to edit when you want to add, remove, or update a
   project on the portfolio site. You do NOT need to touch index.html.

   HOW TO ADD A NEW PROJECT
   1. Copy one of the objects below (the { ... } blocks) and paste it as a
      new entry in the PROJECTS array.
   2. Fill in the fields — see the guide below.
   3. If you have a screenshot, drop the image file into the
      images/projects/ folder and put its filename in the "image" field.
      If you leave "image" blank (""), the card will show a generated
      decorative pattern instead — so it's fine to add a project before
      you have a screenshot ready.
   4. Save the file and refresh the page (or push to GitHub).

   FIELD GUIDE
   - id           A short unique slug (letters, numbers, dashes only).
                  Used internally; doesn't need to match anything else.
   - featured     true / false — exactly ONE project should be true.
                  That one gets the large spotlight card at the top of
                  the Projects section. Everything else appears in the grid.
   - title        Project title, shown as the card heading.
   - dateRange    e.g. "2025" or "2025 – Present". Shown as small text.
   - location     Only used for the FEATURED project's meta line
                  (e.g. "Northwest Minnesota"). Leave "" for grid projects.
   - description  A few sentences describing the project.
   - tags         Array of short tool/skill labels, e.g. ["ArcGIS Pro"].
                  Keep to 2-4 for grid cards; the featured card can hold more.
   - image        Filename only (not a full path), e.g. "sweet-sorghum.jpg".
                  The file should live in images/projects/. Leave "" if you
                  don't have one yet.
   - link         URL for the card's button. Use "#contact" if the project
                  isn't public (this scrolls to your contact section instead
                  of opening a new page).
   - linkLabel    The button text, e.g. "View live dashboard" or
                  "Ask about this project".
   - linkTarget   "_blank" to open in a new tab (use for real external
                  links), or "_self" for internal links like "#contact".
   ========================================================================== */

const PROJECTS = [

  {
    id: "detroit-lakes-portal",
    featured: true,
    title: "GIS Web Portal, City of Detroit Lakes",
    dateRange: "2025 – Present",
    location: "Detroit Lakes, Minnesota",
    description: "Led the development and deployment of a comprehensive GIS web portal for the City of Detroit Lakes. Migrated and cleaned the city's water and sanitary utility data from a non-Esri platform into ArcGIS Online, ensuring data integrity through the transition, and built new feature layers from scratch to support future asset management workflows across Public Utilities and Public Works. Configured a multi-page ArcGIS Experience Builder application organized around the city's departmental structure, with live infrastructure dashboards and group-based permission schemas controlling editing access by department. Developed training materials and led staff training sessions for a mixed technical and non-technical city audience, giving staff across departments a centralized, live platform for authoritative infrastructure data in place of static reports.",
    tags: ["Experience Builder", "ArcGIS Online", "Data Migration", "Staff Training"],
    image: "dl-portal.jpg",
    link: "#contact",
    linkLabel: "Ask about this project",
    linkTarget: "_self"
  },

  {
    id: "sweet-sorghum",
    featured: false,
    title: "Sweet Sorghum Land Suitability & Feasibility Study",
    dateRange: "2025-2026",
    location: "",
    description: "A regional GIS suitability model and DSSAT crop simulation study identifying 724,000 acres of marginal Northwest Minnesota farmland viable for sweet sorghum biofuel production, combining USDA Cropland Data Layer, SSURGO soils, and land capability data with automated Python/ArcPy workflows. Model output validated within 4% of independent field trial data.",
    tags: ["ArcGIS Pro", "Python / ArcPy", "DSSAT", "SSURGO"],
    image: "",
    link: "#contact",
    linkLabel: "Ask about this project",
    linkTarget: "_self"
  },

  {
    id: "lead-service-line",
    featured: false,
    title: "Lead Service Line Inventory & Replacement (15 MN Cities)",
    dateRange: "2025 – Present",
    location: "",
    description: "GIS strategy for a 15-city Lead Service Line inventory and replacement program, connecting Survey123 outreach, Power Automate, DocuSign, and Field Maps into one workflow supporting Lead and Copper Rule compliance. Program-wide dashboards track status across all 15 cities in real time — one dashboard alone tracks 962 total services, with live counts for assessments, easements, and replacements completed.",
    tags: ["ArcGIS Online", "Power Automate", "Survey123"],
    image: "lsl-dashboard.png",
    link: "#contact",
    linkLabel: "Ask about this project",
    linkTarget: "_self"
  },

  {
    id: "construction-field-viewer",
    featured: false,
    title: "Construction Inspection & Reporting Viewer",
    dateRange: "2026",
    location: "",
    description: "Built an ArcGIS Experience Builder app pairing Survey123 daily logs, observation forms, and field testing forms with automated PDF report generation, currently piloting for rollout to all field construction staff. Reports and survey submissions are accessible in real time from the field or the office, so project managers can see construction observations as they happen rather than waiting on end-of-day paperwork.",
    tags: ["Experience Builder", "Survey123", "Report Automation"],
    image: "construction-viewer.jpg",
    link: "#contact",
    linkLabel: "Ask about this project",
    linkTarget: "_self"
  },

  {
    id: "bmp-inspection-program",
    featured: false,
    title: "BMP, Inlet/Outlet & Illicit Discharge Inspection Program",
    dateRange: "2026",
    location: "",
    description: "Designed a Survey123 and Survey123 Connect inspection workflow for the City of Detroit Lakes combining stormwater BMP inspections, storm inlet and outlet inspections, and illicit discharge reporting into a single connected system, supporting the city's stormwater compliance program.",
    tags: ["Storymaps", "Public Communication"],
    image: "",
    link: "https://storymaps.arcgis.com/collections/17307f0bc01b4f53b3fa591fc2a50ce6",
    linkLabel: "View Storymap",
    linkTarget: "_blank"
  },

  {
    id: "west-lake-drive-storymap",
    featured: false,
    title: "West Lake Drive Construction StoryMap, Detroit Lakes",
    dateRange: "2026",
    location: "",
    description: "Built an ArcGIS StoryMaps collection for the West Lake Drive Improvement Project, covering street, utility, and beach improvements. The site comunicated project scope and up-to-date information on closures, detours, and progress to residents.",
    tags: ["Land Cover Classification", "ArcGIS Pro"],
    image: "WLD Storymap.png",
    link: "#contact",
    linkLabel: "Ask about this project",
    linkTarget: "_self"
  },

  {
    id: "well-aware-dashboard",
    featured: false,
    title: "Well Aware Groundwater Testing Dashboard",
    dateRange: "2026",
    location: "",
    description: "ArcGIS Online dashboard tracking well testing coverage and arsenic/nitrate contamination by county to guide community outreach for a free well-testing program.",
    tags: ["Dashboards", "ArcGIS Online"],
    image: "",
    link: "https://umn.maps.arcgis.com/apps/dashboards/a4de536dcd7d4906995af40b0c546fe7",
    linkLabel: "View live dashboard",
    linkTarget: "_blank"
  },

  {
    id: "tree-inventory",
    featured: false,
    title: "Municipal Tree Inventory & Replacement, Crookston & Mahnomen",
    dateRange: "2025 – Present",
    location: "",
    description: "Field data collection and asset-tracking systems in AGOL and Field Maps supporting state grant compliance and contractor bidding.",
    tags: ["Field Maps", "AGOL"],
    image: "",
    link: "#contact",
    linkLabel: "Ask about this project",
    linkTarget: "_self"
  },

];

/* ==========================================================================
   CARTOGRAPHY EXAMPLES
   ==========================================================================
   A lighter-weight gallery for map layout / design work — pieces where you
   produced the cartography on data or analysis someone else built (existing
   datasets, another team's design, publicly available data). These render
   as a simple image + caption grid, separate from the full Projects section.

   FIELD GUIDE
   - title     Short map title.
   - caption   One sentence: what it is and your role on it.
   - image     Filename in images/cartography/.
   ========================================================================== */

const CARTOGRAPHY = [

  {
    id: "foster-county-hydrography",
    title: "Foster County, ND — General Hydrography Map",
    caption: "Cartography for Foster County, a client of Apex's Water group, built from publicly available hydrographic data.",
    image: "foster-county-hydrography_1.jpg"
  },

  {
    id: "csah10-corcoran",
    title: "CSAH 10 Roundabout Corridor, City of Corcoran",
    caption: "Cartography for an RFP exhibit showing proposed roundabout design and downtown land use context (roadway design by Apex engineering staff).",
    image: "csah10-corcoran_1.jpg"
  },

  {
    id: "park-rapids-utility",
    title: "Park Rapids Utility Network Map",
    caption: "Cartographic production of the city's water, sanitary, and storm utility network from existing GIS data.",
    image: "park-rapids-utility_1.jpg"
  },

  {
    id: "crookston-wards",
    title: "City of Crookston Ward Map",
    caption: "Map created for a public survey to Crookston residents on municipal energy use.",
    image: "crookston-wards_1.jpg"
  },

  {
    id: "cover-crops-nw-mn",
    title: "Cover Crop Adoption in Northwest Minnesota",
    caption: "County-level cartography of cover crop adoption and mineral-associated organic carbon loss, built from USDA NASS, MDA, and BWSR data.",
    image: "cover-crops-nw-mn.jpg"
  },

];
