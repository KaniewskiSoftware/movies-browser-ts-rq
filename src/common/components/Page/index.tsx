import React from "react";
import ErrorPage from "../../states/ErrorPage";
import Loader from "../../states/Loader";
import NoResults from "../../states/NoResults";
import Footer from "../Footer";

interface PageProps {
  isLoading: boolean;
  isError: boolean;
  hasResults: boolean;
  totalPages: number;
  page: number;
  children: React.ReactNode;
}

const Page = ({
  isLoading,
  isError,
  hasResults,
  totalPages,
  page,
  children,
}: PageProps) => {
  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  if (!hasResults) {
    return <NoResults />;
  }

  return (
    <>
      {children}
      <Footer totalPages={totalPages} page={page} />
    </>
  );
};

export default Page;
