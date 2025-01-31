import { gql, useQuery } from "@apollo/client";
const query = gql`
  query getAllTodos {
    getTodos(limit: 10) {
      id
      title
      completed
      user {
        id
        name
      }
    }
  }
`;
function App() {
  const { data, loading } = useQuery(query);
  if (loading) return <h1>Loading</h1>;
  return (
    <>
      {data.getTodos.map((obj, _index) => {
        return (
          <div style={{ paddingTop: 30 }} key={"data" + _index}>
            {JSON.stringify(obj)}
          </div>
        );
      })}
    </>
  );
}

export default App;
