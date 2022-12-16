import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Steps, Panel, Placeholder, ButtonGroup, Button } from "rsuite";
import { useConnect } from "wagmi";
import Ens from "./Ens";
import Metamask from "./Metamask";
import Polygon from "./polygon";
import Erc20 from "./Erc20";
import Worldcoin from "./Worldcoin";
import PushProtocol from "./PushProtocol";
import Erc721 from "./Erc721";
import NftPort from "./NftPort";
import Covalent from "./Covalent";
import IpfsValist from "./IpfsValist";
import Resources from "./Resources";
import "../components/navbar.css";
// import LandingPage from './LandingPage';

function Navbar() {
  const [step, setStep] = React.useState(1);
  const [newButton, setNewButton] = useState({ hidden: false });
  const navigate = new useNavigate();
  const onChange = (nextStep) => {
    setStep(nextStep < 1 ? 1 : nextStep > 11 ? 11 : nextStep);
  };

  const onNext = () => onChange(step + 1);
  const onPrevious = () => onChange(step - 1);

  const goToStep = () => onChange(step);

  return (
    <>
      {window.location.pathname !== "/" ? (
        <div className="navbar-div">
          <Steps current={step}>
            <Steps.Item description="" />
            <Steps.Item
              description=""
              onClick={() => {
                setStep(1);
              }}
            />
            <Steps.Item
              description=""
              onClick={() => {
                setStep(2);
              }}
            />
            <Steps.Item
              description=""
              onClick={() => {
                setStep(3);
              }}
            />
            <Steps.Item
              description=""
              onClick={() => {
                setStep(4);
              }}
            />
            <Steps.Item
              description=""
              onClick={() => {
                setStep(5);
              }}
            />
            <Steps.Item
              description=""
              onClick={() => {
                setStep(6);
              }}
            />
            <Steps.Item
              description=""
              onClick={() => {
                setStep(7);
              }}
            />
            <Steps.Item
              description=""
              onClick={() => {
                setStep(8);
              }}
            />
            <Steps.Item
              description=""
              onClick={() => {
                setStep(9);
              }}
            />
            <Steps.Item
              description=""
              onClick={() => {
                setStep(10);
              }}
            />
            <Steps.Item
              description=""
              onClick={() => {
                setStep(11);
              }}
            />
          </Steps>
          <hr />
          <Panel header={`Step: ${step + 1}`}>
            {/* {step===0 ? <><LandingPage/></> : null} */}
            {step === 1 ? (
              <>
                <Metamask />
              </>
            ) : null}
            {step === 2 ? (
              <>
                <Polygon />
              </>
            ) : null}
            {step === 3 ? (
              <>
                <Erc20 />
              </>
            ) : null}
            {step === 4 ? (
              <>
                <Ens />
              </>
            ) : null}
            {step === 5 ? (
              <>
                <Worldcoin />
              </>
            ) : null}
            {step === 6 ? (
              <>
                <PushProtocol />
              </>
            ) : null}
            {step === 7 ? (
              <>
                <Erc721 />
              </>
            ) : null}
            {step === 8 ? (
              <>
                <NftPort />
              </>
            ) : null}
            {step === 9 ? (
              <>
                <Covalent />
              </>
            ) : null}
            {step === 10 ? (
              <>
                <IpfsValist />
              </>
            ) : null}
            {step === 11 ? (
              <>
                <Resources />
              </>
            ) : null}
          </Panel>
          <hr />
          <ButtonGroup className="button-group">
            <Button
              onClick={onPrevious}
              disabled={step === 1}
              className="step-btn"
            >
              Previous
            </Button>
            <Button
              onClick={onNext}
              disabled={step === 11}
              className="step-btn"
            >
              Next
            </Button>
          </ButtonGroup>
        </div>
      ) : null}
    </>
  );
}

export default Navbar;
