function ListaProps(props) {
  const renderTable = () => {
    if (!!props.tasks) {
      const columns = [...new Set(props.tasks.flatMap((task) => Object.keys(task)))];
      const renderColumns = columns.map((column) => {
        return <th> {column} </th>;
      });
      const renderRows = props.tasks.map((task) => (
        <tr>
          {Object.keys(task).map((key) => (
            <td>{task[key]}</td>
          ))}
        </tr>
      ));
      return (
        <table className="table">
          <thead>
            <tr>{renderColumns}</tr>
          </thead>
          <tbody>{renderRows}</tbody>
        </table>
      );
    }
    return <div></div>;
  };
  return (
    <div>
	  {renderTable}
    </div>
  );
}
export default ListaProps;
