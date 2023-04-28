/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const GroupByTable = ({ props }) => {
  console.log("propos", props);
  return (
    <div>
      
          <div>
            <table className="table">
              <thead className="table-dark">
                <tr>
                  <th scope="col">
                    Transaction Date{" "}
                    <i className="fa-solid fa-arrow-down-a-z"></i>
                  </th>
                  <th scope="col">
                    Month Year <i className="fa-solid fa-arrow-down-a-z"></i>
                  </th>
                  <th scope="col">
                    Transaction Type{" "}
                    <i className="fa-solid fa-arrow-down-a-z"></i>
                  </th>
                  <th scope="col">
                    From Account <i className="fa-solid fa-arrow-down-a-z"></i>
                  </th>
                  <th scope="col">
                    To Account <i className="fa-solid fa-arrow-down-a-z"></i>
                  </th>
                  <th scope="col">
                    Amount <i className="fa-solid fa-arrow-down-a-z"></i>
                  </th>
                  <th scope="col">Recepit</th>
                  <th scope="col">
                    Notes <i className="fa-solid fa-arrow-down-a-z"></i>
                  </th>
                </tr>
              </thead>
              <tbody>
              {props.map((propsData, index) => {
                 return (
                <tr>
                  <td key={index}>{propsData.transactionDate}</td>
                  <td>{propsData.monthYear}</td>
                  <td>{propsData.transactionType}</td>
                  <td>{propsData.fromAccount}</td>
                  <td>{propsData.toAccount}</td>
                  <td>{Number(propsData.amount).toLocaleString("er-IN")}</td>

                  <td>
                   
                    <img
                      src={propsData.receipt}
                      alt="Image"
                      style={{ height: "100px", width: "100px" }}
                    />
                  </td>
                  <td>{propsData.notes}</td>
                </tr>
                );
            })}
              </tbody>
            </table>
          </div>
        
    </div>
  );
};

export default GroupByTable;
