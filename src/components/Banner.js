import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/man.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Data Analyst", "Web Designer", "UI/UX Designer", "Machine Learning Engineer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Siddharth`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Data Analyst", "UI/UX Designer", "ML Engineer"]'><span className="wrap">{text}</span></span></h1>
                <p>Passionate data science enthusiast with expertise in analyzing complex datasets to uncover actionable insights. Skilled in machine learning, statistical analysis, and data visualization to drive informed decision-making.</p>
                <button onClick={() => console.log('connect')}>My Resume <ArrowRightCircle size={25} /></button>
                <br></br>
                <h1>Education</h1>
                <div className="education-box">
                  <div>
                    <h3>BTech in Computer Science</h3>
                    <h4>NIIT University, Neemrana</h4>
                    <h5>2021-2025</h5>
                    <p>CGPA - <span>8.05</span></p>
                  </div>
                  <div>
                    <h3>Higher Education</h3>
                    <h4>DCM Presidency School, Ludhiana</h4>
                    <h5>2020</h5>
                    <p>Class XII Percentage - <span>79.6%</span></p>
                    <p>Class X Percentage - <span>92.6%</span></p>
                  </div>
                </div>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

