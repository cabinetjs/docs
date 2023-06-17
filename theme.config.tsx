import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import useLocalesMap from "./components/useLocalesMap";
import { EDIT_LINK, FEEDBACK_LINK, LAST_UPDATED, SEARCH_PLACEHOLDER } from "./translations";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
    logo: (
        <span>
            📁 <strong>CabinetJS</strong>
        </span>
    ),
    docsRepositoryBase: "https://github.com/cabinetjs/docs/blob/main",
    project: {
        link: "https://github.com/cabinetjs",
    },
    footer: {
        component: () => null,
    },
    search: {
        placeholder: () => useLocalesMap(SEARCH_PLACEHOLDER),
    },
    editLink: {
        text: () => <>{useLocalesMap(EDIT_LINK)}</>,
    },
    feedback: {
        content: () => <>{useLocalesMap(FEEDBACK_LINK)}</>,
    },
    toc: {
        float: true,
    },
    useNextSeoProps: () => ({
        titleTemplate: "%s - CabinetJS",
    }),
    gitTimestamp({ timestamp }) {
        const { locale } = useRouter();
        const lastUpdatedOn = useLocalesMap(LAST_UPDATED);

        return (
            <>
                {lastUpdatedOn}{" "}
                <time dateTime={timestamp.toISOString()}>
                    {timestamp.toLocaleDateString(locale, {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                    })}
                </time>
            </>
        );
    },
    i18n: [
        { locale: "en", text: "English" },
        { locale: "ko", text: "한국어" },
    ],
};

export default config;
