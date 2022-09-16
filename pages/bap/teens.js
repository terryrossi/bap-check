import React, { Component } from "react";
import { Card, Button, Item, Image, Form, Input } from "semantic-ui-react";
import instanceTeens from "../../ethereum/bapTeens";
import Layout from "../../components/Layout";
import { Link, Router } from "../../routes";
import axios from "axios";
//

class TeensIndex extends Component {
  // we're using getInitialProps because of Next.js otherwise componentDidMount
  // this makes the call to web3 much more efficient because next does server side rendering
  state = { startingTeen: "" };
  // this.setState({startingBull: '1'});

  static async getInitialProps(props) {
    // console.log("PROPS.QUERY######## ", props.query.startingBull);
    let startingTeen = props.query.startingTeen;
    startingTeen ??= 1;
    const teens = [];
    const supplyLeft = await instanceTeens.methods.totalSupply().call();
    const maxSupply = await instanceTeens.methods.maxSupply().call();
    console.log("=======");
    console.log("TOTAL SUPPLY =======", supplyLeft);
    console.log("=======");
    // const startingBull = this.state.startingBull;
    for (let i = Number(startingTeen); i <= Number(startingTeen) + 9; i++) {
      try {
        const teen = await instanceTeens.methods.ownerOf(i).call();
        const balanceOf = await instanceTeens.methods.balanceOf(teen).call();

        console.log(
          `FOR TEEN ${i} ADDRESS ${teen} BALANCEOF ======== ${balanceOf}`
        );
        const res = await fetch(
          `https://storage.mint.bullsandapesproject.com/teens/${i}`
        );
        const data = await res.json();
        console.log(`data = ${data}`);

        const entries = Object.entries(data.attributes);
        let guild;
        for (const [key, value] of entries) {
          if (value.trait_type === "Guild") {
            guild = value.value;
            console.log("Guild ===> ", guild);
          }
        }
        const imageURL = data.image;

        teens.push({
          owner: teen,
          balanceOf: balanceOf,
          num: i,
          guild: guild,
          img: imageURL,
          startingTeen: startingTeen
        });
      } catch (err) {
        console.log("PROBLEM SUR TEEN JSON (INEXISTANT?)");
      }
    }
    // console.log(bulls);
    return { teens, supplyLeft, maxSupply };
  }
  onSubmit = async event => {
    //preventDefault to avoid having the browser execute the function
    event.preventDefault();

    Router.pushRoute(`/teens/${this.state.startingTeen}`);
  };

  renderCampaigns() {
    const items = this.props.teens.map(function(teen, i) {
      const debutAdr = teen.owner.slice(0, 8);
      return {
        childKey: i,
        image: teen.img,
        header: `Teen # ${teen.num} is from ${teen.guild} Guild`,
        description: `${debutAdr}${teen.owner
          .slice(-4)
          .padStart(7, ".")} ==> owns ${teen.balanceOf} Teens Total`
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
          <h3>
            <center>BULLS AND APES PROJECT</center>
          </h3>

          <Form onSubmit={this.onSubmit}>
            <Form.Field>
              <label>
                <h4>
                  There's been {this.props.supplyLeft} Teens Minted so far out
                  of a max of {this.props.maxSupply}
                </h4>
              </label>
              <br></br>
              <Input
                label="Starting from Teen"
                labelPosition="left"
                value={this.state.startingTeen}
                onChange={event =>
                  this.setState({ startingTeen: event.target.value })
                }
              />
              <a>
                <Button primary>Show next 10...</Button>
              </a>
            </Form.Field>
          </Form>
          <br></br>
          {this.renderCampaigns()}
        </div>
      </Layout>
    );
  }
}

export default TeensIndex;
