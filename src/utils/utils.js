export const showAlert = ({ message, background }) => {
  // TODO show alert one by one
  const alert = document.getElementById("alert");
  alert.innerHTML = `<div class="alert ${background} w-25 fade show" role="alert">
    ${message}
  </div>`;
  setTimeout(() => {
    alert.innerHTML = "";
  }, 2500);
};

export const extractUrl = (url) => {
  return url.split("/");
};
