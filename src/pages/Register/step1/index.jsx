import React from "react";
import { Input } from "../../../components/atoms/input";
import { ContainerStep1 } from "./styles";
import { Button } from "../../../components/atoms/button";
import { useNavigate } from "react-router-dom";

export const Step1 = ({ formData, onChange, onNext }) => {
  const navigate = useNavigate();
  return (
    <>
      <Button variant="secondary" onClick={() => navigate("/")}>Voltar</Button>
      <Button variant="primary" onClick={() => navigate("/users")}>Usuários Cadastrados</Button>
      <ContainerStep1 onSubmit={e => { e.preventDefault(); onNext(); }}>
        <h2>Dados Pessoais</h2>

        <Input label="Nome" name="nome" value={formData.nome} onChange={onChange} required />
        <Input label="Data de Nascimento" name="dataNascimento" type="date" value={formData.dataNascimento} onChange={onChange} required />
        <Input label="CPF" name="cpf" value={formData.cpf} onChange={onChange} required />
        <Button type="submit">Próximo</Button>
    </ContainerStep1>
    </>
  );
};
