import Typography from "@mui/material/Typography";

const ChartTitle = ({ title }) => {
  return (
    <Typography noWrap variant="body1" gutterBottom>
      <span style={{ opacity: 0.8 }}>{title}</span>
    </Typography>
  );
};

export default ChartTitle;
