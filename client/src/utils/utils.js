export function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
export const isJsonString = (data) => {
  try {
    JSON.parse(data);
  } catch (error) {
    return false;
  }
  return true;
};
