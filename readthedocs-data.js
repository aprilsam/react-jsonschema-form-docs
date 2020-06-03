


var READTHEDOCS_DATA = {
    "project": "react-jsonschema-form",
    "version": "latest",
    "language": "en",
    "programming_language": "js",
    "page": null,
    "theme": "readthedocs",
    "builder": "mkdocs",
    "docroot": "docs",
    "source_suffix": ".md",
    "api_host": "https://readthedocs.org",
    "ad_free": false,
    "commit": "45743f2825535d3d7b13a009d340b50263b2c25b",
    "global_analytics_code": "UA-17997319-1",
    "user_analytics_code": "UA-133269684-1"
}

// Old variables
var doc_version = "latest";
var doc_slug = "react\u002Djsonschema\u002Dform";
var page_name = "None";
var html_theme = "readthedocs";

// mkdocs_page_input_path is only defined on the RTD mkdocs theme but it isn't
// available on all pages (e.g. missing in search result)
if (typeof mkdocs_page_input_path !== "undefined") {
  READTHEDOCS_DATA["page"] = mkdocs_page_input_path.substr(
      0, mkdocs_page_input_path.lastIndexOf(READTHEDOCS_DATA.source_suffix));
}
