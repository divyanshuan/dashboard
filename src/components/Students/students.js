import React from "react";
import "./student.css";
import { IconButton } from "@mui/material";
import Pagebanner from "../../comman/pagebanner";
import studentdata from "../../data/studentdetail.json";

const Students = () => {
  return (
    <div>
      <Pagebanner title="Student Details" />
      <div className="student_table">
        <table>
          <thead>
            <tr>
              <th>admission no</th>
              <th>name</th>
              <th>age</th>
              <th>address</th>
              <th className="icon_head">controls</th>
            </tr>
          </thead>
          <tbody>
            {studentdata.map((value) => {
              return (
                <tr>
                  <td>{value.admission_no}</td>
                  <td>{value.name}</td>
                  <td>{value.age}</td>
                  <td>{value.address}</td>
                  <td className="icon_cell">
                    <IconButton aria-label="delete" color="primary">
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png"
                        alt="del"
                        height={20}
                      />
                    </IconButton>
                    <IconButton aria-label="delete" disabled color="primary">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/3287/3287948.png"
                        alt="del"
                        height={20}
                      />
                    </IconButton>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;
