import styled from "styled-components";

interface BackgroundProps {
  $backdrop?: string;
}

/**
 * A styled section component that serves as a container for the backdrop component.
 * It has various height breakpoints and applies background and text color from the theme.
 */
export const Container = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 770px;
  background-color: ${({ theme }) => theme.colors.backdrop};
  color: ${({ theme }) => theme.colors.base};

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDesktop}) {
    height: 540px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    height: 480px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 360px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    height: 252px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smalest}) {
    height: 148px;
  }
`;

/**
 * A styled div component that displays the backdrop image with a custom box-shadow effect.
 *
 * @prop $backdrop - The URL of the backdrop image.
 */
export const Background = styled.div<BackgroundProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 16px 56px;
  width: 100%;
  max-width: 1368px;
  height: 100%;
  font-size: 16px;
  background-image: ${({ $backdrop }) => `url(${$backdrop})`};
  background-position: center;
  background-size: cover;
  box-shadow: inset 0px 60px 120px -15px ${({ theme }) => theme.colors.backdrop},
    inset -100px 0px 120px -10px ${({ theme }) => theme.colors.backdrop},
    inset 100px 0px 120px -10px ${({ theme }) => theme.colors.backdrop},
    inset 0 -180px 180px -10px ${({ theme }) => theme.colors.backdrop};

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDesktop}) {
    padding-bottom: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    box-shadow: inset 0px 30px 60px -8px ${({ theme }) => theme.colors.backdrop},
      inset -50px 0px 60px -5px ${({ theme }) => theme.colors.backdrop},
      inset 50px 0px 60px -5px ${({ theme }) => theme.colors.backdrop},
      inset 0 -90px 90px -5px ${({ theme }) => theme.colors.backdrop};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    padding-bottom: 10px;
    box-shadow: inset 0px 20px 50px -6px ${({ theme }) => theme.colors.backdrop},
      inset -35px 0px 40px 10px ${({ theme }) => theme.colors.backdrop},
      inset 35px 0px 40px 10px ${({ theme }) => theme.colors.backdrop},
      inset 0 -45px 90px -5px ${({ theme }) => theme.colors.backdrop};
  }
`;

/**
 * A styled div component for the backdrop content that is positioned absolutely within the Background component.
 */
export const BackdropContent = styled.div`
  position: absolute;
`;

/**
 * A styled h1 component for displaying the title of the backdrop component.
 * It has various font-size breakpoints for responsiveness.
 */
export const Title = styled.h2`
  margin: 0 0 24px;
  font-weight: 600;
  font-size: 64px;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumDesktop}) {
    font-size: 56px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 36px;
    margin-bottom: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 24px;
    margin-bottom: 8px;
  }
`;
