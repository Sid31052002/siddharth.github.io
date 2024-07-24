import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project_1.png";
import projImg2 from "../assets/img/project_2.webp";
import projImg3 from "../assets/img/project_3.jpg";
import projImg4 from "../assets/img/project_7.png";
import projImg5 from "../assets/img/project_5.jpg";
import projImg6 from "../assets/img/project_6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Sales Data Visualization and Insights",
      description: "Developed interactive dashboards using Power BI to visualize sales trends, customer demographics, and product performance, enabling strategic decision-making and sales forecasting.",
      imgUrl: projImg1,
    },
    {
      title: "Customer Segmentation Analysis",
      description: "Utilized clustering algorithms and RFM analysis in Python to identify distinct customer segments, enhancing targeted marketing efforts and improving customer retention strategies.",
      imgUrl: projImg2,
    },
    {
      title: "Yoga Pose Detection and Sequencing Using LSTM and CNN",
      description: "Implemented a yoga pose detection and sequencing system using CNNs for spatial feature extraction and LSTMs for temporal dependencies, achieving accurate identification and sequencing of yoga poses from video data for improved training and feedback.",
      imgUrl: projImg3,
    },
    {
      title: "Financial Performance Dashboard",
      description: "Created a comprehensive financial dashboard in Tableau to monitor key financial metrics, track budget vs. actual performance, and provide actionable insights to stakeholders.",
      imgUrl: projImg4,
    },
    {
      title: "E-commerce Data Integration and Analysis",
      description: "Implemented an SQL-based data integration system to consolidate e-commerce data from multiple sources, including sales transactions, customer interactions, and website traffic. Utilized complex queries to analyze and visualize customer purchasing patterns and optimize marketing strategies.",
      imgUrl: projImg5,
    },
    {
      title: "Recommendation System for E-Commerce",
      description: "Developed a recommendation system in Python utilizing collaborative filtering and content-based algorithms to suggest products to users based on their browsing history and preferences, enhancing user engagement and sales conversion rates.",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Explore a selection of my key projects that showcase my expertise in data analysis and machine learning. Each project demonstrates my ability to tackle complex problems with innovative solutions, utilizing various tools and techniques to deliver actionable insights and impactful results.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Dive into the Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
