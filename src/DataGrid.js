
import { DataGrid ,GridToolbar } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import { useEffect ,useState} from "react";
import axios from "axios";

const DataGrids = ()=>{
    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        { field: "name", headerName: " Name", width: 150, editable: false },
        {
          field: "username",
          headerName: "Last Name",
          width: 150,
          editable: false,
        },
        {
          field: "website",
          headerName: "WEBSITE",
          width: 100,
          editable: false,
        },
        // {
        //   field: "fullName",
        //   headerName: "Full Name",
        //   width: 160,
        //   // valueGetter:getFullName
        //   renderCell: (params) => {
        //     return getFullName(params);
        //   },
        // },
        {
          field:'qualified',
          headerName:'Qualified',
          type:'boolean',
          editable:true
        },
        {
          field: "action",
          headerName: "Action",
          headerAlign:'center',
          width: 200,
          renderCell: (params) => {
            return (
              <>
                <Button
                  variant="contained"
                  size="small"
                  startIcon={<PersonIcon />}
                  color="success"
                  onClick={() => {
                    alert("edit clicked");
                  }}
                >
                  View{" "}
                </Button>
                <Button
                  sx={{ mx: 2 }}
                  variant="contained"
                  size="small"
                  startIcon={<PersonRemoveIcon />}
                  color="error"
                  onClick={() => {
                    alert("delete clicked");
                  }}
                >
                  Delete{" "}
                </Button>
              </>
            );
          },
        },
      ];


      const [rows,setRows] = useState([]);
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
      setRows(response.data)
      console.log(response.data)
    })
    .catch((reject)=>{
      console.log(reject.data)
    })
  },[])
  return (
    <div className="main-body">
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        rowHeight={50}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        components={{
          Toolbar:GridToolbar
        }}
        // columnVisibilityModel={{
        //   firstName:false,
        //   lastName:false,
        // }}
      />
    </div>
    </div>
  );
}
export default DataGrids;