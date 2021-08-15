import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import BuildIcon from "@material-ui/icons/Build";
import FunctionsIcon from "@material-ui/icons/Functions";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import SchoolIcon from "@material-ui/icons/School";
import WifiIcon from "@material-ui/icons/Wifi";
import Timeline from "@material-ui/lab/Timeline";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import React from "react";
import { useStyles } from "./styles";

export interface TimelineSectionProps {}

export function TimelineSection(props: TimelineSectionProps) {
  const classes = useStyles();

  return (
    <div className={classes.divRoot}>
      <Timeline align="alternate" className={classes.timelineRoot}>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              01/08/2016, Cluj-Napoca, Romania
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                COMPUTER SCIENCE, BABEȘ-BOLYAI UNIVERSITY, Cluj-Napoca, Romania
              </Typography>
              <Typography>
                Started for the second time university. Re-taking some courses,
                which I find more interesting the second time, like
                computational logic.
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              01/08/2016 – 01/01/2017, Cluj-Napoca, Romania
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined">
              <WifiIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                SYSTEMS ADMINISTRATOR – DTIC - BABEȘ-BOLYAI UNIVERSITY
              </Typography>
              <Typography>
                Part of a team responsible with maintaining computer systems and
                network functionality across multiple universityowned buildings.
                The network topology was complex, and issues were common due to
                the uptime of some old university hardware.
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              07/2017 – 09/2017 – Cluj-Napoca, Romania
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                JUNIOR SOFTWARE ENGINEER – BITDEFENDER
              </Typography>
              <Typography>
                Internship as a junior software engineer, with a focus on low
                level programming(C/C++, x86 ASM), python, malware analysis and
                reverse engineering, virtual machine security, network security.
                Stopped early due to health 🚑 issues.
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              07/2019 – 04/2020 – Bistrița, Romania
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined">
              <BuildIcon />
            </TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                ASSISTANT PROGRAMMER – RCB ELECTRO 97 S.A.
              </Typography>
              <Typography>
                Network and server infrastructure maintenance. I learned to
                develop applications in a time-critical environment, while
                offering IT support across multiple factory locations. I
                developed a dashboard using Web frameworks like django,
                automating with Python, data visualization, while studying
                remotely on Coursera. Managed a repository consisting of Jupyter
                notebooks and other self-made network solutions. Developed an
                embedded solution to expand my electronics knowledge while
                focusing on software and data science
                (https://gitlab.com/tbodica/battery-tester)
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              01/10/2020 – 01/07/2022 – Cluj-Napoca, Romania
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <FunctionsIcon />
            </TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                BACHELOR OF COMPUTER SCIENCE, YEAR 2 – Universitatea
                Babeș-Bolyai
              </Typography>
              <Typography>Finished year 2 with 82 ECTS credits.</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              01/10/2022 – Cluj-Napoca, Romania
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <FunctionsIcon />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                BACHELOR OF COMPUTER SCIENCE, YEAR 3 – Universitatea
                Babeș-Bolyai
              </Typography>
              <Typography>
                Will get used to redacting academic papers.
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
