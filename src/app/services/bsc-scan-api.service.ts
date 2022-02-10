import { Env } from '@foal/core';
import * as axios from 'axios';

const apiUrl = "https://api.bscscan.com/api";
   //&contractaddress=0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51
   //&address=0xD08b11CB9488fDaC4Aa5980c2aCA84cAf25e3320
   //&page=1
   //&offset=5
   //&startblock=0
   //&endblock=999999999
   //&sort=asc
   //&apikey=12345

export class BscScanApi {
  private key: string;
  private wallet: string;

  constructor(){
    this.loadSettings();
  }

  async listTransactions(initialBlock = 0){
    const action = "?module=account&action=tokentx";
    const url = `${apiUrl}${action}&address=${this.wallet}&startblock=${initialBlock}&endblock=999999999&sort=asc&apikey=${this.key}`;
    const response = await axios.default.get(url);
    if (response.status !== 200) {
      throw new Error(`Error code ${response.status} - ${response.statusText}`);
    }
    const json = response.data;
    return json;
  }

  private loadSettings(){
    const key = Env.get("BSCSCAN_APIKEY");
    if (!key){
        throw new Error("BSCScan key is undefined");
    }
    this.key = key;
    const wallet = Env.get("WALLET");
    if (!wallet){
        throw new Error("Wallet is undefined");
    }
    this.wallet = wallet;
  }
}
