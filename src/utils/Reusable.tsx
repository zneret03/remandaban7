//**Returning match search value from server */
export const onSearch = (value: any, items: any) => {
  return items.filter((data: any) => {
    return Object.keys(data).some((key: any) => {
      return String(data[key]).toLowerCase().includes(value.toLowerCase());
    });
  });
};

//**Reusable Contact function */
export const contact = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => {
  event.preventDefault();
  window.location.href =
    "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=jewelremandaban0102@gmail.com&tf=1";
};
