import * as LitJsSdk from "@lit-protocol/lit-node-client";

const client = new LitJsSdk.LitNodeClient();

class Lit {
  public litNodeClient;
  async connect() {
    await client.connect();
    this.litNodeClient = client;
  }
}
export default new Lit();
