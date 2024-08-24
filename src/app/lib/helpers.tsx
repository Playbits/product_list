import _ from "lodash";
const array_data = (values: any) => {
  const random = Math.floor(Math.random() * 1000);
  const list = _.map(values, (value: any, key: any) => {
    const random = Math.floor(Math.random() * 1000);
    return (
      <li key={`${key}_${random}`}>
        <strong>{`${key}`}</strong> :
        {typeof value === "object" ? array_data(value) : value}
      </li>
    );
  });
  return <ul key={random}> {list} </ul>;
};

export const formatCurrency = (value: number) => {
  return value.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
  });
};
