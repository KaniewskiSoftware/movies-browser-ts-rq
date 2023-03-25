import { usePagination } from "../../hooks/usePagination";
import Button from "./Button";
import { Counter, Span, Wrapper } from "./styled";

interface FooterProps {
  totalPages: number;
  page: number;
}

/**
 * Footer component for pagination.
 *
 * @param totalPages - The total number of pages.
 * @param page - The current page number.
 */
const Footer = ({ totalPages, page }: FooterProps) => {
  const lastPageNumber = totalPages > 500 ? 500 : totalPages; // api doesn't return data from pages over 500
  const { goToFirstPage, goToNextPage, goToPreviousPage, goToLastPage } =
    usePagination({
      page,
      lastPageNumber,
    });

  return (
    <Wrapper>
      <Button
        disabled={page === 1}
        onClick={goToFirstPage}
        title="First"
        mobile={true}
      />
      <Button disabled={page === 1} onClick={goToPreviousPage} title="Previous" />
      <Counter>
        Page <Span>{page}</Span> of <Span> {lastPageNumber}</Span>
      </Counter>
      <Button
        disabled={page === lastPageNumber}
        onClick={goToNextPage}
        rotated
        title="Next"
      />
      <Button
        disabled={page === lastPageNumber}
        onClick={goToLastPage}
        rotated
        title="Last"
        mobile={true}
      />
    </Wrapper>
  );
};

export default Footer;
