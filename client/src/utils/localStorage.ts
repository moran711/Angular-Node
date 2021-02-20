export const getFromLocalStorage = (name: string) => {
  const localObject = JSON.parse(
    localStorage.getItem('site') || JSON.stringify({}),
  );
  if (!localObject) {
    return null;
  }
  return localObject[name];
};

export const setToLocalStorage = (name: string, item: string) => {
  const localObject = JSON.parse(
    localStorage.getItem('site') || JSON.stringify({}),
  );
  localObject[name] = item;
  localStorage.setItem('site', JSON.stringify(localObject));
};
