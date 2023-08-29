"use client";
import { Table, TableCell, TableHead, TableRow, styled } from "@mui/material";
import React from "react";
const StyledTable = styled(Table)(() => ({
    whiteSpace: "pre",
    "& thead": {
      "& tr": {
        "& th": {
          paddingTop: "10px",
          paddingBottom: "10px",
          border: "1px solid #000",
          borderRadiusTop: "20px",
          color: "#2F2E40CC",
          fontWeight: "bold",
          fontSize: "16px",
          textTransform: "uppercase",
        },
      },
    },
    "& tbody": {
      "& tr": {
        "& td": {
          paddingLeft: "10px",
          border: "1px solid #000",
          fontWeight: "400",
          fontSize: "15px",
        },
      },
    },
  }));
const RatesTable = () => {
  return (
      <StyledTable 
              sx={{ overflow: "auto" }}
              className=""
              id="content"
              style={{ border: "1px solid #000" }}
            >
              <TableHead>
                <TableRow sx={{ width: "100%" }}>
                  <TableCell
                    align="center"
                    colSpan={1}
                    rowSpan={2}
                    sx={{ width: "20%", border: "1px solid #222A45" }}
                    className="a"
                  >
                    Транспорт
                  </TableCell>
                  <TableCell
                    align="center"
                    colSpan={1}
                    rowSpan={2}
                    sx={{ border: "1px solid #000", width: "20%" }}
                    className="b"
                  >
                    Грузоподъемность
                  </TableCell>
                  <TableCell
                    align="center"
                    colSpan={1}
                    rowSpan={2}
                    sx={{ border: "1px solid #000", width: "20%" }}
                    className="b"
                  >
                    Длинна кузова
                  </TableCell>
                  <TableCell
                    align="center"
                    colSpan={2}
                    sx={{ width: "40%", border: "1px solid #000" }}
                    className="c"
                  >
                    Стоимость без НДС,руб
                  </TableCell>
                  <TableRow>
                    <TableCell>За 1 час (мин2ч)</TableCell>
                    <TableCell>За 1км</TableCell>
                  </TableRow>
                    
                </TableRow>
             
              </TableHead>
    </StyledTable>
  );
};

export default RatesTable;
