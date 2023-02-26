import createCache from "@emotion/cache";
import { Avatar } from "@mui/material";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import userChats from '../Clique/data/userChats'
import MetaData from "../Layouts/MetaData";
import MUIDataTable from 'mui-datatables';
import LinkActions from "./LinkActions";
const muiCache = createCache({
    key: "mui-datatables",
    prepend: true
  });
const Importers=()=>{

    const clicked=(params)=>{
        console.log(params[0])
      }
      const options = {
        search: true,
        download: true,
        print: true,
        viewColumns: true,
        filter: true,
        filterType: "dropdown",
        responsive:"standard",
        onRowClick:rowData=>clicked(rowData),
        onRowsDelete:rowData=>{console.log(rowData.Title)},
        onTableChange: (action, state) => {
          console.log(action);
          console.dir(state);
        }
      };
      var data2=[];
      userChats &&
      userChats.forEach((item) => {
        data2.unshift({
            id: item.id,
            Name:item.name,
            Avatar:item.photoUrl,
        });
      });
      const columns = [
        "id",{ 
      
            name:"Actions",
            options: {
              filter: false,
              customBodyRender:(value, tableMeta, updateValue)=> (
                <LinkActions editRoute={"loanprofile"} deleteHandler={tableMeta.rowData[columns, { name: "Name" }]} id={data2[tableMeta.rowIndex].Id} name={data2[tableMeta.rowIndex]} />
              )
            }
          },
          { 
      
            name:"Avatar",
            options: {
              filter: false,
              customBodyRender:(value, tableMeta, updateValue)=> (
                <Avatar src={data2[tableMeta.rowIndex].Avatar}/>  )
            }
          },
         { name: "Name", options: { filterOptions: { fullWidth: true } } }
      ];
return(
<div className="flex-1  mx-auto left-0 top-0 w-full">
<main className="w-full sm:pt-20 sm:mt-0 mt-0">

{/* <!-- row --> */}
<div className="flex sm:w-full sm:mt-4 m-auto mb-7 top-0  bg-white shadow-lg">
 
    <div className=" bg-primary-blue ml-0 h-100 pl-10 pr-12 hidden sm:flex flex-col gap-4 w-3/12">
        <h1 className="font-medium text-white text-3xl">Importes</h1>
        <p className="text-gray-200 text-lg">Get access to there information by clicking the icon</p>
    </div>
    {/* <!-- sidebar column  --> */}

    {/* <!-- login column --> */}
    <div className="flex-1 overflow-hidden w-full">

        {/* <!-- edit info container --> */}
        <div className="text-center py-10 sm:px-14">

      
    <CacheProvider value={muiCache}>
    <ThemeProvider theme={createTheme()}>
      <MetaData title="Admin Users  | E-Bidir" />
      <div class="flex flex-col h-full pl-px rounded-sm shadow-lg p-2  pb-6 w-full overflow-hidden">
      <MUIDataTable
          title={"Importers"}
          data={data2}
          columns={columns}
          options={options}
        />
         </div>
      </ThemeProvider>
    </CacheProvider>
  
            </div>
        
    </div>
</div>

</main>
</div>)
}

export default Importers