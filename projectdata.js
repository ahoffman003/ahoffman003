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
    id: "sweet-sorghum",
    featured: true,
    title: "Sweet Sorghum Land Suitability & Feasibility Study",
    dateRange: "2025",
    location: "Northwest Minnesota",
    description: "A regional GIS suitability model and DSSAT crop simulation study identifying 724,000 acres of marginal Northwest Minnesota farmland viable for sweet sorghum biofuel production, combining USDA Cropland Data Layer, SSURGO soils, and land capability data with automated Python/ArcPy workflows. Model output validated within 4% of independent field trial data.",
    tags: ["ArcGIS Pro", "Python / ArcPy", "DSSAT", "SSURGO"],
    image: "",
    link: "https://umn.maps.arcgis.com/apps/mapviewer/index.html?webmap=3559938ad0e34adeb9d9551022e6c84f",
    linkLabel: "View the web app",
    linkTarget: "_blank"
  },

  {
    id: "detroit-lakes-stormwater",
    featured: false,
    title: "Stormwater & BMP Compliance, City of Detroit Lakes",
    dateRange: "2025 – Present",
    location: "",
    description: "GIS administration of a Survey123/Field Maps workflow tracking BMP inspections, illicit discharge reporting, and citywide impervious surface classification.",
    tags: ["Survey123", "Field Maps"],
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
    description: "GIS strategy connecting Survey123 outreach, Power Automate, DocuSign, and Field Maps into one workflow supporting Lead and Copper Rule compliance.",
    tags: ["ArcGIS Online", "Power Automate"],
    image: "",
    link: "#contact",
    linkLabel: "Ask about this project",
    linkTarget: "_self"
  },

  {
    id: "well-aware-dashboard",
    featured: false,
    title: "Well Aware Groundwater Testing Dashboard",
    dateRange: "2025 – Present",
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

  {
    id: "greenstep-cities",
    featured: false,
    title: "GreenStep Cities Sustainability Metrics, Crookston",
    dateRange: "2025 – Present",
    location: "",
    description: "Vegetation, land use, and demographic analysis supporting GreenStep Cities sustainability metrics reporting.",
    tags: ["Land Cover", "ArcGIS Pro"],
    image: "",
    link: "#contact",
    linkLabel: "Ask about this project",
    linkTarget: "_self"
  },

];
