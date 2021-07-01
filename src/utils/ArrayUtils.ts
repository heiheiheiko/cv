/* eslint-disable import/prefer-default-export */

function findOrFail(array: Array<any>, id: number|string): any {
  const item = array.find((i) => i.id === id);
  if (!item) {
    throw new Error(`${id} not found`);
  }
  return item;
}

export {
  findOrFail,
};
