import { useMemo } from "react";
import useSearchParams from "./hooks/useSearchParams.hook";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function App() {
  const { getSearchParam } = useSearchParams();

  const data = useMemo(() => {
    if (!getSearchParam("data"))
      return (
        null && {
          invoiceNumber: 5,
          company: "RK-TEC",
          person: "Charbel Abi Younes",
          items: [
            {
              description:
                "Re-install Word, PowerPoint, Excel, Outlook, and all other Office Programs",
              quantity: 1,
              clients: ["Clara Saade"],
              unitPrice: 5,
            },
            {
              description:
                "Activate Word, PowerPoint, Excel, Outlook, and all other Office Programs",
              quantity: 2,
              clients: ["Clara Saade", "Carole El Hage"],
              unitPrice: 5,
            },
            {
              description: "Move emails from old account to new account",
              quantity: 2,
              clients: ["Carole El Hage", "Clara Saade"],
              unitPrice: 10,
            },
          ],
        }
      );
    return JSON.parse(getSearchParam("data"));
  }, [getSearchParam("data")]);

  console.log(JSON.stringify(data));

  return (
    <div style={{ padding: 0, margin: 0 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px",
          borderBottom: "1px solid black",
        }}
      >
        <h1 style={{ padding: 0, margin: 0 }}>
          Invoice #{String(data.invoiceNumber).padStart(4, "0")}
        </h1>
        <img
          src="ca.png"
          style={{ width: "30px", aspectRatio: 0.7142, opacity: 0.8 }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "start",
          padding: "16px",
          borderBottom: "1px solid black",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <span
            style={{
              fontSize: "14px",
              fontWeight: "500",
              color: "rgba(0, 0, 0, 0.4)",
            }}
          >
            ISSUED ON
          </span>
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            {months[new Date().getMonth()]}&nbsp;{new Date().getDate()},&nbsp;
            {new Date().getFullYear()}
          </span>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <span
            style={{
              fontSize: "14px",
              fontWeight: "500",
              color: "rgba(0, 0, 0, 0.4)",
            }}
          >
            TO
          </span>

          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            {data.company}
            <br />
            {data.person}
          </span>
        </div>
      </div>
      <div
        style={{
          padding: "16px",
        }}
      >
        <span
          style={{
            fontSize: "16px",
            fontWeight: "500",
          }}
        >
          Items
        </span>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "12px",
          }}
        >
          <thead>
            <tr>
              <th>Description</th>
              <th>Clients</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {data.items.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.description}</td>
                  <td>{item.clients.sort().join(", ")}</td>
                  <td className="right-align">{item.quantity}</td>
                  <td className="right-align">${item.unitPrice.toFixed(2)}</td>
                  <td className="right-align">
                    ${(item.unitPrice * item.quantity).toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" className="right-align">
                Total
              </td>
              <td className="right-align">
                $
                {data.items
                  .reduce((prev, curr) => {
                    return prev + curr.unitPrice * curr.quantity;
                  }, 0)
                  .toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
