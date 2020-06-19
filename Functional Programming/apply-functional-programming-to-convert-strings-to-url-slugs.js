// The global variable
const globalTitle = "Winter Is Coming";

let urlSlug = title => title.split(/\W/).filter(obj => {return obj !== "";}).join("-").toLowerCase();
