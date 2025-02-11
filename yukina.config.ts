import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const YukinaConfig: Configuration = {
    title: "Dario's Website and Blog",
    subTitle: "Simple, blog and personal website",
    brandTitle: "Pink Flag",

    description: "A place where I can post my rants online and give a simple introduction to myself!",

    site: "http://pinkk-flag.github.io/",

    locale: "en", // set for website language and date format

    navigators: [
        {
            nameKey: I18nKeys.nav_bar_home,
            href: "/",
        },
        {
            nameKey: I18nKeys.nav_bar_archive,
            href: "/archive",
        },
        {
            nameKey: I18nKeys.nav_bar_about,
            href: "/about",
        },
        {
            nameKey: I18nKeys.nav_bar_github,
            href: "https://github.com/Pinkk-Flag",
        },
    ],

    username: "Dario Gerald (Pink Flag)",
    sign: "Ad Astra Per Aspera.",
    avatarUrl: "https://s2.loli.net/2025/01/25/FPpTrQSezM8ivbl.webp",
    socialLinks: [
        {
            icon: "line-md:github-loop",
            link: "https://github.com/Pinkk-Flag",
        },
        /*    {
              icon: "mingcute:bilibili-line",
              link: "https://space.bilibili.com/22433608",
            },
            {
              icon: "mingcute:netease-music-line",
              link: "https://music.163.com/#/user/home?id=125291648",
            }, */
    ],

    banners: [
        "https://s2.loli.net/2025/01/25/PBvHFjr5yDu6t4a.webp",
        "https://s2.loli.net/2025/01/25/6bKcwHZigzlM4mJ.webp",
        "https://s2.loli.net/2025/01/25/H9WgEK6qNTcpFiS.webp",
        "https://s2.loli.net/2025/01/25/njNVtuUMzxs81RI.webp",
        "https://s2.loli.net/2025/01/25/tozsJ8QHAjFN3Mm.webp",
        "https://s2.loli.net/2025/01/25/Pm89OveZq7NWUxF.webp",
        "https://s2.loli.net/2025/01/25/UCYKvc1ZhgPHB9m.webp",
        "https://s2.loli.net/2025/01/25/JjpLOW8VSmufzlA.webp",
    ],

    slugMode: "HASH", // 'RAW' | 'HASH'

    license: {
        name: "CC BY-NC-SA 4.0",
        url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    },

    // WIP functions
    bannerStyle: "LOOP", // 'loop' | 'static' | 'hidden'
};

export default YukinaConfig;
