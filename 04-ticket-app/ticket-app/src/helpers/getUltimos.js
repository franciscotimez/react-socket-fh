
export const getUltimos = async () => {
  const response = await fetch('http://localhost:8080/api/ultimos13');
  const data = await response.json();

  return data.tickets;
};
