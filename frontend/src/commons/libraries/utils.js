export const getMyDate = myDate => {
  const date = new Date(myDate);
  const yyyy = date.getFullYear();
  const MM = date.getMonth() + 1;
  const dd = date.getDate();
  return `${yyyy}-${MM}-${dd}`;
};
