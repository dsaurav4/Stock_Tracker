import React, { JSX } from "react";
import Card from "../Card/Card";

type Props = {};

const CardList: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <div>
      <Card companyName="Apple" ticker="AAPL" price={230} />
      <Card companyName="Microsoft" ticker="MSFT" price={515} />
      <Card companyName="Tesla" ticker="TSLA" price={335} />
    </div>
  );
};

export default CardList;
