import React from "react";

const Table = ({ data }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200 table-fixed ">
      <thead className="bg-gray-100 ">
        <tr>
          {Object.keys(data[0]).map((key, index) => (
            <th
              scope="col"
              className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase "
              key={index}
            >
              {key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((row, index) => (
          <tr key={index}>
            {Object.values(row).map((value, index) => (
              <td
                key={index}
                className="py-0.5 px-6 text-sm font-medium text-gray-900 whitespace-nowrap"
              >
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
