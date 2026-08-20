import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  width: 100%;

  background: #fffaf3;

  overflow-x: hidden;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1100px;

  margin: 0 auto;

  padding: 40px 28px;

  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 28px 20px;
  }

  @media (max-width: 480px) {
    padding: 22px 14px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 16px;

  margin-bottom: 28px;

  @media (max-width: 600px) {
    align-items: stretch;
    flex-direction: column;

    gap: 14px;
  }
`;

export const HeaderText = styled.div`
  display: flex;
  flex-direction: column;

  gap: 6px;

  min-width: 0;
`;

export const Title = styled.h1`
  margin: 0;

  font-size: clamp(24px, 5vw, 28px);
  line-height: 1.2;

  color: #2d241f;
`;

export const Subtitle = styled.p`
  margin: 0;

  font-size: 14px;
  line-height: 1.5;

  color: #8a7567;

  @media (max-width: 480px) {
    font-size: 13px;
  }
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

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const ProductsGrid = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(
    3,
    minmax(0, 1fr)
  );

  gap: 18px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(
      2,
      minmax(0, 1fr)
    );
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 14px;
  }
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

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const FormCard = styled.form`
  width: 100%;

  margin-bottom: 28px;
  padding: 24px;

  box-sizing: border-box;

  display: grid;
  grid-template-columns: repeat(
    2,
    minmax(0, 1fr)
  );

  gap: 18px;

  background: #ffffff;

  border: 1px solid #f0e4d7;
  border-radius: 16px;

  box-shadow: 0 8px 24px rgba(94, 67, 41, 0.05);

  @media (max-width: 700px) {
    grid-template-columns: 1fr;

    padding: 20px;

    gap: 16px;
  }

  @media (max-width: 480px) {
    padding: 16px;

    border-radius: 14px;
  }
`;

export const Field = styled.div`
  min-width: 0;

  display: flex;
  flex-direction: column;

  gap: 7px;
`;

export const FullField = styled(Field)`
  grid-column: 1 / -1;

  @media (max-width: 700px) {
    grid-column: auto;
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

  font-size: 14px;

  outline: none;

  transition: 0.2s ease;

  &:focus {
    border-color: #ff8a4c;

    box-shadow: 0 0 0 3px
      rgba(255, 138, 76, 0.1);
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;

  box-sizing: border-box;

  min-height: 90px;

  resize: vertical;

  padding: 11px 13px;

  border: 1px solid #eadbce;
  border-radius: 10px;

  background: #fffdfb;
  color: #2d241f;

  font-family: inherit;
  font-size: 14px;

  outline: none;

  &:focus {
    border-color: #ff8a4c;

    box-shadow: 0 0 0 3px
      rgba(255, 138, 76, 0.08);
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const Select = styled.select`
  width: 100%;

  box-sizing: border-box;

  padding: 11px 13px;

  border: 1px solid #eadbce;
  border-radius: 10px;

  background: #fffdfb;
  color: #2d241f;

  font-size: 14px;

  outline: none;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const CheckboxArea = styled.label`
  display: flex;
  align-items: center;

  gap: 9px;

  font-size: 14px;

  color: #4b3d35;

  cursor: pointer;

  input {
    width: 18px;
    height: 18px;

    flex-shrink: 0;

    accent-color: #ff8a4c;
  }
`;

export const ImagePreview = styled.img`
  width: 130px;
  height: 130px;

  object-fit: cover;

  border-radius: 14px;

  border: 1px solid #f0e4d7;

  @media (max-width: 480px) {
    width: 110px;
    height: 110px;
  }
`;

export const FormActions = styled.div`
  grid-column: 1 / -1;

  display: flex;
  justify-content: flex-end;

  gap: 10px;

  @media (max-width: 700px) {
    grid-column: auto;
  }

  @media (max-width: 480px) {
    flex-direction: column-reverse;

    width: 100%;
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

  transition: 0.2s ease;

  &:hover {
    background: #f47d3f;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    width: 100%;

    min-height: 44px;
  }
`;

export const CancelButton = styled.button`
  padding: 11px 18px;

  border: 1px solid #eadbce;
  border-radius: 10px;

  background: #ffffff;
  color: #7d6758;

  font-size: 14px;
  font-weight: 600;

  cursor: pointer;

  @media (max-width: 480px) {
    width: 100%;

    min-height: 44px;
  }
`;

export const ProductCard = styled.div`
  width: 100%;
  min-width: 0;

  overflow: hidden;

  border: 1px solid #f0e4d7;
  border-radius: 16px;

  background: #ffffff;

  box-shadow: 0 8px 24px
    rgba(94, 67, 41, 0.05);

  @media (max-width: 600px) {
    display: grid;

    grid-template-columns:
      115px
      minmax(0, 1fr);
  }

  @media (max-width: 420px) {
    grid-template-columns:
      100px
      minmax(0, 1fr);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 170px;

  object-fit: cover;

  background: #fff1e7;

  @media (max-width: 600px) {
    height: 100%;

    min-height: 160px;
  }

  @media (max-width: 420px) {
    min-height: 150px;
  }
`;

export const ProductBody = styled.div`
  min-width: 0;

  padding: 16px;

  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 13px;
  }
`;

export const ProductName = styled.h2`
  margin: 0;

  font-size: 17px;
  line-height: 1.3;

  color: #2d241f;

  overflow-wrap: break-word;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ProductDescription = styled.p`
  min-height: 42px;

  margin: 7px 0;

  font-size: 13px;
  line-height: 1.5;

  color: #8a7567;

  overflow-wrap: break-word;

  @media (max-width: 600px) {
    min-height: auto;
  }

  @media (max-width: 420px) {
    font-size: 12px;
  }
`;

export const Price = styled.strong`
  display: block;

  margin-top: 12px;

  font-size: 18px;

  color: #ff7a35;

  @media (max-width: 480px) {
    font-size: 17px;
  }
`;

export const Status = styled.span<{
  $available: boolean;
}>`
  display: inline-block;

  margin-top: 10px;

  padding: 5px 8px;

  border-radius: 20px;

  font-size: 11px;
  font-weight: 700;

  background: ${({ $available }) =>
    $available
      ? "#edf8ef"
      : "#fff1f0"};

  color: ${({ $available }) =>
    $available
      ? "#458551"
      : "#c95751"};
`;

export const Actions = styled.div`
  display: flex;

  gap: 8px;

  margin-top: 16px;

  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

export const EditButton = styled.button`
  flex: 1;

  padding: 9px;

  border: 1px solid #f0d5c5;
  border-radius: 9px;

  background: #fff7f1;
  color: #d96f38;

  font-size: 13px;
  font-weight: 600;

  cursor: pointer;

  @media (max-width: 420px) {
    width: 100%;
  }
`;

export const DeleteButton = styled.button`
  flex: 1;

  padding: 9px;

  border: 1px solid #f4d0ce;
  border-radius: 9px;

  background: #fff3f2;
  color: #c95751;

  font-size: 13px;
  font-weight: 600;

  cursor: pointer;

  @media (max-width: 420px) {
    width: 100%;
  }
`;

export const Empty = styled.div`
  grid-column: 1 / -1;

  width: 100%;

  box-sizing: border-box;

  padding: 40px;

  text-align: center;

  border: 1px dashed #e7d5c7;
  border-radius: 14px;

  background: #ffffff;

  color: #9c8778;

  @media (max-width: 480px) {
    padding: 28px 18px;

    font-size: 14px;
  }
`;