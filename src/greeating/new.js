import React from "react";
import Header from "../comp/header";
import Main from "../comp/Main";
import "../comp/heading.css"

const New = () => {
  return (
    <>
      <Header />
      <Main aaa="fuck you and your mother" />
      {/* start fetsures */}
      <div className="fetsures">
        <div className="container">
          <div className="feat">
            <i className="fa-solid fa-lightbulb" />
            <h3>tell us your idea</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellat, quam.
            </p>
          </div>
          <div className="feat">
            <i className="fa-solid fa-briefcase" />
            <h3>we will do all your work</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellat, quam.
            </p>
          </div>
          <div className="feat">
            <i className="fa-solid fa-earth-americas" />
            <h3>your product will be worldwide</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellat, quam.
            </p>
          </div>
        </div>
      </div>
      {/* start fetsures */}
      {/* start serveses */}
      <div className="serveces" id="serveces">
        <div className="container">
          <h2 className="special">serveses</h2>
          <p>don't be busy; be productive</p>
          <div className="serveces-content">
            <div className="col">
              {/* start serv */}
              <div className="srv">
                <i className="fa-solid fa-brush" />
                <div className="text">
                  <h3>web design</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora ullam totam nesciunt consectetur ratione neque
                    repellat pariatur quod blanditiis modi!
                  </p>
                </div>
              </div>
              <div className="srv">
                <i className="fa-solid fa-building" />
                <div className="text">
                  <h3>UI &amp; UX</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora ullam totam nesciunt consectetur ratione neque
                    repellat pariatur quod blanditiis modi!
                  </p>
                </div>
              </div>
              {/* end serv */}
            </div>
            <div className="col">
              {/* start serv */}
              <div className="srv">
                <i className="fa-solid fa-paint-roller" />
                <div className="text">
                  <h3>web Development</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora ullam totam nesciunt consectetur ratione neque
                    repellat pariatur quod blanditiis modi!
                  </p>
                </div>
              </div>
              <div className="srv">
                <i className="fa-solid fa-laptop-code" />
                <div className="text">
                  <h3>fuck you</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora ullam totam nesciunt consectetur ratione neque
                    repellat pariatur quod blanditiis modi!
                  </p>
                </div>
              </div>
              {/* end serv */}
            </div>
          </div>
        </div>
      </div>
      {/* start serveses */}
      {/* start portofolio */}
      <div className="portofolio" id="portofolio">
        <div className="container">
          <h2 className="special">portofolio</h2>
          <p>if you do it right, it will last forever</p>
          <div className="portofolio-content">
            <div className="card">
              <img src="../project one/img/p1.jpg" />
              <div className="info">
                <h3>project here</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aspernatur, perspiciatis?
                </p>
              </div>
            </div>
            <div className="card">
              <img src="../project one/img/p2.jpg" />
              <div className="info">
                <h3>project here</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aspernatur, perspiciatis?
                </p>
              </div>
            </div>
            <div className="card">
              <img src="../project one/img/p3.jpg" />
              <div className="info">
                <h3>project here</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aspernatur, perspiciatis?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end portofolio */}
      {/* start about */}
      <div className="about" id="about">
        <div className="container">
          <h2 className="special">About</h2>
          <p>less is more work</p>
          <div className="about-content">
            <div className="text">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
                quos odit architecto, eveniet reiciendis adipisci enim, natus
                minima esse rem impedit? Nemo quam iste labore mollitia,
                consectetur rerum minus pariatur!
              </p>
              <hr />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
                deleniti excepturi libero id quos ipsum quo dolor beatae,
                voluptate tempore, ab animi eaque eum, at consequatur possimus
                dolores nisi illo.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* end about */}
      {/* start contact */}
      <div className="contact" id="contact">
        <div className="container">
          <h2 className="special">contact</h2>
          <p>we are born to create</p>
          <div className="info">
            <p className="lapel">feel free to drop us a line</p>
            <a href="mailto:alaaadel1572006@gmail.com" className="link">
              Alaa@gmail.com
            </a>
            <div className="social">
              find us on social networks
              <i className="fa-brands fa-facebook" />
              <i className="fa-brands fa-youtube" />
              <i className="fa-brands fa-twitter" />
            </div>
          </div>
        </div>
      </div>
      {/* end contact */}
      {/* start footer */}
      <div className="footer">
        © 2023 <span>lean</span> all right resrved
      </div>
      {/* end footer */}
    </>
  );
};

export default New;
