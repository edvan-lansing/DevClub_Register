import React from "react";
import { useNavigate } from "react-router-dom";
import { ContainerHome, HomeHeader } from "./style.jsx";
import { UserIcon } from "../../components/atoms/icons";
import { ButtonGroup } from "../../components/molecules/ButtonGroup";

export function Home() {
  const navigate = useNavigate();
  return (
    <ContainerHome>
      <HomeHeader>
        <UserIcon />
        <h1>Cadastro de Usuário</h1>
      </HomeHeader>
      <ButtonGroup
        direction="row"
        firstLabel="Cadastro"
        secondLabel="Usuários Cadastrados"
        onFirstClick={() => navigate("/register")}
        onSecondClick={() => navigate("/users")}
        firstColor="success"
        secondColor="primary"
      />
    </ContainerHome>
  );
}
