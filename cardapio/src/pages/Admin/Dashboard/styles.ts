import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background: #fffaf3;
  color: #2d241f;
`;

export const Header = styled.header`
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 36px;

  background: #ffffff;
  border-bottom: 1px solid #f0e4d7;

  @media (max-width: 700px) {
    padding: 0 20px;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const BrandIcon = styled.div`
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 12px;

  background: #ff8a4c;
  color: #ffffff;

  font-size: 18px;
  font-weight: 700;
`;

export const BrandName = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #2d241f;
`;

export const LogoutButton = styled.button`
  padding: 10px 16px;

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
    background: #fff8f3;
  }
`;

export const Content = styled.main`
  width: 100%;
  max-width: 1100px;

  margin: 0 auto;

  padding: 48px 28px;

  @media (max-width: 700px) {
    padding: 32px 20px;
  }
`;

export const Welcome = styled.div`
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  margin: 0;

  font-size: 30px;
  line-height: 1.2;

  color: #2d241f;
`;

export const Subtitle = styled.p`
  margin-top: 8px;
  margin-bottom: 0;

  font-size: 15px;
  color: #8a7567;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 18px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const DashboardCard = styled.button`
  min-height: 160px;

  padding: 24px;

  text-align: left;

  border: 1px solid #f0e4d7;
  border-radius: 18px;

  background: #ffffff;
  color: #2d241f;

  cursor: pointer;

  box-shadow: 0 10px 30px rgba(94, 67, 41, 0.06);

  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: #ffc3a2;
    box-shadow: 0 14px 34px rgba(94, 67, 41, 0.1);
  }
`;

export const CardIcon = styled.div`
  width: 46px;
  height: 46px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 20px;

  border-radius: 14px;

  background: #fff1e7;

  font-size: 22px;
`;

export const CardTitle = styled.h2`
  margin: 0;

  font-size: 19px;
  color: #2d241f;
`;

export const CardDescription = styled.p`
  margin-top: 8px;
  margin-bottom: 0;

  font-size: 14px;
  line-height: 1.5;

  color: #8a7567;
`;