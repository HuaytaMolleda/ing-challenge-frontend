import logo from './logo.svg';
import './App.css';
import {HTTP_METHODS, headers, serverRoutes} from "./app.constants";
import {Grid} from "@material-ui/core";

function App() {

  useEffect(()=>{

    const applicationHeaders = new Headers()

    applicationHeaders.append(headers.x_role_id,process.env.REACT_APP_X_ROLE_ADMIN_ID)
    applicationHeaders.append(headers.contentType,process.env.REACT_APP_CONTENT_TYPE)
    applicationHeaders.append(headers.x_type_operation_id,"726f6c65")


    fetch(buildUrl(process.env.REACT_APP_URL_BASE,serverRoutes.settings,'list?') + new URLSearchParams({
      size : 10,
      page : 1
    }),{
      method: HTTP_METHODS.GET,
      headers:applicationHeaders
    }).then((response)=>{
      if(!response.ok) throw  response
      console.log(response)
      return response.json()
    }).then((data)=>{
      setStatus(data)
    })
  },[])

  return (
      <div>

      </div>
  );
}

export default App;
