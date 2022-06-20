import { FaTrash } from "react-icons/fa";

import { Client } from "../interfaces/clientInterfaces";

interface ClientRowProps {
  client: Client;
}

export function ClientRow({ client }: ClientRowProps) {
  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className="btn btn-danger btn-sm">
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}
