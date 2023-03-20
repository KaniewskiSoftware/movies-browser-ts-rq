import { usePagination } from "../hooks/usePagination";
import Button from "./Button";
import { Counter, Span, Wrapper } from "./styled";

interface FooterProps {
  totalPages: number;
  page: number;
}

const Footer = ({ totalPages, page }: FooterProps) => {
  const lastPageNumber = totalPages > 500 ? 500 : totalPages; // api doesn't return data from pages over 500
  const { firstPage, nextPage, prevPage, lastPage } = usePagination({
    page,
    lastPageNumber,
  });

  return (
    <Wrapper>
      <Button
        disabled={page === 1}
        onClick={firstPage}
        title="First"
        mobile={true}
      />
      <Button disabled={page === 1} onClick={prevPage} title="Previous" />
      <Counter>
        Page <Span>{page}</Span> of <Span> {lastPageNumber}</Span>
      </Counter>
      <Button
        disabled={page === lastPageNumber}
        onClick={nextPage}
        rotated
        title="Next"
      />
      <Button
        disabled={page === lastPageNumber}
        onClick={lastPage}
        rotated
        title="Last"
        mobile={true}
      />
    </Wrapper>
  );
};

export default Footer;
