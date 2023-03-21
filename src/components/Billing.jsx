import { createStyles, Container, Text, Button, Group, rem, Grid, Skeleton} from '@mantine/core';
import { GithubIcon } from '@mantine/ds';
import FeaturesCard from './Card';
import FeedbackCard from './FeedbackCard';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    boxSizing: 'border-box',
  },

  inner: {
    position: 'relative',
    paddingTop: rem(90),
    paddingBottom: rem(70),

    [theme.fn.smallerThan('sm')]: {
      paddingBottom: rem(80),
      paddingTop: rem(80),
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(62),
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === 'light' ? theme.white : theme.black,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(42),
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: rem(24),

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(18),
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 2)`,

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: rem(54),
    paddingLeft: rem(38),
    paddingRight: rem(38),

    [theme.fn.smallerThan('sm')]: {
      height: rem(54),
      paddingLeft: rem(18),
      paddingRight: rem(18),
      flex: 1,
    },
  },
}));



export default function Billing() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper} id={"product"}>
      <Container size={800} className={classes.inner}>
        <h1 className={classes.title}>
          Take{' '}
          <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
          Simple Steps
          </Text>{' '}
          To Activate Our Free Service
        </h1>

        <Text className={classes.description} color="dimmed">
        It is simple to get targeted, high quality, free Github followers, stars, views and contributions from our network! The process takes only 2 minutes to activate a plan and here are the steps:
        </Text>

      </Container>
      <Container my="md" size={1200}>
      <Grid>
        <Grid.Col xs={3}><FeaturesCard title={'Step : 1'} desc = {"Register & Login"} src={"https://cdn-icons-png.flaticon.com/512/4662/4662943.png"}/></Grid.Col>
        <Grid.Col xs={3}><FeaturesCard title={'Step : 2'} desc = {"Activate the free plan"} src={"https://cdn-icons-png.flaticon.com/512/1913/1913633.png"}/></Grid.Col>
        <Grid.Col xs={3}><FeaturesCard title={'Step : 3'} desc = {"Earn Diamonds"} src={"https://cdn-icons-png.flaticon.com/512/1613/1613073.png"}/></Grid.Col>
        <Grid.Col xs={3}><FeaturesCard title={'Step : 4'} desc = {"Get Free followers"} src={"https://cdn-icons-png.flaticon.com/512/2504/2504911.png"}/></Grid.Col>
      </Grid>
    </Container>
      
    </div>
  );
}