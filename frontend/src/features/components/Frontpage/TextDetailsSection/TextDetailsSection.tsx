import { Card, Divider, Typography } from "@material-ui/core";
import { Variant } from "@material-ui/core/styles/createTypography";
import { useStyles } from "./styles";

export interface TextDetailsSectionProps {
  headerText: string;
  detailText: string;
  headerVariant: Variant;
}

export function TextDetailsSection(props: TextDetailsSectionProps) {
  const classes = useStyles();
  return (
    <Card className={classes.cardStyle}>
      <Divider />
      <Typography variant={props.headerVariant}>{props.headerText}</Typography>
      <Typography variant="body1">{props.detailText}</Typography>
      <Divider />
    </Card>
  );
}
