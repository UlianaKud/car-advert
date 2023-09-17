export const generateUrl = (url, params) => {
  const resultUrl = new URL(url);

  if (Object.keys(params)?.length) {
    Object.entries(params).forEach(([key, value]) => {
      resultUrl.searchParams.append(key, value);
    });
  }

  return resultUrl;
};
