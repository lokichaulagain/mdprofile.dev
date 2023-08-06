"use client";
import { createStyles, Container, Group, ActionIcon, rem, Text } from "@mantine/core";
import GithubIcon from "./svgIcons/GithubIcon";
import TwitterIcon from "./svgIcons/TwitterIcon";
import LinkedinIcon from "./svgIcons/LinkedinIcon";
// import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
// import { MantineLogo } from '@mantine/ds';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    borderTop: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]}`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function Footer() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        {/* <MantineLogo size={28} /> */}
        <p>LOKI</p>

        <Text
          color="dimmed"
          size="sm">
          © 2020 mantine.dev. All rights reserved.
        </Text>
        <Group
          spacing={0}
          className={classes.links}
          position="right"
          noWrap>
          <ActionIcon size="lg">
            <GithubIcon />
          </ActionIcon>
          <ActionIcon size="lg">
            <TwitterIcon />
          </ActionIcon>

          <ActionIcon size="lg">
            <LinkedinIcon />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
