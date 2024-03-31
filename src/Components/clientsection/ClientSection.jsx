import React, { Fragment } from 'react'
import p1 from "../../assets/files/p1.png";
import p2 from "../../assets/files/p2.png";
import p3 from "../../assets/files/p3.png";
import p4 from "../../assets/files/p4.png";
import p5 from "../../assets/files/p5.png";
import { InfiniteMovingCardsDemo } from '../../Animation/InfiniteMovingCard/Index';

let PartnerLogos1 = [p1,p2,p3,p4,p5];

const ClientSection = () => {
  return (
    <Fragment>
         <InfiniteMovingCardsDemo data={PartnerLogos1} />
    </Fragment>
  )
}

export default ClientSection