// import { Strophe } from "./strophe/strophejs-1.2.15/dist/strophe.js";
// import Strophe from "strophe";

// const connet = () => {
//   const onConnect = (status: Strophe.Strophe.Status) => {
//     if (status === Strophe.Strophe.Status.CONNECTING) {
//       console.log("Strophe is connecting.");
//     } else if (status === Strophe.Strophe.Status.CONNFAIL) {
//       console.log("Strophe failed to connect.");
//     //   $("#connect").get(0).value = "connect";
//     } else if (status === Strophe.Strophe.Status.DISCONNECTING) {
//       console.log("Strophe is disconnecting.");
//     } else if (status === Strophe.Strophe.Status.DISCONNECTED) {
//       console.log("Strophe is disconnected.");
//     //   $("#connect").get(0).value = "connect";
//     } else if (status === Strophe.Strophe.Status.CONNECTED) {
//       console.log("Strophe is connected.");
//       console.log("ECHOBOT: Send a message to " + connection.jid +
//                 " to talk to me.");

//       // connection.addHandler(onMessage, null, "message", null, null, null);
//       // connection.send($pres().tree());
//       // console.log($pres().tree());
//     }
//   };
//   const BOSH_SERVICE = "wss://test.kencorhealth.com:7443/ws/";
//   // let conn = new Strophe.Connection('http://localhost:5280/http-bind');
//   const connection = new Strophe.Strophe.Connection(BOSH_SERVICE);
//   connection.connect("d538c917-5d72-4a40-8b79-4681412c42fb@localhost", "8fa7efcb-92a9-4242-a892-a13215928e7a", onConnect);
// };
// export default connet;
// function onMessage (msg: Element): boolean {
//   const to = msg.getAttribute("to");
//   const from = msg.getAttribute("from");
//   const type = msg.getAttribute("type");
//   const elems = msg.getElementsByTagName("body");

//   if (type == "chat" && elems.length > 0) {
//     const body = elems[0];

//     log("ECHOBOT: I got a message from " + from + ": " +
//             Strophe.getText(body));

//     const text = Strophe.getText(body) + " (this is echo)";

//     // var reply = $msg({to: from, from: to, type: 'chat', id: 'purple4dac25e4'}).c('active', {xmlns: "http://jabber.org/protocol/chatstates"}).up().cnode(body);
//     // .cnode(Strophe.copyElement(body));
//     // connection.send(reply.tree());

//     console.log("ECHOBOT: I sent " + from + ": " + Strophe.getText(body));
//   }

//   // we must return true to keep the handler alive.
//   // returning false would remove it after it finishes.
//   return true;
// }
