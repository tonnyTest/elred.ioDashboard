import React from "react";
import PageTitle from "./../components/common/PageTitle";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button
} from "shards-react";
import VerifiedIcon from "@mui/icons-material/Verified";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import LinkIcon from "@mui/icons-material/Link";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";

const BlogOverview = ({ smallStats }) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle title="About Us" className="text-sm-left mb-3" />
      </Row>

      <Row>
        {/* Users Overview */}
        <Col lg="12" md="12" sm="12" className="mb-4">
          {/* <UsersOverview /> */}

          <Card small className="h-100">
            <CardHeader className="" />
            <CardBody className="pt-0">
              <Row className=" py-2 align-items-start  ">
                <Col md="2">
                  <div className=" d-flex  justify-content-around">
                    <img
                      id="main-logo"
                      className="d-inline-block align-top mr-1"
                      style={{ maxWidth: "25px" }}
                      src={require("../shards-dashboard/images/shards-dashboards-logo.svg")}
                      alt="Shards Dashboard"
                    />
                    <div className="">
                      <p
                        className="mb-0"
                        style={{
                          fontSize: "18px",
                          fontWeight: "bold",
                          color: "black"
                        }}
                      >
                        A.T.inks
                      </p>
                      <p className="mb-0">Digital inks</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="d-flex mt-2">
                    <VerifiedIcon />
                    <p className="mr-3 mb-0">
                      <a
                        href="#"
                        className="ml-3 "
                        style={{
                          color: "blue",
                          textDecorationLine: "underline"
                        }}
                      >
                        Verify Company
                      </a>
                    </p>
                  </div>
                </Col>
              </Row>

              <Row>
                <div className="px-4 d-flex">
                  <p className="mr-2">
                    This is a paragraph. It is editable. Try to change this
                    text.
                  </p>
                  <EditIcon style={{ color: "red" }} />
                  <span />
                </div>
              </Row>

              <Row>
                <Box>
                  <TabContext value={value}>
                    <Box
                      sx={{
                        borderBottom: 1,
                        width: "100%",
                        borderColor: "divider"
                      }}
                    >
                      <TabList
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                      >
                        <Tab label="Info" value="1" />
                        <Tab label="FAQ" value="2" />
                        <Tab label="Complaints and feedback" value="3" />
                        <Tab label="Privacy Policy" value="4" />
                        <Tab label="Term & Conditions" value="5" />
                      </TabList>
                    </Box>
                    <TabPanel value="1">
                      <div className="info-wrapp">
                        <div className="info-card p-3">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex">
                              <span>
                                <ContactPageIcon />
                              </span>
                              <p className="ml-2">Contact</p>
                            </div>
                            <EditIcon style={{ color: "red" }} />
                          </div>

                          <div className="d-flex justify-content-between">
                            <div className="d-flex">
                              <span>
                                <EmailIcon />
                              </span>
                              <p
                                className="ml-2 mb-2"
                                style={{ fontSize: "13px" }}
                              >
                                Salesteam@br.in / <br /> Salesteam2@br.in
                              </p>
                            </div>
                            <div className="contact-count">+5</div>
                          </div>

                          <div className="d-flex justify-content-between">
                            <div className="d-flex">
                              <span>
                                <PhoneIcon />
                              </span>
                              <p
                                className="ml-2 mb-0"
                                style={{ fontSize: "13px" }}
                              >
                                +91 1234567890 / +91 1234567890{" "}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="info-card p-3">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex">
                              <span>
                                <LocationOnIcon />
                              </span>
                              <p className="ml-2">Address</p>
                            </div>
                            <EditIcon style={{ color: "red" }} />
                          </div>

                          <address style={{ fontSize: "13px" }}>
                            {" "}
                            c-1 / 351 / 4, GIDC Ahmedabad - 380015,
                            gujarat, india{" "}
                          </address>
                        </div>

                        <div className="info-card p-3">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex">
                              <span>
                                <HomeIcon />
                              </span>
                              <p className="ml-2">House of operations</p>
                            </div>
                            <EditIcon style={{ color: "red" }} />
                          </div>
                          <p style={{ fontSize: "13px" }}>
                            Monday to Friday - 09:00 AM to 06:00 PM
                          </p>
                        </div>
                        <div className="info-card p-3">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex">
                              <span>
                                <LinkIcon />
                              </span>
                              <p className="ml-2">Social Media & Links</p>
                            </div>
                            <EditIcon style={{ color: "red" }} />
                          </div>
                          <div className="d-flex align-items-center gap-10">
                            <div>
                              <LanguageIcon /> <br />
                              <span style={{ fontSize: "10px" }}>Website</span>
                            </div>
                            <div>
                              <InstagramIcon /> <br />
                              <span style={{ fontSize: "10px" }}>
                                Instagram
                              </span>
                            </div>
                            <div>
                              <FacebookRoundedIcon /> <br />
                              <span style={{ fontSize: "10px" }}>Facebook</span>
                            </div>
                            <div>
                              <TwitterIcon /> <br />
                              <span style={{ fontSize: "10px" }}>Twitter</span>
                            </div>
                          </div>
                        </div>
                        <div className="info-card p-3">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex">
                              <span>
                                <FormatQuoteIcon />
                              </span>
                              <p className="ml-2">Statement</p>
                            </div>
                            <EditIcon style={{ color: "red" }} />
                          </div>
                          <div className="d-flex justify-content-between">
                            <p
                              className="ml-2 mb-2"
                              style={{ fontSize: "13px" }}
                            >
                              You think we link it.
                            </p>
                            <div className="contact-count">+1</div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel value="2">Item Two</TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                    <TabPanel value="4">Item Three</TabPanel>
                    <TabPanel value="5">Item Three</TabPanel>
                  </TabContext>
                </Box>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogOverview;
