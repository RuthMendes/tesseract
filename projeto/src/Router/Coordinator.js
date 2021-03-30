export const goToHome = (history) => {
  history.push('/');
};

export const goToInfo = (history, parameter) => {
  history.push(`/info/${parameter}`);
};
