import "./App.css";
import DataGrid from "./DataGrid";
import Field from "./testingField";
// function getFullName(params) {
//   return `${params.row.firstName || ''} ${params.row.lastName || ''}`;
// }
// function getFullName(params) {
//   return params.row.firstName + " " + params.row.lastName;
// }

const App = ()=>{
  return(
    <div className="bg" >
      <Field />
    </div>
    
    // <DataGrid/>
  )
}


export default App;
