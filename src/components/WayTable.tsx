"use client";
import { Column, way } from "@/interface";
import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Pagination } from "@mui/material";

const data: way[] = [
  {
    id: 5001,
    name: "Алекс",
    load: "1110",
    typeLoad: "TL",
    get: "23.09.2023",
    send: "27.09.2023",
  },
];

const columns: readonly Column[] = [
  { id: "name", label: "Идентификатор загрузки", minWidth: 170 },
  { id: "code", label: "Имя клиента", minWidth: 100 },
  {
    id: "population",
    label: "Клиентская нагрузка",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Тип нагрузки",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Дата получения",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "density",
    label: "Дата поставки",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
    num: number
  name: string;
  code: string;
  population: number;
  size: number;
  density: number;
}

function createData(num: number, 
  name: string,
  code: string,
  population: number,
  size: number
): Data {
  const density = population / size;
  return {num,  name, code, population, size, density };
}

const rows = [
  createData(5001, "5001", "Алекс", 1324171354, 3287263),
  createData(5001, "5001", "Алекс", 1403500365, 9596961),
  createData(5001, "5001", "Алекс", 60483973, 301340),
  createData(5001, "5001", "Алекс", 327167434, 9833520),
  createData(5001, "5001", "Алекс", 37602103, 9984670),
  createData(5001, "5001", "Алекс", 25475400, 7692024),
  createData(5001, "5001", "Алекс", 83019200, 357578),
  createData(5001, "5001", "Алекс", 4857000, 70273),
  createData(5001, "5001", "Алекс", 126577691, 1972550),
  createData(5001, "5001", "Алекс", 126317000, 377973),
  createData(5001, "5001", "Алекс", 67022000, 640679),
  createData(5001, "5001", "Алекс", 67545757, 242495),
  createData(5001, "5001", "Алекс", 146793744, 17098246),
  createData(5001, "5001", "Алекс", 200962417, 923768),
  createData(5001, "5001", "Алекс", 210147125, 8515767),
];

const WayTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
   <>
     <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Paper>
      <div className="mt-8 flex justify-end mb-24">
      <Pagination count={10} variant="outlined" shape="rounded" />

      </div>
   </>
  );
};

export default WayTable;
