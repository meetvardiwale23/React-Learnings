/* eslint-disable no-restricted-globals */
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// // stpes for sorting
// make empty state for sotring the data of props
// make the another state for the sorting keep cloumn name ad order in that state
// notes always clone the state data before using it

//todays lernings
// fill method this mesthod is use to fill the value insdie the array
// eg arr.fil(0) output will be the [0,0,0]

export const SingleTable = ({ data, search }) => {

  //set the naivagte varaible
  const navigate =  useNavigate();
  const searchField = search.searchString;

  //show the recordes per page
  let recordPerPage = 2;

  let startpage = 0;
  let endpage = recordPerPage;

  const totalCount = Math.ceil(data.length / recordPerPage);

  //set turn for the array

  const [propData, setPropsData] = useState([]);
  const [filterData, setfilterdata] = useState([]);
  const [currentPage, setcurrentPage] = useState(0);
  const [sorting, setSorting] = useState({
    column: "",
    order: "ASC",
  });

  useEffect(()=>{
    if(data && data.length>0){
      setPropsData(data)
    }
  },[data])

  useEffect(()=>{
    if(filterData && filterData.length > 0)
    {
      setPropsData(filterData)
    }
  },[filterData])
    
  //sorting function
  const handleSort = (colName, type) => {
    const cloneData = [...data];
    // sorting logic
    switch (type) {
      case "string":
        if (!(sorting.column === colName) || sorting.order === "ASC") {
          cloneData.sort((a, b) => {
            if (a[colName][0] < b[colName][0]) return -1;
            if (a[colName][0] > b[colName][0]) return 1;
            return 0;
          });

          setfilterdata(cloneData);
          setSorting({ column: colName, order: "DSC" });
        } else if (sorting.order === "DSC") {
          cloneData.sort((a, b) => {
            if (a[colName][0] > b[colName][0]) return -1;
            if (a[colName][0] < b[colName[0]]) return 1;
            return 0;
          });

          setfilterdata(cloneData);
          setSorting({ column: colName, order: null });
        } else {
          handlePagination(currentPage);

          setSorting({ column: colName, order: "ASC" });
        }

        break;

      case "number":
        if (!(sorting.column === colName) || sorting.order === "ASC") {
          cloneData.sort((a, b) => {
            return a[colName] - b[colName];
          });

          setfilterdata(cloneData);
          setSorting({ column: colName, order: "DSC" });
        } else if (sorting.order === "DSC") {
          cloneData.sort((a, b) => {
            return b[colName] - a[colName];
          });
          setfilterdata(cloneData);
          setSorting({ column: colName, order: null });
        } else {
          // setData(local_Data);

          handlePagination(currentPage);
          setSorting({ column: colName, order: "ASC" });
        }
        break;

      case "date":
        if (!(sorting.column === colName) || sorting.order === "ASC") {
          cloneData.sort((a, b) => {
            return new Date(a[colName]) - new Date(b[colName]);
          });

          setfilterdata(cloneData);
          setSorting({ column: colName, order: "DSC" });
        } else if (sorting.order === "DSC") {
          cloneData.sort((a, b) => {
            return new Date(b[colName]) - new Date(a[colName]);
          });
          setfilterdata(cloneData);
          setSorting({ column: colName, order: null });
        } else {
          //setData(local_Data);
          handlePagination(currentPage);
          setSorting({ column: colName, order: "ASC" });
        }
        break;
      default:
        break;
    }
  };

  //handle pagination function
  const handlePagination = (index) => {
    startpage = recordPerPage * index;
    endpage = recordPerPage * index + recordPerPage;

    const sortedData = [...filterData];

    if (sortedData.length > 0) {
      setPropsData(sortedData.slice(startpage, endpage));
    } else {
      setPropsData(data.slice(startpage, endpage));
    }
    // setcurrentPage(index);
  };

  
  function handlerSearch() {
    const globalData = [...data];

    const searchData = globalData.filter((itemsFound) => {
      if (searchField && searchField !== "") {
        return (
          itemsFound.toAccount
            .toLowerCase()
            .includes(searchField.toLowerCase()) ||
          itemsFound.fromAccount
            .toLowerCase()
            .includes(searchField.toLowerCase()) ||
          itemsFound.transactionDate.includes(searchField) ||
          itemsFound.transactionType
            .toLowerCase()
            .includes(searchField.toLowerCase()) ||
          itemsFound.monthYear.includes(searchField.toUpperCase()) ||
          itemsFound.amount === searchField ||
          itemsFound.notes.includes(searchField)
        );
      }
    });

    if (!searchField) {
      setPropsData(data);
    } else {
      if (filterData) {
        setPropsData(searchData);
      } else {
        setPropsData(searchData);
      }
    }
  }

  //handle search
  useEffect(() => {
    handlerSearch();
  }, [searchField]);


  return (
    <div>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th
              scope="col"
              onClick={() => handleSort("transactionDate", "date")}
            >
              Transaction Date
            </th>
            <th scope="col" onClick={() => handleSort("monthYear", "date")}>
              Month Year
            </th>
            <th
              scope="col"
              onClick={() => handleSort("transactionType", "string")}
            >
              Transaction Type
            </th>
            <th scope="col" onClick={() => handleSort("fromAccount", "string")}>
              From Account
            </th>
            <th scope="col" onClick={() => handleSort("toAccount", "string")}>
              To Account
            </th>
            <th scope="col" onClick={() => handleSort("amount", "number")}>
              Amount
            </th>
            <th scope="col">Recepit</th>
            <th scope="col" onClick={() => handleSort("notes", "string")}>
              notes
            </th>
            <th scope="col">
              Edit 
            </th>
          </tr>
        </thead>

         <tbody>
          
              {[...propData].slice(startpage, endpage).map((keys, index) => (
                <tr key={index}>
                  <td name="transactionDate">{keys.transactionDate}</td>
                  <td name="transactionDate">{keys.monthYear}</td>
                  <td name="transactionDate">{keys.transactionType}</td>
                  <td name="transactionDate">{keys.fromAccount}</td>
                  <td name="transactionDate">{keys.toAccount}</td>
                  <td name="transactionDate">{keys.amount}</td>
                  <td name="transactionDate">
                    <img
                      src={keys.receipt}
                      alt="images"
                      style={{ height: "100px", width: "100px" }}
                    />
                  </td>
                  <td name="transactionDate">{keys.notes}</td>
                  
                  <td> <Link to={'/Transcform'} state = {keys.id}> <i class="fas fa-edit"></i> </Link> </td>
                </tr>
              ))}
        </tbody>
      </table>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "auto" }}
      >
        {Array(totalCount)
          .fill(0)
          .map((page, index) => (
            <button
              className="page-link"
              key={index}
              onClick={() => handlePagination(index)}
            >
              {index + 1}
            </button>
          ))}
      </div>
    </div>
  );
};
