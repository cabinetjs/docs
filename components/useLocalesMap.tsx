import { useRouter } from "next/router";

export default function useLocalesMap(localesMap: Record<string, string>) {
    const router = useRouter();
    const { locale } = router;

    return localesMap[locale];
}
