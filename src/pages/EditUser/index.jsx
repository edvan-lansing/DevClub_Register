import React, { useEffect, useState } from "react";
import { getUser, updateUser } from "../../services/api";
import { useParams, useNavigate } from "react-router-dom";
import { Input } from "../../components/atoms/input";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    getUser(id).then(setFormData);
  }, [id]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await updateUser(id, formData);
    navigate("/users");
  };

  if (!formData) return <div>Carregando...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Editar Usuário</h2>
      <Input label="Nome" name="nome" value={formData.nome} onChange={handleChange} required />
      <Input label="Email" name="email" value={formData.email} onChange={handleChange} required />
      {/* Adicione outros campos conforme necessário */}
      <button type="submit">Salvar</button>
    </form>
  );
};

export default EditUser;
