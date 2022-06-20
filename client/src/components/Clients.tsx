import { useQuery } from "@apollo/client";
import { GET_CLIENTS } from "../queries/clientQueries";

import { ClientRow } from "./ClientRow";
import { Client } from "../interfaces/clientInterfaces";

interface ClientData {
  clients: Client[];
}

export function Clients() {
  const { loading, error, data } = useQuery<ClientData>(GET_CLIENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {!loading && !error && data && (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {data.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
