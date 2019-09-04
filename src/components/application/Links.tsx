export const BaseURL = "";
export const Rankings = `${BaseURL}/rankings`;
export const BrowseAll = `${BaseURL}/browse`

export const queryParams = (queryString: string): URLSearchParams => {
  return new URLSearchParams(queryString);
}