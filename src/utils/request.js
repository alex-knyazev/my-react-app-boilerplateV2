// here you can add your api caller

async function get() {
  const requestResult = [
    'Витька Подберезкин',
    'Сашка Свистоплясов',
    'Максимка Пулеметов',
    'Санька Водавхаткин',
  ];
  return {
    data: requestResult,
  };
}

const request = {
  get,
};

export default request;
