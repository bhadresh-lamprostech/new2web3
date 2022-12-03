import React from 'react'
import push1 from "../assests/images/Push1.png";
import push2 from "../assests/images/Push2.png";
import { Chat } from "@pushprotocol/uiweb";
import {useAccount} from 'wagmi'

function PushProtocol() {
    const { address } = useAccount();

  return (
    <div className="metamask-section1">
      <h1 className="metamask-title">Push Protocol</h1>
      <p className="metamask-content">
        Push Protocol (EPNS) is the world’s first decentralized communication &
        notification protocol for Web3.
      </p>
      <p className="metamask-content">
        It is open, gasless, multichain, and platform agnostic fashion. The open
        communication layer allows any crypto wallet/front end to tap into the
        network and get the communication across.
      </p>
      <p className="metamask-content">
        Now that you know what is Push protocol, let us see how it works.
      </p>
      <p className="metamask-content">
        If your wallet is connected to a dApp that uses Push protocol, you will
        see the notification alert on your screen.
      </p>

      <img src={push1} className="metamask-img" />
      <p className="metamask-content">
        You will see the Push notifications if you are subscribed to any
        channels in a sidebar that comes on the click on the bell icon.
      </p>
      <img src={push2} className="metamask-img" />
      <p className="metamask-content">
        The Push protocol gives an option to Opt-in or Opt-out of receiving
        notifications. You can select the option as per your preference.
      </p>
      <div>
      
      </div>
    </div>
  );
}

export default PushProtocol