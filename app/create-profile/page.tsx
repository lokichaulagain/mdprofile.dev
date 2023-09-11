"use client";
import { useState, useEffect } from "react";
import { createStyles, Title, Text, Button, Container, rem, Input } from "@mantine/core";
import TwitterIcon from "../components/svgIcons/TwitterIcon";
// import { Dots } from './Dots';
import TurndownService from "turndown";
import Introduction from "../components/sections/Introduction";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: rem(120),
    paddingBottom: rem(80),

    [theme.fn.smallerThan("sm")]: {
      paddingTop: rem(80),
      paddingBottom: rem(60),
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  dots: {
    position: "absolute",
    color: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1],

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  title: {
    textAlign: "center",
    fontWeight: 800,
    fontSize: rem(40),
    letterSpacing: -1,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
      textAlign: "left",
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6],
  },

  description: {
    textAlign: "center",

    [theme.fn.smallerThan("xs")]: {
      textAlign: "left",
      fontSize: theme.fontSizes.md,
    },
  },

  controls: {
    marginTop: theme.spacing.lg,
    display: "flex",
    justifyContent: "center",

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  control: {
    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan("xs")]: {
      height: rem(42),
      fontSize: theme.fontSizes.md,

      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
}));

export default function page() {
  const { classes } = useStyles();

  const [name, setName] = useState<any>();
  console.log(name);

  //   const html = `<h1>Learn Web & ${name}</h1>
  // <p>Check out <a href="https://codingbeautydev.com/blog">Coding Beauty</a> for some great tutorials!</p>`;

  const html = `
  <h1>Hi Hi 👋 My name is Lokendra Chaulagain</h1>
  <h2>Software Engineer</h2>
  <p>Thsi is long description</p>
  <ul>
    <li>🌍  I'm based in Kathmandu Nepal</li>
    <li>🖥️  See my portfolio at <a href="http://lokendra-portfolio.vercel.app/">MyPortfolio</a></li>
    <li>✉️  You can contact me at <a href="mailto:lokendrachaulagain803@gmail.com">lokendrachaulagain803@gmail.com</a></li>
    <li>🚀  I'm currently working on <a href="http://lokendra-portfolio.vercel.app/">MyApp</a></li>
    <li>🧠  I'm learning React Js</li>
    <li>🤝  I'm open to collaborating on Blockchain</li>
    <li>⚡  Nothing else</li>
  </ul>
  <a href="https://www.github.com/lokendra-chaulagain" target="_blank" rel="noreferrer"><img src="https://img.shields.io/github/followers/lokendra-chaulagain?logo=github&style=for-the-badge&color=6366f1&labelColor=1c1917" /></a>
  <a href="https://www.twitter.com/lokendra-chaulagain" target="_blank" rel="noreferrer"><img src="https://img.shields.io/twitter/follow/lokendra-chaulagain?logo=twitter&style=for-the-badge&color=6366f1&labelColor=1c1917" /></a>
  <h3>Skills</h3>
  <p align="left">
    <!-- Add the skill icons here -->
  </p>
`;

  // Create an instance of the Turndown service
  const turndownService = new TurndownService();
  const markdown = turndownService.turndown(html);

  const [markdouncontent, setmarkdounContent] = useState<any>();
  useEffect(() => {
    // Create an instance of the Turndown service
    const turndownService = new TurndownService();
    const markdown = turndownService.turndown(html);
    setmarkdounContent(markdown);
    console.log(markdown);
  }, [name]);

  return (
    <Container
      className={classes.wrapper}
      size={960}>
      {/* <div>
        <div className="flex items-center gap-1">
          <TwitterIcon />
          <span className=" font-semibold">Enter your name</span>
        </div>
        <Input onChange={(e: any) => setName(e.target.value)} />
      </div> */}

      <Introduction/>
      <p>{markdouncontent}</p>
    </Container>
  );
}
