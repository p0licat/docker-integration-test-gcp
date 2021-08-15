import { ThemeProvider, Typography } from "@material-ui/core";
import { ListOfEvents } from "./ListOfEvents/ListOfEvents";
import { ProfileDetailsCard } from "./ProfileDetailsCard/ProfileDetailsCard";
import { ReadPublicationsSection } from "./ReadPublicationsSection/ReadPublicationsSection";
import { personalTheme } from "./styles";
import { TextDetailsSection } from "./TextDetailsSection/TextDetailsSection";
import { TimelineSection } from "./TimelineSection/TimelineSection";

export interface FrontpageProps {}

const theme = personalTheme();

export function Frontpage(props: FrontpageProps) {
  return (
    <div style={{ margin: "auto" }}>
      <ThemeProvider theme={theme}>
        <TextDetailsSection
          headerText={"Presentation"}
          headerVariant="h3"
          detailText={
            "Find the CV at the bottom, or scroll to view my latest published reading activity."
          }
        />
        <ProfileDetailsCard
          fullEmail={"tbodica@gmail.com"}
          fullLocation={"Str. Ave"}
          fullName={"Bodică Septimiu-Călin"}
          fullTitle={"Student at UBB Cluj"}
        />
        <TextDetailsSection
          headerText={"About me"}
          headerVariant="h5"
          detailText={
            " \
            I have repositories on my GitHub user, GitLab, or Bitbucket. \
            I spend a lot of time on Twitter and less so on LinkedIn. \
            I like science and reading it, I periodically update the list of favorites and read papers, and other data. \
            Projects may include: experiments in Python, C++ contest exercises, experiments with many languages and frameworks \
            to reduce bias. Examples: embedded experiments, a published Python package. \
            "
          }
        />
        <TextDetailsSection
          headerText={"Events"}
          headerVariant="h5"
          detailText={""}
        />
        <ListOfEvents />
        <TextDetailsSection
          headerText={"Read papers"}
          headerVariant="h5"
          detailText={""}
        />
        <ReadPublicationsSection />
        <Typography variant="h5">CV</Typography>
        <TimelineSection />
      </ThemeProvider>
    </div>
  );
}
