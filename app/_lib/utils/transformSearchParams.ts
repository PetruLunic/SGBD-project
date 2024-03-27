import {ParsedUrlQuery} from "querystring";

interface TransformedSearchParams {
  [key: string]: { $regex: string } | {};
}

export function transformSearchParams(searchParams: ParsedUrlQuery): TransformedSearchParams {
  const transformedSearchParams: TransformedSearchParams = {};

  for (const key in searchParams) {
    if (searchParams[key]) {
      const value = searchParams[key];
      if (!isNaN(Number(value))) {
        transformedSearchParams[key] = Number(value);
      } else {
        transformedSearchParams[key] = { $regex: value as string };
      }
    } else {
      transformedSearchParams[key] = {};
    }
  }

  return transformedSearchParams;
}