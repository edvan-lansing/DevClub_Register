import React from "react";
import { Input } from "../../../components/atoms/input";

export const Step3 = ({ formData, onChange, onNext, onBack }) => (
  <form onSubmit={e => { e.preventDefault(); onNext(); }}>
    <h2>Contato</h2>
    <Input label="Email" name="email" type="email" value={formData.email} onChange={onChange} required />
    <Input label="Telefone" name="telefone" value={formData.telefone} onChange={onChange} required />
    <button type="button" onClick={onBack}>Voltar</button>
    <button type="submit">Próximo</button>
  </form>
);
