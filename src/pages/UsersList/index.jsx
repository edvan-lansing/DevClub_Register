import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../../services/api.js";
import { useNavigate } from "react-router-dom";
import { EditIcon, TrashIcon } from "../../components/atoms/icons";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  const handleDelete = async (id) => {
    await deleteUser(id);
    setUsers(users.filter(u => u.id !== id));
  };

  return (
    <div>
      <h2>Usuários Cadastrados</h2>
      <div>
        <button onClick={() => navigate("/")}>Voltar Home</button>
        <button onClick={() => navigate("/register")}>Cadastrar Novo Usuário</button>
      </div>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.nome} - {user.email}
            <button onClick={() => navigate(`/edit/${user.id}`)}><EditIcon width={16} /></button>
            <button onClick={() => handleDelete(user.id)}><TrashIcon width={16} /></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
