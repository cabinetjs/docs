import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
    logo: <span>📁 CabinetJS</span>,
    project: {
        link: "https://github.com/cabinetjs",
    },
    footer: {
        text: "Nextra Docs Template",
    },
    useNextSeoProps: () => ({
        titleTemplate: "%s - CabinetJS",
    }),
};

export default config;
