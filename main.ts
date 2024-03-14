import axios from "axios";

function signTransaction() {
	// TODO: complete this function
}

// SEND TRANSACTION

const txn = await signTransaction(transferTransaction);
const sendTxnPayload = {
	jsonrpc: "2.0",
	id: 1,
	method: "sendTransaction",
	params: [txn.serialize()],
};
const { data } = await axios.post("http://0.0.0.0:8890", sendTxnPayload);

// CHECK TRANSACTION STATUS

let res = await axios.post("http://0.0.0.0:8890", {
	jsonrpc: "2.0",
	id: 1,
	method: "getSignatureStatuses",
	params: [
		[data.result],
		{
			searchTransactionHistory: true,
		},
	],
});
if (!res.data.result.context.sampled) {
	alert("dont trust confirmation");
} else {
	alert("txn confirmed!");
}
