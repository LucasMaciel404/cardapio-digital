import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  width: 100%;

  background: #fffaf3;

  overflow-x: hidden;
`;
export const Hero = styled.section`
  width: 100%;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 56px 24px 36px;

  text-align: center;

  background: linear-gradient(
    180deg,
    #fff3e8 0%,
    #fffaf3 100%
  );

  @media (max-width: 768px) {
    padding: 42px 20px 30px;
  }

  @media (max-width: 480px) {
    padding: 32px 16px 24px;
  }
`;

export const Brand = styled.div`
  width: 58px;
  height: 58px;

  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  margin: 0 0 18px;

  border-radius: 18px;

  background: #ff8a4c;
  color: #ffffff;

  font-size: 24px;
  font-weight: 800;
  line-height: 1;

  text-align: center;

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;

    margin-bottom: 14px;

    border-radius: 15px;

    font-size: 21px;
  }
`;


export const Title = styled.h1`
  width: 100%;
  max-width: 700px;

  margin: 0;

  text-align: center;

  font-size: clamp(28px, 5vw, 36px);
  line-height: 1.15;

  color: #2d241f;
`;

export const Subtitle = styled.p`
  width: 100%;
  max-width: 520px;

  margin: 12px 0 0;

  text-align: center;

  font-size: 15px;
  line-height: 1.6;

  color: #8a7567;

  @media (max-width: 480px) {
    margin-top: 10px;

    font-size: 14px;
    line-height: 1.5;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1100px;

  box-sizing: border-box;

  margin: 0 auto;

  padding: 20px 24px 60px;

  @media (max-width: 768px) {
    padding: 18px 20px 48px;
  }

  @media (max-width: 480px) {
    padding: 12px 14px 36px;
  }
`;

export const CategorySection = styled.section`
  width: 100%;

  margin-top: 34px;

  @media (max-width: 480px) {
    margin-top: 28px;
  }
`;

export const CategoryTitle = styled.h2`
  margin: 0 0 16px;

  font-size: 23px;
  line-height: 1.2;

  color: #2d241f;

  @media (max-width: 480px) {
    margin-bottom: 12px;

    font-size: 21px;
  }
`;

export const ProductsGrid = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(
    2,
    minmax(0, 1fr)
  );

  gap: 16px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

export const ProductCard = styled.article`
  width: 100%;
  min-width: 0;

  display: grid;
  grid-template-columns: 140px minmax(0, 1fr);

  overflow: hidden;

  border: 1px solid #f0e4d7;
  border-radius: 18px;

  background: #ffffff;

  box-shadow: 0 10px 28px rgba(94, 67, 41, 0.05);

  @media (max-width: 600px) {
    grid-template-columns: 120px minmax(0, 1fr);

    border-radius: 16px;
  }

  @media (max-width: 420px) {
    grid-template-columns: 100px minmax(0, 1fr);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;

  min-height: 150px;

  object-fit: cover;

  background: #fff1e7;

  @media (max-width: 600px) {
    min-height: 140px;
  }

  @media (max-width: 420px) {
    min-height: 130px;
  }
`;

export const ProductBody = styled.div`
  min-width: 0;

  display: flex;
  flex-direction: column;

  padding: 18px;

  @media (max-width: 600px) {
    padding: 15px;
  }

  @media (max-width: 420px) {
    padding: 12px;
  }
`;

export const ProductName = styled.h3`
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
  margin: 7px 0 0;

  font-size: 13px;
  line-height: 1.5;

  color: #8a7567;

  overflow-wrap: break-word;

  @media (max-width: 420px) {
    font-size: 12px;
    line-height: 1.45;
  }
`;

export const Price = styled.strong`
  margin-top: auto;
  padding-top: 14px;

  font-size: 18px;

  color: #ff7a35;

  @media (max-width: 480px) {
    padding-top: 10px;

    font-size: 17px;
  }
`;

export const Empty = styled.div`
  width: 100%;

  box-sizing: border-box;

  margin-top: 40px;

  padding: 36px;

  text-align: center;

  border: 1px dashed #e7d5c7;
  border-radius: 18px;

  background: #ffffff;

  color: #8a7567;

  @media (max-width: 480px) {
    margin-top: 28px;

    padding: 28px 18px;

    border-radius: 15px;

    font-size: 14px;
  }
`;

export const Loading = styled.div`
  min-height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;

  box-sizing: border-box;

  background: #fffaf3;

  color: #8a7567;

  font-size: 15px;
  font-weight: 600;

  text-align: center;
`;