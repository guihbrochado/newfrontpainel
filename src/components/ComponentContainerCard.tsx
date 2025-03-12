import React from "react";
import { Card, CardBody, CardHeader, CardTitle, Button } from "react-bootstrap"; // Adicione Button aqui

export interface ComponentContainerProps {
  title: string;
  children: React.ReactNode;
  showAddButton?: boolean;
  onAddClick?: () => void;
}

const ComponentContainerCard = ({ title, children, showAddButton, onAddClick }: ComponentContainerProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="d-flex justify-content-between align-items-center">
          <CardTitle>{title}</CardTitle>
          {showAddButton && (
            <Button variant="primary" onClick={onAddClick}>
              Adicionar
            </Button>
          )}
        </div>
      </CardHeader>
      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default ComponentContainerCard;