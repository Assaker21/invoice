export default function App() {
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
        <h1 style={{ padding: 0, margin: 0 }}>Invoice #0005</h1>
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
        <div style={{ flex: 1 }}>
          <span
            style={{
              fontSize: "14px",
              fontWeight: "500",
              color: "rgba(0, 0, 0, 0.4)",
            }}
          >
            ISSUED ON
          </span>
          <br />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            September 26, 2024
          </span>
        </div>
        <div style={{ flex: 1 }}>
          <span
            style={{
              fontSize: "14px",
              fontWeight: "500",
              color: "rgba(0, 0, 0, 0.4)",
            }}
          >
            TO
          </span>
          <br />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            RK-TEC
            <br />
            Charbel Abi Younes
            <br />
            Carole
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
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Activate Word, PowerPoint, Excel, Outlook, and all other Office
                Programs
              </td>
              <td class="right-align">1</td>
              <td class="right-align">$5.00</td>
              <td class="right-align">$5.00</td>
            </tr>
            <tr>
              <td>Move emails from old account to new account</td>
              <td class="right-align">1</td>
              <td class="right-align">$10.00</td>
              <td class="right-align">$10.00</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="right-align">
                Total
              </td>
              <td class="right-align">$15.00</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
