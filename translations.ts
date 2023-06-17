export type SupportedLocales = "en" | "ko";

export const SEARCH_PLACEHOLDER: Record<SupportedLocales, string> = {
    ko: "문서 검색...",
    en: "Search documentation...",
};

export const EDIT_LINK: Record<SupportedLocales, string> = {
    ko: "GitHub에서 이 페이지 수정하기 →",
    en: "Edit this page on GitHub →",
};

export const FEEDBACK_LINK: Record<SupportedLocales, string> = {
    ko: "피드백을 남겨주세요 →",
    en: "Question? Give us feedback →",
};

export const LAST_UPDATED: Record<SupportedLocales, string> = {
    ko: "마지막 업데이트: ",
    en: "Last updated on ",
};
