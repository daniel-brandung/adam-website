import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "Adam Ariel | Basketball Player",
    description:
      "The official website of Adam Ariel, captain of Maccabi Ironi Ramat Gan. Career, statistics, achievements and videos.",
  },
  nav: [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#timeline", label: "Career" },
    { href: "#highlights", label: "Highlights" },
    { href: "#stats", label: "Statistics" },
    { href: "#current", label: "Current Season" },
  ],
  hero: {
    name: "Adam Ariel",
    number: 11,
    position: "Shooting Guard / Small Forward",
    currentTeam: "Maccabi Ironi Ramat Gan",
    currentLeague: "Winner League",
    profileImage:
      "https://upload.wikimedia.org/wikipedia/commons/a/a3/Adam_ariel_profile.png",
    discoverMore: "Discover More",
    scrollDown: "Scroll Down",
  },
  about: {
    title: "About",
    subtitle: "Meet Adam Ariel",
    bio: "Adam Ariel, born in Jerusalem, is one of the most prominent Israeli basketball players of the past decade. A clutch player who thrives in big moments, Ariel has built an impressive career that includes an Israeli championship, a league cup, representing the Israeli national team, and serving as captain for multiple teams. He currently serves as captain of Maccabi Ironi Ramat Gan and leads the team in the Winner League.",
    infoCards: {
      birthPlace: { label: "Birth City", value: "Jerusalem" },
      birthDate: { label: "Date of Birth", value: "December 10, 1994" },
      height: { label: "Height", value: "6'5\" (1.95m)" },
      nationality: { label: "Nationality", value: "Israeli-German" },
      position: {
        label: "Position",
        value: "Shooting Guard / Small Forward",
      },
    },
  },
  timeline: {
    title: "Career Journey",
    subtitle:
      "From Jerusalem youth academy to Ramat Gan captaincy - the full story",
    entries: [
      {
        id: "jerusalem-youth",
        team: "Hapoel Jerusalem - Youth",
        years: "Until 2012",
        role: "Youth Player",
        league: "Youth Leagues",
        achievements: [
          "Developed in Hapoel Jerusalem youth academy",
          "Member of Israel U18 and U20 national teams",
        ],
        description:
          "Adam grew up in Jerusalem and took his first steps in basketball at the Hapoel Jerusalem youth academy. He excelled from a young age and was called up to the Israeli youth national teams.",
      },
      {
        id: "jerusalem-senior",
        team: "Hapoel Jerusalem",
        years: "2012-2015",
        role: "Player",
        league: "Israeli Super League",
        achievements: [
          "Israeli Champion 2015 - the club's first-ever championship",
          "Three seasons in the Israeli Super League",
        ],
        stats: "Part of the historic championship roster",
        description:
          "At age 17, he joined the senior roster of Hapoel Jerusalem. In his third season, he was part of the historic achievement - the club's first-ever Israeli championship, with an 88-68 victory over Hapoel Eilat in the finals.",
      },
      {
        id: "bremerhaven",
        team: "Eisbaren Bremerhaven",
        years: "2015-2016",
        role: "Player",
        league: "Bundesliga (Germany)",
        achievements: ["International experience in the German league"],
        description:
          "After the championship, Ariel embarked on an international adventure in the German Bundesliga under Israeli coach Muli Katzurin. An experience that strengthened him as both a player and a person.",
      },
      {
        id: "holon",
        team: "Hapoel Holon",
        years: "2016",
        role: "Player",
        league: "Israeli Super League",
        achievements: ["Return to Israeli basketball"],
        description:
          "A brief return to Israel, where he continued to gain experience in the Super League.",
      },
      {
        id: "ashdod",
        team: "Maccabi Ashdod/Be'er Tuvia",
        years: "2016-2018",
        role: "Captain",
        league: "Israeli Super League",
        achievements: [
          "Named team captain",
          "45% three-point shooting in 2017/18 season",
          "Playoff qualification 2018",
          "First call-up to the senior Israeli national team",
        ],
        stats: "6.8 points, 2.9 rebounds, 1 assist per game",
        description:
          "In Ashdod, Ariel established himself as a leading player and received the captain's armband for the first time. The 2017/18 season was his breakthrough with 45% three-point shooting, which led to his first call-up to the Israeli national team.",
      },
      {
        id: "rishon",
        team: "Maccabi Rishon LeZion",
        years: "2018-2020",
        role: "Key Player",
        league: "Israeli Super League",
        achievements: [
          "Winner Cup champion 2018",
          "Israeli Super League Finals 2019",
          "Game-winning three-pointer with 0.6 seconds on the clock",
          "Career-high 21 points",
        ],
        stats: "Career high: 21 points vs. Hapoel Be'er Sheva",
        description:
          "Two golden years in Rishon LeZion. Ariel won the first Winner Cup in the club's history, reached the league finals, and hit a dramatic game-winning three-pointer with 0.6 seconds on the clock against Hapoel Tel Aviv.",
      },
      {
        id: "jerusalem-return",
        team: "Hapoel Jerusalem",
        years: "2020-2022",
        role: "Captain",
        league: "Israeli Super League",
        achievements: [
          "Homecoming - named captain",
          "Second in the league in three-point percentage (46.2%)",
          "Game-winning three vs. Maccabi Tel Aviv (83-82)",
        ],
        stats: "46.2% from three (second in league)",
        description:
          'An emotional return to his hometown. Ariel was named team captain and finished the 2020/21 season as the second-best three-point shooter in the league. The big moment: a game-winning three-pointer in the final second against Maccabi Tel Aviv. "I love having the ball in my hands in those moments," said Ariel.',
      },
      {
        id: "tel-aviv",
        team: "Hapoel Tel Aviv",
        years: "2022-2023",
        role: "Player",
        league: "Israeli Super League",
        achievements: ["Experience with a top team"],
        description:
          "A season with Hapoel Tel Aviv, where he continued to contribute his vast experience.",
      },
      {
        id: "ramat-gan",
        team: "Maccabi Ironi Ramat Gan",
        years: "2023-Present",
        role: "Captain",
        league: "Winner League",
        achievements: [
          "Team captain from the first season",
          "Israeli Player of the Month - January 2026",
          "Contract extension for 3 additional years (June 2025)",
          "17.3 PPG average, 48% from three in January 2026",
        ],
        stats: "12.4 points, 3.6 rebounds, 1.5 assists per game (2024/25)",
        description:
          "The current and exciting chapter in his career. Ariel immediately became captain and team leader. In June 2025, he signed a 3-year contract extension, taking a pay cut to stay. In January 2026, he was named Israeli Player of the Month with 17.3 PPG and 48% from three.",
      },
    ],
  },
  videos: {
    title: "Highlights",
    subtitle: "The moments that defined the career",
    items: [
      {
        id: "GhkAGizYCc4",
        title: "Adam Ariel's highlights from the 2024/25 season",
        description:
          "A collection of top moments from the latest Winner League season",
      },
    ],
    moments: [
      {
        title: "Game-winning three vs. Maccabi Tel Aviv",
        description:
          "83-82 for Jerusalem. A three-pointer in the final second. An unforgettable moment.",
        stat: "0.7 sec",
      },
      {
        title: "Career-high in points",
        description:
          "21 points against Hapoel Be'er Sheva in a Rishon LeZion jersey.",
        stat: "21 points",
      },
      {
        title: "Israeli Player of the Month - January 2026",
        description:
          "17.3 PPG average and 48% from three. The best stretch of his career.",
        stat: "48% 3PT",
      },
    ],
  },
  stats: {
    title: "By the Numbers",
    subtitle: "The statistics behind the career",
    items: [
      { label: "Career Years", value: 13, suffix: "+" },
      { label: "Championships", value: 1 },
      { label: "League Cups", value: 1 },
      { label: "Teams", value: 8 },
      { label: "Career High", value: 21 },
      { label: "3PT % (Best)", value: 48, suffix: "%" },
    ],
    nationalTeam: {
      title: "Israeli National Team",
      description:
        "Adam represented the senior Israeli national team for the first time in September 2018 against Georgia, scoring 9 points with 5 rebounds off the bench. He also played for the Israeli U18 and U20 national teams.",
    },
  },
  currentSeason: {
    title: "Current Season",
    subtitle: "Maccabi Ironi Ramat Gan - Winner League 2025/26",
    stats: [
      { label: "Points Per Game", value: "12.4" },
      { label: "Rebounds Per Game", value: "3.6" },
      { label: "Assists Per Game", value: "1.5" },
    ],
    highlights: [
      {
        title: "Israeli Player of the Month - January 2026",
        description:
          'Adam was named Israeli Player of the Month for January 2026 in the Winner League, averaging 17.3 points and 48% from three over four games. "This is a touching recognition that comes from hard work," said Ariel.',
        highlight: true,
      },
      {
        title: "Contract Extension - 3 More Years",
        description:
          "In June 2025, Ariel signed a 3-year contract extension with Maccabi Ramat Gan. Ariel took a significant pay cut to stay with the team, and is expected to become the highest-paid player in the club's history.",
        highlight: false,
      },
      {
        title: "Big Aspirations",
        description:
          '"We aspire to compete in the upper playoff," said Ariel. The captain leads the team with confidence and a desire to put Ramat Gan on the map.',
        highlight: false,
      },
    ],
  },
  footer: {
    name: "Adam Ariel",
    number: 11,
    links: {
      team: "Maccabi Ramat Gan",
      wikipedia: "Wikipedia",
      wikipediaUrl:
        "https://he.wikipedia.org/wiki/%D7%90%D7%93%D7%9D_%D7%90%D7%A8%D7%99%D7%90%D7%9C",
    },
  },
};
