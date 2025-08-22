import React from "react";
import { Input } from "../../../components/atoms/input";

export const Step2 = ({ formData, onChange, onNext, onBack }) => (
  <form onSubmit={e => { e.preventDefault(); onNext(); }}>
    <h2>Informações Adicionais</h2>
    <Input label="Apelido" name="apelido" value={formData.apelido} onChange={onChange} required />
    <Input label="Gênero" name="genero" value={formData.genero} onChange={onChange} required />
    <button type="button" onClick={onBack}>Voltar</button>
    <button type="submit">Próximo</button>
  </form>
);
