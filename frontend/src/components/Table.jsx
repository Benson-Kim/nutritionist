import React from "react";

const Table = ({ columns, data }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200 table-fixed">
      <thead className="bg-gray-100 ">
        <tr>
          {columns.map((h) => {
            return <TableHeadItem key={h} item={h} />;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((item, idx) => {
          return <TableRow key={idx} data={item} />;
        })}
      </tbody>
    </table>
  );
};

export default Table;

const TableHeadItem = ({ item }) => {
  return (
    <th
      scope="col"
      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase"
      title={item}
    >
      {item}
    </th>
  );
};

const TableRow = ({ data }) => {
  Object.keys(data).map(function (key, value) {
    return (
      <td
        className="py-0.5 px-6 text-sm font-medium text-gray-900 whitespace-nowrap"
        // key={key}
      >
        {value}
      </td>
    );
  });
};
