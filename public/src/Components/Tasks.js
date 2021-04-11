import Menu from "./Menu";
import Task from "./Task";
import ListaTask from "./ListaTasks";
function Tasks() {
  const tasks = fetch("http://localhost:3000/tasks").then((res) => res.json());
  return (
    <div>
      <Menu />
      <div className="row">
        <div className="col-lg-4">
          <Task tasks={tasks} />
        </div>
        <div className="col-lg-8">
          <ListaTask tasks={tasks} />
        </div>
      </div>
    </div>
  );
}
export default Tasks;
