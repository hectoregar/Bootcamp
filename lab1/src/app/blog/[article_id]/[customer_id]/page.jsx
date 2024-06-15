export default function CustomerPage(props) {
    console.log(props.params);
    const title = `Articulo ${props.params}`;
    return (<div>
        {title}<br/>
        {JSON.stringify(props)}
      </div>)
  }