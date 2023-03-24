import React from "react";
import Title from "../../Title";
import { ContainerType, Wrapper } from "../../Wrapper";

interface PageContentProps {
  containerType?: ContainerType;
  title?: string;
  children: React.ReactNode;
}

const PageContent = ({ containerType, title, children }: PageContentProps) => (
  <Wrapper $containerType={containerType}>
    {title && <Title title={title} />}
    {children}
  </Wrapper>
);

export default PageContent;
