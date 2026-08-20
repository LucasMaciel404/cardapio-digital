import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  background: #fffaf3;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 900px;

  margin: 0 auto;

  padding: 40px 28px;

  @media (max-width: 700px) {
    padding: 28px 20px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 16px;

  margin-bottom: 28px;

  @media (max-width: 600px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  margin: 0;

  font-size: 28px;
  color: #2d241f;
`;

export const AddButton = styled.button`
  padding: 12px 16px;

  border: none;
  border-radius: 12px;

  background: #ff8a4c;
  color: #ffffff;

  font-size: 14px;
  font-weight: 700;

  cursor: pointer;

  transition: 0.2s ease;

  &:hover {
    background: #f47d3f;
    transform: translateY(-1px);
  }
`;

export const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CategoryCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 16px;

  padding: 18px 20px;

  border: 1px solid #f0e4d7;
  border-radius: 14px;

  background: #ffffff;

  box-shadow: 0 8px 24px rgba(94, 67, 41, 0.05);
`;

export const CategoryName = styled.span`
  font-size: 15px;
  font-weight: 600;

  color: #2d241f;
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;
`;

export const EditButton = styled.button`
  padding: 8px 12px;

  border: 1px solid #f0d5c5;
  border-radius: 9px;

  background: #fff7f1;
  color: #d96f38;

  font-size: 13px;
  font-weight: 600;

  cursor: pointer;
`;

export const DeleteButton = styled.button`
  padding: 8px 12px;

  border: 1px solid #f4d0ce;
  border-radius: 9px;

  background: #fff3f2;
  color: #c95751;

  font-size: 13px;
  font-weight: 600;

  cursor: pointer;
`;
export const BackButton = styled.button`
  padding: 10px 14px;

  border: 1px solid #eadbce;
  border-radius: 10px;

  background: #ffffff;
  color: #7d6758;

  font-size: 14px;
  font-weight: 600;

  cursor: pointer;

  transition: 0.2s ease;

  &:hover {
    border-color: #ff8a4c;
    color: #ff8a4c;
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  gap: 10px;
`;

export const FormCard = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 12px;

  margin-bottom: 24px;
  padding: 20px;

  background: #ffffff;

  border: 1px solid #f0e4d7;
  border-radius: 14px;

  box-shadow: 0 8px 24px rgba(94, 67, 41, 0.05);

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const Field = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const SmallField = styled(Field)`
  max-width: 120px;

  @media (max-width: 600px) {
    max-width: none;
  }
`;

export const Label = styled.label`
  font-size: 13px;
  font-weight: 600;

  color: #4b3d35;
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;

  padding: 11px 13px;

  border: 1px solid #eadbce;
  border-radius: 10px;

  background: #fffdfb;

  color: #2d241f;

  outline: none;

  &:focus {
    border-color: #ff8a4c;
    box-shadow: 0 0 0 3px rgba(255, 138, 76, 0.1);
  }
`;

export const SaveButton = styled.button`
  padding: 11px 18px;

  border: none;
  border-radius: 10px;

  background: #ff8a4c;
  color: #ffffff;

  font-size: 14px;
  font-weight: 700;

  cursor: pointer;

  &:hover {
    background: #f47d3f;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const CancelButton = styled.button`
  padding: 11px 16px;

  border: 1px solid #eadbce;
  border-radius: 10px;

  background: #ffffff;
  color: #7d6758;

  font-weight: 600;

  cursor: pointer;
`;

export const Empty = styled.div`
  padding: 40px;

  text-align: center;

  border: 1px dashed #e7d5c7;
  border-radius: 14px;

  color: #9c8778;

  background: #ffffff;
`;