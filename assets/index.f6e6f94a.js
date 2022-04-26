import{r as e,R as t,W as n,C as a,a as i}from"./vendor.33bcbdb7.js";var s="/epic-nft-dist/assets/twitter-logo.63ba7c86.svg";var o=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"NewEpicNFTMinted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"makeAnEpicNFT",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"pickRandomColor",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"pickRandomFirstWord",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"pickRandomSecondWord",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"pickRandomThirdWord",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"}];var p=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"NTHUNFTMinted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"makeAnEpicNTHUNFT",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"pickRandomColor",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"pickRandomFirstWord",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"pickRandomSecondWord",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"pickRandomThirdWord",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"}];const r=()=>{const[i,r]=e.exports.useState(""),y=async()=>{try{const{ethereum:e}=window;if(!e)return void alert("Get MetaMask!");const t=await e.request({method:"eth_requestAccounts"});console.log("Connected",t[0]),r(t[0]),u()}catch(e){console.log(e)}},u=async()=>{const e="0x18df9f6c606B2C4400D69Eeed2684cd1Aa501b8D";try{const{ethereum:t}=window;if(t){const i=new n(t).getSigner();new a(e,o,i).on("NewEpicNFTMinted",((t,n)=>{console.log(t,n.toNumber()),alert(`Hey there! We've minted your NFT and sent it to your wallet. It may be blank right now. It can take a max of 10 min to show up on OpenSea. Here's the link: https://testnets.opensea.io/assets/${e}/${n.toNumber()}`)})),console.log("Setup event listener!")}else console.log("Ethereum object doesn't exist!")}catch(t){console.log(t)}};return e.exports.useEffect((()=>{(async()=>{const{ethereum:e}=window;if(!e)return void console.log("Make sure you have metamask!");console.log("We have the ethereum object",e);const t=await e.request({method:"eth_accounts"});if(0!==t.length){const e=t[0];console.log("Found an authorized account:",e),r(e),u()}else console.log("No authorized account found");let n=await e.request({method:"eth_chainId"});console.log("Connected to chain "+n),"0x4"!==n&&alert("You are not connected to the Rinkeby Test Network!")})()}),[]),t.createElement("div",{className:"App"},t.createElement("div",{className:"container"},t.createElement("div",{className:"header-container"},t.createElement("p",{className:"header gradient-text"},"Rinkeby NFT Faucet"),t.createElement("p",{className:"sub-text"},"Each unique. Each beautiful. Discover your NFT today."),""===i?t.createElement("button",{onClick:y,className:"cta-button connect-wallet-button"},"Connect to Wallet"):t.createElement("div",null,t.createElement("button",{onClick:async()=>{try{const{ethereum:e}=window;if(e){const t=new n(e).getSigner(),i=new a("0x18df9f6c606B2C4400D69Eeed2684cd1Aa501b8D",o,t);console.log("Going to pop wallet now to pay gas...");let s=await i.makeAnEpicNFT();console.log("Mining...please wait."),await s.wait(),console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${s.hash}`)}else console.log("Ethereum object doesn't exist!")}catch(e){console.log(e)}},className:"cta-button connect-wallet-button"},"Mint Black NFT"),t.createElement("button",{onClick:async()=>{try{const{ethereum:e}=window;if(e){const t=new n(e).getSigner(),i=new a("0x3BED33Dab84a9415198D3FdB452e94829E16c1b6",p,t);console.log("Going to pop wallet now to pay gas...");let s=await i.makeAnEpicNTHUNFT();console.log("Mining...please wait."),await s.wait(),console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${s.hash}`)}else console.log("Ethereum object doesn't exist!")}catch(e){console.log(e)}},className:"cta-button connect-wallet-button"},"Mint Colorful NFT"))),t.createElement("div",{className:"footer-container"},t.createElement("img",{alt:"Twitter Logo",className:"twitter-logo",src:s}),t.createElement("a",{className:"footer-text",href:"https://twitter.com/LCWesley1230",target:"_blank",rel:"noreferrer"},"LCWesley1230"),t.createElement("p",null,'"          "'),t.createElement("img",{alt:"Twitter Logo",className:"twitter-logo",src:s}),t.createElement("a",{className:"footer-text",href:"https://twitter.com/_buildspace",target:"_blank",rel:"noreferrer"},"built on @_buildspace"))))};i.render(t.createElement(t.StrictMode,null,t.createElement(r,null)),document.getElementById("root"));
