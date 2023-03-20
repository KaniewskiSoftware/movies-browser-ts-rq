import {
  useReplaceQueryParameter,
} from "../queryParameters";
import Button from "./Button";
import { Counter, Span, Wrapper } from "./styled";

const Footer = ({ totalPages, page }: { totalPages: number; page: number }) => {
  const lastPageNumber = totalPages > 500 ? 500 : totalPages; // api doesn't return data from pages over 500

  const replaceQueryParameter = useReplaceQueryParameter();
  const setPage = (page: number) => {
    replaceQueryParameter({
      key: "page",
      value: `${page}`,
    });
  };

  const firstPage = () => {
    setPage(1);
  };
  const nextPage = () => {
    if (page < lastPageNumber) setPage(page + 1);
  };
  const prevPage = () => {
    if (page !== 1) setPage(page - 1);
  };
  const lastPage = () => {
    setPage(lastPageNumber);
  };

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
