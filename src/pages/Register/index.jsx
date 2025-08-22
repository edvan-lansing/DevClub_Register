import React, { useState } from "react";
import { Step1 } from "./step1";
import { Step2 } from "./step2";
import { Step3 } from "./step3";
import { Step4 } from "./step4";

const initialState = {
  nome: "",
  dataNascimento: "",
  cpf: "",
  apelido: "",
  genero: "",
  email: "",
  telefone: "",
  estado: "",
  pais: ""
};

export const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialState);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);
  const handleSubmit = () => {
    // Enviar para o backend
    alert("Usuário cadastrado!");
    setStep(1);
    setFormData(initialState);
  };

  switch (step) {
    case 1:
      return <Step1 formData={formData} onChange={handleChange} onNext={handleNext} />;
    case 2:
      return <Step2 formData={formData} onChange={handleChange} onNext={handleNext} onBack={handleBack} />;
    case 3:
      return <Step3 formData={formData} onChange={handleChange} onNext={handleNext} onBack={handleBack} />;
    case 4:
      return <Step4 formData={formData} onChange={handleChange} onBack={handleBack} onSubmit={handleSubmit} />;
    default:
      return null;
  }
};
