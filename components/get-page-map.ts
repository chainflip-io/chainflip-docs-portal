import type { MetaJsonFile, PageMapItem } from 'nextra'
import { getPageMap } from 'nextra/page-map'

type PageMapVisitor = (item: PageMapItem) => PageMapItem

function visitPageMap(
  pageMap: PageMapItem,
  visitor: PageMapVisitor
): PageMapItem
function visitPageMap(
  pageMap: PageMapItem[],
  visitor: PageMapVisitor
): PageMapItem[]
function visitPageMap(
  pageMap: PageMapItem[] | PageMapItem,
  visitor: PageMapVisitor
): PageMapItem[] | PageMapItem {
  if (Array.isArray(pageMap)) {
    return pageMap.map(item => visitPageMap(item, visitor))
  }
  if ('children' in pageMap) {
    return visitor({
      ...pageMap,
      children: visitPageMap(pageMap.children, visitor)
    })
  }
  return visitor(pageMap)
}


export const getEnhancedPageMap: typeof getPageMap = async (...args) => {
  const rootPageMap = await getPageMap(...args)


  return rootPageMap
}
