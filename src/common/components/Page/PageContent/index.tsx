import React from "react";
import Title from "../../Title";
import { Wrapper } from "../../Wrapper";

interface PageContentProps {
  containerType?: "default" | "people";
  title: string;
  children: React.ReactNode;
}

const PageContent = ({ containerType, title, children }: PageContentProps) => (
  <Wrapper $containerType={containerType}>
    <Title title={title} />
    {children}
  </Wrapper>
);

export default PageContent;
