import { ManifestV3 } from 'rollup-plugin-chrome-extension'

const manifest: ManifestV3 = {
    manifest_version: 3,
    name: "Gunnik",
    description: "Simple use of gun.js for now.",
    // background: {
    //     service_worker: "background/index.js",
    //     type: "module"
    // },

    content_scripts: [
        {
            js: ["content/index.js"],
            matches: ["https://*/*", "http://*/*"]
        },
    ],
    action: {
        default_popup: "pages/popup/index.html",
        default_title: "Gunnik"
    }

}

export default manifest