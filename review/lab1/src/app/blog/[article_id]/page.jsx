export default function ArticlePage(props) {
  console.log(props.params);
  const title = `Articulo ${props.params.article_id}`;
  return (<div>
      {title}<br/>
      {JSON.stringify(props)}
    </div>)
}