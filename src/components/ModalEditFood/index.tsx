import { Component, createRef, useRef } from "react";
import { FiCheckSquare } from "react-icons/fi";

import { Form } from "./styles";
import { Modal } from "../Modal/";
import Input from "../Input/index";
import { FormHandles } from "@unform/core";

interface EditFoodProps {
  image: string;
  name: string;
  price: string;
  description: string;
}

interface IFood {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
}

interface ModalEditFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateFood: (data: EditFoodProps) => void;
  editingFood: IFood;
}

export function ModalEditFood({
  isOpen,
  setIsOpen,
  handleUpdateFood,
  editingFood,
}: ModalEditFoodProps) {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (data: EditFoodProps) => {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}
