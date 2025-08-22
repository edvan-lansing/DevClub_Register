import React from "react";
import { Input } from "../../../components/atoms/input";

export const Step4 = ({ formData, onChange, onBack, onSubmit }) => (
  <form onSubmit={e => { e.preventDefault(); onSubmit(); }}>
    <h2>Confirmação</h2>
    <div>
      <strong>Nome:</strong> {formData.nome}<br />
      <strong>Data de Nascimento:</strong> {formData.dataNascimento}<br />
      <strong>CPF:</strong> {formData.cpf}<br />
      <strong>Apelido:</strong> {formData.apelido}<br />
      <strong>Gênero:</strong> {formData.genero}<br />
      <strong>Email:</strong> {formData.email}<br />
      <strong>Telefone:</strong> {formData.telefone}<br />
    </div>
    <Input label="Estado" name="estado" value={formData.estado} onChange={onChange} required />
    <Input label="País" name="pais" value={formData.pais} onChange={onChange} required />
    <button type="button" onClick={onBack}>Voltar</button>
    <button type="submit">Finalizar</button>
  </form>
);
