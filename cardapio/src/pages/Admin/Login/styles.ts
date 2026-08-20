import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 24px;

  background:
    linear-gradient(180deg, #fffaf3 0%, #fff6ea 100%);
`;

export const Card = styled.div`
  width: 100%;
  max-width: 380px;

  padding: 32px;

  border-radius: 24px;

  background: #ffffff;

  border: 1px solid #f1e5d7;

  box-shadow: 0 18px 50px rgba(94, 67, 41, 0.1);

  @media (max-width: 480px) {
    padding: 24px;
    border-radius: 20px;
  }
`;

export const Logo = styled.div`
  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 22px;

  border-radius: 14px;

  background: #ff8a4c;
  color: #ffffff;

  font-size: 22px;
  font-weight: 700;
`;

export const Title = styled.h1`
  margin: 0;

  font-size: 26px;
  line-height: 1.2;

  color: #2d241f;
`;

export const Subtitle = styled.p`
  margin-top: 10px;
  margin-bottom: 26px;

  font-size: 14px;
  line-height: 1.6;

  color: #8a7567;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;

  color: #4b3d35;
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;

  padding: 13px 14px;

  border-radius: 12px;
  border: 1px solid #e6d8ca;

  background: #fffdfb;
  color: #2d241f;

  font-size: 15px;

  outline: none;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;

  &:focus {
    border-color: #ff8a4c;
    background: #ffffff;
    box-shadow: 0 0 0 4px rgba(255, 138, 76, 0.12);
  }

  &::placeholder {
    color: #b4a296;
  }
`;

export const Button = styled.button`
  width: 100%;

  padding: 13px 16px;

  border: none;
  border-radius: 12px;

  background: #ff8a4c;
  color: #ffffff;

  font-size: 15px;
  font-weight: 700;

  cursor: pointer;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;

  &:hover {
    background: #f47d3f;
    transform: translateY(-1px);
    box-shadow: 0 8px 20px rgba(255, 138, 76, 0.22);
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const ErrorMessage = styled.p`
  margin: 0;

  padding: 11px 12px;

  border-radius: 10px;

  background: #fff1f0;
  color: #c94a43;

  font-size: 13px;
`;