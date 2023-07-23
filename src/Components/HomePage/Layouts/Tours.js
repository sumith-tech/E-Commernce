import React from "react";
import { Button, Table } from "react-bootstrap";
import classes from "./Tours.module.css";

const Tours = () => {
  return (
    <section>
      <h2>TOURS</h2>
      <Table style={{ marginLeft: "4px", marginRight: "auto" }}>
        <tbody className={classes.table}>
          <tr>
            <td>JUL 16</td>
            <td>DETROIT, MI</td>
            <td>DTE ENERGY MUSIC THEATRE</td>
            <td>
              <Button>BUY TICKETS</Button>
            </td>
          </tr>
          <tr>
            <td>JUL 19</td>
            <td>TORONTO,ON</td>
            <td>BUDWEISER STAGE</td>
            <td>
              <Button>BUY TICKETS</Button>
            </td>
          </tr>
          <tr>
            <td>JUL 22</td>
            <td>BRISTOW, VA</td>
            <td>JIGGY LUBE LIVE</td>
            <td>
              <Button>BUY TICKETS</Button>
            </td>
          </tr>
          <tr>
            <td>JUL 29</td>
            <td>PHOENIX, AZ</td>
            <td>AK-CHIN PAVILION</td>
            <td>
              <Button>BUY TICKETS</Button>
            </td>
          </tr>
          <tr>
            <td>AUG 2</td>
            <td>LAS VEGAS, NV</td>
            <td>T-MOBILE ARENA</td>
            <td>
              <Button>BUY TICKETS</Button>
            </td>
          </tr>
          <tr>
            <td>AUG 7</td>
            <td>CONCORD, CA</td>
            <td>CONCORD PAVILION</td>
            <td>
              <Button>BUY TICKETS</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </section>
  );
};
export default Tours;
