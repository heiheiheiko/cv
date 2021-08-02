/* eslint-disable import/prefer-default-export */

export function findOrFail(array: Array<any>, id: number): any {
  const item = array.find((i) => i.id === id);
  if (!item) {
    throw new Error(`${id} not found`);
  }
  return item;
}

export function findByStaticIdOrFail(array: Array<any>, staticId: string): any {
  const item = array.find((i) => i.staticId === staticId);
  if (!item) {
    throw new Error(`${staticId} not found`);
  }
  return item;
}
