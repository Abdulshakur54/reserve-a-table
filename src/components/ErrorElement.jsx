import { useRouteError } from "react-router-dom";
const ErrorElement = () => {
    const error = useRouteError();
    const style = {
      position:'absolute',
      top: '50vh',
      left: '50vw',
      transform:'translate(-50%,-50%)',
      textAlign:'center'
    
    }
  return (
    <div style={{position:"relative"}}>
      <div style={style}>
        <h1 style={{margin:'10px auto'}}>Oops!</h1>
        <p>
          {error.status}: {error.statusText}
        </p>
      </div>
    </div>
  );
};
export default ErrorElement;
