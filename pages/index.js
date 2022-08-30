import React, { Component } from "react";
import { Card, Button, Item, Image } from "semantic-ui-react";
//import factory from "../ethereum/factory";
// new code --
import factorybap from "../ethereum/factorybap";
// -- new code
import Layout from "../components/Layout";
import { Link } from "../routes";

//class CampaignIndex extends Component {
class CampaignIndex extends Component {
  // we're using getInitialProps because of Next.js otherwise componentDidMount
  // this makes the call to web3 much more efficient because next does server side rendering
  static async getInitialProps() {
    const bulls = [];

    const minted = await factorybap.methods.minted().call();

    for (let i = 35; i <= 45; i++) {
      const bull = await factorybap.methods.ownerOf(i).call();
      const balanceOf = await factorybap.methods.balanceOf(bull).call();
      // const timeStamp = await factorybap.methods.genesisTimestamp(bull).call();
      const breedings = await factorybap.methods.breedings(i).call();
      // const contractURI = await factorybap.methods
      //   .contractURI(i.toString())
      //   .call();
      // console.log(contractURI);
      const num = i;
      const img = `https://bulls-and-apes-images-resized.s3.amazonaws.com/OGBull.${num
        .toString()
        .padStart(5, "0")}.png`;
      bulls.push({
        owner: bull,
        balanceOf: balanceOf,
        num: num,
        breedings: breedings,
        img: img
      });
    }

    return { bulls };
  }

  renderCampaigns() {
    console.log("this.props.bulls = ", this.props.bulls);
    const items = this.props.bulls.map(function(bull, i) {
      const debutAdr = bull.owner.slice(0, 8);
      return {
        childKey: i,
        image: bull.img,
        header: `Bull # ${bull.num} ==> has ${bull.breedings} breedings left`,
        description: `${debutAdr}${bull.owner
          .slice(-4)
          .padStart(7, ".")} ==> owns ${bull.balanceOf} Bulls Total`
        // meta: bull.balanceOf,
        // extra: `${debutAdr}${bull.owner.slice(-4).padStart(7, ".")} ==> owns ${
        //   bull.balanceOf
        // } Bulls Total`

        //
        // header: bull.num,
        // description: (
        //   <Link route={`/campaigns/${bull.owner}`}>
        //     <a>View Bull</a>
        //   </Link>
        // ),
        // fluid: true
      };
    });
    //
    // console.log(items);
    return <Card.Group items={items} />;
    // return items;
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>Open Campaigns</h3>
          <Link route="/campaigns/new">
            <a>
              <Button
                floated="right"
                content="Create Campaign"
                icon="add circle"
                primary
              />
            </a>
          </Link>
          {this.renderCampaigns()}
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;
