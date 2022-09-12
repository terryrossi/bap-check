import React, { Component, useState, useEffect } from "react";
import { Card, Button, Item, Image, Form, Input } from "semantic-ui-react";
//import factory from "../ethereum/factory";
// new code --
import factorybap from "../ethereum/factorybap";
// -- new code
import Layout from "../components/Layout";
import { Link } from "../routes";
import axios from "axios";
//

//class CampaignIndex extends Component {
class CampaignIndex extends Component {
  // we're using getInitialProps because of Next.js otherwise componentDidMount
  // this makes the call to web3 much more efficient because next does server side rendering
  state = { startingBull: "1" };
  // this.setState({startingBull: '1'});

  static async getInitialProps(props) {
    console.log("PROPS.QUERY######## ", props.query.startingBull);
    let startingBull = props.query.startingBull;
    startingBull ??= 10;
    const bulls = [];
    const minted = await factorybap.methods.minted().call();
    // const startingBull = this.state.startingBull;

    for (let i = startingBull; i <= startingBull + 5; i++) {
      const bull = await factorybap.methods.ownerOf(i).call();
      const balanceOf = await factorybap.methods.balanceOf(bull).call();
      console.log(`bull : ${i} et balance : ${balanceOf}`);

      const res = await fetch(
        `https://storage.mint.bullsandapesproject.com/bulls/${i}`
      );
      const data = await res.json();
      console.log(`data = ${data}`);
      // using Promises
      // const getData = function(i) {
      //   fetch(`https://storage.mint.bullsandapesproject.com/bulls/${i}`)
      //     .then(function(response) {
      //       // console.log(response);
      //       return response.json();
      //     })
      //     .then(function(data) {
      //       // console.log(Object.values(data));
      //       console.log(data.image);
      //     });
      // };
      const entries = Object.entries(data.attributes);
      let breedingsLeft;
      for (const [key, value] of entries) {
        if (value.trait_type === "Breedings Left") {
          breedingsLeft = value.value;
          console.log("Breedings ===> ", breedingsLeft);
        }
      }
      const imageURL = data.image;
      console.log(imageURL);
      // console.log(`breedings ; ${breedingsLeft} imageURL ; ${imageURL}`);
      //
      bulls.push({
        owner: bull,
        balanceOf: balanceOf,
        num: i,
        breedings: breedingsLeft,
        img: imageURL
      });
    }
    console.log(bulls);
    return { bulls };
  }
  onSubmit = async event => {
    //preventDefault to avoid having the browser execute the function
    event.preventDefault();
  };

  renderCampaigns() {
    // console.log("this.props.bulls = ", this.props.bulls);
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

          <Form onSubmit={this.onSubmit}>
            <Form.Field>
              <label>Starting from: </label>
              <Input
                label="10"
                labelPosition="right"
                value={this.state.startingBull}
                onChange={event =>
                  this.state({ startingBull: event.target.value })
                }
              />
            </Form.Field>

            <a>
              <Button primary>Show...</Button>
            </a>
          </Form>
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