import "./App.css";
import Logo from "./assets/logo.svg";

import { Nav } from "@ui-components-tech/ui-components.navbars.top-nav";
import { FlexContainer } from "@ui-components-tech/ui-components.layout.flex";
import { Cta } from "@ui-components-tech/ui-components.buttons.cta";
import { GridContainer } from "@ui-components-tech/ui-components.layout.grid";
import MainIllustration from "./assets/ill.svg";
import GrowIcon from "./assets/Icon.svg";
import Marketing from "./assets/Icon1.svg";
import Transform from "./assets/Icon2.svg";
import Visual from "./assets/Visual.svg";
import Visual2 from "./assets/Visual2.svg";
import { PricingCard } from "@ui-components-tech/ui-components.pricing.pricing-card";
function App() {
  return (
    <div className="App">
      <Nav
        bgType="custom"
        customBg="transparent"
        navLinks={[
          <a href="navlink">Product</a>,
          <a href="navlink">Marketplace</a>,
          <a href="navlink">Company</a>,
        ]}
        logo={<img alt="logo" src={Logo}></img>}
        menuColor="#2FA83E"
        responsiveStyles={{
          tablet: {
            paddingLeft: "20px",
          },
        }}
      ></Nav>

      <FlexContainer direction="column" alignItems="center">
        <h1>
          We transform <br /> business growth
        </h1>
        <p className="subheading">
          We bring workflows that actually work to help your business grow. We
          drive acquisition for growing brands and promote digital services
          across multiple platforms.
        </p>
        <FlexContainer
          justifyContent="space-evenly"
          additionalStyles={{
            marginTop: "15px",
            marginBottom: "25px",
            width: "100%",
          }}
        >
          <Cta
            label="Get started"
            bgType="custom"
            customBg="#2FA83E"
            borderShape="extraRounded"
            shadow="medium"
          ></Cta>
          <Cta
            label="Learn more"
            bgType="custom"
            customBg="#D3F4D9"
            borderShape="extraRounded"
            shadow="medium"
            additionalStyles={{ color: "green" }}
          ></Cta>
        </FlexContainer>
        <img
          className="main-illustration"
          alt="main"
          src={MainIllustration}
        ></img>
        <h3>Simple process to get started</h3>
        <GridContainer
          className="grid"
          gridGap="1rem"
          gridTemplateColumns="repeat(auto-fit, minmax(15rem, 1fr));"
        >
          <FlexContainer className="feature" direction="column">
            <img className="icons" alt="grow svg" src={GrowIcon}></img>
            <h4>Grow your traffic</h4>
            <p>
              Use analytics to get more traffic on your website and generate
              more income
            </p>
          </FlexContainer>
          <FlexContainer className="feature" direction="column">
            <img className="icons" alt="grow svg" src={Marketing}></img>
            <h4>Get better marketing</h4>
            <p>
              Use analytics to get more traffic on your website and generate
              more income
            </p>
          </FlexContainer>
          <FlexContainer>
            <FlexContainer className="feature" direction="column">
              <img className="icons" alt="grow svg" src={Transform}></img>
              <h4>Get more exposure</h4>
              <p>
                Use analytics to get more traffic on your website and generate
                more income
              </p>
            </FlexContainer>
          </FlexContainer>
        </GridContainer>
        <FlexContainer
          direction="column"
          responsiveStyles={{
            desktop: {
              flexDirection: "row",
            },
          }}
        >
          <FlexContainer
            direction="column"
            alignItems="center"
            additionalStyles={{
              maxWidth: "100%",

              marginTop: "90px",
            }}
            responsiveStyles={{
              tablet: {
                flexDirection: "row",
              },
            }}
          >
            <img className="learn-picture" alt="svg" src={Visual}></img>
            <FlexContainer alignItems="center" direction="column">
              <h2>Build your strategic vision and increase conversions</h2>
              <p className="feature-sub">
                Use analytics to get more traffic on your website and generate
                more income
              </p>
              <Cta
                label="Learn more"
                bgType="custom"
                customBg="#D3F4D9"
                borderShape="extraRounded"
                shadow="medium"
                additionalStyles={{
                  color: "green",
                  width: "100px",
                  marginTop: "10px",
                }}
              ></Cta>
            </FlexContainer>
          </FlexContainer>
          <FlexContainer
            alignItems="center"
            direction="column"
            additionalStyles={{
              maxWidth: "100%",

              marginTop: "90px",
            }}
            responsiveStyles={{
              tablet: {
                flexDirection: "row",
              },
            }}
          >
            <img className="learn-picture" alt="svg" src={Visual2}></img>
            <FlexContainer alignItems="center" direction="column">
              <h2>Build your strategic vision and increase conversions</h2>
              <p className="feature-sub">
                Use analytics to get more traffic on your website and generate
                more income
              </p>
              <Cta
                label="Learn more"
                bgType="custom"
                customBg="#D3F4D9"
                borderShape="extraRounded"
                shadow="medium"
                additionalStyles={{
                  color: "green",
                  width: "100px",
                  marginTop: "10px",
                }}
              ></Cta>
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
        <h2 style={{ width: "100%", marginTop: "60px", marginBottom: "40px" }}>
          Our plans
        </h2>
        <GridContainer
          gridGap="1rem"
          gridTemplateColumns="repeat(auto-fit, minmax(15rem, 1fr));"
          className="grid"
          style={{ marginTop: "25px" }}
        >
          <PricingCard
            cta={
              <Cta
                additionalStyles={{ height: "38px", width: "204px" }}
                bgType="custom"
                borderShape="extraRounded"
                customBg="#2FA83E"
                label="Choose Advanced"
              />
            }
            featureList={[
              {
                included: true,
                text: "Lifetime access to the sdk",
              },
            ]}
            includesList={["1 project", "3 users"]}
            moneyQuantity="10.00£"
            planDescription="Good to get you started"
            planName="Basic"
            planTime="/Month"
          />
          <PricingCard
            cta={
              <Cta
                additionalStyles={{ height: "38px", width: "204px" }}
                bgType="custom"
                borderShape="extraRounded"
                customBg="#2FA83E"
                label="Choose Advanced"
              />
            }
            featureList={[
              {
                included: true,
                text: "Lifetime access to the sdk",
              },
            ]}
            includesList={["5 projects", "10 users"]}
            moneyQuantity="29.00£"
            planDescription="Good to get you started"
            planName="Advanced"
            planTime="/Month"
          />
          <PricingCard
            cta={
              <Cta
                additionalStyles={{ height: "38px", width: "204px" }}
                bgType="custom"
                borderShape="extraRounded"
                customBg="#2FA83E"
                label="Choose Advanced"
              />
            }
            featureList={[
              {
                included: true,
                text: "Lifetime access to the sdk",
              },
            ]}
            includesList={["Unlimited projects", "Unlimited users"]}
            moneyQuantity="19.00£"
            planDescription="Good to get you started"
            planName="Premium"
            planTime="/Month"
          />
          <PricingCard
            cta={
              <Cta
                additionalStyles={{ height: "38px", width: "204px" }}
                bgType="custom"
                borderShape="extraRounded"
                customBg="#2FA83E"
                label="Choose Advanced"
              />
            }
            featureList={[
              {
                included: true,
                text: "Lifetime access to the sdk",
              },
            ]}
            includesList={["Unlimited projects", "Unlimited users"]}
            moneyQuantity="12.00£"
            planDescription="Good to get you started"
            planName="Premium"
            planTime="/Month"
          />
        </GridContainer>
      </FlexContainer>
    </div>
  );
}

export default App;
