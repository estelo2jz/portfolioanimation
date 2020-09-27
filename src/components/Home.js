import React from "react";

export default function () {
  return (
    <div className="home-items-container">
      {/* show portfolio items from data */}
      {/* <PortfolioContainer /> */}
      <div className="wrap">
      <div className="apps">
        <h3>Projects</h3>
          <div className="app one">
            <a className="box-wrap" href="https://ministore.netlify.app/" target="_blank">
              <div className="top">
                <div className="fa fa-heart">
                  <p>Mini Online Store</p>
                  {/* <div className="pic"></div> */}
                </div>
                <div className="image-helper">
                  <div className="pic-one"></div>
                </div>
              </div>
            </a>
          </div>
          <div className="app two">
            <a className="box-wrap" href="https://companycultures.netlify.app/" target="_blank">
              <div className="top">
                <div className="fa fa-headphones">
                  <p href="">Top Company Cultures</p>
                </div>
                <div className="image-helper">
                  <div className="pic-two"></div>
                </div>
              </div>
            </a>
          </div>
          <div className="app three">
            <a className="box-wrap" href="https://chinesefood.netlify.app/" target="_blank">
              <div className="top">
                <div className="fa fa-cutlery">
                  <p>Chinese Menu</p>
                </div>
                <div className="image-helper">
                  <div className="pic-three"></div>
                </div>
              </div>
            </a>
          </div>
          <div className="app four">
            <a className="box-wrap" href="https://icydiamond.netlify.app/" target="_blank">
              <div className="top">
                <div className="fa fa-check">
                  <p href="">Icy Diamond Online</p>
                </div>
                <div className="image-helper">
                  <div className="pic-four"></div>
                </div>
              </div>
            </a>
          </div>
          <div className="app five">
            <a className="box-wrap" href="https://barberclonev2.netlify.app/" target="_blank">
              <div className="top">
                <div className="fa fa-home">
                  <p href="">Barber Clone</p>
                </div>
                <div className="image-helper">
                  <div className="pic-five"></div>
                </div>
              </div>
            </a>
          </div>

          <div className="app six">
            <a className="box-wrap" href="https://lawnpro.netlify.app/" target="_blank">
              <div className="top">
                <div className="fa fa-cutlery">
                  <p href="">Grass Pro</p>
                </div>
                <div className="image-helper">
                  <div className="pic-six"></div>
                </div>
              </div>
            </a>
          </div>
          <div className="app seven">
            <a className="box-wrap" href="https://gummy-stickers.netlify.app/" target="_blank">
              <div className="top">
                <div className="fa fa-cutlery">
                  <p href="">Code Sticker</p>
                </div>
                <div className="image-helper">
                  <div className="pic-seven"></div>
                </div>
              </div>
            </a>
          </div>
          <div className="app eight">
            <a className="box-wrap" href="https://svelte-razors-store.netlify.app/" target="_blank">
              <div className="top">
                <div className="fa fa-check">
                  <p href="">Razor</p>
                </div>
                <div className="image-helper">
                  <div className="pic-eight"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}