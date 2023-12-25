import { SITE } from "@config";

const getPageNumbers = (numberOfPapers: number) => {
  const numberOfPages = numberOfPapers / Number(SITE.papersPerPage);

  let pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(numberOfPages); i++) {
    pageNumbers = [...pageNumbers, i];
  }

  return pageNumbers;
};

export default getPageNumbers;
