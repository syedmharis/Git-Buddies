import {
  Card,
  Image,
  Text,
  Group,
  createStyles,
  rem,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  imageSection: {
    padding: theme.spacing.lg,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: `${rem(3)} solid ${
      theme.colorScheme === "light"
        ? theme.colors.dark[4]
        : theme.colors.gray[3]
    }`,
  },
  section: {
    padding: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "light"
        ? theme.colors.dark[4]
        : theme.colors.gray[3]
    }`,
  },
}));

export default function FeaturesCard(props) {
  const { classes } = useStyles();

  return (
    <Card withBorder radius="lg" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image src={props.src} alt="img" width={120} height={120} />
      </Card.Section>

      <Group position="apart" mt="md">
        <div>
          <Text fw={700} size={25}>
            {props.title}{" "}
          </Text>
          <Text fz="md">{props.desc}</Text>
        </div>
      </Group>
    </Card>
  );
}
