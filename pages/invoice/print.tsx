import { useRouter } from "next/router";
import * as React from "react";
import PayTo from "../../components/react-invoice/PayTo";
import Recipient from "../../components/react-invoice/Recipient";
import Sender from "../../components/react-invoice/Sender";
import TableRow from "../../components/react-invoice/TableRow";
import Template from "../../components/react-invoice/Template";
import Total from "../../components/react-invoice/Total";
import { minstampToDate } from "../../utils/date";
import { Minstamp, SerializableInvoice } from "../../utils/types";
import { ScreenVariantProvider } from "../../components/plasmic/easytime/PlasmicGlobalVariant__Screen";
import { PlasmicPrintInvoice } from "../../components/plasmic/easytime/PlasmicPrintInvoice";
import { useEffect } from "react";
import { createHash } from "crypto";

function PrintInvoice() {
  const router = useRouter();
  console.log(router);

  const invJson = router.query.invoice;
  useEffect(() => {
    if (invJson) {
      window.print();
    }
  }, []);
  if (!invJson) {
    return <div>No invoice</div>;
  }
  const invoice: SerializableInvoice = JSON.parse(invJson?.toString() ?? "");
  let total = 0;
  const tableBody = invoice.items.reduce((acc, item) => {
    const subtotal = item.price * item.amount;
    total += subtotal;
    return [
      ...acc,
      <TableRow
        key={item.topic}
        topic={item.topic}
        price={item.price}
        amount={item.amount}
        total={subtotal}
      />,
    ];
  }, [] as React.ReactNode[]);
  let vat = 0;
  total = Math.ceil(total);
  if (invoice.includeVat) {
    vat = Math.ceil(total * invoice.vatRate);
  }
  const sha256OfInvoice = createHash("sha256")
    .update(invJson.toString())
    .digest("hex");

  const template = (
    <Template
      title={invoice.title}
      recipient={
        <Recipient
          name={invoice.recipient.name}
          individual={invoice.recipient.isIndividual}
        />
      }
      date={minstampToDate(invoice.date).toLocaleDateString()}
      sender={
        <Sender
          postNumber={invoice.sender.postNumber}
          address={invoice.sender.address}
          name={invoice.sender.name}
        />
      }
      payTo={
        <PayTo due={minstampToDate(invoice.payTo.due).toLocaleDateString()}>
          {invoice.payTo.bank}
        </PayTo>
      }
      tableBody={tableBody}
      total={
        <Total
          amount={total + vat}
          withTax={invoice.includeVat}
          includedTax={vat}
        />
      }
      id={sha256OfInvoice.slice(0, 8)}
      memo={invoice.memo}
    />
  );

  return <PlasmicPrintInvoice>{template}</PlasmicPrintInvoice>;
}

export default PrintInvoice;
