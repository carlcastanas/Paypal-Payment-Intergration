import React, { useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";

export default function App() {
  const [state, setState] = useState(0);
  return (
    <div>
      <input
        type="number"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <PayPalButton
        options={{
          clientId: "YOUR_CLIENT_ID",
          currency: "USD",
        }}
        amount={state}
        onSuccess={(details, data) => {
          alert("Transaction completed by " + details.payer.name.given_name);

          console.log({ details, data });
        }}
      />
    </div>
  );
}
