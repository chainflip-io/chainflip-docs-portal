import { getPageMap } from 'nextra/page-map';

export const getEnhancedPageMap: typeof getPageMap = async (...args) => {
  const rootPageMap = await getPageMap(...args);

  return rootPageMap;
};
