import Vue from "vue";
import App from "./src/App";

const el = "#root";
const template = "<App />";
const components = { App };

// Bootstrap the application by returning a new Vue instance
(() => new Vue({ el, template, components }))();
