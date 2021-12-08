import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

import { DataGrid } from "@mui/x-data-grid";

import { optionsStatistcs } from "../../apis/api";

import { AuthContext } from "../../providers/index";

export default function DataGridComponent() {
  const dataProvider = useContext(AuthContext);
  const [selectedRows, setSelection] = useState([]);
  const [countries, setCountries] = useState([]);
  const { setCountrySelect, countrySelect } = dataProvider;
  console.log(countrySelect);

  useEffect(() => {
    axios
      .request(optionsStatistcs)
      .then(function (res) {
        setCountries(res.data.response);
      })
      .catch(function (error) {
        console.error(error);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = [
    { field: "Country", headerName: "Country", width: 200 },
    { field: "Cases", headerName: "Cases", width: 200 },
    { field: "CasesPerMillion", headerName: "Cases(per Million)", width: 200 },
    { field: "TotalDeaths", headerName: "Total Deaths", width: 200 },
    {
      field: "TotalDeathsPerMillion",
      headerName: "Total Deaths(per Million)",
      width: 250,
    },
    { field: "Population", headerName: "Population", width: 200 },
    { field: "lastUpdate", headerName: "Last Update", width: 200 },
  ];

  function getValueObject(obj) {
    return Object.values(obj);
  }

  function formatNumber(n) {
    const nf = Intl.NumberFormat();
    return nf.format(n);
  }

  const dataRow = countries.map((row, index) => {
    return {
      id: index,
      Country: row.country,
      Cases: formatNumber(row.cases.total),
      CasesPerMillion: formatNumber(parseInt(getValueObject(row.cases)[4])),
      TotalDeaths: formatNumber(row.deaths.total),
      TotalDeathsPerMillion: formatNumber(
        parseInt(getValueObject(row.deaths)[1])
      ),
      Population: formatNumber(row.population),
      lastUpdate: row.day,
    };
  });

  return (
    <div style={{ height: "50vh", width: "100%" }}>
      <DataGrid
        onRowClick={(e) => {
          setCountrySelect(e.row);
        }}
        rows={dataRow}
        columns={columns}
        onSelectionChange={(newSelection) => {
          setSelection(newSelection.rowIds);
        }}
      />
      {selectedRows.map((row) => (
        <span>{row}</span>
      ))}
    </div>
  );
}
