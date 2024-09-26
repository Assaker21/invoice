export default function App() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        borderRight: "1px solid black",
        borderLeft: "1px solid black",
        margin: "0 auto",
      }}
    >
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
        <h1 style={{ padding: 0, margin: 0 }}>Invoice #1024</h1>
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
            July 31, 2023
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
              <td>Item 1</td>
              <td class="right-align">2</td>
              <td class="right-align">$50.00</td>
              <td class="right-align">$100.00</td>
            </tr>
            <tr>
              <td>Item 2</td>
              <td class="right-align">1</td>
              <td class="right-align">$75.00</td>
              <td class="right-align">$75.00</td>
            </tr>
            <tr>
              <td>Item 3</td>
              <td class="right-align">3</td>
              <td class="right-align">$20.00</td>
              <td class="right-align">$60.00</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="right-align">
                Subtotal
              </td>
              <td class="right-align">$235.00</td>
            </tr>
            <tr>
              <td colspan="3" class="right-align">
                Tax (10%)
              </td>
              <td class="right-align">$23.50</td>
            </tr>
            <tr>
              <td colspan="3" class="right-align">
                Total
              </td>
              <td class="right-align">$258.50</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
