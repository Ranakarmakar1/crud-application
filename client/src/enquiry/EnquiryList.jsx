import React from "react";
import { Table } from "flowbite-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

function EnquiryList({ data, getAllenquiry, Swal, setFormData }) {
  let deleteRow = (id) => {
    Swal.fire({
      title: "Do you want to Delete the Data?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */

      if (result.isConfirmed) {
        axios
          .delete(`https://crud-application-backend-7kp5.onrender.com/api/website/enquiry/delete/${id}`)
          .then((res) => {
            toast.success("Enquiry Deleted Succesfully");
            //After delete view function agin run for ui update
            getAllenquiry();
          });

        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };


  
  let editRow = (editid) => {
    axios.get(`https://crud-application-backend-7kp5.onrender.com/api/website/enquiry/single/${editid}`).then((res) => {
        let data = res.data;
        console.log(data.enquiry);
        setFormData(data.enquiry);
      });
  };


  return (
    <div className="bg-gray-200 p-4">
      {/* <ToastContainer/> */}
      <h2 className="text-[20px] font-bold mb-4">Enquiry List</h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeadCell>Sr No</TableHeadCell>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Email</TableHeadCell>
              <TableHeadCell>Phone</TableHeadCell>
              <TableHeadCell>Message</TableHeadCell>

              <TableHeadCell>Edit</TableHeadCell>
              <TableHeadCell>Delete</TableHeadCell>
            </TableRow>
          </TableHead>

          <TableBody className="divide-y">
            {data.length >= 1 ? (
              data.map((item, index) => (
                <TableRow
                  key={index}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.phone}</TableCell>
                  <TableCell>{item.message}</TableCell>
                  <TableCell>
                    <button
                      onClick={() => editRow(item._id)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Edit
                    </button>
                  </TableCell>
                  <TableCell>
                    <button
                      onClick={() => deleteRow(item._id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Delete
                    </button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium      text-gray-900 dark:text-white">
                  No Data Found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default EnquiryList;
