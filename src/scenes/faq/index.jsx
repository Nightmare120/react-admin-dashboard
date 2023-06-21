import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m="20px" display={"flex"} flexDirection={"column"} gap={"2em"}>
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

            <Accordion
                style={{ borderRadius: "10px", overflow: "hidden" }}
                defaultExpanded
            >
                <AccordionSummary
                    style={{ background: colors.greenAccent[500] }}
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography
                        // color={colors.greenAccent[500]}
                        variant="h5"
                    >
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails
                    style={{
                        border: `1px solid ${colors.greenAccent[500]}`,
                        borderBottomLeftRadius: "10px",
                        borderBottomRightRadius: "10px",
                    }}
                >
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                style={{ borderRadius: "10px", overflow: "hidden" }}
                defaultExpanded
            >
                <AccordionSummary
                    style={{ background: colors.greenAccent[500] }}
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography
                        // color={colors.greenAccent[500]}
                        variant="h5"
                    >
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails
                    style={{
                        border: `1px solid ${colors.greenAccent[500]}`,
                        borderBottomLeftRadius: "10px",
                        borderBottomRightRadius: "10px",
                    }}
                >
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                style={{ borderRadius: "10px", overflow: "hidden" }}
                defaultExpanded
            >
                <AccordionSummary
                    style={{ background: colors.greenAccent[500] }}
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography
                        // color={colors.greenAccent[500]}
                        variant="h5"
                    >
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails
                    style={{
                        border: `1px solid ${colors.greenAccent[500]}`,
                        borderBottomLeftRadius: "10px",
                        borderBottomRightRadius: "10px",
                    }}
                >
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                style={{ borderRadius: "10px", overflow: "hidden" }}
                defaultExpanded
            >
                <AccordionSummary
                    style={{ background: colors.greenAccent[500] }}
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography
                        // color={colors.greenAccent[500]}
                        variant="h5"
                    >
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails
                    style={{
                        border: `1px solid ${colors.greenAccent[500]}`,
                        borderBottomLeftRadius: "10px",
                        borderBottomRightRadius: "10px",
                    }}
                >
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default FAQ;
