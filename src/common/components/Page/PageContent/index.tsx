import React from "react";
import Title, { TitleType } from "../../Title";
import { ContainerType, Wrapper } from "../../Wrapper";

interface PageContentProps {
  containerType?: ContainerType;
  title: string;
  titleType?: TitleType;
  children: React.ReactNode;
}

const PageContent = ({
  containerType,
  title,
  titleType,
  children,
}: PageContentProps) => (
  <Wrapper $containerType={containerType}>
    <Title title={title} styleType={titleType} />
    {children}
  </Wrapper>
);

export default PageContent;
